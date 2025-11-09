import React from 'react';
import { Car, Bike, Factory, Hospital, Dog, ShieldCheck } from 'lucide-react';

const areas = [
  { icon: Car, title: 'Car Accidents', desc: 'Collisions, rideshare crashes, uninsured motorists, and more.' },
  { icon: Bike, title: 'Motorcycle & Bicycle', desc: 'Serious injuries demand serious representation.' },
  { icon: Factory, title: 'Workplace Injuries', desc: 'Construction, industrial accidents, and third‑party claims.' },
  { icon: Hospital, title: 'Medical Malpractice', desc: 'Negligent care, surgical errors, and misdiagnosis.' },
  { icon: Dog, title: 'Dog Bites', desc: 'Holding negligent owners accountable for attacks.' },
  { icon: ShieldCheck, title: 'Wrongful Death', desc: 'Compassionate pursuit of justice for families.' },
];

const PracticeAreas = () => {
  return (
    <section className="bg-white py-20" id="practice-areas">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Practice Areas</h2>
          <p className="mt-3 text-gray-600">
            We focus exclusively on injury and wrongful death cases. When everything is on the line,
            you need a team that only does this—and does it well.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
