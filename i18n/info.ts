import { language } from '@/i18n';

type InfoTranslations = {
  infoAccessibilityLabel: string;
  title: string;
  description: string;
  privacyPolicy: string;
  termsOfUse: string;
  contact: string;
  website: string;
  close: string;
};

const translations: Record<string, InfoTranslations> = {
  en: {
    infoAccessibilityLabel: 'About FindBack',
    title: 'About FindBack',
    description:
      'FindBack saves one position locally on your device. When you want to return, the app opens the saved position in your map app.',
    privacyPolicy: 'Privacy policy',
    termsOfUse: 'Terms of use',
    contact: 'Contact',
    website: 'Website',
    close: 'Close',
  },
  nb: {
    infoAccessibilityLabel: 'Om FindBack',
    title: 'Om FindBack',
    description:
      'FindBack lagrer én posisjon lokalt på enheten din. Når du vil tilbake, åpner appen den lagrede posisjonen i kartappen din.',
    privacyPolicy: 'Personvern',
    termsOfUse: 'Bruksvilkår',
    contact: 'Kontakt',
    website: 'Nettside',
    close: 'Lukk',
  },
  sv: {
    infoAccessibilityLabel: 'Om FindBack',
    title: 'Om FindBack',
    description:
      'FindBack sparar en position lokalt på din enhet. När du vill återvända öppnar appen den sparade positionen i din kartapp.',
    privacyPolicy: 'Integritetspolicy',
    termsOfUse: 'Användarvillkor',
    contact: 'Kontakt',
    website: 'Webbplats',
    close: 'Stäng',
  },
  da: {
    infoAccessibilityLabel: 'Om FindBack',
    title: 'Om FindBack',
    description:
      'FindBack gemmer én position lokalt på din enhed. Når du vil tilbage, åbner appen den gemte position i din kortapp.',
    privacyPolicy: 'Privatlivspolitik',
    termsOfUse: 'Brugsvilkår',
    contact: 'Kontakt',
    website: 'Websted',
    close: 'Luk',
  },
  de: {
    infoAccessibilityLabel: 'Über FindBack',
    title: 'Über FindBack',
    description:
      'FindBack speichert einen Standort lokal auf deinem Gerät. Wenn du zurückkehren möchtest, öffnet die App den gespeicherten Standort in deiner Karten-App.',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfUse: 'Nutzungsbedingungen',
    contact: 'Kontakt',
    website: 'Webseite',
    close: 'Schließen',
  },
  pl: {
    infoAccessibilityLabel: 'O FindBack',
    title: 'O FindBack',
    description:
      'FindBack zapisuje jedną pozycję lokalnie na Twoim urządzeniu. Gdy chcesz wrócić, aplikacja otwiera zapisaną pozycję w aplikacji map.',
    privacyPolicy: 'Polityka prywatności',
    termsOfUse: 'Warunki korzystania',
    contact: 'Kontakt',
    website: 'Strona internetowa',
    close: 'Zamknij',
  },
  es: {
    infoAccessibilityLabel: 'Acerca de FindBack',
    title: 'Acerca de FindBack',
    description:
      'FindBack guarda una posición localmente en tu dispositivo. Cuando quieras volver, la aplicación abre la posición guardada en tu aplicación de mapas.',
    privacyPolicy: 'Política de privacidad',
    termsOfUse: 'Términos de uso',
    contact: 'Contacto',
    website: 'Sitio web',
    close: 'Cerrar',
  },
  pt: {
    infoAccessibilityLabel: 'Sobre o FindBack',
    title: 'Sobre o FindBack',
    description:
      'O FindBack guarda uma posição localmente no seu dispositivo. Quando quiser regressar, a aplicação abre a posição guardada na sua aplicação de mapas.',
    privacyPolicy: 'Política de privacidade',
    termsOfUse: 'Termos de utilização',
    contact: 'Contacto',
    website: 'Site',
    close: 'Fechar',
  },
  fr: {
    infoAccessibilityLabel: 'À propos de FindBack',
    title: 'À propos de FindBack',
    description:
      'FindBack enregistre une position localement sur votre appareil. Lorsque vous souhaitez y retourner, l’application ouvre la position enregistrée dans votre application de cartographie.',
    privacyPolicy: 'Politique de confidentialité',
    termsOfUse: 'Conditions d’utilisation',
    contact: 'Contact',
    website: 'Site web',
    close: 'Fermer',
  },
  ja: {
    infoAccessibilityLabel: 'FindBackについて',
    title: 'FindBackについて',
    description:
      'FindBackは位置を端末内に保存します。戻りたいときに、保存した位置を地図アプリで開きます。',
    privacyPolicy: 'プライバシーポリシー',
    termsOfUse: '利用規約',
    contact: 'お問い合わせ',
    website: 'ウェブサイト',
    close: '閉じる',
  },
  hi: {
    infoAccessibilityLabel: 'FindBack के बारे में',
    title: 'FindBack के बारे में',
    description:
      'FindBack आपके डिवाइस पर एक स्थान स्थानीय रूप से सहेजता है। जब आप वापस जाना चाहें, तो ऐप सहेजे गए स्थान को आपके मैप ऐप में खोलता है।',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfUse: 'उपयोग की शर्तें',
    contact: 'संपर्क',
    website: 'वेबसाइट',
    close: 'बंद करें',
  },
  zh: {
    infoAccessibilityLabel: '关于 FindBack',
    title: '关于 FindBack',
    description:
      'FindBack 会将一个位置保存在您的设备本地。当您想返回时，应用会在地图应用中打开已保存的位置。',
    privacyPolicy: '隐私政策',
    termsOfUse: '使用条款',
    contact: '联系我们',
    website: '网站',
    close: '关闭',
  },
};

export const infoText = translations[language] ?? translations.en;
