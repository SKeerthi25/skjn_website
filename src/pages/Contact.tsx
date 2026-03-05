import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Failed to send message.');
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while connecting to the server. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page animate-fade-in" style={{ paddingTop: '100px', backgroundColor: 'var(--slate-white)', minHeight: '100vh' }}>
            {/* Header Section */}
            <section className="hero-section">
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                }} />
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(rgba(10, 17, 40, 0.8), rgba(10, 17, 40, 0.9))',
                    zIndex: -1
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ color: 'var(--pure-white)', marginBottom: '1rem' }}>CONTACT HQ</h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Connect with our executive management team for comprehensive consultations on your next high-value development or specialist installation.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-2-col">

                    {/* Contact Information & Map */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Corporate Details</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><MapPin size={32} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Headquarters</h4>
                                    <p style={{ margin: 0, color: 'var(--charcoal-solid)', lineHeight: 1.8 }}>
                                        97a Lansdowne Road,<br />
                                        Croydon, CR0 2BN<br />
                                        United Kingdom
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><Phone size={32} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Direct Line</h4>
                                    <p style={{ margin: 0, color: 'var(--charcoal-solid)' }}>
                                        <a href="tel:+447424382453" style={{ textDecoration: 'none', color: 'inherit' }}>+44 7424 382453</a>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><Mail size={32} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Electronic Mail</h4>
                                    <p style={{ margin: 0, color: 'var(--charcoal-solid)' }}>
                                        <a href="mailto:skjnconstructionltd@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            skjnconstructionltd@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map */}
                        <div className="premium-shadow" style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden', border: 'none' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.8920405232675!2d-0.09631!3d51.368311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606c45f4cb34d%3A0x6bba46c559aa2463!2s97a%20Lansdowne%20Rd%2C%20Croydon%20CR0%202BN%2C%20UK!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SKJN Headquarters Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="premium-shadow" style={{ backgroundColor: 'var(--pure-white)', padding: '3rem', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '0.5rem' }}>Send a Message</h2>
                        <p style={{ marginBottom: '2.5rem', color: 'var(--charcoal-solid)' }}>Our executive team typically responds within 24 hours.</p>

                        {submitted ? (
                            <div style={{
                                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                border: '1px solid var(--accent-gold)',
                                padding: '2rem',
                                borderRadius: '4px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>Inquiry Received</h3>
                                <p style={{ margin: 0 }}>Thank you for reaching out to SKJN Construction Limited. A technical director will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="grid-2-col" style={{ gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="name" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>Customer Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.3s' }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>Gmail / Email ID</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.3s' }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="subject" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.3s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    ></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
                                    {isSubmitting ? 'Transmitting...' : (
                                        <>Send Secure Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
