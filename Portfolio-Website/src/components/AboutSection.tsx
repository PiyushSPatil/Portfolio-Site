import { useEffect, useRef, useState } from 'react';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Brain, label: 'AI/ML Focus', color: 'neon-cyan' },
    { icon: Code2, label: 'Full-Stack', color: 'neon-purple' },
    { icon: Rocket, label: 'Researcher', color: 'neon-pink' },
    { icon: Users, label: 'Leader', color: 'neon-cyan' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="font-mono text-sm text-neon-cyan uppercase tracking-widest">
              01 // About Me
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Who </span>
            <span className="text-gradient-cyber">Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Profile frame */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 rounded-3xl blur-3xl" />
              
              {/* Main frame */}
              <div className="relative glass-card rounded-3xl p-8 h-full neon-border overflow-hidden">
                {/* HUD corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-cyan/50" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-cyan/50" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-cyan/50" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-cyan/50" />

                {/* Content */}
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="font-heading text-4xl font-bold text-gradient-cyber">PP</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {[
                      { value: '8.49', label: 'CGPA' },
                      { value: '2027', label: 'Graduating' },
                      { value: '5+', label: 'Projects' },
                      { value: '3+', label: 'Leadership' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-heading text-2xl font-bold text-neon-cyan">{stat.value}</div>
                        <div className="font-mono text-xs text-muted-foreground uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 scan-line pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Main text */}
            <div className="space-y-6">
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="text-neon-cyan font-semibold">Computer Science (AI & ML)</span> engineering student at PCCOE (Graduating 2027). I build AI models, full-stack applications, and research-driven solutions for real-world impact.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I love designing <span className="text-neon-purple">scalable backend systems</span>, <span className="text-neon-pink">neural networks</span>, and <span className="text-neon-cyan">intelligent applications</span>. I'm President of the AAAI Student Chapter, Editor of Samvaad Newsletter, and a Finalist at IEEE TechSangam Hackathon.
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-${item.color}/30 hover:border-${item.color} transition-colors duration-300 group`}
                >
                  <item.icon className={`w-4 h-4 text-${item.color}`} />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline snippet */}
            <div className="relative pl-8 border-l-2 border-neon-cyan/30 space-y-4">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-neon-cyan shadow-neon-cyan" />
              <div>
                <div className="font-mono text-xs text-neon-cyan uppercase tracking-wider">Current Focus</div>
                <div className="font-body text-foreground">AI/ML Research & Full-Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
