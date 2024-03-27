import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full">
      <Header />
      <Hero />
      <MapSection />
    </div>
  );
}
export default App;
