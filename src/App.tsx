import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="">
      <Header />
      <Hero />
    </div>
  );
}
export default App;
