import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MilestoneTimeline from '../components/MilestoneTimeline';

import teamBanner from '../assets/team-member.jpeg';

const PageHero = ({ title, subtitle, bgImage }) => (
    <section className="page-hero-container" style={{
        backgroundImage: bgImage
            ? `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url("${bgImage}")`
            : 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        backgroundColor: '#0f172a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '120px 0'
    }}>
        <div className="max-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="page-hero-content reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
                <h1 style={{ color: 'white' }}>{title}</h1>
                <p style={{ color: 'white', margin: '0 auto 30px', maxWidth: '800px' }}>{subtitle}</p>
                <div className="breadcrumb" style={{ justifyContent: 'center' }}>
                    <Link to="/">Home</Link> <span>/</span> <span>{title}</span>
                </div>
            </div>
        </div>
    </section>
);

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
    }, []);

    const achievementList = [
        "Showcase Start-up - India International Trade Fair 2016",
        "Top 20 ECM Solution Providers 2018, 2019, 2021, 2023 (CIO India)",
        "Most Promising Assessment Solution Provider 2021 (Ardorcomm Media)",
        "Partner - World Education Summit 2018"
    ];

    const leadership = [
        {
            name: "Deepak Garg",
            role: "Managing Director",
            img: "https://www.virsoftech.com/img/deepak_garg.jpg",
            linkedin: "https://www.linkedin.com/in/deepakgarg76/",
            email: "deepak@virsoftech.com",
            desc: "A gifted techno-businessman with over 20 years of experience in product innovation, strategic planning, and customer acquisition. Previously at HCL Technologies and Adobe Systems, Deepak is the mind behind our products and services. As Managing Director, he oversees sales, business development, operations, and the financial division across global markets."
        },
        {
            name: "Abhijeet Jain",
            role: "Chief Technology Officer",
            img: "https://www.virsoftech.com/img/abhijeet_pic.jpg",
            linkedin: "https://www.linkedin.com/in/abhijeet-jain-5a9b313/",
            email: "abhijeet@virsoftech.com",
            desc: "A Computer Scientist, Entrepreneur, and Business Executive with over 20 years of R&D leadership at global product companies. Previously at Adobe Systems as key solution architect for PDF-centric products in Print & Publishing. A contributor to PDF ISO specifications, Abhijeet remains hands-on with coding and serves as chief architect for our print domain projects."
        },
        {
            name: "Pralaypati Ta",
            role: "Principal Architect",
            img: "https://www.virsoftech.com/img/Pralay-photo.png",
            linkedin: "https://www.linkedin.com/in/pralaypati-ta-3944691/",
            email: "pralay@virsoftech.com",
            desc: "A coding geek with over 18 years of tech leadership experience leading R&D teams at global product companies like Samsung and Adobe Systems. Pralaypati is our solution architect for cloud-based solutions in DAM/CMS and analytics technologies, driving innovation in platform architecture for enterprise-scale content management and digital asset solutions."
        },
        {
            name: "Sameer Manuja",
            role: "Principal Architect",
            img: "https://www.virsoftech.com/sameer_manuja.jpg",
            linkedin: "https://www.linkedin.com/in/sameermanuja/",
            email: "sameer@virsoftech.com",
            desc: "Our key solution architect for print and publishing technologies with over 20 years of industry experience creating path-setting innovations at Samsung and Adobe Systems. Sameer holds several US patents to his name and drives the architecture of our advanced print domain solutions, rendering engines, and document processing frameworks."
        },
        {
            name: "Akihide Sugino",
            role: "Country Head, Japan",
            img: "https://www.virsoftech.com/img/sugino.jpg",
            linkedin: "https://jp.linkedin.com/in/akihide-sugino-938526154",
            email: "sugino@virsoftech.com",
            desc: "A seasoned industry veteran with over 35 years of experience in sales, marketing, and license compliance at top global firms including Epson and Adobe. Sugino has managed vendor partnerships, product line development, and enterprise sales for print and publishing. He oversees corporate management and Japan operations at Vir Softech."
        },
        {
            name: "Manu Paliwal",
            role: "Vice President – Sales",
            img: "https://www.virsoftech.com/img/manu-photo.jpg?v=1",
            linkedin: "https://www.linkedin.com/in/manu-paliwal-159b324/",
            email: "manu@virsoftech.com",
            desc: "Driving growth strategy, differentiated customer value, and expanding business reach with digital solutions. With over 25 years of experience in sales, marketing, and strategic alliances, Manu has delivered turnaround results in challenging business situations. Previously he held P&L leadership roles at global companies including President – Business Solutions for Sharp."
        }
    ];

    return (
        <>
            <SEO
                title="About Vir Softech – India's Leading ECM & DMS Technology Company"
                description="Vir Softech Pvt. Ltd. is an ISO 9001:2015 certified, CMMI Level 3 company delivering AI-powered document management solutions to 500+ clients globally since 1995."
                keywords="Vir Softech, about VSDOX, ECM company India, DMS provider, ISO certified document management, CMMI Level 3, DMS, Document Management System, ECM, Enterprise Content Management System, AI-powered document management, Secure ECM, Scalable Enterprise Content Management, Intelligent capture, Seamless integration, Lifecycle automation, Advanced search, Digital operations, Content platform, Cloud-based centralized repository, Version control, Auditability, Approval workflows, Electronic DMS, Records Management, Content lifecycle management, API integration, Document classification"
            />
            <PageHero
                title="About Vir Softech"
                subtitle="Business-led IT process transformation for a digital world."
                bgImage={teamBanner}
            />

            <section className="section max-container reveal" style={{ padding: '80px 0' }}>
                <div className="section-info">
                    <div className="info-text">
                        <span className="info-tag">WHO WE ARE</span>
                        <h2>Revolutionizing IT Process Transformation</h2>
                        <p>
                            Vir Softech is at the forefront of the revolution in business-led IT process transformation. We assist our customers in realizing their vision and scaling up through workflow transformations that produce superior business results at the lowest possible cost and in the shortest amount of time.
                        </p>
                        <p>
                            We are a tech leader in four key domains:
                        </p>
                        <ul className="info-list">
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Enterprise Content Management & Digital Imaging</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Print Technology Products & Services</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Design & Artwork Process Automation</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> EVAL - Educational Evaluation, Assessments & Learning</li>
                        </ul>
                    </div>
                    <div className="info-image">
                        <div className="glass-card image-wrapper" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
                            <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Global Impact</h3>
                            <p style={{ marginBottom: '10px' }}><strong>CAGR:</strong> 40% per annum</p>
                            <p style={{ marginBottom: '10px' }}><strong>Presence:</strong> US, UK, Japan, Australia, India</p>
                            <p><strong>Clients:</strong> Fortune 500, Govt, BFSI,Judiciary,Corporate, Health & Education</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--section-alt)', padding: '0' }}>
                <MilestoneTimeline />

                <div className="max-container reveal">
                    <div style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid var(--border)', marginBottom: '80px' }}>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Awards & Recognition</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                            {achievementList.map((ach, i) => (
                                <div key={i} style={{ background: '#f8fafc', padding: '15px 25px', borderRadius: '50px', fontSize: '14px', fontWeight: '600', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-award" style={{ color: 'var(--primary)' }}></i> {ach}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="info-tag">OUR TEAM</span>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>Leadership at Vir Softech</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            A few passionate technologists behind world's foremost enterprise Imaging and Print products formed Vir Softech in Nov 2015. With time the team has expanded to include brilliant product engineers, research scientists, programmers, workflow engineers, data scientists, marketing executives, and dev-ops experts.
                        </p>
                    </div>
                    <div className="leadership-grid">
                        {leadership.map((leader, i) => (
                            <div key={i} className="leader-card">
                                <div className="leader-card-top">
                                    <div className="leader-photo">
                                        <img src={leader.img} alt={leader.name}
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Leader" }} />
                                    </div>
                                    <h4 className="leader-name">{leader.name}</h4>
                                    <div className="leader-role">{leader.role}</div>
                                    <div className="leader-socials">
                                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="leader-social-btn linkedin">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href={`mailto:${leader.email}`} className="leader-social-btn email">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                                <p className="leader-desc">{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
