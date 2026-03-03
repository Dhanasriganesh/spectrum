import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../../assets/bg-spec.jpg'
import about from "../../assets/spectrum-about.png"
import nexus from "../../assets/spectrum-nexus.jpg"
import turbo from "../../assets/spectrum-turbo.jpg"
import pt from "../../assets/spectrum-pt.png"
function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with fixed Background Image */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image (fixed) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        ></div>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Electrical & Instrumentation Solutions for Every Need
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100">
                Powering homes, buildings, and businesses with excellence and safety. 100% Clients satisfaction.
              </p>
              
              {/* Modern Contact Section */}
              <div className="space-y-4">
                {/* Quick Contact Info */}
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <a 
                    href="tel:+917416107565" 
                    className="group flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-medium">+91 7416 107 565</span>
                  </a>
                  
                  <Link 
                    to="/contact" 
                    className="group flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium">Get Quote</span>
                  </Link>
                </div>
                
                {/* Primary CTA Button */}
                <div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
                  >
                    <span>Start Your Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-3 sm:p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-3 sm:p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center p-3 sm:p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center p-3 sm:p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={about}
                alt="Electrical Work" 
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23e5e7eb' width='600' height='400'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EProfessional Service%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                About Spectrum Electricals
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">
                We are your trusted partner for all electrical solutions, specializing in residential, 
                commercial, and industrial electrical work. With years of experience and a commitment 
                to excellence, we deliver quality services that power your dreams.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                From new installations to repairs and maintenance, we handle everything with 
                professionalism, safety, and precision. Our team of certified electricians ensures 
                that every project meets the highest standards.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Licensed & Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Quality Workmanship Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Competitive Pricing</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="text-6xl sm:text-3xl md:text-4xl font-bold  text-gray-900 mb-3 sm:mb-4">
              We are experts in
            </div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Comprehensive electrical solutions for residential, commercial, and industrial needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            {/* Service Card 1 – Pharmaceutical Lightings (highlighted) */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="absolute inset-x-6 -top-4 flex justify-start">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 text-slate-900 px-3 py-1 text-xs font-semibold shadow-md shadow-amber-300/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                  Core Expertise
                </span>
              </div>
              <div className="flex items-start gap-4 pt-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-blue-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-amber-300 shadow-lg shadow-amber-300/40">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v4m0 10v4m6-10h4M2 11h4m11.657-5.657l2.828-2.828M3.515 20.485l2.828-2.828m0-11.314L3.515 3.515M20.485 20.485l-2.828-2.828M9 13a3 3 0 116 0 3 3 0 01-6 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold mb-2 bg-gradient-to-r from-amber-200 via-yellow-200 to-blue-200 bg-clip-text text-transparent">
                    Pharmaceutical Lightings
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    Specialized cleanroom and pharmaceutical lighting solutions designed for GMP, sterile areas,
                    and audit-ready environments.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                  <li className="flex items-center">
                      <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-slate-900 font-bold">
                        ✓
                      </span>
                      Sales & Services
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-slate-900 font-bold">
                        ✓
                      </span>
                      Cleanroom & sterile area lighting
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-slate-900 font-bold">
                        ✓
                      </span>
                      Well glass fittings, flood lights, etc.
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-slate-900 font-bold">
                        ✓
                      </span>
                      Validated designs for pharma audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 2 – Instrumentation & Automation */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-4 right-[-40px] w-32 bg-gradient-to-l from-amber-300/40 to-transparent rotate-[-18deg]" />
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-md shadow-amber-400/70">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                Instrumentation Focus
              </div>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h9l9 4v8l-9 4-9-4V4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h3m4 0h3M7 9h1m8 6h1" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Instrumentation &amp; Automation
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    Precision instrumentation, control systems, and automation for reliable, intelligent plant operations.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> PLC / DCS panels & control wiring
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Field instruments, sensors & loop checks
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> SCADA / BMS integration & commissioning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Panel Erection</h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    Expert electrical panel erection, upgrades, and maintenance for safe power distribution.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Panel upgrades
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Circuit breakers
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Safety inspections
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-green-500 to-emerald-500 opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Lighting Solutions</h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    Modern lighting installations including LED, outdoor, indoor, and decorative lighting systems.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> LED installations
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Outdoor lighting
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Decorative lights
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-500 to-rose-500 opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Emergency Services</h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    24/7 emergency electrical services for urgent repairs, power outages, and safety issues.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Machine breakdown
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> H.V breakdown
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> L.V breakdown
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:p-7 md:p-8 shadow-lg shadow-blue-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Maintenance & Repair</h3>
                  <p className="text-sm sm:text-base text-slate-200/90 mb-3">
                    Regular maintenance and prompt repair services to keep your electrical systems running smoothly.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-100/90">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Preventive maintenance
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> VFD programming
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Star & Delta Feeders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link 
              to="/products" 
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-colors shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Spectrum Electricals?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              We stand out with our commitment to quality, safety, and customer satisfaction
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Licensed & Certified</h3>
              <p className="text-gray-600">
                All our electricians are fully licensed, certified, and insured professionals
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">On-Time Service</h3>
              <p className="text-gray-600">
                We value your time and always arrive on schedule with prompt, efficient service
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Competitive Rates</h3>
              <p className="text-gray-600">
                Fair, transparent pricing with no hidden costs. Quality service at affordable rates
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">100% Satisfaction</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're not done until you're completely happy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Images */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 text-xl">
                  ★★★★★
                </div>
                
              </div>
              <img src={nexus} alt="Nexus Automation" className="w-92 h-80 rounded-3xl" />
              <p className="text-gray-700 mb-6 italic">
                "Excellent service! They completed the erection for Reactor automation system for our projects successfully on time and within budget. 
                Very professional and knowledgeable team."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                  NA
                </div>
                <div>
                  <div className="font-bold text-gray-900">Nexus Automation</div>
                  <div className="text-sm text-gray-500">Automation Solutions</div>
                </div>
               
              </div>
              
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 text-xl">
                  ★★★★★
                </div>
              </div>
              <img src={turbo} alt="Turbo Tech" className="w-92 h-80 rounded-3xl" />
              <p className="text-gray-700 mb-6 italic">
                "Great Team! They completed the lighting installation for our industrial plant on time and within budget. 
                The team was professional, ensuring the installation was done correctly and efficiently. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                  TT
                </div>
                <div>
                  <div className="font-bold text-gray-900">TurboTech</div>
                  <div className="text-sm text-gray-500">Industrial Lighting</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 text-xl">
                  ★★★★★
                </div>
              </div>
              <img src={pt} alt="pharmaceutical" className="w-92 h-80 rounded-3xl" />
              <p className="text-gray-700 mb-6 italic">
                 
               Best team for pharmaceutical lightings. They serviced our old lights in very reasonable cost and with best quality.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                  AM
                </div>
                <div>
                  <div className="font-bold text-gray-900">Zenfold</div>
                  <div className="text-sm text-gray-500">Pharmaceutical Lightings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Need Electrical Services? Contact Us Today!
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get a free quote for your project. Available 24/7 for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="tel:+917416107565" 
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl w-full sm:w-auto flex items-center justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call: +91 7416 107 565</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <Link 
              to="/contact" 
              className="bg-amber-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-amber-500 transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
