import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'Voice-Activated EBOM Builder',
      description: 'Speech-to-text electronic BOM builder integrated with Mouser API for component management.',
      tags: ['React.js', 'Node.js', 'Web Speech API', 'Express.js'],
      color: 'neon-cyan',
    },
    {
      title: 'AlumniConnect',
      description: 'Social platform connecting alumni with current students for mentorship and networking.',
      tags: ['React.js', 'MongoDB', 'Node.js', 'Socket.io'],
      color: 'neon-purple',
    },
    {
      title: 'Smart Waste Classification',
      description: 'CNN-based waste classification system for automated sorting and recycling optimization.',
      tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      color: 'neon-pink',
    },
    {
      title: 'Total Solutions Industrial Portfolio',
      description: 'Professional portfolio website for an industrial solutions company.',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'neon-cyan',
    },
    {
      title: 'School Website',
      description: 'Full-featured school management website with student portal and admin dashboard.',
      tags: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
      color: 'neon-purple',
    },
    {
      title: 'CalmPulse',
      description: 'AI-powered mental health chatbot providing emotional support and wellness guidance.',
      tags: ['Python', 'NLP', 'TensorFlow', 'Flask'],
      color: 'neon-pink',
    },
    {
      title: 'Air Quality Monitoring ML Research',
      description: 'Machine learning research project for predicting and monitoring air quality metrics.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      color: 'neon-cyan',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="font-mono text-sm text-neon-cyan uppercase tracking-widest">
              04 // Projects
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Featured </span>
            <span className="text-gradient-cyber">Work</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  isVisible: boolean;
  delay: number;
}

const ProjectCard = ({ title, description, tags, color, isVisible, delay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
    setIsHovered(false);
  };

  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { border: string; text: string; glow: string; shadow: string }> = {
      'neon-cyan': {
        border: 'hover:border-neon-cyan',
        text: 'text-neon-cyan',
        glow: 'from-neon-cyan/20',
        shadow: 'group-hover:shadow-neon-cyan',
      },
      'neon-purple': {
        border: 'hover:border-neon-purple',
        text: 'text-neon-purple',
        glow: 'from-neon-purple/20',
        shadow: 'group-hover:shadow-neon-purple',
      },
      'neon-pink': {
        border: 'hover:border-neon-pink',
        text: 'text-neon-pink',
        glow: 'from-neon-pink/20',
        shadow: 'group-hover:shadow-neon-pink',
      },
    };
    return colorMap[colorName] || colorMap['neon-cyan'];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      ref={cardRef}
      className={`group glass-card rounded-2xl p-6 border border-border/50 ${colorClasses.border} transition-all duration-500 cursor-pointer ${
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
      {/* Holographic overlay */}
      <div className="absolute inset-0 rounded-2xl holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors duration-300">
            <Layers className={`w-6 h-6 ${colorClasses.text}`} />
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
              <Github className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <h3 className={`font-heading text-lg font-bold text-foreground group-hover:${colorClasses.text} transition-colors duration-300 mb-2`}>
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-muted/50 border border-border/50 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default ProjectsSection;
