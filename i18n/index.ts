type TranslationKey =
  | 'unknownTime'
  | 'todayAt'
  | 'loadErrorTitle'
  | 'loadErrorMessage'
  | 'permissionTitle'
  | 'permissionMessage'
  | 'cancel'
  | 'openSettings'
  | 'locationErrorTitle'
  | 'locationErrorMessage'
  | 'saveErrorTitle'
  | 'saveErrorMessage'
  | 'mapErrorTitle'
  | 'mapErrorMessage'
  | 'pinAccessibilityLabel'
  | 'positionSaved'
  | 'savePosition'
  | 'gettingPosition'
  | 'overwritePrevious'
  | 'findAgain'
  | 'lastSaved'
  | 'infoAccessibilityLabel'
  | 'aboutTitle'
  | 'aboutBody'
  | 'privacy'
  | 'terms'
  | 'contact'
  | 'website'
  | 'close'
  | 'linkErrorTitle'
  | 'linkErrorMessage'
  | 'favoritesAccessibilityLabel'
  | 'favoritesTitle'
  | 'savedFavorites'
  | 'favoritesEmpty'
  | 'favoriteGesturesHint'
  | 'longPressToRename'
  | 'addLastSaved'
  | 'addCurrent'
  | 'favoriteDeleted'
  | 'undo'
  | 'renameFavorite'
  | 'favoriteName'
  | 'save'
  | 'favoritesErrorTitle'
  | 'favoritesLoadError'
  | 'favoritesSaveError'
  | 'purchaseTitle'
  | 'purchaseBody'
  | 'unlimitedFavorites'
  | 'oneTimePurchase'
  | 'noSubscription'
  | 'buyFor'
  | 'storeLoading'
  | 'restorePurchases'
  | 'notNow'
  | 'purchaseErrorTitle'
  | 'purchaseErrorMessage'
  | 'restoreSuccessTitle'
  | 'restoreSuccessMessage'
  | 'restoreNotFoundTitle'
  | 'restoreNotFoundMessage';

type Translations = Record<TranslationKey, string>;

type SupportedLanguage = 'en' | 'nb' | 'sv' | 'da' | 'de' | 'pl' | 'es' | 'pt';

