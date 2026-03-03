import React, { useState } from 'react';
import contactHeroImage from '../../assets/contactus.png';
import inTouchImage from '../../assets/contactus.png';
import usaImage from '../../assets/contactus.png';
import hydImage from '../../assets/contactus.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    
    message: '',
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const getApiBaseUrl = () =>
    import.meta.env.VITE_API_URL || '/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const API_URL = getApiBaseUrl();
      
      // Send as JSON (serverless functions receive JSON)
      const payload = {
        name: formData.name,
        company: formData.company || '',
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      };

      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: 'Server error. Please try again later.' };
        }
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', company: '', email: '', mobile: '', message: '' });
        setFile(null);
        if (e.target.reset) e.target.reset();
        setSubmitted(true);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Unable to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      title: 'PDSA Tech Headquarters',
      location: 'USA',
      address: '11020 David Taylor Dr #100 Charlotte, NC 28262, USA',
      phone: '+1 (980) 781-9639',
      phoneLink: '+19807819639',
      email: 'contact@pdsatech.com',
      mapQuery: encodeURIComponent('11020 David Taylor Dr #100 Charlotte, NC 28262'),
      image: usaImage,
    },
    {
      title: 'PDSA Tech Development Center',
      location: 'Hyderabad, India',
      address: 'Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Near by metro station, Hyderabad, Telangana, India',
      phone: '+91 77939 92217',
      phoneLink: '+917793992217',
      email: 'contact@pdsatech.com',
      mapQuery: encodeURIComponent('Unit no. 1020, 9th floor Vasavi MPM Grand, Ameerpet Near by metro station, Hyderabad, Telangana, India'),
      image: hydImage,
    },
  ];

  const channels = [
    {
      title: 'Partnerships & Sales',
      description: 'Exploring new initiatives, co-innovation, or platform builds.',
      email: 'contact@pdsatech.com',
      response: '2 business days',
    },
    {
      title: 'Support & Client Delivery',
      description: 'Active engagement support, production issues, or roadmap planning.',
      email: 'contact@pdsatech.com',
      response: 'Same day',
    },
    {
      title: 'Talent & Media',
      description: 'Careers, speaking opportunities, or media inquiries.',
      email: 'contact@pdsatech.com',
      response: '3 business days',
    },
  ];

  const getMapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${query}`;
  const getMapEmbedUrl = (query) => `https://www.google.com/maps?q=${query}&output=embed&maptype=roadmap&zoom=15`;

  return (
    <div className="min-h-screen bg-white">
      {/* Advanced Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              We respond within 24 hours
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 sm:mb-6">
              <span className="block">Get In Touch</span>
              <span className="block mt-1 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
              Have a project in mind or need a quote? We’re here to help. Reach out and we’ll get back to you quickly.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="tel:+917416107565"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/50 hover:scale-[1.02]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                Call us
              </a>
              <a
                href="mailto:contact@pdsatech.com"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/50 hover:scale-[1.02]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Email us
              </a>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="#contact-form"
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="text-xs font-medium uppercase tracking-widest">Scroll to form</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Contact form</p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">Share your brief or RFP</h2>
            <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-sm sm:text-base text-gray-600 px-4">
              Upload documents, outlines, or supporting files. We keep everything confidential and respond with next steps.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1 h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-0">
              <img 
                src={inTouchImage} 
                alt="Connect with us"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23e5e7eb' width='600' height='400'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EConnect with us%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            
            {/* Right side - Form */}
            <form onSubmit={handleSubmit} className="order-1 lg:order-2 h-full flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
              <div className="flex-grow">
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-gray-700" htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700" htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700" htmlFor="mobile">Mobile number</label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold text-gray-700" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none resize-y"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold text-gray-700" htmlFor="attachments">Supporting file (PDF, DOCX, ZIP, PPTX)</label>
                  <input
                    id="attachments"
                    type="file"
                    accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                    onChange={handleFileChange}
                    className="mt-1.5 w-full rounded-xl border border-dashed border-gray-300 bg-white px-3 py-2 text-xs text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
              <div className="mt-6 sm:mt-auto space-y-2">
                {submitStatus.message && (
                  <div
                    className={`rounded-xl border px-3 py-2 text-xs font-semibold ${
                      submitStatus.type === 'success'
                        ? 'border-green-200 bg-green-50 text-green-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-full bg-blue-600 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                  {submitted && submitStatus.type === 'success' && (
                    <span className="text-xs font-semibold text-green-600">Thanks! We'll be in touch soon.</span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Locations Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-red-100 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-2">Our Locations</h2>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {locations.map((location, index) => (
              <div
                key={location.location}
                className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-6 md:p-8 shadow-xl ${
                  index === 0 
                    ? 'border-blue-200 bg-gradient-to-br from-white to-blue-50' 
                    : 'border-red-200 bg-gradient-to-br from-white to-red-50'
                }`}
              >
                {/* Header with location pin */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <svg className={`h-5 w-5 sm:h-6 sm:w-6 ${index === 0 ? 'text-blue-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{location.location}</h3>
                </div>
                {/* Top section: Contact info and Image side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-6 items-start mb-4 sm:mb-6">
                  {/* Left side - Contact info */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Address:</p>
                      <a
                        href={getMapUrl(location.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-800 hover:text-blue-600 transition-colors break-words"
                      >
                        {location.address}
                      </a>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                      <p className="text-xs sm:text-sm font-bold text-gray-800">Phone:</p>
                      <a
                        href={`tel:${location.phoneLink}`}
                        className={`text-xs sm:text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors`}
                      >
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                      <p className="text-xs sm:text-sm font-bold text-gray-800">Email:</p>
                      <a
                        href={`mailto:${location.email}`}
                        className={`text-xs sm:text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors break-all`}
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                  {/* Right side - Image */}
                  <div className="w-full sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0 rounded-lg overflow-hidden mx-auto sm:mx-0">
                    <img 
                      src={location.image} 
                      alt={location.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e5e7eb' width='200' height='200'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ELocation%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                </div>
                {/* Map - Full width below address and image */}
                <div className="rounded-lg overflow-hidden border border-gray-300 h-48 sm:h-56 md:h-64">
                  <iframe
                    title={`${location.title} Map`}
                    src={getMapEmbedUrl(location.mapQuery)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Channels</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Route your request</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className="rounded-3xl border border-white bg-white p-6 shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{channel.response} response</p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{channel.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{channel.description}</p>
                <p className="mt-4 text-sm font-semibold text-blue-700">{channel.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
