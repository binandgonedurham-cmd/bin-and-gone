import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import TestimonialCarousel from "./components/TestimonialCarousel";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import FixedFooterBanner from "./components/FixedFooterBanner";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black pb-28 text-white sm:pb-32">
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <HowItWorks />
        <TestimonialCarousel />
        <BookingSection />
      </main>
      <Footer />
      <FixedFooterBanner />
    </div>
  );
}

export default App;
