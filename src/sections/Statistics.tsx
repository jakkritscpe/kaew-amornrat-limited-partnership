import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Clock, ThumbsUp } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: '500',
    label: 'ลูกค้าที่ไว้วางใจ',
    suffix: '+'
  },
  {
    icon: Calendar,
    value: '10',
    label: 'ปีประสบการณ์',
    suffix: '+'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'ชั่วโมงบริการ'
  },
  {
    icon: ThumbsUp,
    value: '100',
    label: 'รับประกันคุณภาพ',
    suffix: '%'
  }
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            
            // Animate counters
            stats.forEach((stat, index) => {
              if (stat.value !== '24/7') {
                const target = parseInt(stat.value);
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                
                const timer = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    current = target;
                    clearInterval(timer);
                  }
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                  });
                }, duration / steps);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="statistics" 
      className="py-20 lg:py-32 bg-gradient-to-br from-[#044F88] to-[#072F4D] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#B4D5EB]/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Achievements
          </span>
          <h2 
            className={`font-bold text-white mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 3rem)',
              transitionDelay: '100ms' 
            }}
          >
            ตัวเลขที่พิสูจน์ความน่าเชื่อถือ
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayValue = stat.value === '24/7' ? '24/7' : `${counts[index]}${stat.suffix || ''}`;
            
            return (
              <div
                key={stat.label}
                className={`group relative p-6 lg:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-[#B4D5EB]/40 hover:bg-[#044F88]/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 150}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#B4D5EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#072F4D]" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[#B4D5EB] transition-colors">
                  {displayValue}
                </div>

                {/* Label */}
                <div className="text-white/80 text-sm lg:text-base">
                  {stat.label}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#B4D5EB]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
