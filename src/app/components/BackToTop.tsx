import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#F97316] text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 transition-shadow flex items-center justify-center group"
    >
      {/* Circular progress indicator */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            pathLength: pathLength,
            strokeDasharray: '0 1',
          }}
        />
      </svg>

      {/* Arrow icon */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowUp size={24} className="relative z-10" />
      </motion.div>
    </motion.button>
  );
}
