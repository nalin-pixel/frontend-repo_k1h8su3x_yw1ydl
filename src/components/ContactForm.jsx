import React, { useState } from 'react';
import { Loader2, Mail, Phone } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section className="bg-white py-20" id="consultation">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Free Confidential Consultation</h2>
          <p className="mt-3 text-gray-600">
            There is no cost to speak with us. Tell us what happened and an attorney will reach out shortly.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="jane@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="(555) 555-1234" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">What happened?</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Briefly describe your situation" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                'Request My Free Case Review'
              )}
            </button>
            {sent && (
              <p className="text-sm text-emerald-700">Thank you. Your message has been received. We will contact you soon.</p>
            )}
          </form>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">24/7 Immediate Help</h3>
            <p className="mt-2 text-sm text-gray-600">If you need urgent assistance, call us now or email and our team will respond promptly.</p>
            <div className="mt-6 space-y-3">
              <a href="tel:+18005551234" className="flex items-center gap-3 text-emerald-700 hover:underline">
                <Phone className="h-5 w-5" /> (800) 555‑1234
              </a>
              <a href="mailto:intake@injurylaw.com" className="flex items-center gap-3 text-emerald-700 hover:underline">
                <Mail className="h-5 w-5" /> intake@injurylaw.com
              </a>
            </div>
            <div className="mt-8 rounded-lg bg-white p-4 text-sm text-gray-600 shadow-sm">
              Consultations are confidential and free. There are no fees unless we win your case.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
