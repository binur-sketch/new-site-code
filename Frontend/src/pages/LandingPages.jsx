import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';
import { DEFAULTS } from '../config/appConstants';

import imgDashboard from '../assets/dashboard.png';
import bgDocManagement from '../assets/doc-management-hero.png';
import bgEnterpriseDms from '../assets/enterprise-dms-hero.png';
import bgEcm from '../assets/ecm-platform-hero.png';
import bgAiDms from '../assets/ai-dms-hero.png';
import dmsGraphic1 from '../assets/dms-graphic-1.png';
import dmsGraphic2 from '../assets/dms-graphic-2.png';
import aiDmsGraphic from '../assets/ai-dms-graphic.png';
import ecmGraphic from '../assets/ecm-graphic.jpg';
import enterpriseDmsGraphic from '../assets/enterprise-dms-graphic.jpg';
import enterpriseDmsWebp from '../assets/enterprise-document-management-system.webp';

const MiniBlogCard = ({ slug, image, title, excerpt, date }) => (
    <Link to={`/blog/${slug}`} className="glass-card reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <img src={image || DEFAULTS.blogCoverImage} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}><i className="fas fa-calendar" style={{ marginRight: '6px' }}></i> {date}</span>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>{excerpt}</p>
            <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>Read Article <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i></span>
        </div>
    </Link>
);

const PageHero = ({ title, subtitle, tag, bgImage }) => (
    <section style={{
        backgroundImage: bgImage
            ? `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${bgImage})`
            : 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        backgroundColor: '#0f172a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '160px 0 80px',
        position: 'relative',
        marginTop: '80px'
    }}>
        <div className="max-container reveal" style={{ position: 'relative', zIndex: 1 }}>
            {tag && (
                <span style={{
                    display: 'inline-block', background: 'rgba(29,99,237,0.2)', color: '#60a5fa',
                    fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em',
                    padding: '6px 14px', borderRadius: '100px', marginBottom: '20px',
                    border: '1px solid rgba(96,165,250,0.3)'
                }}>{tag}</span>
            )}
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '900', color: 'white', marginBottom: '20px', lineHeight: 1.1 }}>{title}</h1>
            <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', lineHeight: 1.7, marginBottom: '36px' }}>{subtitle}</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/request-demo" className="btn-primary">Book a Free Demo</Link>
                <Link to="/contact" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', fontWeight: '600' }}>Contact Us</Link>
            </div>
        </div>
    </section>
);

const FeatureGrid = ({ features }) => (
    <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="max-container">
            <div className="ai-features-grid">
                {features.map((f, i) => (
                    <div key={i} className="ai-feature-card reveal" style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <div className="ai-icon" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '20px' }}><i className={`fas ${f.icon}`}></i></div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: 'var(--text-dark)' }}>{f.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContentBlock = ({ title, content, imageRight, image, bg }) => (
    <section style={{ padding: '80px 0', background: bg || 'white' }}>
        <div className="max-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                <div className={`reveal ${imageRight ? 'order-1' : 'order-2'}`}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>{title}</h2>
                    <div style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.8' }}>{content}</div>
                </div>
                <div className={`reveal ${imageRight ? 'order-2' : 'order-1'}`} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: 'white' }}>
                    <img src={image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
            </div>
        </div>
    </section>
);

