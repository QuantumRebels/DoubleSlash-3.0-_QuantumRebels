import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

await i18n
  .use(Backend) // Load translations from JSON files
  .use(LanguageDetector) // Auto-detect language
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Correct path to translations
    },
    supportedLngs: ["en", "hi"], // Add supported languages
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"], // Cache language preference
    },
  });

export default i18n;
