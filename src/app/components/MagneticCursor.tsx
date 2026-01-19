import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic')) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add listeners for all magnetic elements
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full border-2 border-white"
        />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[99] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 3 : 1,
          }}
          className="w-full h-full rounded-full bg-gradient-to-br from-[#6366F1] to-[#F97316] blur-sm"
        />
      </motion.div>

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-0 left-0 pointer-events-none z-[101] text-white text-sm font-semibold px-3 py-1 bg-[#6366F1] rounded-full whitespace-nowrap hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '50%',
            translateY: '-200%',
          }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
}
