import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const headerClass = `header ${isScrolled || !isHome ? 'header-solid' : 'header-transparent'}`;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact HQ', path: '/contact' }
    ];

    return (
        <>
            <header className={headerClass} style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                transition: 'all var(--transition-smooth)',
                backgroundColor: isScrolled || !isHome ? 'var(--primary-navy)' : 'transparent',
                padding: isScrolled ? '1rem 0' : '2rem 0',
                boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1001 }}>
                        <div style={{ backgroundColor: 'var(--pure-white)', padding: '0.5rem', borderRadius: '4px', display: 'flex' }}>
                            <img src="/logo.png" alt="SKJN Construction Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: 'none' }}>
                        <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', margin: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: 'var(--pure-white)',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            opacity: location.pathname === link.path ? 1 : 0.8,
                                            borderBottom: location.pathname === link.path ? '2px solid var(--accent-gold)' : '2px solid transparent',
                                            paddingBottom: '0.2rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = location.pathname === link.path ? '1' : '0.8'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: isScrolled || !isHome || isMobileMenuOpen ? 'var(--pure-white)' : 'var(--pure-white)', cursor: 'pointer', zIndex: 1001 }}
                    >
                        {isMobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color={isScrolled || !isHome ? '#fff' : '#fff'} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'var(--primary-navy)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isMobileMenuOpen ? 1 : 0,
                pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                transition: 'transform var(--transition-smooth), opacity var(--transition-smooth)',
                zIndex: 999
            }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    color: 'var(--pure-white)',
                                    fontWeight: 600,
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px'
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </>
    );
};

export default Header;
