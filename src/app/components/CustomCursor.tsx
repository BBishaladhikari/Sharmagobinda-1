import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    let particleId = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Create particle trail (limit to 20 particles)
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev.slice(-20), newParticle]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY, isMobile]);

  // Remove old particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Particle Trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            left: particle.x - 2,
            top: particle.y - 2,
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1, #F97316)',
            pointerEvents: 'none',
            zIndex: 9998,
            boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          position: 'fixed',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {/* Outer Ring */}
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: '100%',
            height: '100%',
            border: '2px solid',
            borderImage: 'linear-gradient(135deg, #6366F1, #F97316) 1',
            borderRadius: '50%',
            position: 'absolute',
            boxShadow: isHovering
              ? '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(249, 115, 22, 0.4)'
              : '0 0 10px rgba(99, 102, 241, 0.4)',
          }}
        />

        {/* Inner Dot */}
        <motion.div
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          style={{
            width: 8,
            height: 8,
            background: 'linear-gradient(135deg, #6366F1, #F97316)',
            borderRadius: '50%',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)',
          }}
        />

        {/* Pulse Effect on Hover */}
        {isHovering && (
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              width: '100%',
              height: '100%',
              border: '2px solid #6366F1',
              borderRadius: '50%',
              position: 'absolute',
            }}
          />
        )}
      </motion.div>
    </>
  );
}
