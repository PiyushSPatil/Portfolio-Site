import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="font-mono text-sm text-neon-cyan uppercase tracking-widest">
              07 // Education
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Academic </span>
            <span className="text-gradient-cyber">Background</span>
          </h2>
        </div>

        {/* Education card */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`group relative glass-card rounded-3xl p-8 md:p-12 border border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* HUD corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-cyan/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-cyan/50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-colors duration-300">
                    <GraduationCap className="w-10 h-10 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                      B.Tech CSE (AI & ML)
                    </h3>
                    <p className="font-body text-lg text-neon-purple font-semibold">
                      Pimpri Chinchwad College of Engineering
                    </p>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30">
                  <Award className="w-5 h-5 text-neon-cyan" />
                  <span className="font-heading text-xl font-bold text-neon-cyan">8.49</span>
                  <span className="font-mono text-xs text-muted-foreground">CGPA</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span className="font-mono">2023 – 2027</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/30 to-transparent" />
                <span className="px-3 py-1 rounded-full bg-neon-purple/20 font-mono text-xs text-neon-purple">
                  IN PROGRESS
                </span>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: 'Specialization', value: 'AI & Machine Learning' },
                  { label: 'Focus Areas', value: 'Deep Learning, NLP' },
                  { label: 'Expected', value: 'Class of 2027' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-neon-cyan/30 transition-colors duration-300"
                  >
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-foreground font-medium">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
