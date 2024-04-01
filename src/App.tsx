import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import KeyFeaturesSection from "./components/BenefitsSection";
import EmailSubmitionSection from "./components/EmailSubmitionSection";
import "react-toastify/dist/ReactToastify.css";
import HowOdinWorks from "./components/HowOdinWorks";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <MapSection />
      <HowOdinWorks />
      <KeyFeaturesSection />
      <EmailSubmitionSection />
    </div>
  );
}
export default App;
