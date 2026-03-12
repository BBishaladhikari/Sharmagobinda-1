import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Sparkles, Zap, Circle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import profilePhoto from '@/assets/d1e59756476d01eebb62f00808f4342e9bb0702e.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', icon: Circle },
    { href: '#skills', label: 'Skills', icon: Sparkles },
    { href: '#experience', label: 'Experience', icon: Zap },
    { href: '#projects', label: 'Projects', icon: Sparkles },
    { href: '#contact', label: 'Contact', icon: Circle },
  ];

  return (
    <>
      {/* Animated scroll progress bar with gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316]"
          style={{ scaleX }}
        >
          {/* Glowing effect */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full bg-gradient-to-r from-[#6366F1] to-[#F97316] blur-md"
          />
        </motion.div>
        
        {/* Traveling particle */}
        <motion.div
          className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          style={{ left: useTransform(scrollYProgress, [0, 1], ['-20%', '100%']) }}
        />
      </motion.div>
      
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? 'w-[95%] max-w-6xl'
            : 'w-[98%] max-w-7xl'
        }`}
      >
        {/* Glassmorphic container with neon border */}
        <motion.div
          className="relative rounded-full overflow-hidden"
          style={{
            boxShadow: isScrolled 
              ? '0 0 40px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0, 0, 0, 0.3)'
              : '0 0 30px rgba(99, 102, 241, 0.2), 0 10px 40px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-full p-[2px]"
            style={{
              background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #F97316, #6366F1)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Inner dark background with blur */}
            <div className="w-full h-full rounded-full bg-[#0A0B14]/95 backdrop-blur-2xl" />
          </motion.div>

          {/* Floating orbs background */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <motion.div
              className="absolute w-32 h-32 bg-[#6366F1] rounded-full blur-[60px] opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ top: '50%', left: '10%' }}
            />
            <motion.div
              className="absolute w-32 h-32 bg-[#F97316] rounded-full blur-[60px] opacity-20"
              animate={{
                x: [0, -80, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ top: '50%', right: '10%' }}
            />
          </div>

          {/* Main navigation content */}
          <div className="relative px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo with holographic effect */}
              <motion.a
                href="#"
                className="relative overflow-hidden group z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 w-12 h-12 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      background: 'conic-gradient(from 0deg, #6366F1, #8B5CF6, #F97316, #6366F1)',
                    }}
                  />
                  
                  {/* Profile photo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A0B14] bg-gradient-to-br from-[#6366F1] to-[#F97316] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0B14]">
                      <img 
                        src={profilePhoto} 
                        alt="Gobinda Sharma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1] to-[#F97316] blur-xl opacity-0 group-hover:opacity-60"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.a>

              {/* Desktop Navigation - Floating pills */}
              <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  const isHovered = hoveredLink === link.href;
                  
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors group overflow-hidden"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredLink(link.href)}
                      onHoverEnd={() => setHoveredLink(null)}
                    >
                      {/* Background glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0,
                          scale: isActive || isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
                          style={{
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)',
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      
                      {/* Text */}
                      <span className={`relative z-10 flex items-center gap-2 ${
                        isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                      }`}>
                        {link.label}
                        
                        {/* Sparkle on hover */}
                        {isHovered && (
                          <motion.span
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                          >
                            <Sparkles size={14} className="text-[#F97316]" />
                          </motion.span>
                        )}
                      </span>
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  );
                })}
                
                {/* CTA Button with holographic effect */}
                <motion.a
                  href="#contact"
                  className="relative ml-2 px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316]"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  {/* Glowing border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1] to-[#F97316] blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="relative z-10 text-white flex items-center gap-2">
                    Let's Talk
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <Zap size={16} fill="currentColor" />
                    </motion.span>
                  </span>
                  
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </motion.a>
              </div>

              {/* Mobile Menu Button with neon effect */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full relative overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#F97316]/20 group-hover:from-[#6366F1]/30 group-hover:to-[#F97316]/30 transition-all" />
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-[#94A3B8] group-hover:text-white"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Full screen overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0A0B14]/95 backdrop-blur-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Neon orbs */}
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-[#6366F1] rounded-full blur-[100px] opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 bg-[#F97316] rounded-full blur-[100px] opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
          
          {/* Menu content */}
          <div className="relative h-full flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-md space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      className={`relative px-8 py-4 rounded-2xl overflow-hidden group ${
                        isActive ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]' : 'bg-[#1E293B]/50'
                      }`}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: isActive 
                          ? '0 0 30px rgba(99, 102, 241, 0.5)' 
                          : '0 0 10px rgba(99, 102, 241, 0.1)',
                      }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#F97316]/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <Icon 
                          size={24} 
                          className={isActive ? 'text-white' : 'text-[#6366F1] group-hover:text-[#F97316]'}
                        />
                        <span className={`text-2xl font-bold ${
                          isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                        }`}>
                          {link.label}
                        </span>
                      </div>
                      
                      {/* Number indicator */}
                      <span className={`absolute top-4 right-8 text-4xl font-bold ${
                        isActive ? 'text-white/20' : 'text-[#334155]'
                      }`}>
                        0{index + 1}
                      </span>
                    </motion.div>
                  </motion.a>
                );
              })}
              
              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="relative block mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className="relative px-8 py-5 rounded-2xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)',
                  }}
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-2xl font-bold text-white">
                      Let's Talk
                    </span>
                    <Zap size={24} fill="white" className="text-white" />
                  </div>
                  
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
