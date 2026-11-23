import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutStats from "./components/AboutStats";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyNotice from "./components/PrivacyNotice.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutStats />
        <Services />
        <Contact />
      </main>
      <Footer />
      <PrivacyNotice />
    </div>
  );
}
