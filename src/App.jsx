import React from 'react';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-emerald-400">
            <span className="text-xl font-bold">Haven Injury Law</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/90 sm:flex">
            <a className="hover:text-white" href="#practice-areas">Practice Areas</a>
            <a className="hover:text-white" href="#consultation">Free Consultation</a>
          </nav>
          <a
            href="tel:+18005551234"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-500/30 transition hover:bg-emerald-600"
          >
            Call 24/7
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <PracticeAreas />
        <WhyChooseUs />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
