import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div style={{ minHeight: 'calc(100vh - 160px)' }}>
                <Outlet />
            </div>
            <Footer />
            <CookieConsent />
        </div>
    );
};

export default Layout;
