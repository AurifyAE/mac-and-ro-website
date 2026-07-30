import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Only English ships in the main bundle. ar.json (85KB) and it.json (70KB) used to be
// static imports too, which inlined 221KB of raw JSON into index.js — every visitor
// downloaded all three languages regardless of which one they read.
import enTranslations from './locales/en.json';

const lazyLocales = {
  ar: () => import('./locales/ar.json'),
  it: () => import('./locales/it.json'),
};

const loadedLocales = new Set(['en']);

// i18next may resolve a detected language to a region-tagged code (e.g. "en-US").
// Chunks are keyed by base language, so normalise before looking one up.
const baseLanguage = (lng) => String(lng || '').split('-')[0].toLowerCase();

async function loadLocale(lng) {
  const base = baseLanguage(lng);
  if (loadedLocales.has(base) || !lazyLocales[base]) return;
  try {
    const mod = await lazyLocales[base]();
    i18n.addResourceBundle(base, 'translation', mod.default, true, true);
    loadedLocales.add(base);
  } catch (err) {
    // A failed chunk fetch falls back to English rather than blanking the UI.
    console.error(`[i18n] failed to load "${base}" translations:`, err);
  }
}

const initPromise = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Configure language detection
    supportedLngs: ['en', 'ar', 'it'],
    nonExplicitSupportedLngs: false,
  })
  // Pull in the detected language's bundle before the first render so ar/it users
  // don't see a flash of English. Resolves immediately for en.
  .then(() => loadLocale(i18n.language));

// Every subsequent switch fetches its bundle on demand; react-i18next re-renders when
// addResourceBundle fires.
i18n.on('languageChanged', (lng) => {
  loadLocale(lng);
});

// main.jsx awaits this before mounting <App />.
export const i18nReady = initPromise;

export default i18n;
