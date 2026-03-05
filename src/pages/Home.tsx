
import { Link } from 'react-router-dom';
import { Shield, Target, Building2, Clock, ArrowRight, Quote } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '100vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--pure-white)',
                overflow: 'hidden'
            }}>
                {/* Background Image with Fallback and Ken Burns effect */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--primary-navy)', // Solid fallback
                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                    animation: 'zoomIn 20s infinite alternate linear'
                }} />
                {/* Premium Gradient Overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(90deg, rgba(10, 17, 40, 0.85) 0%, rgba(10, 17, 40, 0.2) 100%)',
                    zIndex: -1
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        maxWidth: '900px',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        color: 'var(--pure-white)'
                    }}>
                        ENGINEERED FOR EXCELLENCE.<br />
                        <span style={{ color: 'var(--accent-gold)' }}>BUILT FOR THE FUTURE.</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        maxWidth: '700px',
                        marginBottom: '3rem',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 400
                    }}>
                        Setting the gold standard in premium domestic construction and specialist installation processes across the United Kingdom.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link to="/services" className="btn btn-outline-light">
                            Discover Our Services
                        </Link>
                        <Link to="/contact" className="btn btn-primary">
                            Request a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section style={{ backgroundColor: 'var(--slate-white)', padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Certified. Insured. Uncompromising on Safety.
                    </p>
                    <div style={{ display: 'flex', gap: '3rem', opacity: 0.5, filter: 'grayscale(100%)', fontWeight: 800 }}>
                        <span>ISO 9001</span>
                        <span>CHAS</span>
                        <span>NHBC</span>
                        <span>CCS</span>
                    </div>
                </div>
            </section>

            {/* Brief About Section */}
            <section className="section-padding">
                <div className="container grid-2-col" style={{ alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                            alt="Architectural Blueprint"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: 'var(--accent-gold)', padding: '2rem', color: 'var(--pure-white)', fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                            EST. UK
                        </div>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>
                            A LEGACY OF<br />
                            <span className="text-gold">STRUCTURAL INTEGRITY</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-solid)' }}>
                            SKJN Construction Limited is the premier partner for high-value domestic developments and complex installation processes.
                        </p>
                        <p style={{ color: 'var(--charcoal-solid)', marginBottom: '2.5rem' }}>
                            Led by industry veteran Sudhakar Kaliyannan Jagadeesan, our firm combines elite engineering with masterful craftsmanship. We do not just build properties; we engineer enduring landmarks.
                        </p>
                        <Link to="/about" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                            Learn About Our Heritage <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="section-padding bg-slate">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>OUR EXPERTISE</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto' }}></div>
                    </div>
                    <div className="grid-3-col">
                        {[
                            {
                                title: "Premium Domestic Construction",
                                desc: "Architecturally striking, structurally uncompromising. We deliver bespoke residential developments and luxury domestic properties that redefine modern living."
                            },
                            {
                                title: "Specialist Installation Processes",
                                desc: "Precision-driven installations executed by industry-leading professionals, ensuring seamless structural integration and supreme longevity in every environment."
                            },
                            {
                                title: "End-to-End Project Management",
                                desc: "From conceptual framework through to final handover, our meticulous management protocols guarantee delivery on time, within budget, and beyond expectations."
                            }
                        ].map((service, i) => (
                            <div key={i} className="premium-shadow" style={{
                                backgroundColor: 'var(--pure-white)',
                                padding: '3.5rem 2.5rem',
                                borderTop: '4px solid var(--accent-gold)',
                                borderRadius: '4px',
                                cursor: 'default'
                            }}>
                                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>{service.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--charcoal-solid)', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-navy">
                <div className="container">
                    <h2 style={{ color: 'var(--pure-white)', textAlign: 'center', marginBottom: '4rem' }}>
                        THE <span className="text-gold">SKJN</span> ADVANTAGE
                    </h2>
                    <div className="grid-3-col">
                        {[
                            { icon: <Target size={40} />, title: "Unrivalled Precision", desc: "Micro-millimeter accuracy in all fabrication and architectural finishing." },
                            { icon: <Shield size={40} />, title: "Risk Mitigation", desc: "Industry-leading health, safety, and operational compliance." },
                            { icon: <Building2 size={40} />, title: "Executive Management", desc: "Single-point-of-contact project direction for seamless communication." },
                            { icon: <Clock size={40} />, title: "Expedited Delivery", desc: "Resource-heavy deployment ensuring rapid, uncompromised completion." }
                        ].map((adv, i) => (
                            <div key={i} className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem 1.5rem', borderRadius: '8px', transition: 'transform 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 4px 10px rgba(212,175,55,0.3))' }}>
                                    {adv.icon}
                                </div>
                                <h4 style={{ color: 'var(--pure-white)', fontSize: '1.15rem', marginBottom: '1rem', letterSpacing: '0.5px' }}>{adv.title}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            <section className="section-padding bg-slate">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <Quote size={48} color="var(--accent-gold)" style={{ margin: '0 auto 2rem auto' }} />
                    <h2 style={{ marginBottom: '2rem' }}>CLIENT COMMENDATIONS</h2>
                    <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--charcoal-solid)', lineHeight: 1.8 }}>
                        "SKJN Construction delivered our flagship development with exactly the level of precision and absolute professionalism they promised. A masterclass in executive construction management."
                    </p>
                    <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        &mdash; Director, Private Real Estate Firm
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="section-padding" style={{
                backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                textAlign: 'center',
                color: 'var(--pure-white)'
            }}>
                <div className="container">
                    <h2 style={{ color: 'var(--pure-white)', marginBottom: '1rem' }}>READY TO ELEVATE YOUR NEXT DEVELOPMENT?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Speak directly with our executive team to discuss your project requirements.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', display: 'inline-block', width: 'auto' }}>
                        Contact Our Experts Today
                    </Link>
                </div>
            </section>

            <style>{`
        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
        </div>
    );
};

export default Home;
