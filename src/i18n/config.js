import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: false, // Passer à true pour voir les logs dans la console
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      fr: {
        translation: {
          hero_title: "Contribuer à lever les barrières de la langue.",
          hero_subtitle: "Micro-agence d'expression numérique dédiée à la santé et au social.",
          // Ajoutez vos clés ici
        }
      },
      en: {
        translation: {
          hero_title: "Helping to break down language barriers.",
          hero_subtitle: "Digital expression micro-agency dedicated to health and social care.",
        }
      }
      // Vous pourrez ajouter l'Arabe, le Dari, etc., selon les besoins de l'ASAMLA
    }
  });

export default i18n;