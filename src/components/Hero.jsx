import React from 'react';
import { Phone, Shield, Scale, Clock } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fQwNqv6g8bN5k5x/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 text-white">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Shield className="h-4 w-4 text-emerald-400" />
            No Fee Unless We Win
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Personal Injury Advocates Who Fight For Your Recovery
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            If you were hurt in an accident, you deserve answers, action, and results. Our
            award‑winning team has recovered millions for injured clients across the state.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Free Case Evaluation
            </button>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Phone className="h-4 w-4" /> (800) 555‑1234
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/80 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-emerald-400" /> 25+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" /> Millions Recovered
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400" /> Available 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
