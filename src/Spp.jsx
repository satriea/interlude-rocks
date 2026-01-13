import { useState } from "react" // Jangan lupa import useState
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import VideoSection from "./components/VideoSection"
import StoriesSection from "./components/StoriesSection"
import Footer from "./components/Footer"
import CRTOverlay from "./components/CRTOverlay"
import CassettePlayer from "./components/CassettePlayer"
import ArticleDetail from "./components/ArticleDetail" 
import ContactSection from "./components/ContactSection"

const Spp = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedStory, setSelectedStory] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Logic Transisi Bersemut
  const handleNavigation = (page, data = null) => {
    setIsTransitioning(true); // Mulai efek semut

    setTimeout(() => {
      setCurrentPage(page);
      setSelectedStory(data);
      window.scrollTo(0, 0);
      
      // Matikan efek semut setelah jeda singkat
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); 
    }, 400); // Durasi layar semut menutupi layar
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-200 font-sans">
      <CRTOverlay />
      
      {/* OVERLAY LAYAR SEMUT (Hanya muncul saat transisi) */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[10000] bg-black overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-40 animate-noise bg-[url('https://media.giphy.com/media/oEI9uWUicG7p6/giphy.gif')] bg-cover" />
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-white font-mono text-xs tracking-[1em] uppercase animate-pulse">
              Tuning Signal...
            </span>
          </div>
        </div>
      )}

      <Navbar />
      <CassettePlayer />

      {/* Konten dengan Animasi Fade */}
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === "home" ? (
          <>
            <Hero />
            <main className="max-w-7xl mx-auto px-4 py-12 space-y-24">
              <VideoSection />
              <StoriesSection onOpenArticle={(story) => handleNavigation("detail", story)} />
              <ContactSection />
            </main>
          </>
        ) : (
          <ArticleDetail 
            article={selectedStory} 
            onBack={() => handleNavigation("home")} 
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Spp