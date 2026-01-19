import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';
import { ResumeModal } from './ResumeModal';

export function DownloadResume() {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
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

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: isHovering ? ['-100%', '200%'] : '-100%' }}
          transition={{
            duration: 1.5,
            repeat: isHovering ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        />

        {/* Floating particles */}
        {isHovering && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ x: '50%', y: '50%', opacity: 0 }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-3">
          <motion.div
            animate={{ rotate: isHovering ? [0, -10, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Download size={24} />
          </motion.div>
          View Resume
          <motion.div
            animate={{
              scale: isHovering ? [1, 1.2, 1] : 1,
              rotate: isHovering ? [0, 360] : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <FileText size={24} />
          </motion.div>
        </span>

        {/* Glow pulse */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isHovering
              ? [
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                  '0 0 40px rgba(99, 102, 241, 0.8)',
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                ]
              : '0 0 20px rgba(99, 102, 241, 0.5)',
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

// Compact version for Hero section
export function DownloadResumeCompact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className="relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <Download size={20} />
          Resume
        </span>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.button>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
