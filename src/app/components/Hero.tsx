import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Zap } from 'lucide-react';
import profilePhoto from 'figma:asset/d1e59756476d01eebb62f00808f4342e9bb0702e.png';
import { FloatingParticles } from './FloatingParticles';
import { DownloadResumeCompact } from './DownloadResume';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typewriter effect for subtitle
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'UI/UX Designer & Full Stack Developer';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Enhanced 3D letter animation variants
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -90,
      scale: 0.5,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const name = "Gobinda Sharma";

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 relative overflow-hidden bg-[#0A0B14]">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Neon glow background elements with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#6366F1] rounded-full blur-[120px] opacity-40"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full bg-[#6366F1] rounded-full"
        />
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#F97316] rounded-full blur-[120px] opacity-30"
      >
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full bg-[#F97316] rounded-full"
        />
      </motion.div>

      {/* Additional neon accent blobs */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[100px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#EC4899] rounded-full blur-[100px] opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left side - Text content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-[#6366F1] to-[#F97316]" 
            />
            <span className="text-[#64748B] tracking-wider uppercase text-sm flex items-center gap-2">
              <Sparkles size={16} className="text-[#F97316]" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <div className="overflow-visible" style={{ perspective: '1000px' }}>
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-2xl md:text-3xl text-[#64748B]"
              >
                Hi, I'm
              </motion.span>
              
              {/* 3D Animated Name with stunning effects */}
              <div className="relative" style={{ perspective: '1000px' }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                  {name.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 15,
                        z: 50,
                        transition: { duration: 0.3 }
                      }}
                      className="inline-block relative"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        display: char === ' ' ? 'inline' : 'inline-block',
                      }}
                    >
                      {/* Main text with gradient */}
                      <motion.span
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="inline-block bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent font-black"
                        style={{
                          backgroundSize: '200% 100%',
                          WebkitTextStroke: '1px rgba(99, 102, 241, 0.1)',
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                      
                      {/* 3D shadow layers */}
                      <span
                        className="absolute top-0 left-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent opacity-30 blur-sm"
                        style={{
                          transform: 'translateZ(-20px)',
                          backgroundSize: '200% 100%',
                        }}
                        aria-hidden="true"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                      
                      {/* Glow effect */}
                      <motion.span
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                        className="absolute top-0 left-0 bg-gradient-to-r from-[#6366F1] to-[#F97316] bg-clip-text text-transparent blur-lg"
                        style={{
                          backgroundSize: '200% 100%',
                        }}
                        aria-hidden="true"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    </motion.span>
                  ))}
                </h1>
                
                {/* Enhanced animated underline with particles */}
                <div className="relative mt-4">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-2 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] origin-left rounded-full relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 2,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      style={{ width: '50%' }}
                    />
                  </motion.div>
                  
                  {/* Spark particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: [0, (i - 2) * 40, (i - 2) * 80],
                        y: [0, -20 - i * 5, -40 - i * 10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 1.5 + i * 0.1,
                        ease: 'easeOut',
                      }}
                      className="absolute -top-2 left-0 w-2 h-2 bg-[#F97316] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-[#475569] font-medium min-h-[2.5rem]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-7 bg-[#6366F1] ml-1 align-middle"
              />
            </h2>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-2 text-[#64748B]"
            >
              <MapPin size={18} className="text-[#F97316]" />
              <span>Pokhara, Nepal (Originally from Parbat)</span>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#64748B] leading-relaxed max-w-xl"
          >
            Crafting beautiful, user-centered digital experiences. Currently pursuing BIT at Gandaki University 
            and leading design & development projects at PDI Nepal.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white rounded-full transition-all flex items-center gap-2 relative overflow-hidden magnetic"
              style={{
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.3)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
              <ArrowRight 
                size={18} 
                className="relative z-10 group-hover:translate-x-1 transition-transform" 
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic px-8 py-4 border-2 border-[#6366F1] text-[#6366F1] rounded-full hover:bg-[#6366F1] hover:text-white transition-all flex items-center gap-2"
              style={{
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
              }}
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
            <DownloadResumeCompact />
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:bishalladhikari22@gmail.com', label: 'Email' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="magnetic w-12 h-12 rounded-full bg-[#1E293B] hover:bg-gradient-to-br hover:from-[#6366F1] hover:to-[#F97316] text-[#94A3B8] hover:text-white transition-all flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Right side - Image with WOW sliding effect */}
        <motion.div
          initial={{ x: 200, opacity: 0, rotateY: -30, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
          style={{ perspective: '1500px' }}
        >
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* Epic glow effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -inset-8 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] rounded-[3rem] blur-3xl"
            />

            {/* Animated particles around image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, Math.cos((i * Math.PI) / 4) * 100],
                  y: [0, Math.sin((i * Math.PI) / 4) * 100],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-[#6366F1] to-[#F97316] rounded-full"
                style={{
                  filter: 'blur(1px)',
                }}
              />
            ))}

            {/* Multiple rotating rings */}
            <motion.div
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: -360, scale: 1, opacity: 0.3 }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1, delay: 0.7 },
                opacity: { duration: 1, delay: 0.7 },
              }}
              className="absolute -inset-8 border-2 border-[#6366F1]/40 rounded-[2.5rem] border-dashed"
            />
            <motion.div
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 0.2 }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1, delay: 0.9 },
                opacity: { duration: 1, delay: 0.9 },
              }}
              className="absolute -inset-12 border border-[#F97316]/40 rounded-[3rem]"
            />
            
            {/* Main image container */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated border */}
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(0deg, #6366F1, #F97316)',
                    'linear-gradient(360deg, #6366F1, #F97316)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-1 rounded-[2rem] opacity-75 blur-sm"
              />
              
              <div className="aspect-square relative bg-gradient-to-br from-[#EEF2FF] to-[#F8FAFC] rounded-[2rem] overflow-hidden">
                <motion.img
                  src={profilePhoto}
                  alt="Gobinda Sharma - UI/UX Designer"
                  className="w-full h-full object-cover relative z-10"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
                
                {/* Scanline effect */}
                <motion.div
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  style={{ height: '30%' }}
                />
                
                {/* Hover overlay effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/70 via-[#8B5CF6]/30 to-transparent flex items-end justify-center pb-12"
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-center space-y-2"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Zap size={32} className="mx-auto" />
                    </motion.div>
                    <p className="text-xl font-bold">Let's Create Together</p>
                    <p className="text-sm">Transforming Ideas into Reality</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced floating badge */}
            <motion.div
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-6 -right-6 z-20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: 5,
                }}
                className="magnetic bg-white p-6 rounded-2xl shadow-2xl border-2 border-[#F1F5F9] cursor-pointer relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(249, 115, 22, 0.1))',
                      'linear-gradient(225deg, rgba(99, 102, 241, 0.1), rgba(249, 115, 22, 0.1))',
                      'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(249, 115, 22, 0.1))',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0"
                />
                
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.7)',
                        '0 0 0 15px rgba(34, 197, 94, 0)',
                        '0 0 0 0 rgba(34, 197, 94, 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">Available for Work</p>
                    <p className="text-xs text-[#64748B]">Project Manager @ PDI Nepal</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer magnetic"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-[#64748B] uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#6366F1] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-[#6366F1] to-[#F97316] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}