
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page animate-fade-in">
            {/* Page Header */}
            <section style={{
                position: 'relative',
                height: '60vh',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--pure-white)',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)',
                    zIndex: -1
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1rem',
                        color: 'var(--pure-white)'
                    }}>
                        OUR BLUEPRINT FOR BRILLIANCE
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 400,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Precision, Integrity, and Unrivalled Craftsmanship.
                    </p>
                </div>
            </section>

            {/* 1. The SKJN Vision */}
            <section className="section-padding">
                <div className="container grid-2-col" style={{ gridTemplateColumns: '1fr 1.5fr', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-navy)' }}>
                            THE <span className="text-gold">SKJN</span> VISION
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', marginBottom: '2rem' }}></div>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--charcoal-solid)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Founded on the immutable principles of structural integrity and aesthetic perfection, SKJN Construction Limited represents the pinnacle of the UK construction sector.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-solid)', lineHeight: 1.7 }}>
                            Under the visionary leadership of Director Sudhakar Kaliyannan Jagadeesan, our firm has cultivated a formidable reputation for delivering complex, high-value projects with absolute precision. We view every brief not simply as a contract, but as a mandate to exceed the highest British standards of engineering and design.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Our Core Pillars */}
            <section className="section-padding bg-slate">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>OUR CORE PILLARS</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto' }}></div>
                    </div>

                    <div className="grid-3-col">
                        {[
                            {
                                icon: <CheckCircle size={48} color="var(--accent-gold)" />,
                                title: "Unyielding Quality",
                                desc: "Zero compromises on raw materials, structural methodology, or finishings. We build to last centuries, not decades."
                            },
                            {
                                icon: <ArrowRight size={48} color="var(--accent-gold)" />,
                                title: "Operational Excellence",
                                desc: "Streamlined, highly disciplined, and completely transparent site processes from inception to handover."
                            },
                            {
                                icon: <Shield size={48} color="var(--accent-gold)" />, // Mock Shield using an import if I had it, wait I didn't import Shield from lucide here, I will use a different one or add it to imports
                                title: "Uncompromising Safety",
                                desc: "A non-negotiable, heavily audited commitment to the complete wellbeing of our workforce, clients, and the public."
                            }
                        ].map((pillar, index) => (
                            <div key={index} style={{
                                backgroundColor: 'var(--pure-white)',
                                padding: '3rem',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                transition: 'box-shadow 0.3s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>{pillar.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                                <p style={{ color: 'var(--charcoal-solid)', margin: 0 }}>{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ESG */}
            <section className="section-padding">
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px' }}>
                    <Leaf size={64} color="var(--accent-gold)" style={{ marginBottom: '2rem' }} />
                    <h2 style={{ marginBottom: '2rem' }}>ENVIRONMENTAL & SOCIAL GOVERNANCE</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '3rem', color: 'var(--charcoal-solid)' }}>
                        Building for tomorrow requires responsible practices today. SKJN Construction is at the vanguard of sustainable development, integrating eco-friendly materials, waste-reduction protocols, and carbon-neutral methodologies into every stage of the construction lifecycle without sacrificing aesthetic luxury.
                    </p>
                    <Link to="/services" className="btn btn-primary" style={{ width: 'auto' }}>
                        View Our Core Capabilities
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
