import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Statistics from './sections/Statistics';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7FBFE]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
