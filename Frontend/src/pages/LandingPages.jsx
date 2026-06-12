import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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

const FAQAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
            <div className="max-container reveal">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800' }}>Frequently Asked Questions</h2>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ marginBottom: '16px', background: 'white', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>{faq.q}</span>
                                <i className={`fas fa-chevron-${openIndex === i ? 'up' : 'down'}`} style={{ color: 'var(--primary)' }}></i>
                            </button>
                            {openIndex === i && (
                                <div style={{ padding: '0 24px 24px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTABanner = () => (
    <section className="cta-section reveal">
        <div className="max-container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: 'white', marginBottom: '20px' }}>Ready to Transform Your Document Workflows?</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 40px' }}>Join industry leaders who trust VSDOX for secure, scalable, and intelligent document management.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/request-demo" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Book a Free Demo</Link>
                <Link to="/contact" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', color: 'white', textDecoration: 'none', fontWeight: '600' }}>Contact Sales</Link>
            </div>
        </div>
    </section>
);

// 1. Document Management Software
export const DocumentManagementSoftware = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
    return (
        <>
            <SEO
                title="Document Management Software for Businesses | VSDOX"
                description="VSDOX is a secure, AI-powered document management software that helps businesses digitize, organize, and automate document workflows — all from one central platform."
                keywords="document management software, document management system, digital document management system, document management software for businesses"
            />
            <PageHero
                tag="SOFTWARE SOLUTION"
                title="Document Management Software for Modern Business"
                subtitle="Transform your paper-based processes into intelligent digital workflows with VSDOX Document Management Software. Secure storage, smart indexing, and automated access."
                bgImage={bgDocManagement}
            />

            <ContentBlock
                title="What is Document Management Software?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>Document Management Software (DMS) is an automated solution for organizing, securing, digitizing, and classifying company documents. It provides a centralized repository where authorized users can easily store, search, and retrieve critical business information.</p>
                        <p style={{ marginBottom: '16px' }}>With VSDOX, businesses can move beyond traditional file cabinets and shared network drives, enabling a truly paperless office. Our software ensures that you never lose a file, experience version conflicts, or face unauthorized access issues.</p>
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
                { q: 'What is document management software?', a: 'Document management software is a system used to receive, track, manage, and store documents electronically, reducing paper trails and improving searchability.' },
                { q: 'How is a document management system useful for businesses?', a: 'It improves efficiency by making documents easily searchable, enhances security through access controls, ensures compliance with audit trails, and enables remote collaboration.' },
                { q: 'Can VSDOX help with digital document management?', a: 'Yes, VSDOX is a comprehensive digital document management platform offering secure storage, OCR, version control, and automated workflows.' },
                { q: 'Is VSDOX suitable for HR, finance and legal documents?', a: 'Absolutely. VSDOX provides role-based access, encryption, and audit logs, making it ideal for managing highly sensitive HR, financial, and legal records.' },
                { q: 'Does VSDOX support secure access and workflow automation?', a: 'Yes, VSDOX features granular access controls and customizable workflow automation for document routing, approvals, and signatures.' }
            ]} />

            <CTABanner />
        </>
    );
};

// 2. Enterprise Document Management System
export const EnterpriseDocumentManagementSystem = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
    return (
        <>
            <SEO
                title="Enterprise Document Management System (EDMS) | VSDOX"
                description="VSDOX EDMS is built for large enterprises — featuring role-based access, immutable audit trails, and multi-department workflow automation to ensure compliance at scale."
                keywords="enterprise document management system, enterprise dms, enterprise document control"
            />
            <PageHero
                tag="ENTERPRISE SOLUTION"
                title="Enterprise Document Management System"
                subtitle="Scale your operations securely. VSDOX provides robust governance, comprehensive audit trails, and high-performance document control for large-scale enterprises."
                bgImage={bgEnterpriseDms}
            />

            <ContentBlock
                title="What is an Enterprise Document Management System?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>An Enterprise Document Management System (EDMS) is a software solution designed for large organizations to handle massive volumes of data, users, and complex workflows across multiple departments and geographic locations.</p>
                        <p style={{ marginBottom: '16px' }}>Unlike basic file storage, an EDMS focuses on strict document control, governance, regulatory compliance, and seamless integration with core enterprise systems like ERP, CRM, and HRIS.</p>
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
                { q: 'What is an enterprise document management system?', a: 'It is a large-scale software platform used by corporations to centrally store, manage, track, and secure business-critical documents across multiple departments.' },
                { q: 'How does enterprise DMS help large organizations?', a: 'It eliminates data silos, ensures regulatory compliance, standardizes document workflows, and provides secure, scalable access to information globally.' },
                { q: 'Does VSDOX support role-based document access?', a: 'Yes, VSDOX features advanced Role-Based Access Control (RBAC) allowing administrators to define permissions based on user roles, departments, or specific document metadata.' },
                { q: 'Can VSDOX help with audit trails and compliance?', a: 'Absolutely. VSDOX maintains an immutable audit log of all document interactions, assisting heavily regulated industries in meeting compliance audits.' },
                { q: 'Is VSDOX suitable for BFSI, government and corporate teams?', a: 'Yes, VSDOX is trusted by top banks, government bodies, and Fortune 500 companies for its high security, scalability, and robust governance features.' }
            ]} />

            <CTABanner />
        </>
    );
};

