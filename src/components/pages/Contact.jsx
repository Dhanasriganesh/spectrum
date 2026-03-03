import React from 'react';
import contactHeroImage from '../../assets/contact-us.png';

const CONTACT_ADDRESS = '21-589/A, New Shivalaya Nagar, Suraram, Quthbullapur, Telangana 500055';
const MAP_QUERY = encodeURIComponent(CONTACT_ADDRESS);

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with image only */}
      <section className="relative overflow-hidden min-h-[40vh] sm:min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Contact tiles */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Choose the way that suits you best to contact us.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {/* Call tile */}
            <a
              href="tel:+917416107565"
              className="group rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-start"
            >
              <div className="mb-4 rounded-xl bg-blue-600 text-white w-12 h-12 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Speak directly with our team for immediate assistance.
              </p>
              <p className="text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                +91 7416107565
              </p>
            </a>

            {/* WhatsApp tile */}
            <a
              href="https://wa.me/917416107565"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-green-100 bg-green-50/60 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-start"
            >
              <div className="mb-4 rounded-xl bg-green-600 text-white w-12 h-12 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.55 2 2.15 6.26 2.15 11.58c0 1.83.54 3.55 1.48 5L2 22l5.6-1.46a9.88 9.88 0 004.44 1.07h.01c5.49 0 9.89-4.26 9.89-9.58C21.94 6.26 17.53 2 12.04 2zm0 17.3h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.33.87.89-3.16-.2-.32a7.52 7.52 0 01-1.16-4.03c0-4.16 3.46-7.54 7.69-7.54 2.05 0 3.98.78 5.43 2.2a7.44 7.44 0 012.25 5.34c0 4.16-3.46 7.57-7.68 7.57zm4.2-5.6c-.23-.11-1.37-.68-1.58-.76-.21-.08-.36-.11-.52.11-.16.22-.6.76-.73.91-.13.15-.27.17-.5.06-.23-.11-.98-.38-1.87-1.2-.69-.62-1.16-1.39-1.3-1.62-.14-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.14-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.52-1.28-.71-1.75-.19-.46-.38-.4-.52-.41h-.45c-.16 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.93 2.36.11.15 1.61 2.5 3.9 3.4.55.24.98.38 1.32.48.55.18 1.05.15 1.45.09.44-.07 1.37-.56 1.56-1.11.19-.55.19-1.02.13-1.11-.06-.09-.21-.15-.44-.26z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                WhatsApp
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Send us a message on WhatsApp for quick queries and follow‑ups.
              </p>
              <p className="text-sm font-semibold text-green-700 group-hover:text-green-800">
                Chat on WhatsApp
              </p>
            </a>

            {/* Email tile */}
            <a
              href={`mailto:contact@pdsatech.com`}
              className="group rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-start"
            >
              <div className="mb-4 rounded-xl bg-amber-500 text-white w-12 h-12 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Share detailed requirements, RFQs, or documents with our team.
              </p>
              <p className="text-sm font-semibold text-amber-700 group-hover:text-amber-800 break-all">
                contact@pdsatech.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
