
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{
            backgroundColor: 'var(--primary-navy)',
            color: 'var(--slate-white)',
            padding: '5rem 0 2rem 0',
            borderTop: '4px solid var(--accent-gold)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div style={{ backgroundColor: 'var(--pure-white)', padding: '0.4rem', borderRadius: '6px', display: 'inline-block', marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="SKJN Construction Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', maxWidth: '300px' }}>
                            Setting the gold standard in premium domestic construction and specialist installation processes across the United Kingdom.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--pure-white)', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Link></li>
                            <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Services</Link></li>
                            <li><Link to="/careers" style={{ color: 'rgba(255,255,255,0.7)' }}>Careers</Link></li>
                            <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact HQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--pure-white)', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate HQ</h4>
                        <address style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'normal', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            97a Lansdowne Road,<br />
                            Croydon, CR0 2BN<br />
                            United Kingdom<br /><br />
                            <strong>T:</strong> +44 7424 382453<br />
                            <strong>E:</strong> <a href="mailto:skjnconstructionltd@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>skjnconstructionltd@gmail.com</a>
                        </address>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)'
                }}>
                    <p>&copy; {new Date().getFullYear()} SKJN Construction Limited. All Rights Reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                        <Link to="#">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
