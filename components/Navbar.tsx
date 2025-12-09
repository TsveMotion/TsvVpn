import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHashChange = () => setCurrentHash(window.location.hash || '#/');
    
    // Set initial hash
    setCurrentHash(window.location.hash || '#/');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Features', href: '#/features' },
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Servers', href: '#/servers' },
    { name: 'Help', href: '#/help' },
  ];

  const isActive = (href: string) => {
    if (href === '#/' && (currentHash === '#/' || currentHash === '')) return true;
    return currentHash === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-brand-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2 text-white text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
          <Shield className="fill-brand-500 text-brand-500 w-8 h-8" />
          <span>TsvVpn</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm font-medium transition-colors relative ${isActive(link.href) ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-500 rounded-full shadow-[0_0_8px_#0ea5e9]" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-brand-400 transition-colors">Log In</button>
          <Button size="sm" onClick={() => window.location.hash = '#/pricing'}>Get TsvVpn</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-lg font-medium py-2 ${isActive(link.href) ? 'text-brand-400' : 'text-gray-300'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Button fullWidth onClick={() => {
            window.location.hash = '#/pricing';
            setMobileMenuOpen(false);
          }}>Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;