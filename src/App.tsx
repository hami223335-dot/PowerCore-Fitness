import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import WorkoutPrograms from './components/WorkoutPrograms';
import BMICalculator from './components/BMICalculator';
import MembershipPlans from './components/MembershipPlans';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-neon-green selection:text-black">
      {/* 1. Cinematic Loading Screen on Initial Boot */}
      <Preloader />

      {/* 2. Premium Trailing Pointer for Desktop */}
      <CustomCursor />

      {/* 3. Top Progress Indicator & Floating Call/WhatsApp/To-Top triggers */}
      <ScrollProgress />

      {/* 4. Sticky Frosted Header Navigation */}
      <Navbar />

      {/* 5. Main Content Sections */}
      <main className="relative z-20">
        {/* Full Screen Cinematic Hero */}
        <Hero />

        {/* Brand Philosophy */}
        <About />

        {/* Feature Grid */}
        <WhyChooseUs />

        {/* Split Screen Facilities Deck */}
        <Facilities />

        {/* Tabbed Workout Programs */}
        <WorkoutPrograms />

        {/* Biometric Health Analyzer */}
        <BMICalculator />

        {/* Tiered Subscription Plans */}
        <MembershipPlans />

        {/* Master Coach Profiles */}
        <Trainers />

        {/* Image Grid with Lightbox */}
        <Gallery />

        {/* Client Reports */}
        <Testimonials />

        {/* Accoridon Disclosures */}
        <FAQ />

        {/* Day Pass Barcode Reservation */}
        <Contact />
      </main>

      {/* 6. Legal and Disclaimer Footer */}
      <Footer />
    </div>
  );
}

