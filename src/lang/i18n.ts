import { initReactI18next } from "react-i18next";
import i18n, { use } from "i18next";
import ka from "@/lang/ka.json";
import en from "@/lang/en.json";

use(initReactI18next)
  .init({
    resources: {
      ka: {
        translation: ka,
      },
      en: {
        translation: en,
      },
    },
    lng: "ka",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => console.error(err));

export default i18n;
