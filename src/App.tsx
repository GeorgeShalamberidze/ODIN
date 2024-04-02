import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import KeyFeaturesSection from "./components/BenefitsSection";
import EmailSubmitionSection from "./components/EmailSubmitionSection";
import HowOdinWorks from "./components/HowOdinWorks";
import SecuritySection from "./components/SecuritySection";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <MapSection />
      <HowOdinWorks />
      <KeyFeaturesSection />
      <SecuritySection />
      <EmailSubmitionSection />
      <Footer />
    </div>
  );
}
export default App;
