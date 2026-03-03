import React from 'react';
import contactHeroImage from '../../assets/contactus.png';

const CONTACT_ADDRESS = '21-589/A, New Shivalaya Nagar, Suraram, Quthbullapur, Telangana 500055';
const MAP_QUERY = encodeURIComponent(CONTACT_ADDRESS);

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple hero with background image */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/90" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber-200 mb-4">
              Our Location
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Visit Spectrum Electricals
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100/90 mb-6 max-w-xl">
              You can find us at our office in Suraram, Quthbullapur, serving residential, commercial, and
              industrial clients across Telangana.
            </p>
            <div className="space-y-3 text-slate-100">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-200 block mb-1">
                  Address
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-sm sm:text-base hover:text-amber-200 transition-colors"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{CONTACT_ADDRESS}</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                <a
                  href="tel:+917416107565"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:border-white transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7416 107 565
                </a>
                <a
                  href="mailto:contact@pdsatech.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-4 py-2 font-semibold text-slate-100 hover:text-amber-200 hover:border-amber-200 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@pdsatech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single location with map */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-8 lg:gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Office
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                We operate from Suraram, Quthbullapur, with quick access to major industrial and residential
                hubs across Hyderabad and the surrounding region.
              </p>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Visit us at
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900">
                  {CONTACT_ADDRESS}
                </p>
              </div>
            </div>

            <div className="h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Spectrum Electricals Location"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed&maptype=roadmap&zoom=16`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