const FAQAccordion = ({ faqs, alwaysExpanded = false }) => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
            <div className="max-container reveal">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800' }}>Frequently Asked Questions</h2>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => {
                        const isOpen = alwaysExpanded || openIndex === i;
                        return (
                            <div key={i} style={{ marginBottom: '16px', background: 'white', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                                <button
                                    onClick={() => !alwaysExpanded && setOpenIndex(openIndex === i ? null : i)}
                                    style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: alwaysExpanded ? 'default' : 'pointer', textAlign: 'left' }}
                                >
                                    <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>{faq.q}</span>
                                    {!alwaysExpanded && <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: 'var(--primary)' }}></i>}
                                </button>
                                {isOpen && (
                                    <div style={{ padding: '0 24px 24px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const CTABanner = ({ title, subtitle }) => (
    <section className="cta-section reveal">
        <div className="max-container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: 'white', marginBottom: '20px' }}>{title || "Ready to Transform Your Document Workflows?"}</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 40px' }}>{subtitle || "Join industry leaders who trust VSDOX for secure, scalable, and intelligent document management."}</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/request-demo" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Book a Free Demo</Link>
                <Link to="/contact" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', color: 'white', textDecoration: 'none', fontWeight: '600' }}>Contact Sales</Link>
            </div>
        </div>
    </section>
);

// 1. Document Management Software
export const DocumentManagementSoftware = () => {
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
        
        const fetchRelatedBlogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*, categories(*)')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false });
                
                if (!error && data) {
                    const dmsPosts = data.filter(p => 
                        p.categories?.some(c => c.name?.toLowerCase().includes('dms') || c.name?.toLowerCase().includes('document management'))
                    );
                    
                    if (dmsPosts.length > 0) {
                        setRelatedBlogs(dmsPosts.slice(0, 3));
                    } else {
                        setRelatedBlogs(data.slice(0, 3));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch related blogs:", err);
            }
        };
        fetchRelatedBlogs();

        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
        }, 100);
    }, []);
    return (
        <>
            <SEO
                title="Document Management Software for Businesses | VSDOX"
                description="VSDOX Document Management Software helps businesses go paperless with secure storage, smart indexing, and workflow automation. A complete digital document management system. Book a free demo."
                keywords="document management software, document management system, digital document management system, document management software for businesses"
            />
            <PageHero
                tag="SOFTWARE SOLUTION"
                title="Document Management Software for Modern Business"
                subtitle="Transform your paper-based processes into intelligent digital workflows with VSDOX, a document management system built for businesses of every size. Secure storage, smart indexing, and automated access control — all in one platform."
                bgImage={bgDocManagement}
            />

            <ContentBlock
                title="What is Document Management Software?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>Document Management Software (DMS) is an automated solution for organizing, securing, digitizing, and classifying company documents. It provides a centralized repository where authorized users can easily store, search, and retrieve critical business information.</p>
                        <p style={{ marginBottom: '16px' }}>With VSDOX, businesses can move beyond traditional file cabinets and shared network drives, enabling a truly paperless office. Our software ensures that you never lose a file, experience version conflicts, or face unauthorized access issues.</p>
                        <p style={{ marginBottom: '16px' }}>As a complete digital document management system, VSDOX brings every document — contracts, invoices, HR records, and compliance files — into one secure, searchable platform. Whether you're a growing team or a multi-department enterprise, it's document management software built to scale with your business.</p>
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <Link to="/enterprise-document-management-system" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>Explore Enterprise DMS <i className="fas fa-arrow-right"></i></Link>
                            <Link to="/ai-document-management-software" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>Discover AI DMS <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </>
                }
                imageRight={true}
                image={dmsGraphic1}
            />

            <section style={{ textAlign: 'center', padding: '60px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Key Features of VSDOX DMS</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '800px', margin: '20px auto 0' }}>Everything you need from a modern document management system, built into one platform:</p>
            </section>

            <FeatureGrid features={[
                { icon: 'fa-shield-halved', title: 'Secure Storage', desc: 'Encrypted, centralized document repository ensuring your data is protected against loss and breaches.' },
                { icon: 'fa-magnifying-glass', title: 'Smart Indexing & Search', desc: 'Find any document in seconds using full-text search, metadata, and intelligent OCR extraction.' },
                { icon: 'fa-user-lock', title: 'Access Control', desc: 'Granular, role-based permissions ensure that sensitive documents are only visible to authorized personnel.' },
                { icon: 'fa-code-branch', title: 'Version Control', desc: 'Track document history, view past versions, and ensure teams always work on the most recent file.' },
                { icon: 'fa-network-wired', title: 'Workflow Automation', desc: 'Automate document routing, reviews, and approvals to eliminate manual bottlenecks.' },
                { icon: 'fa-cloud-arrow-up', title: 'Seamless Integration', desc: 'Connects with your existing ERP, CRM, and business applications via secure APIs.' },
            ]} />

            <ContentBlock
                title="Digital Document Management for a Paperless Office"
                bg="#ffffff"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>Transitioning to a paperless office is no longer just an environmental initiative; it is a critical business strategy for efficiency and cost reduction.</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i> Reduce physical storage costs and office space requirements.</li>
                            <li style={{ marginBottom: '12px' }}><i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i> Instantly share and collaborate on documents across remote teams.</li>
                            <li style={{ marginBottom: '12px' }}><i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i> Mitigate the risk of physical document damage, loss, or theft.</li>
                            <li style={{ marginBottom: '12px' }}><i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i> Give every department — from HR to finance — secure, role-based access to the documents they need, when they need them.</li>
                        </ul>
                    </>
                }
                imageRight={false}
                image={dmsGraphic2}
            />

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal">
                    <h2 style={{ fontSize: '32px', fontWeight: '800', textAlign: 'center', marginBottom: '50px' }}>Business Use Cases</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Human Resources (HR)', desc: 'Onboarding documents, employee records, payroll slips, and performance reviews in one secure place.' },
                            { title: 'Finance & Accounting', desc: 'Automated invoice processing, expense reports, tax documents, and financial audits.' },
                            { title: 'Legal & Compliance', desc: 'Contract lifecycle management, case files, compliance tracking, and e-discovery.' },
                            { title: 'Operations', desc: 'SOPs, vendor contracts, supply chain documentation, and quality assurance logs.' }
                        ].map((uc, i) => (
                            <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>{uc.title}</h4>
                                <p style={{ color: 'var(--text-muted)' }}>{uc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQAccordion faqs={[
                { q: 'What is document management software?', a: 'Document management software is a digital solution that helps businesses organize, secure, digitize, and classify their documents in one centralized repository. Instead of relying on paper files or scattered shared drives, authorized users can store, search, and retrieve critical business information instantly — with full version control and audit visibility.' },
                { q: 'How is a document management system useful for businesses?', a: 'A document management system saves businesses time and reduces risk by eliminating manual filing, lost paperwork, and version confusion. It centralizes documents from every department — HR, finance, legal, and operations — into one searchable platform, automates approval workflows, and gives teams secure, role-based access from anywhere.' },
                { q: 'Can VSDOX help with digital document management?', a: 'Yes. VSDOX is a complete digital document management system that lets you move beyond paper files and shared network drives. It provides secure, encrypted storage, smart indexing with OCR, and automated workflows — enabling a fully paperless office without the risk of lost files or version conflicts.' },
                { q: 'Is VSDOX suitable for HR, finance and legal documents?', a: 'Yes. VSDOX is built to handle documents across every department. HR teams can manage onboarding files, employee records, and payroll slips; finance teams can automate invoice processing and tax document storage; and legal teams can manage contracts, case files, and compliance tracking — all within role-based, access-controlled folders.' },
                { q: 'Does VSDOX support secure access and workflow automation?', a: 'Yes. VSDOX uses granular, role-based permissions to ensure sensitive documents are only visible to authorized personnel, alongside encrypted storage to protect against data loss and breaches. Built-in workflow automation routes documents for review and approval automatically, removing manual bottlenecks from everyday processes.' }
            ]} alwaysExpanded={true} />

            <CTABanner />

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Discover More Insights</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px' }}>Explore our latest articles, guides, and trends in Document Management.</p>
                    
                    {relatedBlogs.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>
                            {relatedBlogs.map((post) => (
                                <MiniBlogCard 
                                    key={post.id}
                                    slug={post.slug}
                                    image={post.image}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                                />
                            ))}
                        </div>
                    ) : null}
                    
                    <Link to="/blog" className="btn-primary">View All Blogs</Link>
                </div>
            </section>
        </>
    );
};

