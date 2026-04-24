import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'SingleSource Electronics',
      period: 'June – August 2025',
      location: 'Remote',
      highlights: [
        'Voice-Enabled EBOM Builder (speech-to-text + Mouser API)',
        'Full-stack development (React.js + Node.js + Express.js)',
        'Web Speech API integration',
        'UI/UX improvements',
        'Collaboration with hardware teams',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-pink to-transparent" />
            <span className="font-mono text-sm text-neon-pink uppercase tracking-widest">
              03 // Experience
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Work </span>
            <span className="text-gradient-cyber">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple shadow-neon-cyan animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-neon-cyan/30 animate-ping" />
              </div>

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div
                  className="glass-card rounded-2xl p-6 border border-border/50 hover:border-neon-cyan/50 transition-all duration-500 group cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="font-body text-neon-purple font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors duration-300">
                        <Briefcase className="w-5 h-5 text-neon-cyan" />
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 flex-shrink-0" />
                          <span className="font-body text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom decoration */}
                    <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