// 3. Enterprise Content Management System
export const EnterpriseContentManagementSystem = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
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
                subtitle="Beyond documents. Capture, manage, store, preserve, and deliver all unstructured content across your organization with VSDOX ECM."
                bgImage={bgEcm}
            />

            <ContentBlock
                title="What is Enterprise Content Management?"
                content={
                    <>
                        <p style={{ marginBottom: '16px' }}>Enterprise Content Management (ECM) is a set of defined processes, strategies, and tools that allow a business to effectively obtain, organize, store, and deliver critical information to its employees, business stakeholders, and customers.</p>
                        <p style={{ marginBottom: '16px' }}>While DMS focuses primarily on structured and semi-structured documents (Word, PDF), ECM encompasses a broader spectrum including rich media, web content, emails, social media records, and dynamic digital assets.</p>
                        <div style={{ padding: '16px', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid var(--primary)', marginTop: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px' }}>ECM vs DMS:</strong>
                            <p style={{ fontSize: '15px', margin: 0 }}>DMS is about tracking and storing electronic documents. ECM is a broader strategy encompassing DMS, plus digital asset management, web content management, and records management over the entire content lifecycle.</p>
                        </div>
                    </>
                }
                imageRight={true}
                image={ecmGraphic}
            />

            <section style={{ textAlign: 'center', padding: '60px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Comprehensive ECM Capabilities</h2>
            </section>

            <FeatureGrid features={[
                { icon: 'fa-camera-retro', title: 'Omnichannel Capture', desc: 'Ingest content from scanners, emails, web forms, mobile devices, and automated ERP data feeds.' },
                { icon: 'fa-server', title: 'Centralized Storage', desc: 'A unified, scalable repository for all unstructured content, eliminating siloed network drives.' },
                { icon: 'fa-recycle', title: 'Content Lifecycle Management', desc: 'Automate content retention, archiving, and secure deletion based on regulatory timelines.' },
                { icon: 'fa-project-diagram', title: 'Dynamic Workflows', desc: 'Route content intelligently for reviews, translations, and multi-channel publishing.' },
                { icon: 'fa-globe', title: 'Enterprise Search', desc: 'Federated search capabilities across all content types, databases, and connected external repositories.' },
                { icon: 'fa-shield', title: 'Governance & Compliance', desc: 'Enforce corporate policies, legal holds, and e-discovery protocols seamlessly.' },
            ]} />

            <FAQAccordion faqs={[
                { q: 'What is an enterprise content management system?', a: 'An ECM system is a comprehensive platform used to capture, manage, store, preserve, and deliver all types of unstructured information across an enterprise.' },
                { q: 'What is the difference between ECM and DMS?', a: 'DMS primarily manages electronic documents (PDFs, Word files), whereas ECM manages a wider variety of content including web pages, images, videos, and emails throughout their entire lifecycle.' },
                { q: 'How does ECM help with compliance and document workflows?', a: 'ECM automates retention schedules, applies legal holds, ensures auditability, and routes content through standardized, trackable approval processes to ensure regulatory compliance.' },
                { q: 'Is VSDOX an enterprise content management software?', a: 'Yes, VSDOX provides a full suite of ECM capabilities, moving beyond simple document storage to full content lifecycle governance and automation.' },
                { q: 'Can VSDOX be used as an ECM solution for government and enterprises?', a: 'Absolutely. Its scalable architecture, robust security, and advanced records management make it highly suitable for large enterprises and government agencies.' }
            ]} />

            <CTABanner />
        </>
    );
};

// 4. AI Document Management Software
export const AiDocumentManagementSoftware = () => {
    useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.reveal').forEach(el => el.classList.add('fade-in')); }, []);
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
        </>
    );
};
