import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-heading text-2xl font-bold text-gradient-cyber tracking-wider">
            PP<span className="text-neon-cyan">.</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-neon-cyan" />
            <span>by Piyush Patil</span>
          </div>

          {/* Year */}
          <div className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
