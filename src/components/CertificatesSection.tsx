import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    { title: 'Machine Learning Specialization', issuer: 'Andrew Ng', color: 'neon-cyan' },
    { title: 'Deep Learning with TensorFlow', issuer: 'Coursera', color: 'neon-purple' },
    { title: 'DSA Certification', issuer: 'GeeksforGeeks', color: 'neon-pink' },
    { title: 'Web Development Bootcamp', issuer: 'Udemy', color: 'neon-cyan' },
    { title: 'Python for Everybody', issuer: 'University of Michigan', color: 'neon-purple' },
    { title: 'AI for Everyone', issuer: 'Andrew Ng', color: 'neon-pink' },
    { title: 'DBMS Certification', issuer: 'NPTEL', color: 'neon-cyan' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-purple to-transparent" />
            <span className="font-mono text-sm text-neon-purple uppercase tracking-widest">
              05 // Certifications
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Digital </span>
            <span className="text-gradient-cyber">Badges</span>
          </h2>
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              isVisible={isVisible}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CertificateCardProps {
  title: string;
  issuer: string;
  color: string;
  isVisible: boolean;
  delay: number;
}

const CertificateCard = ({ title, issuer, color, isVisible, delay }: CertificateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { border: string; text: string; glow: string; bg: string }> = {
      'neon-cyan': {
        border: 'border-neon-cyan/30 hover:border-neon-cyan',
        text: 'text-neon-cyan',
        glow: 'from-neon-cyan/20',
        bg: 'bg-neon-cyan',
      },
      'neon-purple': {
        border: 'border-neon-purple/30 hover:border-neon-purple',
        text: 'text-neon-purple',
        glow: 'from-neon-purple/20',
        bg: 'bg-neon-purple',
      },
      'neon-pink': {
        border: 'border-neon-pink/30 hover:border-neon-pink',
        text: 'text-neon-pink',
        glow: 'from-neon-pink/20',
        bg: 'bg-neon-pink',
      },
    };
    return colorMap[colorName] || colorMap['neon-cyan'];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={`group relative glass-card rounded-xl p-5 border ${colorClasses.border} transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic effect */}
      <div className="absolute inset-0 rounded-xl holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorClasses.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg bg-muted/50 ${isHovered ? colorClasses.text : 'text-muted-foreground'} transition-colors duration-300`}>
            <Award className="w-5 h-5" />
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <h3 className={`font-heading text-sm font-bold text-foreground group-hover:${colorClasses.text} transition-colors duration-300 mb-1 line-clamp-2`}>
          {title}
        </h3>
        <p className="font-mono text-xs text-muted-foreground">
          {issuer}
        </p>

        {/* Bottom line */}
        <div className={`mt-4 h-0.5 w-0 group-hover:w-full rounded-full ${colorClasses.bg} transition-all duration-500`} />
      </div>
    </div>
  );
};

export default CertificatesSection;
