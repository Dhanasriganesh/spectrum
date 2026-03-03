import React, { useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function Layout() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </Router>
    )
}

export default Layout
