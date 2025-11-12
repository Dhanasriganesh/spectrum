import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const services = [
    {
      title: "Residential Wiring",
      icon: "🏠",
      description: "Complete electrical wiring solutions for homes, apartments, and villas",
      features: [
        "New home electrical installations",
        "Complete rewiring services",
        "Circuit upgrades and additions",
        "Safety inspections and certifications",
        "Smart home wiring solutions",
        "Energy-efficient installations"
      ],
      color: "blue"
    },
    {
      title: "Commercial Electrical",
      icon: "🏢",
      description: "Professional electrical services for offices, shops, and commercial buildings",
      features: [
        "Office electrical installations",
        "Retail shop wiring",
        "Commercial lighting systems",
        "Power distribution systems",
        "Emergency lighting",
        "Data and communication wiring"
      ],
      color: "yellow"
    },
    {
      title: "Industrial Electrical",
      icon: "🏭",
      description: "Heavy-duty electrical solutions for industrial facilities and factories",
      features: [
        "Industrial power systems",
        "Motor control installations",
        "Heavy machinery wiring",
        "Three-phase power systems",
        "Industrial automation",
        "Preventive maintenance programs"
      ],
      color: "purple"
    },
    {
      title: "Panel Installation & Upgrades",
      icon: "⚡",
      description: "Expert electrical panel services for safe and efficient power distribution",
      features: [
        "New panel installations",
        "Panel upgrades and replacements",
        "Circuit breaker installations",
        "Sub-panel additions",
        "Safety inspections",
        "Load balancing services"
      ],
      color: "red"
    },
    {
      title: "Lighting Solutions",
      icon: "💡",
      description: "Modern lighting installations for homes, offices, and outdoor spaces",
      features: [
        "LED lighting installations",
        "Indoor lighting design",
        "Outdoor and landscape lighting",
        "Decorative lighting",
        "Smart lighting systems",
        "Energy-efficient solutions"
      ],
      color: "green"
    },
    {
      title: "Emergency Services",
      icon: "🚨",
      description: "24/7 emergency electrical services for urgent repairs and safety issues",
      features: [
        "24/7 availability",
        "Rapid response time",
        "Power outage solutions",
        "Electrical fault diagnosis",
        "Emergency repairs",
        "Safety hazard resolution"
      ],
      color: "orange"
    },
    {
      title: "Maintenance & Repair",
      icon: "🔧",
      description: "Regular maintenance and prompt repair services for all electrical systems",
      features: [
        "Preventive maintenance",
        "Electrical troubleshooting",
        "Fault diagnosis and repair",
        "System testing and inspection",
        "Component replacement",
        "Performance optimization"
      ],
      color: "indigo"
    },
    {
      title: "Wiring & Rewiring",
      icon: "🔌",
      description: "Complete wiring services for new constructions and renovations",
      features: [
        "New construction wiring",
        "Renovation rewiring",
        "Cable management",
        "Underground wiring",
        "Conduit installations",
        "Code compliance"
      ],
      color: "pink"
    },
    {
      title: "Safety Inspections",
      icon: "🔍",
      description: "Comprehensive electrical safety inspections and certifications",
      features: [
        "Complete system inspections",
        "Safety compliance checks",
        "Risk assessments",
        "Certification services",
        "Detailed inspection reports",
        "Recommendations for improvements"
      ],
      color: "teal"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600",
      teal: "bg-teal-100 text-teal-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Our Services</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
                Comprehensive electrical solutions for residential, commercial, and industrial needs
              </p>
              <Link to="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-colors shadow-lg">
                Get Free Quote
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop" 
                alt="Electrical Services" 
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23e5e7eb' width='600' height='400'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EElectrical Services%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Professional electrical services delivered with excellence, safety, and reliability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-colors shadow-md"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Spectrum Electricals?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We deliver exceptional electrical services with a commitment to quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Professionals</h3>
              <p className="text-gray-600">
                Fully licensed, certified, and insured electricians with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">
                High-quality work guaranteed with attention to detail and precision
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair and transparent pricing with no hidden costs or surprises
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Emergency services available around the clock for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on any of our electrical services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+917416107565" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl w-full sm:w-auto flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 7416 107 565
            </a>
            <Link 
              to="/contact" 
              className="bg-amber-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Serve All Types of Projects</h2>
            <p className="text-gray-600 mb-8">From residential homes to large-scale industrial facilities</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏠 Houses</span>
              <span className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏡 Villas</span>
              <span className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏘️ Apartments</span>
              <span className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏢 Offices</span>
              <span className="bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏪 Shops</span>
              <span className="bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏛️ Buildings</span>
              <span className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏭 Factories</span>
              <span className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 px-6 py-3 rounded-full shadow-sm font-medium text-gray-700 hover:shadow-md transition-shadow">🏗️ Warehouses</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
