import React from 'react';
import { Scale, MapPin, Phone, Mail, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-emerald-700">
              <Scale className="h-6 w-6" />
              <span className="text-lg font-bold">Haven Injury Law</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Dedicated advocates for the injured. We fight to maximize your recovery so you can focus on healing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Main St, Suite 500, River City, ST 00000</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (800) 555‑1234</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> intake@injurylaw.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#practice-areas" className="hover:text-emerald-700">Practice Areas</a></li>
              <li><a href="#consultation" className="hover:text-emerald-700">Free Consultation</a></li>
              <li><a href="#" className="hover:text-emerald-700">Results</a></li>
              <li><a href="#" className="hover:text-emerald-700">About</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row">
          <p className="flex items-center gap-1"><Copyright className="h-4 w-4" /> {new Date().getFullYear()} Haven Injury Law. All rights reserved.</p>
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
