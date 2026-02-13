import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: Phone,
    title: 'โทรศัพท์',
    value: '0X-XXX-XXXX',
    link: 'tel:0XXXXXXXXX'
  },
  {
    icon: Mail,
    title: 'อีเมล',
    value: 'contact@kaewamornrat.com',
    link: 'mailto:contact@kaewamornrat.com'
  },
  {
    icon: MapPin,
    title: 'ที่อยู่',
    value: 'กรุงเทพมหานคร และปริมณฑล',
    link: '#'
  },
  {
    icon: Clock,
    title: 'เวลาทำการ',
    value: 'บริการ 24 ชั่วโมง',
    link: '#'
  }
];

const services = [
  { value: 'computer', label: 'Computer - ซ่อมคอมพิวเตอร์' },
  { value: 'cctv', label: 'CCTV - กล้องวงจรปิด' },
  { value: 'server', label: 'Server - เซิร์ฟเวอร์' },
  { value: 'network', label: 'Network - LAN WiFi' },
  { value: 'firewall', label: 'Firewall - ความปลอดภัย' },
  { value: 'nas', label: 'NAS - จัดเก็บข้อมูล' },
  { value: 'backup', label: 'Backup - สำรองข้อมูล' },
  { value: 'other', label: 'อื่นๆ' }
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 lg:py-32 bg-[#F7FBFE] relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-[#044F88]/10 text-[#044F88] rounded-full text-sm font-medium mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact Us
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
            ติดต่อเรา
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
            พร้อมให้บริการทุกวัน ตลอด 24 ชั่วโมง
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ 
              transitionDelay: '300ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="bg-gradient-to-br from-[#044F88] to-[#072F4D] rounded-3xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">
                ข้อมูลติดต่อ
              </h3>
              <p className="text-white/80 mb-8">
                มีคำถามหรือต้องการสอบถามบริการ? ติดต่อเราได้ทุกช่องทาง
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      className={`flex items-start gap-4 group transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#B4D5EB] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:text-[#044F88] transition-colors" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{info.title}</div>
                        <div className="text-white font-medium group-hover:text-[#B4D5EB] transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Decorative Element */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">
                  หจก.แก้วอมรรัตน์
                </p>
                <p className="text-white/40 text-xs mt-1">
                  บริการไอทีครบวงจร มืออาชีพ มาถึงที่
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ 
              transitionDelay: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                ส่งข้อความถึงเรา
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    ส่งข้อความสำเร็จ
                  </h4>
                  <p className="text-gray-600">
                    เราจะติดต่อกลับโดยเร็วที่สุด
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#1a1a1a]">ชื่อ</Label>
                      <Input
                        id="name"
                        placeholder="ชื่อของคุณ"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-gray-200 focus:border-[#044F88] focus:ring-[#044F88]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#1a1a1a]">เบอร์โทร</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0XX-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-gray-200 focus:border-[#044F88] focus:ring-[#044F88]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1a1a1a]">อีเมล</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-gray-200 focus:border-[#044F88] focus:ring-[#044F88]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#1a1a1a]">บริการที่ต้องการ</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="h-12 border-gray-200 focus:border-[#044F88] focus:ring-[#044F88]">
                        <SelectValue placeholder="เลือกบริการ" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1a1a1a]">ข้อความ</Label>
                    <Textarea
                      id="message"
                      placeholder="รายละเอียดที่ต้องการสอบถาม..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] border-gray-200 focus:border-[#044F88] focus:ring-[#044F88] resize-none"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#C2410C] to-[#9A3412] hover:shadow-teal-lg text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ส่งข้อความ
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
