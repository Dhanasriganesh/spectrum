import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import AdminLogin from '../admin/AdminLogin'
import AdminDashboard from '../admin/AdminDashboard'
import ProtectedRoute from '../admin/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (
    <div>
        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            
            {/* Admin Routes */}
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route 
              path='/admin/dashboard' 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
        </Routes>
    </div>
  )
}

export default Routers
