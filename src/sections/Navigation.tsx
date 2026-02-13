import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'หน้าหลัก', href: '#hero' },
  { label: 'บริการ', href: '#services' },
  { label: 'ทำไมเลือกเรา', href: '#why-choose-us' },
  { label: 'ติดต่อ', href: '#contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'bg-[#044F88]' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <img
                  src="/logo/kaewamornrat-mark-white.svg"
                  alt="Kaew Amornrat logo"
                  width="28"
                  height="28"
                  className="w-7 h-7"
                  fetchPriority="high"
                />
              </div>
              <div className={`hidden sm:block transition-colors duration-300 ${
                isScrolled ? 'text-[#0F172A]' : 'text-white'
              }`}>
                <span className="font-bold text-lg">หจก.แก้วอมรรัตน์</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#044F88] ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[#C2410C] text-white hover:bg-[#9A3412]' 
                    : 'bg-[#C2410C] text-white hover:bg-[#9A3412]'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                โทรเลย
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-[#044F88]/10 hover:text-[#044F88] ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[#C2410C] text-white hover:bg-[#9A3412] rounded-full py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                ติดต่อเรา
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
