import { useEffect, useRef, useState } from 'react';
import { 
  Monitor, 
  Video, 
  Server, 
  Wifi, 
  Shield, 
  HardDrive, 
  CloudBackup,
  ArrowRight
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Monitor,
    title: 'Computer',
    description: 'ซ่อมคอมพิวเตอร์ โน๊ตบุ๊ค เปลี่ยนอะไหล่',
    features: ['ซ่อมฮาร์ดแวร์', 'อัพเกรดอะไหล่', 'ลงโปรแกรม', 'กำจัดไวรัส']
  },
  {
    icon: Video,
    title: 'CCTV',
    description: 'ติดตั้งกล้องวงจรปิด ระบบรักษาความปลอดภัย',
    features: ['ติดตั้งกล้อง HD', 'ระบบ DVR/NVR', 'ดูผ่านมือถือ', 'บันทึกย้อนหลัง']
  },
  {
    icon: Server,
    title: 'Server',
    description: 'ติดตั้งและดูแลเซิร์ฟเวอร์',
    features: ['ติดตั้งเซิร์ฟเวอร์', 'กำหนดสิทธิ์ผู้ใช้', 'แบ็คอัพข้อมูล', 'มอนิเตอริ่ง']
  },
  {
    icon: Wifi,
    title: 'Network LAN WiFi',
    description: 'ติดตั้ง LAN WiFi ครอบคลุมทุกพื้นที่',
    features: ['วางระบบสาย LAN', 'ติดตั้ง WiFi', 'ปรับแต่งสัญญาณ', 'ครอบคลุมทุกจุด']
  },
  {
    icon: Shield,
    title: 'Firewall',
    description: 'ระบบความปลอดภัยเครือข่าย',
    features: ['ตั้งค่า Firewall', 'ป้องกันการโจมตี', 'ควบคุมการเข้าถึง', 'รายงานความปลอดภัย']
  },
  {
    icon: HardDrive,
    title: 'NAS',
    description: 'ระบบจัดเก็บข้อมูลแบบรวมศูนย์',
    features: ['ติดตั้ง NAS', 'กำหนดสิทธิ์', 'แชร์ไฟล์', 'เข้าถึงระยะไกล']
  },
  {
    icon: CloudBackup,
    title: 'Backup Data',
    description: 'ระบบสำรองข้อมูล ป้องกันข้อมูลสูญหาย',
    features: ['แบ็คอัพอัตโนมัติ', 'กู้คืนข้อมูล', 'คลาวด์แบ็คอัพ', 'ป้องกันข้อมูลสูญหาย']
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsTitleVisible(true);
            } else {
              const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
              if (index !== -1) {
                setVisibleCards((prev) => new Set([...prev, index]));
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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 lg:py-32 bg-[#F7FBFE]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-[#044F88]/10 text-[#044F88] rounded-full text-sm font-medium mb-4 transition-all duration-600 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Services
          </span>
          <h2 
            className={`font-bold text-[#1a1a1a] mb-4 transition-all duration-800 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 3rem)',
              transitionDelay: '100ms' 
            }}
          >
            บริการของเรา
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-600 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontSize: 'clamp(1rem, 1vw + 0.75rem, 1.125rem)',
              transitionDelay: '200ms' 
            }}
          >
            ครบวงจร ทุกเรื่องไอที มืออาชีพ มาถึงที่
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group gradient-border hover-lift transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#044F88] to-[#B4D5EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#044F88] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 bg-[#044F88] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="flex items-center text-[#044F88] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>รายละเอียด</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
