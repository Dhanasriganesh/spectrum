import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/speclogo.jpeg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity based on scroll position
  // Fully transparent at top (0-100px), gradually increase to 0.95 after 300px
  const getOpacity = () => {
    if (scrollY < 100) return 0
    if (scrollY < 300) return Math.min((scrollY - 100) / 200, 0.95)
    return 0.95
  }

  const opacity = getOpacity()
  const isOverHero = scrollY < 300

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        opacity > 0.1 
          ? 'backdrop-blur-md shadow-md border-b border-gray-200/50' 
          : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`
      }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={logoImage} 
              alt="Spectrum Engineering Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div>
              <h1 className={`text-sm sm:text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
                isOverHero ? 'text-white' : 'text-gray-800'
              }`}>SPECTRUM ELECTRICALS</h1>
              <p className={`text-xs hidden sm:block transition-colors duration-300 ${
                isOverHero ? 'text-gray-200' : 'text-gray-500'
              }`}>Powering Your Dreams</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/" className={`transition-colors font-medium ${
                isOverHero 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={`transition-colors font-medium ${
                isOverHero 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`transition-colors font-medium ${
                isOverHero 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contact
              </Link>
            </li>
            <li>
              <a 
                href="tel:+917416107565" 
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-2.5 rounded-full font-bold hover:from-amber-500 hover:to-amber-600 transition-all hover:scale-105 shadow-md"
              >
                📞 Call Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isOverHero ? 'text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className={`md:hidden mt-4 space-y-3 pb-4 pt-4 transition-colors duration-300 ${
            isOverHero ? 'border-t border-white/20' : 'border-t border-gray-200'
          }`}>
            <li>
              <Link 
                to="/" 
                className={`block py-2 transition-colors ${
                  isOverHero 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`block py-2 transition-colors ${
                  isOverHero 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block py-2 transition-colors ${
                  isOverHero 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a 
                href="tel:+917416107565" 
                className="block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-3 rounded-full font-bold text-center hover:from-amber-500 hover:to-amber-600 transition-colors shadow-md"
              >
                📞 Call Now
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