const translations: Record<SupportedLanguage, Translations> = {
  en: {
    unknownTime: 'unknown time',
    todayAt: 'today, {time}',
    loadErrorTitle: 'Something went wrong',
    loadErrorMessage: 'FindBack could not read the saved position.',
    permissionTitle: 'Location access is required',
    permissionMessage: 'FindBack needs location access to save where you are.',
    cancel: 'Cancel',
    openSettings: 'Open settings',
    locationErrorTitle: 'Could not get your position',
    locationErrorMessage: 'Make sure location services are enabled and try again.',
    saveErrorTitle: 'Could not save the position',
    saveErrorMessage: 'Something went wrong while saving. Try again.',
    mapErrorTitle: 'Could not open maps',
    mapErrorMessage: 'FindBack could not find a map app that can open the saved position.',
    pinAccessibilityLabel: 'FindBack location pin',
    positionSaved: 'Position saved',
    savePosition: 'Save position',
    gettingPosition: 'Getting position …',
    overwritePrevious: '(replaces the previously saved position)',
    findAgain: 'Find again',
    lastSaved: 'Last saved:',
    infoAccessibilityLabel: 'About FindBack',
    aboutTitle: 'About FindBack',
    aboutBody: 'FindBack saves one position locally on your device and opens your preferred map app when you want to return. No account, no cloud storage and no tracking.',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    contact: 'Contact Morning Coffee Labs',
    website: 'Visit Morning Coffee Labs',
    close: 'Close',
    linkErrorTitle: 'Could not open the link',
    linkErrorMessage: 'Please try again later.',
    favoritesAccessibilityLabel: 'Favorites', favoritesTitle: 'Favorites', savedFavorites: 'Saved favorites',
    favoritesEmpty: 'No favorites yet. Add your last saved or current position below.',
    favoriteGesturesHint: 'Tap to open · Hold to rename · Swipe left to delete', longPressToRename: 'Hold to rename',
    addLastSaved: 'Add last saved position', addCurrent: 'Add current position', favoriteDeleted: '{name} deleted', undo: 'Undo',
    renameFavorite: 'Rename favorite', favoriteName: 'Favorite name', save: 'Save',
    favoritesErrorTitle: 'Could not update favorites', favoritesLoadError: 'FindBack could not read your favorites.', favoritesSaveError: 'FindBack could not save the change. Try again.',
    purchaseTitle: 'FindBack Favorites', purchaseBody: 'Save all the places you want to find back to.',
    unlimitedFavorites: 'Unlimited favorite positions', oneTimePurchase: 'One-time purchase', noSubscription: 'No subscription',
    buyFor: 'Buy for {price}', storeLoading: 'Loading store price …', restorePurchases: 'Restore purchase', notNow: 'Not now',
    purchaseErrorTitle: 'Purchase could not be completed', purchaseErrorMessage: 'Check your connection and try again.',
    restoreSuccessTitle: 'Purchase restored', restoreSuccessMessage: 'Favorites is now unlocked.',
    restoreNotFoundTitle: 'No purchase found', restoreNotFoundMessage: 'The store found no previous Favorites purchase for this account.',
  },
  nb: {
    unknownTime: 'ukjent tidspunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Noe gikk galt',
    loadErrorMessage: 'FindBack kunne ikke lese den lagrede posisjonen.',
    permissionTitle: 'Posisjonstilgang er nødvendig',
    permissionMessage: 'FindBack trenger posisjonstilgang for å kunne lagre stedet du befinner deg på.',
    cancel: 'Avbryt',
    openSettings: 'Åpne innstillinger',
    locationErrorTitle: 'Kunne ikke hente posisjonen',
    locationErrorMessage: 'Kontroller at posisjonstjenester er aktivert, og prøv igjen.',
    saveErrorTitle: 'Kunne ikke lagre posisjonen',
    saveErrorMessage: 'Noe gikk galt under lagringen. Prøv igjen.',
    mapErrorTitle: 'Kunne ikke åpne kart',
    mapErrorMessage: 'FindBack fant ingen kartapp som kunne åpne den lagrede posisjonen.',
    pinAccessibilityLabel: 'FindBack-posisjonsnål',
    positionSaved: 'Posisjon lagret',
    savePosition: 'Lagre posisjon',
    gettingPosition: 'Henter posisjon …',
    overwritePrevious: '(overskriver tidligere lagret sted)',
    findAgain: 'Finn igjen',
    lastSaved: 'Sist lagret:',
    infoAccessibilityLabel: 'Om FindBack',
    aboutTitle: 'Om FindBack',
    aboutBody: 'FindBack lagrer én posisjon lokalt på telefonen din og åpner kartappen du foretrekker når du vil finne tilbake. Ingen konto, ingen skylagring og ingen sporing.',
    privacy: 'Personvern',
    terms: 'Brukervilkår',
    contact: 'Kontakt Morning Coffee Labs',
    website: 'Besøk Morning Coffee Labs',
    close: 'Lukk',
    linkErrorTitle: 'Kunne ikke åpne lenken',
    linkErrorMessage: 'Prøv igjen senere.',
    favoritesAccessibilityLabel: 'Favorittsteder', favoritesTitle: 'Favorittsteder', savedFavorites: 'Lagrede favoritter',
    favoritesEmpty: 'Ingen favoritter ennå. Legg til sist lagrede eller nåværende posisjon nedenfor.',
    favoriteGesturesHint: 'Trykk for å åpne · Hold for å endre navn · Sveip mot venstre for å slette', longPressToRename: 'Hold for å endre navn',
    addLastSaved: 'Legg til sist lagrede posisjon', addCurrent: 'Legg til nåværende posisjon', favoriteDeleted: '{name} slettet', undo: 'Angre',
    renameFavorite: 'Endre navn på favoritt', favoriteName: 'Navn på favoritt', save: 'Lagre',
    favoritesErrorTitle: 'Kunne ikke oppdatere favoritter', favoritesLoadError: 'FindBack kunne ikke lese favorittene dine.', favoritesSaveError: 'FindBack kunne ikke lagre endringen. Prøv igjen.',
    purchaseTitle: 'FindBack Favoritter', purchaseBody: 'Lagre alle stedene du ønsker å finne tilbake til.',
    unlimitedFavorites: 'Ubegrenset antall favorittsteder', oneTimePurchase: 'Engangskjøp', noSubscription: 'Ingen abonnement',
    buyFor: 'Kjøp for {price}', storeLoading: 'Henter pris fra butikken …', restorePurchases: 'Gjenopprett kjøp', notNow: 'Ikke nå',
    purchaseErrorTitle: 'Kjøpet kunne ikke fullføres', purchaseErrorMessage: 'Kontroller tilkoblingen og prøv igjen.',
    restoreSuccessTitle: 'Kjøpet er gjenopprettet', restoreSuccessMessage: 'Favoritter er nå låst opp.',
    restoreNotFoundTitle: 'Fant ingen kjøp', restoreNotFoundMessage: 'Butikken fant ikke noe tidligere Favoritter-kjøp for denne kontoen.',
  },
  sv: {
    unknownTime: 'okänd tidpunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Något gick fel',
    loadErrorMessage: 'FindBack kunde inte läsa den sparade positionen.',
    permissionTitle: 'Platsåtkomst krävs',
    permissionMessage: 'FindBack behöver platsåtkomst för att kunna spara platsen där du befinner dig.',
    cancel: 'Avbryt',
    openSettings: 'Öppna inställningar',
    locationErrorTitle: 'Kunde inte hämta positionen',
    locationErrorMessage: 'Kontrollera att platstjänster är aktiverade och försök igen.',
    saveErrorTitle: 'Kunde inte spara positionen',
    saveErrorMessage: 'Något gick fel när positionen sparades. Försök igen.',
    mapErrorTitle: 'Kunde inte öppna kartan',
    mapErrorMessage: 'FindBack hittade ingen kartapp som kunde öppna den sparade positionen.',
    pinAccessibilityLabel: 'FindBack platsnål',
    positionSaved: 'Position sparad',
    savePosition: 'Spara position',
    gettingPosition: 'Hämtar position …',
    overwritePrevious: '(ersätter tidigare sparad plats)',
    findAgain: 'Hitta tillbaka',
    lastSaved: 'Senast sparad:',
    infoAccessibilityLabel: 'Om FindBack',
    aboutTitle: 'Om FindBack',
    aboutBody: 'FindBack sparar en position lokalt på din enhet och öppnar din föredragna kartapp när du vill hitta tillbaka. Inget konto, ingen molnlagring och ingen spårning.',
    privacy: 'Integritetspolicy',
    terms: 'Användarvillkor',
    contact: 'Kontakta Morning Coffee Labs',
    website: 'Besök Morning Coffee Labs',
    close: 'Stäng',
    linkErrorTitle: 'Kunde inte öppna länken',
    linkErrorMessage: 'Försök igen senare.',
    favoritesAccessibilityLabel: 'Favoritplatser', favoritesTitle: 'Favoritplatser', savedFavorites: 'Sparade favoriter',
    favoritesEmpty: 'Inga favoriter ännu. Lägg till din senast sparade eller aktuella position nedan.',
    favoriteGesturesHint: 'Tryck för att öppna · Håll för att byta namn · Svep åt vänster för att radera', longPressToRename: 'Håll för att byta namn',
    addLastSaved: 'Lägg till senast sparade position', addCurrent: 'Lägg till aktuell position', favoriteDeleted: '{name} raderad', undo: 'Ångra',
    renameFavorite: 'Byt namn på favorit', favoriteName: 'Favoritens namn', save: 'Spara',
    favoritesErrorTitle: 'Kunde inte uppdatera favoriter', favoritesLoadError: 'FindBack kunde inte läsa dina favoriter.', favoritesSaveError: 'FindBack kunde inte spara ändringen. Försök igen.',
    purchaseTitle: 'FindBack Favoriter', purchaseBody: 'Spara alla platser du vill hitta tillbaka till.',
    unlimitedFavorites: 'Obegränsat antal favoritplatser', oneTimePurchase: 'Engångsköp', noSubscription: 'Ingen prenumeration',
    buyFor: 'Köp för {price}', storeLoading: 'Hämtar butikspris …', restorePurchases: 'Återställ köp', notNow: 'Inte nu',
    purchaseErrorTitle: 'Köpet kunde inte slutföras', purchaseErrorMessage: 'Kontrollera anslutningen och försök igen.',
    restoreSuccessTitle: 'Köpet har återställts', restoreSuccessMessage: 'Favoriter är nu upplåst.',
    restoreNotFoundTitle: 'Inget köp hittades', restoreNotFoundMessage: 'Butiken hittade inget tidigare köp av Favoriter för det här kontot.',
  },
  da: {
    unknownTime: 'ukendt tidspunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Noget gik galt',
    loadErrorMessage: 'FindBack kunne ikke læse den gemte position.',
    permissionTitle: 'Placeringstilladelse er nødvendig',
    permissionMessage: 'FindBack skal have adgang til din placering for at kunne gemme stedet, hvor du befinder dig.',
    cancel: 'Annuller',
    openSettings: 'Åbn indstillinger',
    locationErrorTitle: 'Kunne ikke hente positionen',
    locationErrorMessage: 'Kontrollér, at placeringstjenester er aktiveret, og prøv igen.',
    saveErrorTitle: 'Kunne ikke gemme positionen',
    saveErrorMessage: 'Noget gik galt under lagringen. Prøv igen.',
    mapErrorTitle: 'Kunne ikke åbne kortet',
    mapErrorMessage: 'FindBack fandt ingen kortapp, der kunne åbne den gemte position.',
    pinAccessibilityLabel: 'FindBack placeringsnål',
    positionSaved: 'Position gemt',
    savePosition: 'Gem position',
    gettingPosition: 'Henter position …',
    overwritePrevious: '(erstatter tidligere gemte sted)',
    findAgain: 'Find tilbage',
    lastSaved: 'Senest gemt:',
    infoAccessibilityLabel: 'Om FindBack',
    aboutTitle: 'Om FindBack',
    aboutBody: 'FindBack gemmer én position lokalt på din enhed og åbner din foretrukne kortapp, når du vil finde tilbage. Ingen konto, ingen cloudlagring og ingen sporing.',
    privacy: 'Privatlivspolitik',
    terms: 'Brugervilkår',
    contact: 'Kontakt Morning Coffee Labs',
    website: 'Besøg Morning Coffee Labs',
    close: 'Luk',
    linkErrorTitle: 'Kunne ikke åbne linket',
    linkErrorMessage: 'Prøv igen senere.',
    favoritesAccessibilityLabel: 'Favoritsteder', favoritesTitle: 'Favoritsteder', savedFavorites: 'Gemte favoritter',
    favoritesEmpty: 'Ingen favoritter endnu. Tilføj din senest gemte eller aktuelle position nedenfor.',
    favoriteGesturesHint: 'Tryk for at åbne · Hold for at omdøbe · Stryg mod venstre for at slette', longPressToRename: 'Hold for at omdøbe',
    addLastSaved: 'Tilføj senest gemte position', addCurrent: 'Tilføj aktuel position', favoriteDeleted: '{name} slettet', undo: 'Fortryd',
    renameFavorite: 'Omdøb favorit', favoriteName: 'Favorittens navn', save: 'Gem',
    favoritesErrorTitle: 'Kunne ikke opdatere favoritter', favoritesLoadError: 'FindBack kunne ikke læse dine favoritter.', favoritesSaveError: 'FindBack kunne ikke gemme ændringen. Prøv igen.',
    purchaseTitle: 'FindBack Favoritter', purchaseBody: 'Gem alle de steder, du vil kunne finde tilbage til.',
    unlimitedFavorites: 'Ubegrænset antal favoritsteder', oneTimePurchase: 'Engangskøb', noSubscription: 'Intet abonnement',
    buyFor: 'Køb for {price}', storeLoading: 'Henter butikspris …', restorePurchases: 'Gendan køb', notNow: 'Ikke nu',
    purchaseErrorTitle: 'Købet kunne ikke gennemføres', purchaseErrorMessage: 'Kontrollér forbindelsen, og prøv igen.',
    restoreSuccessTitle: 'Købet er gendannet', restoreSuccessMessage: 'Favoritter er nu låst op.',
    restoreNotFoundTitle: 'Intet køb fundet', restoreNotFoundMessage: 'Butikken fandt intet tidligere Favoritter-køb for denne konto.',
  },
  de: {
    unknownTime: 'unbekannter Zeitpunkt',
    todayAt: 'heute, {time}',
    loadErrorTitle: 'Etwas ist schiefgelaufen',
    loadErrorMessage: 'FindBack konnte die gespeicherte Position nicht lesen.',
    permissionTitle: 'Standortzugriff ist erforderlich',
    permissionMessage: 'FindBack benötigt Standortzugriff, um deinen aktuellen Standort zu speichern.',
    cancel: 'Abbrechen',
    openSettings: 'Einstellungen öffnen',
    locationErrorTitle: 'Position konnte nicht ermittelt werden',
    locationErrorMessage: 'Prüfe, ob die Standortdienste aktiviert sind, und versuche es erneut.',
    saveErrorTitle: 'Position konnte nicht gespeichert werden',
    saveErrorMessage: 'Beim Speichern ist etwas schiefgelaufen. Versuche es erneut.',
    mapErrorTitle: 'Karte konnte nicht geöffnet werden',
    mapErrorMessage: 'FindBack konnte keine Karten-App finden, die die gespeicherte Position öffnen kann.',
    pinAccessibilityLabel: 'FindBack-Standortnadel',
    positionSaved: 'Position gespeichert',
    savePosition: 'Position speichern',
    gettingPosition: 'Position wird ermittelt …',
    overwritePrevious: '(ersetzt den zuvor gespeicherten Ort)',
    findAgain: 'Wiederfinden',
    lastSaved: 'Zuletzt gespeichert:',
    infoAccessibilityLabel: 'Über FindBack',
    aboutTitle: 'Über FindBack',
    aboutBody: 'FindBack speichert einen Standort lokal auf deinem Gerät und öffnet deine bevorzugte Karten-App, wenn du zurückfinden möchtest. Kein Konto, keine Cloud-Speicherung und kein Tracking.',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    contact: 'Morning Coffee Labs kontaktieren',
    website: 'Morning Coffee Labs besuchen',
    close: 'Schließen',
    linkErrorTitle: 'Link konnte nicht geöffnet werden',
    linkErrorMessage: 'Bitte versuche es später erneut.',
    favoritesAccessibilityLabel: 'Favoriten', favoritesTitle: 'Favoriten', savedFavorites: 'Gespeicherte Favoriten',
    favoritesEmpty: 'Noch keine Favoriten. Füge unten die zuletzt gespeicherte oder aktuelle Position hinzu.',
    favoriteGesturesHint: 'Tippen zum Öffnen · Halten zum Umbenennen · Nach links wischen zum Löschen', longPressToRename: 'Halten zum Umbenennen',
    addLastSaved: 'Zuletzt gespeicherte Position hinzufügen', addCurrent: 'Aktuelle Position hinzufügen', favoriteDeleted: '{name} gelöscht', undo: 'Rückgängig',
    renameFavorite: 'Favorit umbenennen', favoriteName: 'Name des Favoriten', save: 'Speichern',
    favoritesErrorTitle: 'Favoriten konnten nicht aktualisiert werden', favoritesLoadError: 'FindBack konnte deine Favoriten nicht lesen.', favoritesSaveError: 'FindBack konnte die Änderung nicht speichern. Versuche es erneut.',
    purchaseTitle: 'FindBack Favoriten', purchaseBody: 'Speichere alle Orte, zu denen du zurückfinden möchtest.',
    unlimitedFavorites: 'Unbegrenzte Favoriten', oneTimePurchase: 'Einmaliger Kauf', noSubscription: 'Kein Abonnement',
    buyFor: 'Für {price} kaufen', storeLoading: 'Store-Preis wird geladen …', restorePurchases: 'Kauf wiederherstellen', notNow: 'Nicht jetzt',
    purchaseErrorTitle: 'Kauf konnte nicht abgeschlossen werden', purchaseErrorMessage: 'Prüfe deine Verbindung und versuche es erneut.',
    restoreSuccessTitle: 'Kauf wiederhergestellt', restoreSuccessMessage: 'Favoriten ist jetzt freigeschaltet.',
    restoreNotFoundTitle: 'Kein Kauf gefunden', restoreNotFoundMessage: 'Der Store hat für dieses Konto keinen früheren Favoriten-Kauf gefunden.',
  },
  pl: {
    unknownTime: 'nieznany czas',
    todayAt: 'dzisiaj, {time}',
    loadErrorTitle: 'Coś poszło nie tak',
    loadErrorMessage: 'FindBack nie mógł odczytać zapisanej pozycji.',
    permissionTitle: 'Dostęp do lokalizacji jest wymagany',
    permissionMessage: 'FindBack potrzebuje dostępu do lokalizacji, aby zapisać miejsce, w którym jesteś.',
    cancel: 'Anuluj',
    openSettings: 'Otwórz ustawienia',
    locationErrorTitle: 'Nie udało się ustalić pozycji',
    locationErrorMessage: 'Sprawdź, czy usługi lokalizacyjne są włączone, i spróbuj ponownie.',
    saveErrorTitle: 'Nie udało się zapisać pozycji',
    saveErrorMessage: 'Podczas zapisywania wystąpił błąd. Spróbuj ponownie.',
    mapErrorTitle: 'Nie udało się otworzyć mapy',
    mapErrorMessage: 'FindBack nie znalazł aplikacji map, która może otworzyć zapisaną pozycję.',
    pinAccessibilityLabel: 'Znacznik lokalizacji FindBack',
    positionSaved: 'Pozycja zapisana',
    savePosition: 'Zapisz pozycję',
    gettingPosition: 'Pobieranie pozycji …',
    overwritePrevious: '(zastępuje wcześniej zapisane miejsce)',
    findAgain: 'Znajdź ponownie',
    lastSaved: 'Ostatnio zapisano:',
    infoAccessibilityLabel: 'O FindBack',
    aboutTitle: 'O FindBack',
    aboutBody: 'FindBack zapisuje jedną pozycję lokalnie na urządzeniu i otwiera wybraną aplikację map, gdy chcesz wrócić. Bez konta, bez chmury i bez śledzenia.',
    privacy: 'Polityka prywatności',
    terms: 'Warunki korzystania',
    contact: 'Kontakt z Morning Coffee Labs',
    website: 'Odwiedź Morning Coffee Labs',
    close: 'Zamknij',
    linkErrorTitle: 'Nie udało się otworzyć linku',
    linkErrorMessage: 'Spróbuj ponownie później.',
    favoritesAccessibilityLabel: 'Ulubione miejsca', favoritesTitle: 'Ulubione miejsca', savedFavorites: 'Zapisane ulubione',
    favoritesEmpty: 'Nie masz jeszcze ulubionych. Dodaj poniżej ostatnią zapisaną lub bieżącą pozycję.',
    favoriteGesturesHint: 'Dotknij, aby otworzyć · Przytrzymaj, aby zmienić nazwę · Przesuń w lewo, aby usunąć', longPressToRename: 'Przytrzymaj, aby zmienić nazwę',
    addLastSaved: 'Dodaj ostatnią zapisaną pozycję', addCurrent: 'Dodaj bieżącą pozycję', favoriteDeleted: 'Usunięto {name}', undo: 'Cofnij',
    renameFavorite: 'Zmień nazwę ulubionego', favoriteName: 'Nazwa ulubionego', save: 'Zapisz',
    favoritesErrorTitle: 'Nie udało się zaktualizować ulubionych', favoritesLoadError: 'FindBack nie mógł odczytać ulubionych.', favoritesSaveError: 'FindBack nie mógł zapisać zmiany. Spróbuj ponownie.',
    purchaseTitle: 'Ulubione FindBack', purchaseBody: 'Zapisuj wszystkie miejsca, do których chcesz wrócić.',
    unlimitedFavorites: 'Nieograniczona liczba ulubionych miejsc', oneTimePurchase: 'Jednorazowy zakup', noSubscription: 'Bez subskrypcji',
    buyFor: 'Kup za {price}', storeLoading: 'Pobieranie ceny ze sklepu …', restorePurchases: 'Przywróć zakup', notNow: 'Nie teraz',
    purchaseErrorTitle: 'Nie udało się dokończyć zakupu', purchaseErrorMessage: 'Sprawdź połączenie i spróbuj ponownie.',
    restoreSuccessTitle: 'Zakup przywrócony', restoreSuccessMessage: 'Ulubione są teraz odblokowane.',
    restoreNotFoundTitle: 'Nie znaleziono zakupu', restoreNotFoundMessage: 'Sklep nie znalazł wcześniejszego zakupu Ulubionych dla tego konta.',
  },
  es: {
    unknownTime: 'hora desconocida',
    todayAt: 'hoy, {time}',
    loadErrorTitle: 'Algo salió mal',
    loadErrorMessage: 'FindBack no pudo leer la posición guardada.',
    permissionTitle: 'Se requiere acceso a la ubicación',
    permissionMessage: 'FindBack necesita acceso a la ubicación para guardar dónde estás.',
    cancel: 'Cancelar',
    openSettings: 'Abrir ajustes',
    locationErrorTitle: 'No se pudo obtener tu posición',
    locationErrorMessage: 'Comprueba que los servicios de ubicación estén activados e inténtalo de nuevo.',
    saveErrorTitle: 'No se pudo guardar la posición',
    saveErrorMessage: 'Algo salió mal al guardar. Inténtalo de nuevo.',
    mapErrorTitle: 'No se pudo abrir el mapa',
    mapErrorMessage: 'FindBack no encontró una aplicación de mapas que pueda abrir la posición guardada.',
    pinAccessibilityLabel: 'Marcador de ubicación de FindBack',
    positionSaved: 'Posición guardada',
    savePosition: 'Guardar posición',
    gettingPosition: 'Obteniendo posición …',
    overwritePrevious: '(reemplaza la posición guardada anteriormente)',
    findAgain: 'Volver a encontrar',
    lastSaved: 'Última vez guardado:',
    infoAccessibilityLabel: 'Acerca de FindBack',
    aboutTitle: 'Acerca de FindBack',
    aboutBody: 'FindBack guarda una posición localmente en tu dispositivo y abre tu aplicación de mapas preferida cuando quieres volver. Sin cuenta, sin nube y sin seguimiento.',
    privacy: 'Política de privacidad',
    terms: 'Condiciones de uso',
    contact: 'Contactar con Morning Coffee Labs',
    website: 'Visitar Morning Coffee Labs',
    close: 'Cerrar',
    linkErrorTitle: 'No se pudo abrir el enlace',
    linkErrorMessage: 'Inténtalo de nuevo más tarde.',
    favoritesAccessibilityLabel: 'Lugares favoritos', favoritesTitle: 'Lugares favoritos', savedFavorites: 'Favoritos guardados',
    favoritesEmpty: 'Aún no hay favoritos. Añade abajo la última posición guardada o la actual.',
    favoriteGesturesHint: 'Toca para abrir · Mantén pulsado para renombrar · Desliza a la izquierda para eliminar', longPressToRename: 'Mantén pulsado para renombrar',
    addLastSaved: 'Añadir última posición guardada', addCurrent: 'Añadir posición actual', favoriteDeleted: '{name} eliminado', undo: 'Deshacer',
    renameFavorite: 'Renombrar favorito', favoriteName: 'Nombre del favorito', save: 'Guardar',
    favoritesErrorTitle: 'No se pudieron actualizar los favoritos', favoritesLoadError: 'FindBack no pudo leer tus favoritos.', favoritesSaveError: 'FindBack no pudo guardar el cambio. Inténtalo de nuevo.',
    purchaseTitle: 'Favoritos de FindBack', purchaseBody: 'Guarda todos los lugares a los que quieras volver.',
    unlimitedFavorites: 'Lugares favoritos ilimitados', oneTimePurchase: 'Compra única', noSubscription: 'Sin suscripción',
    buyFor: 'Comprar por {price}', storeLoading: 'Cargando precio de la tienda …', restorePurchases: 'Restaurar compra', notNow: 'Ahora no',
    purchaseErrorTitle: 'No se pudo completar la compra', purchaseErrorMessage: 'Comprueba la conexión e inténtalo de nuevo.',
    restoreSuccessTitle: 'Compra restaurada', restoreSuccessMessage: 'Favoritos ya está desbloqueado.',
    restoreNotFoundTitle: 'No se encontró ninguna compra', restoreNotFoundMessage: 'La tienda no encontró una compra anterior de Favoritos para esta cuenta.',
  },
  pt: {
    unknownTime: 'hora desconhecida',
    todayAt: 'hoje, {time}',
    loadErrorTitle: 'Algo correu mal',
    loadErrorMessage: 'O FindBack não conseguiu ler a posição guardada.',
    permissionTitle: 'É necessário acesso à localização',
    permissionMessage: 'O FindBack precisa de acesso à localização para guardar onde está.',
    cancel: 'Cancelar',
    openSettings: 'Abrir definições',
    locationErrorTitle: 'Não foi possível obter a sua posição',
    locationErrorMessage: 'Verifique se os serviços de localização estão ativados e tente novamente.',
    saveErrorTitle: 'Não foi possível guardar a posição',
    saveErrorMessage: 'Algo correu mal ao guardar. Tente novamente.',
    mapErrorTitle: 'Não foi possível abrir o mapa',
    mapErrorMessage: 'O FindBack não encontrou uma aplicação de mapas que consiga abrir a posição guardada.',
    pinAccessibilityLabel: 'Alfinete de localização do FindBack',
    positionSaved: 'Posição guardada',
    savePosition: 'Guardar posição',
    gettingPosition: 'A obter posição …',
    overwritePrevious: '(substitui a posição guardada anteriormente)',
    findAgain: 'Encontrar novamente',
    lastSaved: 'Última gravação:',
    infoAccessibilityLabel: 'Sobre o FindBack',
    aboutTitle: 'Sobre o FindBack',
    aboutBody: 'O FindBack guarda uma posição localmente no seu dispositivo e abre a sua aplicação de mapas preferida quando quiser regressar. Sem conta, sem nuvem e sem rastreio.',
    privacy: 'Política de privacidade',
    terms: 'Termos de utilização',
    contact: 'Contactar a Morning Coffee Labs',
    website: 'Visitar a Morning Coffee Labs',
    close: 'Fechar',
    linkErrorTitle: 'Não foi possível abrir a ligação',
    linkErrorMessage: 'Tente novamente mais tarde.',
    favoritesAccessibilityLabel: 'Locais favoritos', favoritesTitle: 'Locais favoritos', savedFavorites: 'Favoritos guardados',
    favoritesEmpty: 'Ainda não existem favoritos. Adicione abaixo a última posição guardada ou a atual.',
    favoriteGesturesHint: 'Toque para abrir · Mantenha premido para mudar o nome · Deslize para a esquerda para eliminar', longPressToRename: 'Mantenha premido para mudar o nome',
    addLastSaved: 'Adicionar última posição guardada', addCurrent: 'Adicionar posição atual', favoriteDeleted: '{name} eliminado', undo: 'Anular',
    renameFavorite: 'Mudar nome do favorito', favoriteName: 'Nome do favorito', save: 'Guardar',
    favoritesErrorTitle: 'Não foi possível atualizar os favoritos', favoritesLoadError: 'O FindBack não conseguiu ler os seus favoritos.', favoritesSaveError: 'O FindBack não conseguiu guardar a alteração. Tente novamente.',
    purchaseTitle: 'Favoritos FindBack', purchaseBody: 'Guarde todos os locais aos quais quer regressar.',
    unlimitedFavorites: 'Locais favoritos ilimitados', oneTimePurchase: 'Compra única', noSubscription: 'Sem subscrição',
    buyFor: 'Comprar por {price}', storeLoading: 'A obter o preço da loja …', restorePurchases: 'Restaurar compra', notNow: 'Agora não',
    purchaseErrorTitle: 'Não foi possível concluir a compra', purchaseErrorMessage: 'Verifique a ligação e tente novamente.',
    restoreSuccessTitle: 'Compra restaurada', restoreSuccessMessage: 'Os Favoritos estão agora desbloqueados.',
    restoreNotFoundTitle: 'Nenhuma compra encontrada', restoreNotFoundMessage: 'A loja não encontrou uma compra anterior de Favoritos para esta conta.',
  },
};

function getDeviceLocale(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().locale || 'en';
  } catch {
    return 'en';
  }
}

function resolveLanguage(locale: string): SupportedLanguage {
  const language = locale.toLowerCase().split(/[-_]/)[0];

  if (language === 'no' || language === 'nn' || language === 'nb') {
    return 'nb';
  }

  if (
    language === 'sv' ||
    language === 'da' ||
    language === 'de' ||
    language === 'pl' ||
    language === 'es' ||
    language === 'pt'
  ) {
    return language;
  }

  return 'en';
}

export const locale = getDeviceLocale();
export const language = resolveLanguage(locale);

export function t(key: TranslationKey, values?: Record<string, string>): string {
  let text = translations[language][key] ?? translations.en[key];

  if (values) {
    for (const [name, value] of Object.entries(values)) {
      text = text.replaceAll(`{${name}}`, value);
    }
  }

  return text;
}
