import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'piyushpatil93226@gmail.com',
      href: 'mailto:piyushpatil93226@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9834693891',
      href: 'tel:+919834693891',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-purple" />
            <span className="font-mono text-sm text-neon-purple uppercase tracking-widest">
              08 // Contact
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-purple" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Let's </span>
            <span className="text-gradient-cyber">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            className={`glass-card rounded-3xl p-8 border border-border/50 hover:border-neon-cyan/30 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Your Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan transition-colors duration-300"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Your Email
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <div className="relative group">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </div>

              {/* Submit button */}
              <Button variant="cyber" size="lg" className="w-full group">
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-8 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms', transition: 'all 1s' }}
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 glass-card rounded-xl p-4 border border-border/50 hover:border-neon-purple/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="font-body text-foreground group-hover:text-neon-purple transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Find me on
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 glass-card rounded-xl border border-border/50 hover:border-neon-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 rounded-2xl blur-3xl" />
              <div className="relative glass-card rounded-2xl p-6 border border-border/50 text-center">
                <div className="font-heading text-xl font-bold text-foreground mb-2">
                  Open for Opportunities
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Currently looking for internships and collaborations in AI/ML and Full-Stack Development.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="font-mono text-xs text-neon-cyan">AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
