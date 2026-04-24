import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import {
  About
} from './pages/Pages';

import {
  BankingBFSI,
  Healthcare,
  Corporate,
  Education,
  Government,
  Judiciary
} from './pages/IndustryPages';

import {
  CaseStudies,
  ContactUs,
  PrivacyPolicy,
  TermsConditions,
} from './pages/CompanyPages';

import ScrollToTop from './components/ScrollToTop';
import RequestDemo from './pages/RequestDemo';
import DigitizationServices from './pages/DigitizationServices';
import AdminLogin from './pages/AdminLogin';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsConditions />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="digitization-services" element={<DigitizationServices />} />

            {/* Industry Specific Routes (Root level as requested) */}
            <Route path="banking-bfsi" element={<BankingBFSI />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="corporate" element={<Corporate />} />
            <Route path="education" element={<Education />} />
            <Route path="government" element={<Government />} />
            <Route path="judiciary" element={<Judiciary />} />

            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="request-demo" element={<RequestDemo />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
