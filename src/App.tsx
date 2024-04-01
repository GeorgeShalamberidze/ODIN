import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import BenefitsSection from "./components/BenefitsSection";
import BottomHero from "./components/BottomHero";
import EmailSubmitionSection from "./components/EmailSubmitionSection";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <MapSection />
      {/* <BenefitsSection />
      <BottomHero />
      <EmailSubmitionSection /> */}
    </div>
  );
}
export default App;
