import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

// Public Pages
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Statistics from './sections/Statistics';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Admin Pages
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';

import './App.css';

// Public Home Page Component
function PublicHome() {
  return (
    <div className="min-h-screen bg-[#F7FBFE]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicHome />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* เพิ่มหน้า admin อื่นๆ ที่นี่ */}
          </Route>
          
          {/* Redirect /admin to login */}
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
