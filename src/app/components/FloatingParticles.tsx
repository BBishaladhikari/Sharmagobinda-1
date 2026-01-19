import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.left}vw`,
            y: `${particle.top}vh`,
            opacity: 0,
          }}
          animate={{
            y: [
              `${particle.top}vh`,
              `${particle.top - 20}vh`,
              `${particle.top + 20}vh`,
              `${particle.top}vh`,
            ],
            x: [
              `${particle.left}vw`,
              `${particle.left + 10}vw`,
              `${particle.left - 10}vw`,
              `${particle.left}vw`,
            ],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        >
          {particle.id % 3 === 0 ? (
            // Circle particles
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  particle.id % 2 === 0
                    ? 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)'
                    : 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0) 70%)',
              }}
            />
          ) : particle.id % 3 === 1 ? (
            // Square particles
            <div
              className="w-full h-full rounded-lg rotate-45"
              style={{
                background:
                  particle.id % 2 === 0
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)'
                    : 'linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0) 70%)',
              }}
            />
          ) : (
            // Triangle particles
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background:
                  particle.id % 2 === 0
                    ? 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)'
                    : 'linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0) 70%)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
