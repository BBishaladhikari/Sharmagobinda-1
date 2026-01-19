import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const words = children.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + wordIndex * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

interface ScrambleTextProps {
  children: string;
  className?: string;
}

export function ScrambleText({ children, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iterations = 0;
    const maxIterations = children.length;

    const interval = setInterval(() => {
      setDisplayText(
        children
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return children[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(children);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, children]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function SplitText({ children, className = '', delay = 0 }: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const letters = children.split('');

  return (
    <span ref={ref} className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}
