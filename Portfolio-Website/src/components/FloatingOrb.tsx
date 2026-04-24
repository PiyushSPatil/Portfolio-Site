import { useEffect, useRef } from 'react';

const FloatingOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mouseX = 0;
    let mouseY = 0;
    let orbX = 0;
    let orbY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    };

    const animate = () => {
      orbX += (mouseX - orbX) * 0.05;
      orbY += (mouseY - orbY) * 0.05;
      
      orb.style.transform = `translate(${orbX}px, ${orbY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
      <div ref={orbRef} className="relative">
        {/* Main orb */}
        <div className="w-72 h-72 rounded-full relative animate-float">
          {/* Core */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink opacity-80 blur-sm" />
          
          {/* Inner glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-neon-cyan/40 via-neon-purple/30 to-transparent" />
          
          {/* Outer ring 1 */}
          <div className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-spin-slow" />
          
          {/* Outer ring 2 */}
          <div 
            className="absolute -inset-4 rounded-full border border-neon-purple/20"
            style={{ animationDirection: 'reverse', animationDuration: '25s' }}
          />
          
          {/* Outer ring 3 */}
          <div 
            className="absolute -inset-8 rounded-full border border-neon-pink/10 animate-spin-slow"
            style={{ animationDuration: '30s' }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-3xl animate-glow-pulse" />
          
          {/* Particles around orb */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neon-cyan"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateX(140px)`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        
        {/* HUD Elements */}
        <div className="absolute top-0 -left-20 text-neon-cyan font-mono text-xs opacity-50">
          <div>[SYS_READY]</div>
          <div>v2.0.27</div>
        </div>
        
        <div className="absolute bottom-0 -right-16 text-neon-purple font-mono text-xs opacity-50">
          <div>NEURAL_LINK</div>
          <div>ACTIVE</div>
        </div>
      </div>
    </div>
  );
};

export default FloatingOrb;
