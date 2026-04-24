import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Programming',
      color: 'neon-cyan',
      skills: ['Python', 'C++', 'JavaScript', 'Java', 'R'],
    },
    {
      title: 'ML Libraries',
      color: 'neon-purple',
      skills: ['NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'PyTorch', 'TensorFlow'],
    },
    {
      title: 'Core CS',
      color: 'neon-pink',
      skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks'],
    },
    {
      title: 'Web Development',
      color: 'neon-cyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js'],
    },
    {
      title: 'Databases',
      color: 'neon-purple',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      color: 'neon-pink',
      skills: ['Git', 'VS Code', 'Linux'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-purple to-transparent" />
            <span className="font-mono text-sm text-neon-purple uppercase tracking-widest">
              02 // Skills
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Tech </span>
            <span className="text-gradient-cyber">Arsenal</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  color: string;
  skills: string[];
  isVisible: boolean;
  delay: number;
}

const SkillCard = ({ title, color, skills, isVisible, delay }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
    setIsHovered(false);
  };

  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { border: string; text: string; bg: string; shadow: string; glow: string }> = {
      'neon-cyan': {
        border: 'border-neon-cyan/30 hover:border-neon-cyan',
        text: 'text-neon-cyan',
        bg: 'bg-neon-cyan',
        shadow: 'shadow-neon-cyan',
        glow: 'from-neon-cyan/20',
      },
      'neon-purple': {
        border: 'border-neon-purple/30 hover:border-neon-purple',
        text: 'text-neon-purple',
        bg: 'bg-neon-purple',
        shadow: 'shadow-neon-purple',
        glow: 'from-neon-purple/20',
      },
      'neon-pink': {
        border: 'border-neon-pink/30 hover:border-neon-pink',
        text: 'text-neon-pink',
        bg: 'bg-neon-pink',
        shadow: 'shadow-neon-pink',
        glow: 'from-neon-pink/20',
      },
    };
    return colorMap[colorName] || colorMap['neon-cyan'];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-2xl p-6 border ${colorClasses.border} transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.glow} to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-2 rounded-full ${colorClasses.bg} ${isHovered ? colorClasses.shadow : ''} transition-shadow duration-300`} />
          <h3 className={`font-heading text-lg font-bold ${colorClasses.text}`}>
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>
    </div>
  );
};

export default SkillsSection;
