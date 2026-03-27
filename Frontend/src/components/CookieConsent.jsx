import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('vsdox_cookie_consent');
        if (!consent) {
            // Delay showing the banner for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('vsdox_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('vsdox_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-card reveal-up">
                <div className="cookie-content">
                    <div className="cookie-icon">
                        <i className="fas fa-cookie-bite"></i>
                    </div>
                    <div className="cookie-text">
                        <h4>We use cookies</h4>
                        <p>
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                            By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
                <div className="cookie-actions">
                    <button className="cookie-btn btn-secondary" onClick={handleDecline}>
                        Decline
                    </button>
                    <button className="cookie-btn btn-primary" onClick={handleAccept}>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
