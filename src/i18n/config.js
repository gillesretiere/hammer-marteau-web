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
          hero_vk_t0: "IA",
          hero_vk_t1: "Site Web",
          hero_vk_t2: "Mobile",
          hero_title: "Contribuer à lever les barrières de la langue.",
          hero_subtitle: "Micro-agence d'expression numérique dédiée à la santé et au social.",
          hero_title1: "Concevoir et bâtir des outils numériques de haute précision.",
          hero_subtitle1: "L'excellence technique et le multilinguisme natif au service de vos ambitions.",
          corp_mark: "Micro-agence",
          corp_submark: "Digital",
          corp_submark_1: "Micro-agence Web",
          corp_submark_2: "Digital",
          corp_submark_3: "IA",
          hero_title_1: "Expression",
          hero_title_2: "Numérique",
          hero_title_3: "Créateur d'outils pédagogiques multilingues",
          skill_1: "Site Web",
          skill_2: "Branding",
          skill_3: "Conseil",
          skill_4: "Communication",
          // Ajoutez vos clés ici
        }
      },
      en: {
        translation: {
          hero_vk_t0: "AI",
          hero_vk_t1: "Website",
          hero_vk_t2: "Mobile",
          hero_title: "Helping to break down language barriers.",
          hero_subtitle: "Digital expression micro-agency dedicated to health and social care.",
          hero_title1: "Designing and building high-precision digital tools.",
          hero_subtitle1: "Technical excellence and native multilingualism at the service of your business projects.",
          corp_mark: "Hammer & Marteau",
          corp_submark: "Micro Agency",
          corp_submark_1: "Micro agency",
          corp_submark_2: "Digital",
          corp_submark_3: "AI",
          hero_title_1: "Your", 
          hero_title_2: "Digital Expression",
          hero_title_3: "Partner",
          skill_1: "Supervised AI",
          skill_2: "Communication",
          skill_3: "Social Networks",
          skill_4: "Websites / Mobile Apps",
          skill_5: "Consultancy",
          skill_6: "React & Python Expert",
          skill_7: "i18n",
        }
      }
      // Vous pourrez ajouter l'Arabe, le Dari, etc., selon les besoins de l'ASAMLA
    }
  });

export default i18n;