// 2. Enterprise Document Management System
export const EnterpriseDocumentManagementSystem = () => {
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
        
        const fetchRelatedBlogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*, categories(*)')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false });
                
                if (!error && data) {
                    const filteredPosts = data.filter(p => 
                        p.categories?.some(c => c.name?.toLowerCase().includes('enterprise') || c.name?.toLowerCase().includes('dms'))
                    );
                    
                    if (filteredPosts.length > 0) {
                        setRelatedBlogs(filteredPosts.slice(0, 3));
                    } else {
                        setRelatedBlogs(data.slice(0, 3));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch related blogs:", err);
            }
        };
        fetchRelatedBlogs();

        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
        }, 100);
    }, []);
    return (
        <>
            <SEO
                title="Enterprise Document Management System | VSDOX"
                description="Scale your operations securely with VSDOX's Enterprise Document Management System — robust governance, audit trails, and high-performance document control. Book a free demo."
                keywords="enterprise document management system, enterprise dms, enterprise document control"
            />
            <PageHero
                tag="ENTERPRISE SOLUTION"
                title="Enterprise Document Management System"
                subtitle="Scale your operations securely with VSDOX's Enterprise Document Management System. Get robust governance, comprehensive audit trails, and high-performance document control built for large-scale enterprises."
                bgImage={bgEnterpriseDms}
            />

            <ContentBlock
                title="What is an Enterprise Document Management System?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>An Enterprise Document Management System (EDMS) is a software solution designed for large organizations to handle massive volumes of data, users, and complex workflows across multiple departments and geographic locations.</p>
                        <p style={{ marginBottom: '16px' }}>Unlike basic file storage, an EDMS focuses on strict document control, governance, regulatory compliance, and seamless integration with core enterprise systems like ERP, CRM, and HRIS.</p>
                        <p style={{ marginBottom: '16px' }}>VSDOX's Enterprise Document Management System is built to handle this scale without compromising security. From role-based access and automated retention policies to bidirectional integrations with systems like SAP, Oracle, and Microsoft Dynamics, it gives large enterprises a single, governed source of truth for every document — accessible securely across departments, locations, and regulatory environments.</p>
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <Link to="/enterprise-content-management-system" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>Discover Enterprise Content Management <i className="fas fa-arrow-right"></i></Link>
                            <Link to="/case-studies" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>Read Case Studies <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </>
                }
                imageRight={true}
                image={enterpriseDmsGraphic}
            />

            <section style={{ textAlign: 'center', padding: '60px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Enterprise Capabilities</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '800px', margin: '20px auto 0' }}>VSDOX's Enterprise Document Management System is engineered for the scale, security, and compliance demands of large organizations:</p>
            </section>

            <FeatureGrid features={[
                { icon: 'fa-building-shield', title: 'Document Control & Governance', desc: 'Enforce strict retention policies, document lifecycles, and compliance standards across the organization.' },
                { icon: 'fa-users-gear', title: 'Role-Based Access (RBAC)', desc: 'Integrate with Active Directory/LDAP for seamless SSO and complex organizational hierarchy permissions.' },
                { icon: 'fa-list-check', title: 'Audit Trails & Compliance', desc: 'Comprehensive logging of every view, edit, and download to support regulatory audits (GDPR, HIPAA, ISO).' },
                { icon: 'fa-database', title: 'Scalable Storage', desc: 'Architecture designed to manage millions of documents and terabytes of data without performance degradation.' },
                { icon: 'fa-diagram-project', title: 'Workflow Automation', desc: 'Visual workflow designer for multi-stage approvals, parallel routing, and automated document generation.' },
                { icon: 'fa-plug', title: 'Enterprise API', desc: 'Robust API layer for bidirectional syncing with SAP, Oracle, Microsoft Dynamics, and other legacy systems.' },
            ]} />

            <section style={{ padding: '80px 0', background: '#ffffff' }}>
                <div className="max-container reveal">
                    <h2 style={{ fontSize: '32px', fontWeight: '800', textAlign: 'center', marginBottom: '50px' }}>Industry Use Cases</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'BFSI (Banking & Finance)', icon: 'fa-building-columns', desc: 'Manage KYC, loan originations, and compliance documentation with bank-grade security.' },
                            { title: 'Government & Public Sector', icon: 'fa-landmark', desc: 'Digitize citizen records, e-governance workflows, and confidential administrative files.' },
                            { title: 'Large Corporate & Manufacturing', icon: 'fa-industry', desc: 'Engineering document control (CAD, BOM), quality assurance, and global supply chain records.' }
                        ].map((uc, i) => (
                            <div key={i} style={{ background: '#f8fafc', padding: '40px 30px', borderRadius: '16px', textAlign: 'center' }}>
                                <i className={`fas ${uc.icon}`} style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '20px' }}></i>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>{uc.title}</h4>
                                <p style={{ color: 'var(--text-muted)' }}>{uc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQAccordion faqs={[
                { q: 'What is an enterprise document management system?', a: 'An enterprise document management system (EDMS) is a large-scale software platform used by corporations to centrally store, manage, track, and secure business-critical documents across multiple departments and locations. Unlike basic file storage, it provides strict version control, role-based access, audit trails, and workflow automation to support compliance and operational efficiency at scale.' },
                { q: 'How does enterprise DMS help large organizations?', a: 'An enterprise DMS helps large organizations eliminate document silos by centralizing records from every department into one secure, searchable repository. It reduces manual work through automated workflows and approvals, strengthens compliance with built-in audit trails and retention policies, and integrates with core systems like ERP, CRM, and HRIS so documents stay connected to the business processes they support.' },
                { q: 'Does VSDOX support role-based document access?', a: 'Yes. VSDOX integrates with Active Directory and LDAP to support single sign-on (SSO) and granular, role-based access controls. Permissions can be configured to match your organization\'s hierarchy, ensuring employees, departments, and external stakeholders only access the documents relevant to their role.' },
                { q: 'Can VSDOX help with audit trails and compliance?', a: 'Yes. VSDOX maintains comprehensive audit logs of every document view, edit, download, and approval, giving you a complete, time-stamped record for regulatory audits such as GDPR, HIPAA, and ISO. Retention policies and document lifecycles can also be automated to keep your organization continuously audit-ready.' },
                { q: 'Is VSDOX suitable for BFSI, government and corporate teams?', a: 'Yes. VSDOX\'s Enterprise Document Management System is built for high-security, high-compliance environments, including BFSI (KYC, loan, and compliance documentation), Government and public sector (citizen records and e-governance workflows), and large corporate and manufacturing teams (engineering document control, quality assurance, and supply chain records).' }
            ]} />

            <CTABanner />

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Discover More Insights</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px' }}>Explore our latest articles, guides, and trends in Enterprise Document Management.</p>
                    
                    {relatedBlogs.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>
                            {relatedBlogs.map((post) => (
                                <MiniBlogCard 
                                    key={post.id}
                                    slug={post.slug}
                                    image={post.image}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                                />
                            ))}
                        </div>
                    ) : null}
                    
                    <Link to="/blog" className="btn-primary">View All Blogs</Link>
                </div>
            </section>
        </>
    );
};

