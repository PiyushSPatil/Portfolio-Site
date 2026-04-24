import { useEffect, useRef } from 'react';
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import FloatingOrb from './FloatingOrb';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Status indicator */}
            <div className="flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="font-mono text-sm text-neon-cyan uppercase tracking-widest">
                Available for opportunities
              </span>
            </div>

            {/* Main heading */}
            <h1
              ref={titleRef}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-none opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block text-foreground">Piyush</span>
              <span className="block text-gradient-cyber">Patil</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="font-body text-xl md:text-2xl text-muted-foreground max-w-lg opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-neon-cyan">AI/ML Engineer</span>
              <span className="mx-3 text-neon-purple">•</span>
              <span className="text-neon-purple">Full-Stack Developer</span>
              <span className="mx-3 text-neon-pink">•</span>
              <span className="text-neon-pink">Researcher</span>
            </p>

            {/* Description */}
            <p className="font-body text-lg text-muted-foreground/80 max-w-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Building intelligent systems and crafting digital experiences that push the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="cyber" size="lg" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <FileText size={18} />
                  Resume
                </a>
              </Button>
              <Button variant="neon" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button variant="hologram" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Tech stack preview */}
            <div className="flex items-center gap-6 pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Tech Stack</span>
              <div className="flex gap-3">
                {['Python', 'React', 'PyTorch', 'Node.js'].map((tech, i) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border/50 text-xs font-mono text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Floating Orb */}
          <FloatingOrb />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-neon-cyan" size={24} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
