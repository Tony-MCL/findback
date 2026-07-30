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
  | 'lastSaved';

type Translations = Record<TranslationKey, string>;

type SupportedLanguage = 'en' | 'nb' | 'sv' | 'da' | 'de' | 'pl';

const translations: Record<SupportedLanguage, Translations> = {
  en: {
    unknownTime: 'unknown time',
    todayAt: 'today, {time}',
    loadErrorTitle: 'Something went wrong',
    loadErrorMessage: 'FindBack could not read the saved position.',
    permissionTitle: 'Location access is required',
    permissionMessage:
      'FindBack needs location access to save where you are.',
    cancel: 'Cancel',
    openSettings: 'Open settings',
    locationErrorTitle: 'Could not get your position',
    locationErrorMessage:
      'Make sure location services are enabled and try again.',
    saveErrorTitle: 'Could not save the position',
    saveErrorMessage: 'Something went wrong while saving. Try again.',
    mapErrorTitle: 'Could not open maps',
    mapErrorMessage:
      'FindBack could not find a map app that can open the saved position.',
    pinAccessibilityLabel: 'FindBack location pin',
    positionSaved: 'Position saved',
    savePosition: 'Save position',
    gettingPosition: 'Getting position …',
    overwritePrevious: '(replaces the previously saved position)',
    findAgain: 'Find again',
    lastSaved: 'Last saved:',
  },
  nb: {
    unknownTime: 'ukjent tidspunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Noe gikk galt',
    loadErrorMessage: 'FindBack kunne ikke lese den lagrede posisjonen.',
    permissionTitle: 'Posisjonstilgang er nødvendig',
    permissionMessage:
      'FindBack trenger posisjonstilgang for å kunne lagre stedet du befinner deg på.',
    cancel: 'Avbryt',
    openSettings: 'Åpne innstillinger',
    locationErrorTitle: 'Kunne ikke hente posisjonen',
    locationErrorMessage:
      'Kontroller at posisjonstjenester er aktivert, og prøv igjen.',
    saveErrorTitle: 'Kunne ikke lagre posisjonen',
    saveErrorMessage: 'Noe gikk galt under lagringen. Prøv igjen.',
    mapErrorTitle: 'Kunne ikke åpne kart',
    mapErrorMessage:
      'FindBack fant ingen kartapp som kunne åpne den lagrede posisjonen.',
    pinAccessibilityLabel: 'FindBack-posisjonsnål',
    positionSaved: 'Posisjon lagret',
    savePosition: 'Lagre posisjon',
    gettingPosition: 'Henter posisjon …',
    overwritePrevious: '(overskriver tidligere lagret sted)',
    findAgain: 'Finn igjen',
    lastSaved: 'Sist lagret:',
  },
  sv: {
    unknownTime: 'okänd tidpunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Något gick fel',
    loadErrorMessage: 'FindBack kunde inte läsa den sparade positionen.',
    permissionTitle: 'Platsåtkomst krävs',
    permissionMessage:
      'FindBack behöver platsåtkomst för att kunna spara platsen där du befinner dig.',
    cancel: 'Avbryt',
    openSettings: 'Öppna inställningar',
    locationErrorTitle: 'Kunde inte hämta positionen',
    locationErrorMessage:
      'Kontrollera att platstjänster är aktiverade och försök igen.',
    saveErrorTitle: 'Kunde inte spara positionen',
    saveErrorMessage: 'Något gick fel när positionen sparades. Försök igen.',
    mapErrorTitle: 'Kunde inte öppna kartan',
    mapErrorMessage:
      'FindBack hittade ingen kartapp som kunde öppna den sparade positionen.',
    pinAccessibilityLabel: 'FindBack platsnål',
    positionSaved: 'Position sparad',
    savePosition: 'Spara position',
    gettingPosition: 'Hämtar position …',
    overwritePrevious: '(ersätter tidigare sparad plats)',
    findAgain: 'Hitta tillbaka',
    lastSaved: 'Senast sparad:',
  },
  da: {
    unknownTime: 'ukendt tidspunkt',
    todayAt: 'i dag, {time}',
    loadErrorTitle: 'Noget gik galt',
    loadErrorMessage: 'FindBack kunne ikke læse den gemte position.',
    permissionTitle: 'Placeringstilladelse er nødvendig',
    permissionMessage:
      'FindBack skal have adgang til din placering for at kunne gemme stedet, hvor du befinder dig.',
    cancel: 'Annuller',
    openSettings: 'Åbn indstillinger',
    locationErrorTitle: 'Kunne ikke hente positionen',
    locationErrorMessage:
      'Kontrollér, at placeringstjenester er aktiveret, og prøv igen.',
    saveErrorTitle: 'Kunne ikke gemme positionen',
    saveErrorMessage: 'Noget gik galt under lagringen. Prøv igen.',
    mapErrorTitle: 'Kunne ikke åbne kortet',
    mapErrorMessage:
      'FindBack fandt ingen kortapp, der kunne åbne den gemte position.',
    pinAccessibilityLabel: 'FindBack placeringsnål',
    positionSaved: 'Position gemt',
    savePosition: 'Gem position',
    gettingPosition: 'Henter position …',
    overwritePrevious: '(erstatter tidligere gemte sted)',
    findAgain: 'Find tilbage',
    lastSaved: 'Senest gemt:',
  },
  de: {
    unknownTime: 'unbekannter Zeitpunkt',
    todayAt: 'heute, {time}',
    loadErrorTitle: 'Etwas ist schiefgelaufen',
    loadErrorMessage: 'FindBack konnte die gespeicherte Position nicht lesen.',
    permissionTitle: 'Standortzugriff ist erforderlich',
    permissionMessage:
      'FindBack benötigt Standortzugriff, um deinen aktuellen Standort zu speichern.',
    cancel: 'Abbrechen',
    openSettings: 'Einstellungen öffnen',
    locationErrorTitle: 'Position konnte nicht ermittelt werden',
    locationErrorMessage:
      'Prüfe, ob die Standortdienste aktiviert sind, und versuche es erneut.',
    saveErrorTitle: 'Position konnte nicht gespeichert werden',
    saveErrorMessage: 'Beim Speichern ist etwas schiefgelaufen. Versuche es erneut.',
    mapErrorTitle: 'Karte konnte nicht geöffnet werden',
    mapErrorMessage:
      'FindBack konnte keine Karten-App finden, die die gespeicherte Position öffnen kann.',
    pinAccessibilityLabel: 'FindBack-Standortnadel',
    positionSaved: 'Position gespeichert',
    savePosition: 'Position speichern',
    gettingPosition: 'Position wird ermittelt …',
    overwritePrevious: '(ersetzt den zuvor gespeicherten Ort)',
    findAgain: 'Wiederfinden',
    lastSaved: 'Zuletzt gespeichert:',
  },
  pl: {
    unknownTime: 'nieznany czas',
    todayAt: 'dzisiaj, {time}',
    loadErrorTitle: 'Coś poszło nie tak',
    loadErrorMessage: 'FindBack nie mógł odczytać zapisanej pozycji.',
    permissionTitle: 'Dostęp do lokalizacji jest wymagany',
    permissionMessage:
      'FindBack potrzebuje dostępu do lokalizacji, aby zapisać miejsce, w którym jesteś.',
    cancel: 'Anuluj',
    openSettings: 'Otwórz ustawienia',
    locationErrorTitle: 'Nie udało się ustalić pozycji',
    locationErrorMessage:
      'Sprawdź, czy usługi lokalizacyjne są włączone, i spróbuj ponownie.',
    saveErrorTitle: 'Nie udało się zapisać pozycji',
    saveErrorMessage: 'Podczas zapisywania wystąpił błąd. Spróbuj ponownie.',
    mapErrorTitle: 'Nie udało się otworzyć mapy',
    mapErrorMessage:
      'FindBack nie znalazł aplikacji map, która może otworzyć zapisaną pozycję.',
    pinAccessibilityLabel: 'Znacznik lokalizacji FindBack',
    positionSaved: 'Pozycja zapisana',
    savePosition: 'Zapisz pozycję',
    gettingPosition: 'Pobieranie pozycji …',
    overwritePrevious: '(zastępuje wcześniej zapisane miejsce)',
    findAgain: 'Znajdź ponownie',
    lastSaved: 'Ostatnio zapisano:',
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

  if (language === 'sv' || language === 'da' || language === 'de' || language === 'pl') {
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
