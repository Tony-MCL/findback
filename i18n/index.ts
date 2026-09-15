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
  | 'manageFavorite'
  | 'deleteFavorite'
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

type SupportedLanguage = 'en' | 'nb' | 'sv' | 'da' | 'de' | 'pl' | 'es' | 'pt' | 'fr' | 'ja' | 'hi' | 'zh';

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
    favoritesAccessibilityLabel: 'Map markers', favoritesTitle: 'Map markers', savedFavorites: 'Saved map markers',
    favoritesEmpty: 'No map markers yet. Add your last saved or current position below.',
    favoriteGesturesHint: 'Tap to open · Use ⋮ to rename or delete', longPressToRename: 'Hold to rename',
    addLastSaved: 'Add last saved position', addCurrent: 'Add current position', favoriteDeleted: '{name} deleted', undo: 'Undo',
    renameFavorite: 'Rename map marker', manageFavorite: 'Manage map marker', deleteFavorite: 'Delete map marker', favoriteName: 'Map marker name', save: 'Save',
    favoritesErrorTitle: 'Could not update map markers', favoritesLoadError: 'FindBack could not read your map markers.', favoritesSaveError: 'FindBack could not save the change. Try again.',
    purchaseTitle: 'FindBack Map markers', purchaseBody: 'Save all the places you want to find back to.',
    unlimitedFavorites: 'Unlimited map markers', oneTimePurchase: 'One-time purchase', noSubscription: 'No subscription',
    buyFor: 'Buy for {price}', storeLoading: 'Loading store price …', restorePurchases: 'Restore purchase', notNow: 'Not now',
    purchaseErrorTitle: 'Purchase could not be completed', purchaseErrorMessage: 'Check your connection and try again.',
    restoreSuccessTitle: 'Purchase restored', restoreSuccessMessage: 'Map markers are now unlocked.',
    restoreNotFoundTitle: 'No purchase found', restoreNotFoundMessage: 'The store found no previous Map markers purchase for this account.',
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
    favoritesAccessibilityLabel: 'Kartmerker', favoritesTitle: 'Kartmerker', savedFavorites: 'Lagrede kartmerker',
    favoritesEmpty: 'Ingen kartmerker ennå. Legg til sist lagrede eller nåværende posisjon nedenfor.',
    favoriteGesturesHint: 'Trykk for å åpne · Bruk ⋮ for å endre navn eller slette', longPressToRename: 'Hold for å endre navn',
    addLastSaved: 'Legg til sist lagrede posisjon', addCurrent: 'Legg til nåværende posisjon', favoriteDeleted: '{name} slettet', undo: 'Angre',
    renameFavorite: 'Endre navn på kartmerke', manageFavorite: 'Administrer kartmerke', deleteFavorite: 'Slett kartmerke', favoriteName: 'Navn på kartmerke', save: 'Lagre',
    favoritesErrorTitle: 'Kunne ikke oppdatere kartmerker', favoritesLoadError: 'FindBack kunne ikke lese kartmerkene dine.', favoritesSaveError: 'FindBack kunne ikke lagre endringen. Prøv igjen.',
    purchaseTitle: 'FindBack Kartmerker', purchaseBody: 'Lagre alle stedene du ønsker å finne tilbake til.',
    unlimitedFavorites: 'Ubegrenset antall kartmerker', oneTimePurchase: 'Engangskjøp', noSubscription: 'Ingen abonnement',
    buyFor: 'Kjøp for {price}', storeLoading: 'Henter pris fra butikken …', restorePurchases: 'Gjenopprett kjøp', notNow: 'Ikke nå',
    purchaseErrorTitle: 'Kjøpet kunne ikke fullføres', purchaseErrorMessage: 'Kontroller tilkoblingen og prøv igjen.',
    restoreSuccessTitle: 'Kjøpet er gjenopprettet', restoreSuccessMessage: 'Kartmerker er nå låst opp.',
    restoreNotFoundTitle: 'Fant ingen kjøp', restoreNotFoundMessage: 'Butikken fant ikke noe tidligere Kartmerker-kjøp for denne kontoen.',
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
    favoritesAccessibilityLabel: 'Kartmarkeringar', favoritesTitle: 'Kartmarkeringar', savedFavorites: 'Sparade kartmarkeringar',
    favoritesEmpty: 'Inga kartmarkeringar ännu. Lägg till din senast sparade eller aktuella position nedan.',
    favoriteGesturesHint: 'Tryck för att öppna · Använd ⋮ för att byta namn eller radera', longPressToRename: 'Håll för att byta namn',
    addLastSaved: 'Lägg till senast sparade position', addCurrent: 'Lägg till aktuell position', favoriteDeleted: '{name} raderad', undo: 'Ångra',
    renameFavorite: 'Byt namn på kartmarkering', manageFavorite: 'Hantera kartmarkering', deleteFavorite: 'Radera kartmarkering', favoriteName: 'Kartmarkeringens namn', save: 'Spara',
    favoritesErrorTitle: 'Kunde inte uppdatera kartmarkeringar', favoritesLoadError: 'FindBack kunde inte läsa dina kartmarkeringar.', favoritesSaveError: 'FindBack kunde inte spara ändringen. Försök igen.',
    purchaseTitle: 'FindBack Kartmarkeringar', purchaseBody: 'Spara alla platser du vill hitta tillbaka till.',
    unlimitedFavorites: 'Obegränsat antal kartmarkeringar', oneTimePurchase: 'Engångsköp', noSubscription: 'Ingen prenumeration',
    buyFor: 'Köp för {price}', storeLoading: 'Hämtar butikspris …', restorePurchases: 'Återställ köp', notNow: 'Inte nu',
    purchaseErrorTitle: 'Köpet kunde inte slutföras', purchaseErrorMessage: 'Kontrollera anslutningen och försök igen.',
    restoreSuccessTitle: 'Köpet har återställts', restoreSuccessMessage: 'Kartmarkeringar är nu upplåsta.',
    restoreNotFoundTitle: 'Inget köp hittades', restoreNotFoundMessage: 'Butiken hittade inget tidigare köp av Kartmarkeringar för det här kontot.',
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
    favoritesAccessibilityLabel: 'Kortmarkører', favoritesTitle: 'Kortmarkører', savedFavorites: 'Gemte kortmarkører',
    favoritesEmpty: 'Ingen kortmarkører endnu. Tilføj din senest gemte eller aktuelle position nedenfor.',
    favoriteGesturesHint: 'Tryk for at åbne · Brug ⋮ til at omdøbe eller slette', longPressToRename: 'Hold for at omdøbe',
    addLastSaved: 'Tilføj senest gemte position', addCurrent: 'Tilføj aktuel position', favoriteDeleted: '{name} slettet', undo: 'Fortryd',
    renameFavorite: 'Omdøb kortmarkør', manageFavorite: 'Administrer kortmarkør', deleteFavorite: 'Slet kortmarkør', favoriteName: 'Kortmarkørens navn', save: 'Gem',
    favoritesErrorTitle: 'Kunne ikke opdatere kortmarkører', favoritesLoadError: 'FindBack kunne ikke læse dine kortmarkører.', favoritesSaveError: 'FindBack kunne ikke gemme ændringen. Prøv igen.',
    purchaseTitle: 'FindBack Kortmarkører', purchaseBody: 'Gem alle de steder, du vil kunne finde tilbage til.',
    unlimitedFavorites: 'Ubegrænset antal kortmarkører', oneTimePurchase: 'Engangskøb', noSubscription: 'Intet abonnement',
    buyFor: 'Køb for {price}', storeLoading: 'Henter butikspris …', restorePurchases: 'Gendan køb', notNow: 'Ikke nu',
    purchaseErrorTitle: 'Købet kunne ikke gennemføres', purchaseErrorMessage: 'Kontrollér forbindelsen, og prøv igen.',
    restoreSuccessTitle: 'Købet er gendannet', restoreSuccessMessage: 'Kortmarkører er nu låst op.',
    restoreNotFoundTitle: 'Intet køb fundet', restoreNotFoundMessage: 'Butikken fandt intet tidligere køb af Kortmarkører for denne konto.',
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
    favoritesAccessibilityLabel: 'Kartenmarkierungen', favoritesTitle: 'Kartenmarkierungen', savedFavorites: 'Gespeicherte Kartenmarkierungen',
    favoritesEmpty: 'Noch keine Kartenmarkierungen. Füge unten die zuletzt gespeicherte oder aktuelle Position hinzu.',
    favoriteGesturesHint: 'Tippen zum Öffnen · Mit ⋮ umbenennen oder löschen', longPressToRename: 'Halten zum Umbenennen',
    addLastSaved: 'Zuletzt gespeicherte Position hinzufügen', addCurrent: 'Aktuelle Position hinzufügen', favoriteDeleted: '{name} gelöscht', undo: 'Rückgängig',
    renameFavorite: 'Kartenmarkierung umbenennen', manageFavorite: 'Kartenmarkierung verwalten', deleteFavorite: 'Kartenmarkierung löschen', favoriteName: 'Name der Kartenmarkierung', save: 'Speichern',
    favoritesErrorTitle: 'Kartenmarkierungen konnten nicht aktualisiert werden', favoritesLoadError: 'FindBack konnte deine Kartenmarkierungen nicht lesen.', favoritesSaveError: 'FindBack konnte die Änderung nicht speichern. Versuche es erneut.',
    purchaseTitle: 'FindBack Kartenmarkierungen', purchaseBody: 'Speichere alle Orte, zu denen du zurückfinden möchtest.',
    unlimitedFavorites: 'Unbegrenzte Kartenmarkierungen', oneTimePurchase: 'Einmaliger Kauf', noSubscription: 'Kein Abonnement',
    buyFor: 'Für {price} kaufen', storeLoading: 'Store-Preis wird geladen …', restorePurchases: 'Kauf wiederherstellen', notNow: 'Nicht jetzt',
    purchaseErrorTitle: 'Kauf konnte nicht abgeschlossen werden', purchaseErrorMessage: 'Prüfe deine Verbindung und versuche es erneut.',
    restoreSuccessTitle: 'Kauf wiederhergestellt', restoreSuccessMessage: 'Kartenmarkierungen sind jetzt freigeschaltet.',
    restoreNotFoundTitle: 'Kein Kauf gefunden', restoreNotFoundMessage: 'Der Store hat für dieses Konto keinen früheren Kauf von Kartenmarkierungen gefunden.',
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
    favoritesAccessibilityLabel: 'Znaczniki mapy', favoritesTitle: 'Znaczniki mapy', savedFavorites: 'Zapisane znaczniki',
    favoritesEmpty: 'Nie masz jeszcze znaczników. Dodaj poniżej ostatnią zapisaną lub bieżącą pozycję.',
    favoriteGesturesHint: 'Dotknij, aby otworzyć · Użyj ⋮, aby zmienić nazwę lub usunąć', longPressToRename: 'Przytrzymaj, aby zmienić nazwę',
    addLastSaved: 'Dodaj ostatnią zapisaną pozycję', addCurrent: 'Dodaj bieżącą pozycję', favoriteDeleted: 'Usunięto {name}', undo: 'Cofnij',
    renameFavorite: 'Zmień nazwę znacznika', manageFavorite: 'Zarządzaj znacznikiem', deleteFavorite: 'Usuń znacznik', favoriteName: 'Nazwa znacznika', save: 'Zapisz',
    favoritesErrorTitle: 'Nie udało się zaktualizować znaczników', favoritesLoadError: 'FindBack nie mógł odczytać znaczników.', favoritesSaveError: 'FindBack nie mógł zapisać zmiany. Spróbuj ponownie.',
    purchaseTitle: 'Znaczniki mapy FindBack', purchaseBody: 'Zapisuj wszystkie miejsca, do których chcesz wrócić.',
    unlimitedFavorites: 'Nieograniczona liczba znaczników', oneTimePurchase: 'Jednorazowy zakup', noSubscription: 'Bez subskrypcji',
    buyFor: 'Kup za {price}', storeLoading: 'Pobieranie ceny ze sklepu …', restorePurchases: 'Przywróć zakup', notNow: 'Nie teraz',
    purchaseErrorTitle: 'Nie udało się dokończyć zakupu', purchaseErrorMessage: 'Sprawdź połączenie i spróbuj ponownie.',
    restoreSuccessTitle: 'Zakup przywrócony', restoreSuccessMessage: 'Znaczniki mapy są teraz odblokowane.',
    restoreNotFoundTitle: 'Nie znaleziono zakupu', restoreNotFoundMessage: 'Sklep nie znalazł wcześniejszego zakupu Znaczników mapy dla tego konta.',
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
    favoritesAccessibilityLabel: 'Marcadores del mapa', favoritesTitle: 'Marcadores del mapa', savedFavorites: 'Marcadores guardados',
    favoritesEmpty: 'Aún no hay marcadores. Añade abajo la última posición guardada o la actual.',
    favoriteGesturesHint: 'Toca para abrir · Usa ⋮ para renombrar o eliminar', longPressToRename: 'Mantén pulsado para renombrar',
    addLastSaved: 'Añadir última posición guardada', addCurrent: 'Añadir posición actual', favoriteDeleted: '{name} eliminado', undo: 'Deshacer',
    renameFavorite: 'Renombrar marcador', manageFavorite: 'Gestionar marcador', deleteFavorite: 'Eliminar marcador', favoriteName: 'Nombre del marcador', save: 'Guardar',
    favoritesErrorTitle: 'No se pudieron actualizar los marcadores', favoritesLoadError: 'FindBack no pudo leer tus marcadores.', favoritesSaveError: 'FindBack no pudo guardar el cambio. Inténtalo de nuevo.',
    purchaseTitle: 'Marcadores de FindBack', purchaseBody: 'Guarda todos los lugares a los que quieras volver.',
    unlimitedFavorites: 'Marcadores del mapa ilimitados', oneTimePurchase: 'Compra única', noSubscription: 'Sin suscripción',
    buyFor: 'Comprar por {price}', storeLoading: 'Cargando precio de la tienda …', restorePurchases: 'Restaurar compra', notNow: 'Ahora no',
    purchaseErrorTitle: 'No se pudo completar la compra', purchaseErrorMessage: 'Comprueba la conexión e inténtalo de nuevo.',
    restoreSuccessTitle: 'Compra restaurada', restoreSuccessMessage: 'Los marcadores ya están desbloqueados.',
    restoreNotFoundTitle: 'No se encontró ninguna compra', restoreNotFoundMessage: 'La tienda no encontró una compra anterior de Marcadores para esta cuenta.',
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
    favoritesAccessibilityLabel: 'Marcadores do mapa', favoritesTitle: 'Marcadores do mapa', savedFavorites: 'Marcadores guardados',
    favoritesEmpty: 'Ainda não existem marcadores. Adicione abaixo a última posição guardada ou a atual.',
    favoriteGesturesHint: 'Toque para abrir · Use ⋮ para mudar o nome ou eliminar', longPressToRename: 'Mantenha premido para mudar o nome',
    addLastSaved: 'Adicionar última posição guardada', addCurrent: 'Adicionar posição atual', favoriteDeleted: '{name} eliminado', undo: 'Anular',
    renameFavorite: 'Mudar nome do marcador', manageFavorite: 'Gerir marcador', deleteFavorite: 'Eliminar marcador', favoriteName: 'Nome do marcador', save: 'Guardar',
    favoritesErrorTitle: 'Não foi possível atualizar os marcadores', favoritesLoadError: 'O FindBack não conseguiu ler os seus marcadores.', favoritesSaveError: 'O FindBack não conseguiu guardar a alteração. Tente novamente.',
    purchaseTitle: 'Marcadores FindBack', purchaseBody: 'Guarde todos os locais aos quais quer regressar.',
    unlimitedFavorites: 'Marcadores do mapa ilimitados', oneTimePurchase: 'Compra única', noSubscription: 'Sem subscrição',
    buyFor: 'Comprar por {price}', storeLoading: 'A obter o preço da loja …', restorePurchases: 'Restaurar compra', notNow: 'Agora não',
    purchaseErrorTitle: 'Não foi possível concluir a compra', purchaseErrorMessage: 'Verifique a ligação e tente novamente.',
    restoreSuccessTitle: 'Compra restaurada', restoreSuccessMessage: 'Os marcadores estão agora desbloqueados.',
    restoreNotFoundTitle: 'Nenhuma compra encontrada', restoreNotFoundMessage: 'A loja não encontrou uma compra anterior de Marcadores para esta conta.',
  },
  fr: {
    unknownTime: 'heure inconnue',
    todayAt: 'aujourd’hui à {time}',
    loadErrorTitle: 'Un problème est survenu',
    loadErrorMessage: 'FindBack n’a pas pu lire la position enregistrée.',
    permissionTitle: 'L’accès à la position est nécessaire',
    permissionMessage: 'FindBack a besoin d’accéder à votre position pour enregistrer l’endroit où vous vous trouvez.',
    cancel: 'Annuler',
    openSettings: 'Ouvrir les réglages',
    locationErrorTitle: 'Impossible d’obtenir votre position',
    locationErrorMessage: 'Vérifiez que les services de localisation sont activés, puis réessayez.',
    saveErrorTitle: 'Impossible d’enregistrer la position',
    saveErrorMessage: 'Un problème est survenu lors de l’enregistrement. Réessayez.',
    mapErrorTitle: 'Impossible d’ouvrir le plan',
    mapErrorMessage: 'FindBack n’a trouvé aucune application de cartographie capable d’ouvrir la position enregistrée.',
    pinAccessibilityLabel: 'Repère de position FindBack',
    positionSaved: 'Position enregistrée',
    savePosition: 'Enregistrer la position',
    gettingPosition: 'Localisation en cours …',
    overwritePrevious: '(remplace la position enregistrée précédemment)',
    findAgain: 'Retrouver',
    lastSaved: 'Dernier enregistrement :',
    infoAccessibilityLabel: 'À propos de FindBack',
    aboutTitle: 'À propos de FindBack',
    aboutBody: 'FindBack enregistre une position localement sur votre appareil et ouvre votre application de cartographie préférée lorsque vous souhaitez y retourner. Aucun compte, aucun stockage dans le cloud et aucun suivi.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    contact: 'Contacter Morning Coffee Labs',
    website: 'Visiter Morning Coffee Labs',
    close: 'Fermer',
    linkErrorTitle: 'Impossible d’ouvrir le lien',
    linkErrorMessage: 'Veuillez réessayer plus tard.',
    favoritesAccessibilityLabel: 'Repères sur la carte', favoritesTitle: 'Repères sur la carte', savedFavorites: 'Repères enregistrés',
    favoritesEmpty: 'Aucun repère pour le moment. Ajoutez ci-dessous votre dernière position enregistrée ou votre position actuelle.',
    favoriteGesturesHint: 'Touchez pour ouvrir · Utilisez ⋮ pour renommer ou supprimer', longPressToRename: 'Maintenez pour renommer',
    addLastSaved: 'Ajouter la dernière position enregistrée', addCurrent: 'Ajouter la position actuelle', favoriteDeleted: '{name} supprimé', undo: 'Annuler',
    renameFavorite: 'Renommer le repère', manageFavorite: 'Gérer le repère', deleteFavorite: 'Supprimer le repère', favoriteName: 'Nom du repère', save: 'Enregistrer',
    favoritesErrorTitle: 'Impossible de mettre à jour les repères', favoritesLoadError: 'FindBack n’a pas pu lire vos repères.', favoritesSaveError: 'FindBack n’a pas pu enregistrer la modification. Réessayez.',
    purchaseTitle: 'Repères FindBack', purchaseBody: 'Enregistrez tous les lieux où vous souhaitez pouvoir retourner.',
    unlimitedFavorites: 'Nombre illimité de repères', oneTimePurchase: 'Achat unique', noSubscription: 'Sans abonnement',
    buyFor: 'Acheter pour {price}', storeLoading: 'Chargement du prix …', restorePurchases: 'Restaurer l’achat', notNow: 'Plus tard',
    purchaseErrorTitle: 'Impossible de finaliser l’achat', purchaseErrorMessage: 'Vérifiez votre connexion et réessayez.',
    restoreSuccessTitle: 'Achat restauré', restoreSuccessMessage: 'Les repères sont maintenant déverrouillés.',
    restoreNotFoundTitle: 'Aucun achat trouvé', restoreNotFoundMessage: 'La boutique n’a trouvé aucun achat antérieur des Repères pour ce compte.',
  },
  ja: {
    unknownTime: '時刻不明',
    todayAt: '今日 {time}',
    loadErrorTitle: '問題が発生しました',
    loadErrorMessage: '保存した位置情報を読み込めませんでした。',
    permissionTitle: '位置情報へのアクセスが必要です',
    permissionMessage: '現在地を保存するには、FindBackに位置情報へのアクセスを許可してください。',
    cancel: 'キャンセル',
    openSettings: '設定を開く',
    locationErrorTitle: '現在地を取得できませんでした',
    locationErrorMessage: '位置情報サービスが有効になっていることを確認して、もう一度お試しください。',
    saveErrorTitle: '位置を保存できませんでした',
    saveErrorMessage: '保存中に問題が発生しました。もう一度お試しください。',
    mapErrorTitle: '地図を開けませんでした',
    mapErrorMessage: '保存した位置を開ける地図アプリが見つかりませんでした。',
    pinAccessibilityLabel: 'FindBackの位置ピン',
    positionSaved: '位置を保存しました',
    savePosition: '位置を保存',
    gettingPosition: '現在地を取得中 …',
    overwritePrevious: '（以前に保存した位置を置き換えます）',
    findAgain: 'もう一度見つける',
    lastSaved: '最終保存：',
    infoAccessibilityLabel: 'FindBackについて',
    aboutTitle: 'FindBackについて',
    aboutBody: 'FindBackは位置を端末内に保存し、戻りたいときにお好みの地図アプリで開きます。アカウント、クラウド保存、追跡はありません。',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    contact: 'Morning Coffee Labsに連絡',
    website: 'Morning Coffee Labsのウェブサイト',
    close: '閉じる',
    linkErrorTitle: 'リンクを開けませんでした',
    linkErrorMessage: 'しばらくしてからもう一度お試しください。',
    favoritesAccessibilityLabel: 'マップマーカー', favoritesTitle: 'マップマーカー', savedFavorites: '保存済みのマーカー',
    favoritesEmpty: 'マップマーカーはまだありません。最後に保存した位置または現在地を下から追加できます。',
    favoriteGesturesHint: 'タップで開く · ⋮で名前変更または削除', longPressToRename: '長押しで名前を変更',
    addLastSaved: '最後に保存した位置を追加', addCurrent: '現在地を追加', favoriteDeleted: '{name}を削除しました', undo: '元に戻す',
    renameFavorite: 'マップマーカーの名前を変更', manageFavorite: 'マップマーカーを管理', deleteFavorite: 'マップマーカーを削除', favoriteName: 'マップマーカー名', save: '保存',
    favoritesErrorTitle: 'マップマーカーを更新できませんでした', favoritesLoadError: 'マップマーカーを読み込めませんでした。', favoritesSaveError: '変更を保存できませんでした。もう一度お試しください。',
    purchaseTitle: 'FindBack マップマーカー', purchaseBody: '戻りたい場所をすべて保存できます。',
    unlimitedFavorites: 'マップマーカーを無制限に保存', oneTimePurchase: '買い切り', noSubscription: 'サブスクリプションなし',
    buyFor: '{price}で購入', storeLoading: 'ストア価格を読み込み中 …', restorePurchases: '購入を復元', notNow: '今はしない',
    purchaseErrorTitle: '購入を完了できませんでした', purchaseErrorMessage: '接続を確認して、もう一度お試しください。',
    restoreSuccessTitle: '購入を復元しました', restoreSuccessMessage: 'マップマーカー機能が利用できるようになりました。',
    restoreNotFoundTitle: '購入が見つかりません', restoreNotFoundMessage: 'このアカウントには過去のマップマーカー購入が見つかりませんでした。',
  },
  hi: {
    unknownTime: 'अज्ञात समय',
    todayAt: 'आज, {time}',
    loadErrorTitle: 'कुछ गलत हो गया',
    loadErrorMessage: 'FindBack सहेजी गई स्थिति को पढ़ नहीं सका।',
    permissionTitle: 'स्थान की अनुमति आवश्यक है',
    permissionMessage: 'आप जहाँ हैं उसे सहेजने के लिए FindBack को स्थान की अनुमति चाहिए।',
    cancel: 'रद्द करें',
    openSettings: 'सेटिंग खोलें',
    locationErrorTitle: 'आपका स्थान नहीं मिल सका',
    locationErrorMessage: 'सुनिश्चित करें कि स्थान सेवाएँ चालू हैं और फिर से प्रयास करें।',
    saveErrorTitle: 'स्थान सहेजा नहीं जा सका',
    saveErrorMessage: 'सहेजते समय कुछ गलत हो गया। फिर से प्रयास करें।',
    mapErrorTitle: 'मैप नहीं खुल सका',
    mapErrorMessage: 'FindBack को ऐसा मैप ऐप नहीं मिला जो सहेजे गए स्थान को खोल सके।',
    pinAccessibilityLabel: 'FindBack स्थान पिन',
    positionSaved: 'स्थान सहेजा गया',
    savePosition: 'स्थान सहेजें',
    gettingPosition: 'स्थान प्राप्त किया जा रहा है …',
    overwritePrevious: '(पहले सहेजे गए स्थान को बदल देता है)',
    findAgain: 'फिर से खोजें',
    lastSaved: 'अंतिम बार सहेजा गया:',
    infoAccessibilityLabel: 'FindBack के बारे में',
    aboutTitle: 'FindBack के बारे में',
    aboutBody: 'FindBack आपके डिवाइस पर एक स्थान स्थानीय रूप से सहेजता है और जब आप वापस जाना चाहें तो आपका पसंदीदा मैप ऐप खोलता है। कोई खाता, क्लाउड स्टोरेज या ट्रैकिंग नहीं।',
    privacy: 'गोपनीयता नीति',
    terms: 'उपयोग की शर्तें',
    contact: 'Morning Coffee Labs से संपर्क करें',
    website: 'Morning Coffee Labs की वेबसाइट देखें',
    close: 'बंद करें',
    linkErrorTitle: 'लिंक नहीं खुल सका',
    linkErrorMessage: 'कृपया बाद में फिर से प्रयास करें।',
    favoritesAccessibilityLabel: 'मैप मार्कर', favoritesTitle: 'मैप मार्कर', savedFavorites: 'सहेजे गए मैप मार्कर',
    favoritesEmpty: 'अभी कोई मैप मार्कर नहीं है। नीचे अंतिम सहेजा गया या वर्तमान स्थान जोड़ें।',
    favoriteGesturesHint: 'खोलने के लिए टैप करें · नाम बदलने या हटाने के लिए ⋮ का उपयोग करें', longPressToRename: 'नाम बदलने के लिए दबाए रखें',
    addLastSaved: 'अंतिम सहेजा गया स्थान जोड़ें', addCurrent: 'वर्तमान स्थान जोड़ें', favoriteDeleted: '{name} हटा दिया गया', undo: 'पहले जैसा करें',
    renameFavorite: 'मैप मार्कर का नाम बदलें', manageFavorite: 'मैप मार्कर प्रबंधित करें', deleteFavorite: 'मैप मार्कर हटाएँ', favoriteName: 'मैप मार्कर का नाम', save: 'सहेजें',
    favoritesErrorTitle: 'मैप मार्कर अपडेट नहीं हो सके', favoritesLoadError: 'FindBack आपके मैप मार्कर नहीं पढ़ सका।', favoritesSaveError: 'FindBack बदलाव सहेज नहीं सका। फिर से प्रयास करें।',
    purchaseTitle: 'FindBack मैप मार्कर', purchaseBody: 'उन सभी स्थानों को सहेजें जहाँ आप वापस जाना चाहते हैं।',
    unlimitedFavorites: 'असीमित मैप मार्कर', oneTimePurchase: 'एक बार की खरीदारी', noSubscription: 'कोई सदस्यता नहीं',
    buyFor: '{price} में खरीदें', storeLoading: 'स्टोर मूल्य लोड हो रहा है …', restorePurchases: 'खरीदारी पुनर्स्थापित करें', notNow: 'अभी नहीं',
    purchaseErrorTitle: 'खरीदारी पूरी नहीं हो सकी', purchaseErrorMessage: 'अपना कनेक्शन जाँचें और फिर से प्रयास करें।',
    restoreSuccessTitle: 'खरीदारी पुनर्स्थापित हुई', restoreSuccessMessage: 'मैप मार्कर अब अनलॉक हैं।',
    restoreNotFoundTitle: 'कोई खरीदारी नहीं मिली', restoreNotFoundMessage: 'स्टोर को इस खाते के लिए मैप मार्कर की कोई पिछली खरीदारी नहीं मिली।',
  },
  zh: {
    unknownTime: '未知时间',
    todayAt: '今天 {time}',
    loadErrorTitle: '出现问题',
    loadErrorMessage: 'FindBack 无法读取已保存的位置。',
    permissionTitle: '需要位置访问权限',
    permissionMessage: 'FindBack 需要访问您的位置，才能保存您所在的地点。',
    cancel: '取消',
    openSettings: '打开设置',
    locationErrorTitle: '无法获取您的位置',
    locationErrorMessage: '请确认定位服务已开启，然后重试。',
    saveErrorTitle: '无法保存位置',
    saveErrorMessage: '保存时出现问题，请重试。',
    mapErrorTitle: '无法打开地图',
    mapErrorMessage: 'FindBack 找不到能够打开已保存位置的地图应用。',
    pinAccessibilityLabel: 'FindBack 位置标记',
    positionSaved: '位置已保存',
    savePosition: '保存位置',
    gettingPosition: '正在获取位置 …',
    overwritePrevious: '（替换之前保存的位置）',
    findAgain: '再次找到',
    lastSaved: '上次保存：',
    infoAccessibilityLabel: '关于 FindBack',
    aboutTitle: '关于 FindBack',
    aboutBody: 'FindBack 会将一个位置保存在您的设备本地，并在您想返回时用首选地图应用打开。无需账户，不使用云存储，也不会跟踪您。',
    privacy: '隐私政策',
    terms: '使用条款',
    contact: '联系 Morning Coffee Labs',
    website: '访问 Morning Coffee Labs',
    close: '关闭',
    linkErrorTitle: '无法打开链接',
    linkErrorMessage: '请稍后重试。',
    favoritesAccessibilityLabel: '地图标记', favoritesTitle: '地图标记', savedFavorites: '已保存的地图标记',
    favoritesEmpty: '还没有地图标记。请在下方添加上次保存的位置或当前位置。',
    favoriteGesturesHint: '轻点打开 · 使用 ⋮ 重命名或删除', longPressToRename: '长按重命名',
    addLastSaved: '添加上次保存的位置', addCurrent: '添加当前位置', favoriteDeleted: '已删除{name}', undo: '撤销',
    renameFavorite: '重命名地图标记', manageFavorite: '管理地图标记', deleteFavorite: '删除地图标记', favoriteName: '地图标记名称', save: '保存',
    favoritesErrorTitle: '无法更新地图标记', favoritesLoadError: 'FindBack 无法读取您的地图标记。', favoritesSaveError: 'FindBack 无法保存更改，请重试。',
    purchaseTitle: 'FindBack 地图标记', purchaseBody: '保存所有您想再次返回的地点。',
    unlimitedFavorites: '无限地图标记', oneTimePurchase: '一次性购买', noSubscription: '无需订阅',
    buyFor: '以 {price} 购买', storeLoading: '正在加载商店价格 …', restorePurchases: '恢复购买', notNow: '暂不',
    purchaseErrorTitle: '无法完成购买', purchaseErrorMessage: '请检查网络连接并重试。',
    restoreSuccessTitle: '购买已恢复', restoreSuccessMessage: '地图标记功能现已解锁。',
    restoreNotFoundTitle: '未找到购买记录', restoreNotFoundMessage: '商店未找到此账户之前购买地图标记功能的记录。',
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
    language === 'pt' ||
    language === 'fr' ||
    language === 'ja' ||
    language === 'hi' ||
    language === 'zh'
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
