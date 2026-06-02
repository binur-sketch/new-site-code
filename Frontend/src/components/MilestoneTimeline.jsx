import React from 'react';
import {
    Building2, Rocket, Award, GraduationCap, FileText, Printer,
    Shield, Car, BookOpen, Globe, Medal, Users, BarChart3,
    Briefcase, Star, Search
} from "lucide-react";

const milestones = [
    { year: "2025", desc: "Achieved CMMI Level 3 (Software Development), started work on DMS implementation for one of the largest and most widespread govt organizations in India", icon: <Award /> },
    { year: "2024", desc: "Delivered digital repository for Indian Pharmacopoeia Commission (Ministry of Health) - https://iponline.ipc.gov.in/jspui, implemented NPS workflow for a largest POP in India", icon: <Globe /> },
    { year: "2023", desc: "Implemented Paperless Court solutions and Document Management solutions across multiple High Courts & District Courts, delivered Deccan Virasat digital platform - https://virasat.dcpune.ac.in", icon: <FileText /> },
    { year: "2022", desc: "Delivered IIC DigiLib digital repository – https://digilib.iicdelhi.in/jspui/", icon: <BookOpen /> },
    { year: "2021", desc: "Recognized as Top 10 Most Promising ECM provider by CIO Review. More High Courts start adopting Vir Softech DMS solution", icon: <Star /> },
    { year: "2020", desc: "Signed contract with one of the largest private life insurance companies in India for DMS.", icon: <Shield /> },
    { year: "2019", desc: "Implemented enterprise DMS for the world’s largest two-wheeler manufacturing company.", icon: <Car /> },
    { year: "2018", desc: "Implemented DSpace based DMS for one of the High Courts in India. Recognized as Top 20 Most Promising Document Management System by CIO Review", icon: <Medal /> },
    { year: "2017", desc: "Recognized as a start-up company by the Ministry of Commerce & Industry, Govt of India. Implemented DSpace based digital repository for one of the oldest and most prestigious libraries in India.", icon: <Rocket /> },
    { year: "2016", desc: "Became registered service provider of DSpace", icon: <Award /> },
    { year: "2015", desc: "Company incorporated to deliver innovative software solutions.", icon: <Building2 /> },
];

const MilestoneTimeline = () => {
    return (
        <section className="milestone-section">
            <div className="max-container">
                <div className="milestone-header">
                    <span className="info-tag">OUR JOURNEY</span>
                    <h2>Historical Journey of VIR Softech</h2>
                    <p>Building innovation and excellence since 2015.</p>
                </div>

                <div className="vertical-timeline">
                    <div className="timeline-line"></div>
                    {milestones.map((m, i) => (
                        <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`}>
                            <div className="timeline-dot">
                                {React.cloneElement(m.icon, { color: "white", size: 20 })}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-year">{m.year}</div>
                                <div className="timeline-card-v2">
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .milestone-section {
                    padding: 60px 0;
                    background: #f8fafc;
                    overflow: hidden;
                }
                .milestone-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .milestone-header h2 {
                    font-size: 42px;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 15px 0;
                }
                .vertical-timeline {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 40px 0;
                }
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: #e2e8f0;
                    transform: translateX(-50%);
                }
                .timeline-item {
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 50%;
                    position: relative;
                    margin-bottom: 30px;
                    width: 100%;
                }
                .timeline-item.right {
                    justify-content: flex-start;
                    padding-right: 0;
                    padding-left: 50%;
                }
                .timeline-dot {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(-50%);
                    z-index: 10;
                    box-shadow: 0 0 0 8px #f8fafc;
                    border: 2px solid white;
                    transition: transform 0.3s ease;
                }
                .timeline-dot:hover {
                    transform: translateX(-50%) scale(1.1);
                }
                .timeline-content {
                    width: 100%;
                    padding: 0 40px;
                    position: relative;
                }
                .timeline-year {
                    font-size: 20px;
                    font-weight: 900;
                    margin-bottom: 6px;
                    color: var(--primary);
                }
                .timeline-card-v2 {
                    background: white;
                    padding: 16px 20px;
                    border-radius: 12px;
                    box-shadow: var(--shadow);
                    border: 1px solid var(--border);
                    transition: var(--transition);
                }
                .timeline-card-v2:hover {
                    box-shadow: var(--shadow-lg);
                    border-color: var(--primary);
                }
                .timeline-card-v2 p {
                    font-size: 15px;
                    color: var(--text-main);
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .timeline-line {
                        left: 22px;
                    }
                    .timeline-item, .timeline-item.right {
                        justify-content: flex-start;
                        padding-left: 60px;
                        padding-right: 0;
                    }
                    .timeline-dot {
                        left: 22px;
                    }
                    .timeline-content {
                        padding: 0;
                    }
                    .milestone-header h2 {
                        font-size: 32px;
                    }
                }
            `}} />
        </section>
    );
};

export default MilestoneTimeline;
