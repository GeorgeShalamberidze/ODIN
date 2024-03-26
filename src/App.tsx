import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("business")}</h1>
      <button
        className="border border-solid border-gray-500 m-2 p-3 rounded-full bg-slate-600 text-white font-bold text-[18px] w-fit"
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className="border border-solid border-gray-500 m-2 p-3 rounded-full bg-slate-600 text-white font-bold text-[18px] w-fit"
        onClick={() => changeLanguage("ka")}
      >
        ქართული
      </button>
    </div>
  );
}
export default App;