// 3. Enterprise Content Management System
export const EnterpriseContentManagementSystem = () => {
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
        
        const fetchRelatedBlogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*, categories(*)')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false });
                
                if (!error && data) {
                    const filteredPosts = data.filter(p => 
                        p.categories?.some(c => c.name?.toLowerCase().includes('ecm') || c.name?.toLowerCase().includes('content management'))
                    );
                    
                    if (filteredPosts.length > 0) {
                        setRelatedBlogs(filteredPosts.slice(0, 3));
                    } else {
                        setRelatedBlogs(data.slice(0, 3));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch related blogs:", err);
            }
        };
        fetchRelatedBlogs();

        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
        }, 100);
    }, []);
    return (
        <>
            <SEO
                title="Enterprise Content Management System (ECM) | VSDOX"
                description="Go beyond documents. VSDOX ECM captures, manages, and governs all unstructured enterprise content — from emails and rich media to web assets — throughout its full lifecycle."
                keywords="enterprise content management system, enterprise content management solutions, enterprise content management software"
            />
            <PageHero
                tag="ECM PLATFORM"
                title="Enterprise Content Management System"
                subtitle="Beyond documents. VSDOX's Enterprise Content Management System helps you capture, manage, store, preserve, and deliver all unstructured content across your organization — securely and at scale."
                bgImage={bgEcm}
            />

            <ContentBlock
                title="What is Enterprise Content Management?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>Enterprise Content Management (ECM) is a set of defined processes, strategies, and tools that allow a business to effectively obtain, organize, store, and deliver critical information to its employees, business stakeholders, and customers.</p>
                        <p style={{ marginBottom: '16px' }}>While DMS focuses primarily on structured and semi-structured documents (Word, PDF), ECM encompasses a broader spectrum including rich media, web content, emails, social media records, and dynamic digital assets.</p>
                        <p style={{ marginBottom: '0' }}>As organizations grow, content gets scattered across email inboxes, shared drives, and individual desktops — creating compliance risk and slowing teams down. An Enterprise Content Management System brings every format of content under one governed platform, covering the full content lifecycle from capture and storage to retention, retrieval, and secure disposition.</p>
                    </>
                }
                imageRight={true}
                image={ecmGraphic}
            />

            <section style={{ padding: '20px 0 80px', background: 'white' }}>
                <div className="max-container reveal">
                    <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', textAlign: 'center' }}>Why Enterprises Need an ECM Platform</h3>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto 50px', textAlign: 'center' }}>
                        Unmanaged content is one of the biggest hidden risks in any organization — duplicate files, missing audit trails, and content that's impossible to locate when regulators or auditors come calling. VSDOX's Enterprise Content Management System solves this by combining centralized storage, automated workflows, and AI-powered search into a single, secure system. It's built to support regulated and content-heavy sectors including BFSI, Government, Healthcare, Judiciary, Corporate, and Education — so every department works from one governed source of truth.
                    </p>
                    
                    <div style={{ overflowX: 'auto', maxWidth: '1000px', margin: '0 auto' }}>
                        <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                            <thead>
                                <tr style={{ background: 'var(--primary)', color: 'white', textAlign: 'left' }}>
                                    <th style={{ padding: '20px', fontWeight: '600', width: '20%', fontSize: '18px' }}>Dimension</th>
                                    <th style={{ padding: '20px', fontWeight: '600', width: '40%', fontSize: '18px' }}>DMS</th>
                                    <th style={{ padding: '20px', fontWeight: '600', width: '40%', fontSize: '18px' }}>ECM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '20px', fontWeight: '700', background: '#f8fafc', color: 'var(--text-dark)' }}>Scope</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Manages structured/semi-structured documents (Word, PDF).</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Covers the full spectrum — rich media, web content, email, social records, and dynamic digital assets.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '20px', fontWeight: '700', background: '#f8fafc', color: 'var(--text-dark)' }}>Lifecycle</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Tracks and stores electronic documents.</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Manages the entire content lifecycle — capture to secure disposition.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '20px', fontWeight: '700', background: '#f8fafc', color: 'var(--text-dark)' }}>Best For</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Document-centric workflows and approvals.</td>
                                    <td style={{ padding: '20px', background: 'white', color: 'var(--text-muted)', lineHeight: '1.6' }}>Organization-wide content governance, compliance, and omnichannel content.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center', padding: '60px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Comprehensive ECM Capabilities</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '800px', margin: '20px auto 0' }}>VSDOX's Enterprise Content Management System gives you everything you need to capture, organize, secure, and act on content across your organization:</p>
            </section>

            <FeatureGrid features={[
                { icon: 'fa-camera-retro', title: 'Omnichannel Capture', desc: 'Ingest content from scanners, emails, web forms, mobile devices, and automated ERP data feeds into your enterprise content repository.' },
                { icon: 'fa-server', title: 'Centralized Storage', desc: 'A unified, scalable repository for all unstructured content, eliminating siloed network drives within a secure, compliant ECM environment.' },
                { icon: 'fa-recycle', title: 'Content Lifecycle Management', desc: 'Automate content retention, archiving, and secure deletion based on regulatory timelines.' },
                { icon: 'fa-project-diagram', title: 'Dynamic Workflows', desc: 'Route content intelligently for reviews, approvals, and document workflow automation across departments.' },
                { icon: 'fa-globe', title: 'Enterprise Search', desc: 'Federated search capabilities across all repositories, formats, and departments.' },
                { icon: 'fa-shield', title: 'Governance & Compliance', desc: 'Enforce corporate policies, legal holds, and regulatory frameworks such as GDPR, HIPAA, and SOX across all enterprise content.' },
            ]} />

            <FAQAccordion faqs={[
                { q: 'What is an enterprise content management system?', a: 'An enterprise content management system (ECM) is a platform that helps organizations capture, manage, store, preserve, and deliver content — including documents, emails, web pages, and rich media — across its entire lifecycle. Unlike basic file storage, ECM combines workflow automation, governance, and enterprise search to keep content secure, compliant, and easy to retrieve.' },
                { q: 'What is the difference between ECM and DMS?', a: 'A Document Management System (DMS) focuses on tracking and storing structured and semi-structured documents, such as Word files and PDFs. Enterprise Content Management (ECM) is a broader strategy that includes DMS along with digital asset management, web content management, and records management — covering every type of content across its full lifecycle.' },
                { q: 'How does ECM help with compliance and document workflows?', a: 'ECM enforces governance policies, retention schedules, and legal holds automatically, so content is never deleted or altered outside of approved rules. Built-in audit trails track every action taken on a file, while automated workflows route content for review and approval — reducing manual compliance work and the risk of regulatory penalties.' },
                { q: 'Is VSDOX an enterprise content management software?', a: 'Yes. VSDOX is an AI-powered Enterprise Content Management System built to help organizations capture, store, govern, and retrieve content of every format — from scanned paper records to emails and digital assets — within a single secure platform.' },
                { q: 'Can VSDOX be used as an ECM solution for government and enterprises?', a: 'Yes. VSDOX is designed to meet the security, compliance, and scalability requirements of government bodies and large enterprises, including regulated sectors such as BFSI, Healthcare, and Judiciary, with role-based access, audit trails, and configurable retention policies.' }
            ]} />

            <CTABanner title="Ready to Transform Your Enterprise Content Management?" />
            
            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Discover More Insights</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px' }}>Explore our latest articles, guides, and trends in Enterprise Content Management.</p>
                    
                    {relatedBlogs.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>
                            {relatedBlogs.map((post) => (
                                <MiniBlogCard 
                                    key={post.id}
                                    slug={post.slug}
                                    image={post.image}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                                />
                            ))}
                        </div>
                    ) : null}
                    
                    <Link to="/blog" className="btn-primary">View All Blogs</Link>
                </div>
            </section>
        </>
    );
};

