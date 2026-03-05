
import { Link } from 'react-router-dom';
import { Building, Settings, LineChart, ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <div className="services-page animate-fade-in">
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")',
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
                        UNCOMPROMISING CONSTRUCTION SOLUTIONS
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 400,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Tailored structural services, executed with industrial precision.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding">
                <div className="container">
                    {[
                        {
                            icon: <Building size={48} color="var(--accent-gold)" />,
                            title: "Construction of Domestic Buildings",
                            body: "We specialize in the end-to-end development of premium domestic properties, high-end residential complexes, and bespoke architectural builds. The SKJN team manages every meticulous phase—from complex subterranean groundworks and structural engineering to luxury interior finishing. We partner with leading architects to ensure that every residence we construct stands as a faultless testament to perfection.",
                            features: "High-Net-Worth Residential Builds, Luxury Extensions, Turnkey Property Development."
                        },
                        {
                            icon: <Settings size={48} color="var(--accent-gold)" />,
                            title: "Specialist Installation Processes",
                            body: "Complementing our primary construction arm, SKJN executes highly complex installation procedures for specialized domestic and commercial environments. This division handles advanced structural steelwork, sophisticated HVAC integrations, acoustic engineering installations, and bespoke architectural fittings. Every installation is stress-tested and calibrated strictly to industry-leading British Standards.",
                            features: "Structural Steel Fitting, Architectural Glazing, MEP (Mechanical, Electrical, Plumbing) Deployments."
                        },
                        {
                            icon: <LineChart size={48} color="var(--accent-gold)" />,
                            title: "Feasibility & Structural Consulting",
                            body: "Leveraging decades of combined executive industry expertise, we provide strategic counsel, comprehensive risk mitigation, and structural feasibility studies for high-value developments prior to breaking ground.",
                            features: "Site Surveying, Cost Engineering, Structural Viability Assessments."
                        }
                    ].map((service, index) => (
                        <div key={index} className="services-list-item" style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 1fr',
                            gap: '2rem',
                            marginBottom: index === 2 ? '0' : '4rem',
                            paddingBottom: index === 2 ? '0' : '4rem',
                            borderBottom: index === 2 ? 'none' : '1px solid rgba(0,0,0,0.1)'
                        }}>
                            <div>
                                <div style={{
                                    width: '80px', height: '80px',
                                    backgroundColor: 'var(--slate-white)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '50%'
                                }}>
                                    {service.icon}
                                </div>
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-navy)' }}>{service.title}</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-solid)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    {service.body}
                                </p>
                                <div style={{
                                    backgroundColor: 'var(--slate-white)',
                                    padding: '1.5rem',
                                    borderLeft: '4px solid var(--accent-gold)'
                                }}>
                                    <strong style={{ color: 'var(--primary-navy)' }}>Key Features: </strong>
                                    <span style={{ color: 'var(--charcoal-solid)' }}>{service.features}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding bg-navy" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--pure-white)', marginBottom: '2rem' }}>Ready to Initiate?</h2>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', width: 'auto' }}>
                        Discuss Your Project Scope <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
