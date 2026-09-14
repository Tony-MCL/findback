import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator, Alert, Animated, KeyboardAvoidingView, Linking, Modal, PanResponder,
  Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';

import { locale, t } from '@/i18n';
import { createFavorite, getFavorites, setFavorites } from '@/services/favorites-storage';
import { getCurrentLocation } from '@/services/location-service';
import { openSavedLocationInMaps } from '@/services/map-navigation';
import type { FavoriteLocation } from '@/types/favorite-location';
import type { SavedLocation } from '@/types/saved-location';

type Props = { visible: boolean; lastSaved: SavedLocation | null; onClose: () => void };
type DeletedFavorite = { item: FavoriteLocation; index: number };

function defaultName(): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date());
}

function SwipeRow({ item, onOpen, onRename, onDelete }: {
  item: FavoriteLocation; onOpen: () => void; onRename: () => void; onDelete: () => void;
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  const longPressed = useRef(false);
  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 10 && Math.abs(gesture.dx) > Math.abs(gesture.dy),
    onPanResponderMove: (_, gesture) => translateX.setValue(Math.min(0, Math.max(-110, gesture.dx))),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx < -72) {
        Animated.timing(translateX, { toValue: -420, duration: 170, useNativeDriver: true }).start(onDelete);
      } else {
        Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
      }
    },
    onPanResponderTerminate: () => Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start(),
  })).current;

  return (
    <View style={styles.rowClip}>
      <View style={styles.deleteBehind}><Ionicons name="trash-outline" size={23} color="#FFFFFF" /></View>
      <Animated.View style={{ transform: [{ translateX }] }} {...panResponder.panHandlers}>
        <Pressable
          accessibilityRole="button"
          accessibilityHint={t('longPressToRename')}
          style={({ pressed }) => [styles.favoriteRow, pressed && styles.pressed]}
          onLongPress={() => { longPressed.current = true; onRename(); }}
          onPress={() => { if (longPressed.current) { longPressed.current = false; return; } onOpen(); }}
        >
          <Ionicons name="star" size={21} color="#F4B400" />
          <View style={styles.rowText}>
            <Text style={styles.favoriteName} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.coordinates}>{item.latitude.toFixed(5)}, {item.longitude.toFixed(5)}</Text>
          </View>
          <Ionicons name="navigate-outline" size={22} color="#0866E8" />
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default function FavoritesModal({ visible, lastSaved, onClose }: Props) {
  const [favorites, setFavoriteState] = useState<FavoriteLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState<'saved' | 'current' | null>(null);
  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState<FavoriteLocation | null>(null);
  const [editName, setEditName] = useState('');
  const [deleted, setDeleted] = useState<DeletedFavorite | null>(null);
  const undoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!visible) return;
    setLoading(true);
    getFavorites().then(setFavoriteState).catch(() => Alert.alert(t('favoritesErrorTitle'), t('favoritesLoadError'))).finally(() => setLoading(false));
  }, [visible]);

  useEffect(() => () => { if (undoTimer.current) clearTimeout(undoTimer.current); }, []);

  const persist = useCallback(async (next: FavoriteLocation[]) => {
    setFavoriteState(next);
    try { await setFavorites(next); }
    catch { Alert.alert(t('favoritesErrorTitle'), t('favoritesSaveError')); }
  }, []);

  async function add(location: SavedLocation, kind: 'saved' | 'current') {
    setAdding(kind);
    try {
      await persist([...favorites, createFavorite(location, defaultName())]);
    } finally { setAdding(null); }
  }

  async function addCurrent() {
    setAdding('current');
    try {
      const result = await getCurrentLocation();
      if (!result.success) {
        if (result.reason === 'permission-denied') {
          Alert.alert(t('permissionTitle'), t('permissionMessage'), [
            { text: t('cancel'), style: 'cancel' },
            { text: t('openSettings'), onPress: () => { void Linking.openSettings(); } },
          ]);
        } else {
          Alert.alert(t('locationErrorTitle'), t('locationErrorMessage'));
        }
        return;
      }
      await persist([...favorites, createFavorite(result.location, defaultName())]);
    } finally { setAdding(null); }
  }

  async function openFavorite(item: FavoriteLocation) {
    try { await openSavedLocationInMaps(item); }
    catch { Alert.alert(t('mapErrorTitle'), t('mapErrorMessage')); }
  }

  function beginRename(item: FavoriteLocation) { setEditing(item); setEditName(item.name); }
  async function saveRename() {
    if (!editing || !editName.trim()) return;
    await persist(favorites.map((item) => item.id === editing.id ? { ...item, name: editName.trim() } : item));
    setEditing(null);
  }

  async function removeFavorite(item: FavoriteLocation) {
    const index = favorites.findIndex((favorite) => favorite.id === item.id);
    if (index < 0) return;
    await persist(favorites.filter((favorite) => favorite.id !== item.id));
    setDeleted({ item, index });
    if (undoTimer.current) clearTimeout(undoTimer.current);
    undoTimer.current = setTimeout(() => setDeleted(null), 2200);
  }

  async function undoDelete() {
    if (!deleted) return;
    const next = [...favorites];
    next.splice(Math.min(deleted.index, next.length), 0, deleted.item);
    setDeleted(null);
    if (undoTimer.current) clearTimeout(undoTimer.current);
    await persist(next);
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{t('favoritesTitle')}</Text>
            <Pressable accessibilityRole="button" accessibilityLabel={t('close')} hitSlop={10} onPress={onClose}><Ionicons name="close" size={28} color="#315780" /></Pressable>
          </View>

          <Pressable style={styles.sectionHeader} onPress={() => setExpanded((value) => !value)}>
            <Text style={styles.sectionTitle}>{t('savedFavorites')} ({favorites.length})</Text>
            <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={21} color="#315780" />
          </Pressable>

          {expanded ? (
            <View style={styles.listBox}>
              {loading ? <ActivityIndicator color="#0866E8" style={styles.loader} /> : favorites.length === 0 ? (
                <Text style={styles.empty}>{t('favoritesEmpty')}</Text>
              ) : (
                <ScrollView showsVerticalScrollIndicator>
                  {favorites.map((item) => <SwipeRow key={item.id} item={item} onOpen={() => void openFavorite(item)} onRename={() => beginRename(item)} onDelete={() => void removeFavorite(item)} />)}
                </ScrollView>
              )}
            </View>
          ) : null}

          <Text style={styles.hint}>{t('favoriteGesturesHint')}</Text>
          <View style={styles.actions}>
            <Pressable disabled={!lastSaved || adding !== null} style={({ pressed }) => [styles.action, (!lastSaved || adding !== null) && styles.disabled, pressed && styles.pressed]} onPress={() => lastSaved && void add(lastSaved, 'saved')}>
              {adding === 'saved' ? <ActivityIndicator color="#0A3475" /> : <Ionicons name="bookmark-outline" size={22} color="#0A3475" />}
              <Text style={styles.actionText}>{t('addLastSaved')}</Text>
            </Pressable>
            <Pressable disabled={adding !== null} style={({ pressed }) => [styles.action, adding !== null && styles.disabled, pressed && styles.pressed]} onPress={() => void addCurrent()}>
              {adding === 'current' ? <ActivityIndicator color="#0A3475" /> : <Ionicons name="locate-outline" size={22} color="#0A3475" />}
              <Text style={styles.actionText}>{t('addCurrent')}</Text>
            </Pressable>
          </View>

          {deleted ? <View style={styles.undoToast}><Text style={styles.undoText} numberOfLines={1}>{t('favoriteDeleted', { name: deleted.item.name })}</Text><Pressable onPress={() => void undoDelete()}><Text style={styles.undoButton}>{t('undo')}</Text></Pressable></View> : null}
        </View>
      </View>

      <Modal visible={editing !== null} transparent animationType="fade" onRequestClose={() => setEditing(null)}>
        <KeyboardAvoidingView style={styles.backdrop} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.renameCard}>
            <Text style={styles.renameTitle}>{t('renameFavorite')}</Text>
            <TextInput autoFocus selectTextOnFocus maxLength={80} value={editName} onChangeText={setEditName} placeholder={t('favoriteName')} style={styles.input} />
            <View style={styles.renameActions}>
              <Pressable onPress={() => setEditing(null)} style={styles.renameButton}><Text style={styles.cancelText}>{t('cancel')}</Text></Pressable>
              <Pressable disabled={!editName.trim()} onPress={() => void saveRename()} style={[styles.renameButton, styles.saveRename, !editName.trim() && styles.disabled]}><Text style={styles.saveText}>{t('save')}</Text></Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0, 25, 64, 0.62)' },
  card: { maxHeight: '88%', borderRadius: 28, backgroundColor: '#FFFFFF', padding: 20, shadowColor: '#001F4E', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 12 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: '#0A3475', fontSize: 28, fontWeight: '800' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, borderRadius: 14, backgroundColor: '#EDF5FF', padding: 13 },
  sectionTitle: { color: '#123E73', fontSize: 17, fontWeight: '700' },
  listBox: { maxHeight: 300, minHeight: 90, marginTop: 8 },
  loader: { marginTop: 28 },
  empty: { paddingVertical: 27, color: '#55708F', fontSize: 16, lineHeight: 23, textAlign: 'center' },
  rowClip: { overflow: 'hidden', marginBottom: 7, borderRadius: 14, backgroundColor: '#D93737' },
  deleteBehind: { position: 'absolute', top: 0, right: 0, bottom: 0, width: 90, alignItems: 'center', justifyContent: 'center' },
  favoriteRow: { minHeight: 65, flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: '#F6F9FD', paddingHorizontal: 14, paddingVertical: 10 },
  rowText: { flex: 1 },
  favoriteName: { color: '#123E73', fontSize: 17, fontWeight: '700' },
  coordinates: { marginTop: 3, color: '#6A8099', fontSize: 12 },
  hint: { marginTop: 4, color: '#6A8099', fontSize: 12, textAlign: 'center' },
  actions: { gap: 9, marginTop: 16 },
  action: { minHeight: 54, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, borderWidth: 1.5, borderColor: '#8BBBF5', borderRadius: 17, backgroundColor: '#F4F9FF', paddingHorizontal: 12 },
  actionText: { color: '#0A3475', fontSize: 16, fontWeight: '700', textAlign: 'center' },
  pressed: { opacity: 0.7 }, disabled: { opacity: 0.45 },
  undoToast: { position: 'absolute', left: 20, right: 20, bottom: 18, minHeight: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15, backgroundColor: '#082E68', paddingHorizontal: 18 },
  undoText: { flex: 1, marginRight: 10, color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  undoButton: { color: '#9BCBFF', fontSize: 16, fontWeight: '800' },
  renameCard: { borderRadius: 24, backgroundColor: '#FFFFFF', padding: 22 },
  renameTitle: { color: '#0A3475', fontSize: 23, fontWeight: '800' },
  input: { marginTop: 17, borderWidth: 1.5, borderColor: '#8BBBF5', borderRadius: 14, color: '#123E73', fontSize: 18, paddingHorizontal: 14, paddingVertical: 12 },
  renameActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10, marginTop: 17 },
  renameButton: { minWidth: 90, minHeight: 46, alignItems: 'center', justifyContent: 'center', borderRadius: 14, paddingHorizontal: 15 },
  saveRename: { backgroundColor: '#0866E8' },
  cancelText: { color: '#55708F', fontSize: 16, fontWeight: '700' },
  saveText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
});