// 4. AI Document Management Software
export const AiDocumentManagementSoftware = () => {
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
        
        const fetchRelatedBlogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*, categories(*)')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false });
                
                if (!error && data) {
                    const filteredPosts = data.filter(p => 
                        p.categories?.some(c => c.name?.toLowerCase().includes('ai') || c.name?.toLowerCase().includes('artificial intelligence'))
                    );
                    
                    if (filteredPosts.length > 0) {
                        setRelatedBlogs(filteredPosts.slice(0, 3));
                    } else {
                        setRelatedBlogs(data.slice(0, 3));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch related blogs:", err);
            }
        };
        fetchRelatedBlogs();

        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in'));
        }, 100);
    }, []);
    return (
        <>
            <SEO
                title="AI Document Management Software & IDP Solution | VSDOX"
                description="Automate document capture, classification, and data extraction with VSDOX AI-powered DMS. Reduce manual processing by up to 80% using OCR, NLP, and machine learning."
                keywords="ai document management software, intelligent document processing software"
            />
            <PageHero
                tag="AI-POWERED SOLUTION"
                title="AI Document Management Software"
                subtitle="An intelligent platform that automates document capture, classification, indexing, and retrieval using AI. Enables secure storage, smart search, workflow automation, and compliance-driven document management across the enterprise."
                bgImage={bgAiDms}
            />

            <ContentBlock
                title="What is AI Document Management Software?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>VsDox AI Document Management Software leverages Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP), and Generative AI to intelligently classify documents, extract key information, generate metadata, summarize content, and enable natural language interactions with enterprise content.

                            <p style={{ marginBottom: '16px' }}> By understanding context and meaning beyond keywords, VsDox AI delivers semantic search, knowledge discovery, and actionable insights across structured and unstructured information, transforming documents into a searchable and intelligent knowledge repository.</p></p>


                    </>
                }
                imageRight={true}
                image={aiDmsGraphic}
            />

            <section style={{ textAlign: 'center', padding: '60px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Intelligent Document Processing Capabilities</h2>
            </section>

            <FeatureGrid features={[
                { icon: 'fa-brain', title: 'Advanced OCR & Data Extraction', desc: 'Extract key-value pairs, line items, and text from scanned images and PDFs with high accuracy.' },
                { icon: 'fa-layer-group', title: 'Auto-Classification', desc: 'Machine learning models automatically identify document types (e.g., Invoice vs. Resume) and route them accordingly.' },
                { icon: 'fa-tags', title: 'Smart Indexing', desc: 'Automatically tag documents with relevant metadata extracted from the content, eliminating manual data entry.' },
                { icon: 'fa-robot', title: 'AI-Powered Search', desc: 'Semantic search understands user intent, retrieving documents based on context and concepts, not just exact keywords.' },
                { icon: 'fa-gears', title: 'Automated Workflows', desc: 'Trigger complex business processes automatically based on the AI-extracted contents of an uploaded document.' },
                { icon: 'fa-shield-virus', title: 'Anomaly Detection', desc: 'AI flags potential fraud, discrepancies in invoices, or missing signatures before processing.' },
            ]} />

            <section style={{ padding: '80px 0', background: '#ffffff' }}>
                <div className="max-container reveal">
                    <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)', borderRadius: '24px', padding: '60px', color: 'white' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>Benefits of AI in Document Management</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                            <div>
                                <i className="fas fa-clock" style={{ fontSize: '30px', color: '#60a5fa', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Faster Processing</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Reduce document processing time by up to 80% with instantaneous AI extraction.</p>
                            </div>
                            <div>
                                <i className="fas fa-hand-paper" style={{ fontSize: '30px', color: '#60a5fa', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Reduce Manual Work</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Free your employees from repetitive data entry tasks to focus on higher-value work.</p>
                            </div>
                            <div>
                                <i className="fas fa-bullseye" style={{ fontSize: '30px', color: '#60a5fa', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Better Accuracy</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Eliminate human error in data entry with highly trained, continuous learning AI models.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQAccordion faqs={[
                { q: 'What is AI document management software?', a: 'It is a DMS that utilizes Artificial Intelligence to automate cognitive tasks like reading, understanding, categorizing, and extracting data from documents.' },
                { q: 'What is intelligent document processing software?', a: 'Intelligent Document Processing (IDP) refers to software that captures unstructured data from documents (like emails, PDFs, images) and converts it into structured, actionable data using AI.' },
                { q: 'How does AI help in document classification and indexing?', a: 'AI models are trained to recognize document patterns and layouts. When a new document is uploaded, the AI identifies its type and extracts key data to automatically index it without manual input.' },
                { q: 'Does VSDOX support OCR and data extraction?', a: 'Yes, VSDOX utilizes advanced Optical Character Recognition (OCR) combined with ML to extract highly accurate data from structured, semi-structured, and unstructured documents.' },
                { q: 'Can AI document management reduce manual document work?', a: 'Significantly. By automating data entry, sorting, and routing, AI reduces manual document handling by up to 80%, accelerating business processes.' }
            ]} />

            <CTABanner />

            <section style={{ padding: '80px 0', background: '#f8fafc' }}>
                <div className="max-container reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Discover More Insights</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px' }}>Explore our latest articles, guides, and trends in AI Document Management.</p>
                    
                    {relatedBlogs.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>
                            {relatedBlogs.map((post) => (
                                <MiniBlogCard 
                                    key={post.id}
                                    slug={post.slug}
                                    image={post.image}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                                />
                            ))}
                        </div>
                    ) : null}
                    
                    <Link to="/blog" className="btn-primary">View All Blogs</Link>
                </div>
            </section>
        </>
    );
};
