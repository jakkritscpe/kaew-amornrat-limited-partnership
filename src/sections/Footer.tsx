import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'หน้าหลัก', href: '#hero' },
  { label: 'บริการ', href: '#services' },
  { label: 'ติดต่อ', href: '#contact' }
];

const services = [
  'Computer',
  'CCTV',
  'Server',
  'Network',
  'Firewall',
  'NAS',
  'Backup'
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#072F4D] text-white relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" 
            fill="#072F4D"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo/kaewamornrat-full-white.svg"
                alt="Kaew Amornrat logo"
                width="180"
                height="48"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              บริการซ่อมและติดตั้งระบบไอทีแบบ Onsite โดยทีมช่างมืออาชีพ 
              พร้อมให้บริการทั่วกรุงเทพและปริมณฑล
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#044F88] transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#06C755] transition-colors duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="tel:0XXXXXXXXX" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#044F88] transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              เมนูหลัก
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#B4D5EB] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              บริการของเรา
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              ติดต่อเรา
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:0XXXXXXXXX"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B4D5EB] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">0X-XXX-XXXX</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@kaewamornrat.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B4D5EB] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">contact@kaewamornrat.com</span>
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C2410C] to-[#9A3412] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                ติดต่อเลย
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 หจก.แก้วอมรรัตน์. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              บริการไอทีมืออาชีพ มาถึงที่
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
