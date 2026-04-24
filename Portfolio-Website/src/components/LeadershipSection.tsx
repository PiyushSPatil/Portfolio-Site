import { useEffect, useRef, useState } from 'react';
import { Crown, Trophy, PenTool } from 'lucide-react';

const LeadershipSection = () => {
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

  const achievements = [
    {
      icon: Crown,
      title: 'President',
      subtitle: 'AAAI Student Chapter',
      description: 'Leading AI/ML initiatives and organizing technical events for students.',
      color: 'neon-cyan',
    },
    {
      icon: Trophy,
      title: 'Finalist',
      subtitle: 'IEEE TechSangam Hackathon',
      description: 'Competed among top teams with innovative tech solutions.',
      color: 'neon-purple',
    },
    {
      icon: PenTool,
      title: 'Editor',
      subtitle: 'Samvaad Newsletter',
      description: 'Curating and editing technical content for the college newsletter.',
      color: 'neon-pink',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-pink to-transparent" />
            <span className="font-mono text-sm text-neon-pink uppercase tracking-widest">
              06 // Leadership
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Achievements & </span>
            <span className="text-gradient-cyber">Roles</span>
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              {...achievement}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Connecting lines (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30" />
      </div>
    </section>
  );
};

interface AchievementCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  isVisible: boolean;
  delay: number;
}

const AchievementCard = ({ icon: Icon, title, subtitle, description, color, isVisible, delay }: AchievementCardProps) => {
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { border: string; text: string; glow: string; shadow: string; bg: string }> = {
      'neon-cyan': {
        border: 'border-neon-cyan/30 hover:border-neon-cyan',
        text: 'text-neon-cyan',
        glow: 'from-neon-cyan/30',
        shadow: 'hover:shadow-neon-cyan',
        bg: 'bg-neon-cyan',
      },
      'neon-purple': {
        border: 'border-neon-purple/30 hover:border-neon-purple',
        text: 'text-neon-purple',
        glow: 'from-neon-purple/30',
        shadow: 'hover:shadow-neon-purple',
        bg: 'bg-neon-purple',
      },
      'neon-pink': {
        border: 'border-neon-pink/30 hover:border-neon-pink',
        text: 'text-neon-pink',
        glow: 'from-neon-pink/30',
        shadow: 'hover:shadow-neon-pink',
        bg: 'bg-neon-pink',
      },
    };
    return colorMap[colorName] || colorMap['neon-cyan'];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={`group relative glass-card rounded-2xl p-8 border ${colorClasses.border} ${colorClasses.shadow} transition-all duration-500 text-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${colorClasses.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div className={`absolute inset-0 rounded-full ${colorClasses.bg}/20 animate-ping opacity-0 group-hover:opacity-100`} />
          <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${colorClasses.glow} to-transparent flex items-center justify-center border ${colorClasses.border}`}>
            <Icon className={`w-8 h-8 ${colorClasses.text}`} />
          </div>
        </div>

        {/* Content */}
        <h3 className={`font-heading text-2xl font-bold ${colorClasses.text} mb-1`}>
          {title}
        </h3>
        <p className="font-body text-lg text-foreground font-semibold mb-3">
          {subtitle}
        </p>
        <p className="font-body text-sm text-muted-foreground">
          {description}
        </p>

        {/* Bottom line */}
        <div className={`mt-6 h-0.5 w-0 mx-auto group-hover:w-full rounded-full ${colorClasses.bg} transition-all duration-500`} />
      </div>
    </div>
  );
};

export default LeadershipSection;
