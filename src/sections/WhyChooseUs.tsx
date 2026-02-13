import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Clock, 
  MapPin, 
  BadgeCheck, 
  ShieldCheck, 
  HeadphonesIcon 
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'ประสบการณ์ 10+ ปี',
    description: 'ทีมงานมืออาชีพ ผ่านงานมากมาย'
  },
  {
    icon: Clock,
    title: 'บริการ 24/7',
    description: 'พร้อมดูแลตลอดเวลา ไม่มีวันหยุด'
  },
  {
    icon: MapPin,
    title: 'มาถึงที่',
    description: 'ไม่ต้องเสียเวลาเดินทาง เรามาหาคุณ'
  },
  {
    icon: BadgeCheck,
    title: 'ราคายุติธรรม',
    description: 'ประเมินราคาก่อนเริ่มงาน ไม่มีค่าใช้จ่ายแอบแฝง'
  },
  {
    icon: ShieldCheck,
    title: 'รับประกันงาน',
    description: 'มั่นใจในคุณภาพ รับประกันผลงาน'
  },
  {
    icon: HeadphonesIcon,
    title: 'ซัพพอร์ตต่อเนื่อง',
    description: 'ดูแลหลังการขาย ตอบคำถามทุกข้อสงสัย'
  }
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
              if (index !== -1) {
                setVisibleFeatures((prev) => new Set([...prev, index]));
              }
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-choose-us" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#044F88] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B4D5EB] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-[#044F88]/10 text-[#044F88] rounded-full text-sm font-medium mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Why Choose Us
          </span>
          <h2 
            className={`font-bold text-[#1a1a1a] mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 3rem)',
              transitionDelay: '100ms' 
            }}
          >
            ทำไมต้องเลือกเรา
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontSize: 'clamp(1rem, 1vw + 0.75rem, 1.125rem)',
              transitionDelay: '200ms' 
            }}
          >
            เรามุ่งมั่นให้บริการที่ดีที่สุด เพื่อความพึงพอใจสูงสุดของลูกค้า
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isFeatureVisible = visibleFeatures.has(index);
            
            return (
              <div
                key={feature.title}
                ref={(el) => { featureRefs.current[index] = el; }}
                className={`group relative p-8 rounded-2xl bg-[#F7FBFE] hover:bg-[#B4D5EB]/30 hover:shadow-teal-lg transition-all duration-500 ${
                  isFeatureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#044F88] to-[#B4D5EB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#044F88] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#044F88]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#044F88]/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-gray-600 mb-6">
            พร้อมให้บริการคุณแล้ววันนี้
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C2410C] to-[#9A3412] text-white rounded-full font-semibold hover:shadow-teal-lg transition-all duration-300 hover:scale-105"
          >
            ติดต่อเราเลย
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
