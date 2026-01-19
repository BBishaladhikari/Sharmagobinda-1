import { motion, useInView } from 'motion/react';
import { Heart, Github, Linkedin, Mail, Sparkles, Zap, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative bg-[#0A0B14] text-white py-20 px-6 lg:px-8 overflow-hidden">
      {/* Neon top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent origin-center"
        style={{
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
        }}
      />
      
      {/* Animated neon orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#F97316] rounded-full blur-[150px] opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left - Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Name with holographic effect */}
            <motion.div className="relative inline-block">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent cursor-pointer relative z-10"
                style={{
                  textShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                }}
              >
                Gobinda Sharma
              </motion.h3>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)',
                }}
              />
            </motion.div>
            
            <p className="text-[#94A3B8] leading-relaxed">
              UI/UX Designer & Full Stack Developer crafting meaningful digital experiences from Pokhara, Nepal.
            </p>
            
            {/* Social Links with neon effects */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Github, href: 'https://github.com', color: 'from-[#6366F1] to-[#8B5CF6]' },
                { Icon: Linkedin, href: 'https://linkedin.com', color: 'from-[#0077B5] to-[#005885]' },
                { Icon: Mail, href: 'mailto:bishalladhikari22@gmail.com', color: 'from-[#F97316] to-[#EAB308]' },
              ].map((social, index) => {
                const { Icon } = social;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1, 
                      type: 'spring', 
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      rotate: 360,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} text-white flex items-center justify-center overflow-hidden group`}
                    style={{
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                    }}
                  >
                    <Icon size={20} className="relative z-10" />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Zap size={20} className="text-[#6366F1]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 10 }}
                    className="text-[#94A3B8] hover:text-white transition-colors inline-flex items-center gap-2 group relative"
                  >
                    <motion.span
                      className="text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                    {link.label}
                    
                    {/* Neon underline on hover */}
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#F97316] rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        transformOrigin: 'left',
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                      }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-[#F97316]" />
              Get In Touch
            </h4>
            <ul className="space-y-4 text-[#94A3B8]">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.7 }}
                className="group"
              >
                <a 
                  href="mailto:gobinda.sharma@example.com"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#6366F1] group-hover:to-[#8B5CF6] transition-all"
                    style={{
                      boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <span>gobinda.sharma@example.com</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.75 }}
                className="group flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#10B981] group-hover:to-[#14B8A6] transition-all"
                  style={{
                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <span>Pokhara, Nepal</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.8 }}
                className="group"
              >
                <a 
                  href="tel:+9779824157781"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#F97316] group-hover:to-[#EAB308] transition-all"
                    style={{
                      boxShadow: '0 0 15px rgba(249, 115, 22, 0.2)',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <span>+977 9824157781</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Neon divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#334155] to-transparent mb-8"
        />

        {/* Bottom - Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <p className="text-[#94A3B8] text-sm text-center sm:text-left flex items-center gap-2">
            © 2026 Gobinda Sharma. Made with 
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart size={16} className="inline text-[#F97316] fill-current" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))',
                }}
              />
            </motion.span>
            in Pokhara
          </p>
          
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-[#94A3B8] text-sm flex items-center gap-2">
              <Sparkles size={14} className="text-[#6366F1]" />
              Designed & Developed by Gobinda Sharma
            </p>
          </motion.div>
        </motion.div>

        {/* Floating particles decoration */}
        {isInView && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#6366F1] rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                }}
              />
            ))}
          </>
        )}
      </div>
    </footer>
  );
}