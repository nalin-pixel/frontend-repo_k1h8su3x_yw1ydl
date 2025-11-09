import React from 'react';
import { Trophy, Handshake, Scale, CheckCircle2 } from 'lucide-react';

const points = [
  { icon: Trophy, title: 'Proven Results', desc: 'Multi‑million dollar recoveries across verdicts and settlements.' },
  { icon: Handshake, title: 'Client‑First', desc: 'Direct attorney access, clear communication, and compassion.' },
  { icon: Scale, title: 'Relentless Advocacy', desc: 'We prepare every case as if it will go to trial.' },
  { icon: CheckCircle2, title: 'No Upfront Fees', desc: 'We only get paid if we win your case.' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Injured Clients Choose Us</h2>
            <p className="mt-3 text-gray-600">
              We combine courtroom experience with modern investigation and negotiation tactics.
              Our mission is simple: deliver life‑changing outcomes for people who need them most.
            </p>
            <ul className="mt-6 space-y-4">
              {points.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-br from-emerald-200/40 to-cyan-200/40 blur-2xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                {points.map(({ title }, idx) => (
                  <div key={title} className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-3xl font-bold text-gray-900">{[98, 24, 100, 0][idx]}+
                    </p>
                    <p className="text-xs text-gray-600">{['Five‑Star Reviews','Years Combined','Cases Prepared','Upfront Fees'][idx]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
