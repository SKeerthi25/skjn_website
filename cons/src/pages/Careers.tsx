import { Briefcase, ChevronRight, Target, Sparkles, Building2, MapPin } from 'lucide-react';

const Careers = () => {
    return (
        <div className="careers-page animate-fade-in" style={{ paddingTop: '100px', backgroundColor: 'var(--pure-white)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section className="hero-section">
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url("/careers-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                    animation: 'zoomIn 20s infinite alternate linear'
                }} />
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.85))',
                    zIndex: -1
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ color: 'var(--pure-white)', marginBottom: '1rem' }}>CAREERS & TALENT</h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Join the forefront of elite UK construction. We are building the future, and we need visionary minds to help us engineer it.
                    </p>
                </div>
            </section>

            {/* Future Scope Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--slate-white)' }}>
                <div className="container grid-2-col" style={{ gridTemplateColumns: '1fr 1.5fr', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            OUR <span className="text-gold">FUTURE SCOPE</span>
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', marginBottom: '2rem' }}></div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-solid)' }}>
                            SKJN Construction Limited is rapidly expanding its footprint across the United Kingdom. Our strategic vision for the next decade involves undertaking larger, more complex domestic developments and pioneering advanced, sustainable installation processes.
                        </p>
                        <p style={{ color: 'var(--charcoal-solid)', marginBottom: '2rem' }}>
                            We are investing heavily in next-generation construction technology and sustainable building practices. As we grow, we are specifically looking to build a robust internal team of elite designers and structural engineers who can lead this expansion and maintain our uncompromising standards of quality.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--accent-gold)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>200%</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--charcoal-solid)', marginTop: '0.5rem', fontWeight: 600 }}>Projected Growth</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--accent-gold)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>15+</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--charcoal-solid)', marginTop: '0.5rem', fontWeight: 600 }}>Upcoming Sites</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-2-col" style={{ gap: '1.5rem' }}>
                        {[
                            { icon: <Target size={32} />, title: "Market Leadership", desc: "Setting new benchmarks in high-end domestic architecture." },
                            { icon: <Sparkles size={32} />, title: "Innovation", desc: "Pioneering sustainable and smart-home integration in builds." },
                            { icon: <Building2 size={32} />, title: "Expansion", desc: "Extending operations to commercial specialist installations." },
                            { icon: <Briefcase size={32} />, title: "Internal Excellence", desc: "Building an industry-leading in-house talent pool." }
                        ].map((item, i) => (
                            <div key={i} className="premium-shadow" style={{ backgroundColor: 'var(--pure-white)', padding: '2rem', borderRadius: '8px' }}>
                                <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-solid)', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>CURRENT OPPORTUNITIES</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

                        {/* Position 1 */}
                        <div className="premium-shadow" style={{ backgroundColor: 'var(--pure-white)', borderLeft: '4px solid var(--accent-gold)', padding: '2.5rem', borderRadius: '4px 8px 8px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Senior Architectural Designer</h3>
                                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>Full-Time</span>
                                </div>
                                <p style={{ color: 'var(--charcoal-solid)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                    Lead the conceptualization and detailed design of our premium domestic developments. Require highly proficient CAD/Revit skills and a deep understanding of modern UK building regulations and luxury aesthetic trends.
                                </p>
                                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'rgba(34,34,34,0.6)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> HQ, Croydon / Hybrid</span>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=skjnconstructionltd@gmail.com&su=Application:%20Senior%20Architectural%20Designer&body=Please%20attach%20your%20CV%20and%20Portfolio."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    Apply Now <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Position 2 */}
                        <div className="premium-shadow" style={{ backgroundColor: 'var(--pure-white)', borderLeft: '4px solid var(--accent-gold)', padding: '2.5rem', borderRadius: '4px 8px 8px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Structural / Installation Engineer</h3>
                                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>Full-Time</span>
                                </div>
                                <p style={{ color: 'var(--charcoal-solid)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                    Oversee complex installation processes and structural integrity assessments on-site. The ideal candidate has extensive site management experience and a proven track record of delivering uncompromised structural excellence.
                                </p>
                                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'rgba(34,34,34,0.6)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> On-Site / Various UK Locations</span>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=skjnconstructionltd@gmail.com&su=Application:%20Structural%20Engineer&body=Please%20attach%20your%20CV%20and%20project%20history."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    Apply Now <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
