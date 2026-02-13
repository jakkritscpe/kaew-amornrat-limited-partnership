import { useEffect, useRef, useState } from 'react';
import { Phone, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="IT Technician"
          width="1920"
          height="1080"
          className={`w-full h-full object-cover transition-all duration-1200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#072F4D]/85 via-[#072F4D]/60 to-transparent" />
      </div>

      {/* Particle Network Canvas Effect */}
      <canvas 
        className="particle-canvas"
        id="particle-canvas"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Trust Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 sm:mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '100ms'
              }}
            >
              <Clock className="w-4 h-4 sm:w-4 sm:h-4 text-[#B4D5EB]" />
              <span className="text-white text-sm font-medium">บริการ 24 ชั่วโมง</span>
            </div>

            {/* Headline */}
            <h1 
              className={`font-bold text-white leading-tight mb-5 sm:mb-6 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                fontSize: 'clamp(1.875rem, 5vw + 0.5rem, 4.5rem)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '200ms'
              }}
            >
              บริการไอทีมืออาชีพ
              <br />
              <span className="text-[#B4D5EB]">มาถึงที่คุณ</span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '400ms'
              }}
            >
              ซ่อม ติดตั้ง ดูแลระบบไอทีครบวงจร โดยทีมช่างผู้เชี่ยวชาญ
              <br className="hidden sm:block" />
              พร้อมให้บริการทั่วกรุงเทพและปริมณฑล
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transitionDelay: '600ms'
              }}
            >
              <Button 
                onClick={scrollToContact}
                className="bg-[#C2410C] text-white hover:bg-[#9A3412] px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-full animate-pulse-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
              >
                <Phone className="w-5 h-5 sm:w-5 sm:h-5 mr-2" />
                ติดต่อเรา
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 ml-1" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/50 text-[#072F4D] hover:bg-white/10 px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:border-[#B4D5EB] w-full sm:w-auto min-h-[48px]"
              >
                ดูบริการของเรา
              </Button>
            </div>

            {/* Service Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {['Computer', 'CCTV', 'Server', 'Network', 'Firewall', 'NAS', 'Backup','Lan Wifi','Fiber Optic'].map((service, index) => (
                <span
                  key={service}
                  className={`inline-flex items-center px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 transition-all duration-400 hover:bg-white/20 hover:scale-105 cursor-default min-h-[40px] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${700 + index * 80}ms`
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#F7FBFE"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
