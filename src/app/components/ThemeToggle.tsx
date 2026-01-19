import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #6366F1, #8B5CF6)'
          : 'linear-gradient(135deg, #F97316, #EAB308)',
        boxShadow: isDark
          ? '0 0 30px rgba(99, 102, 241, 0.5)'
          : '0 0 30px rgba(249, 115, 22, 0.5)',
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 1.1,
        }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {isDark ? (
          <Moon size={24} className="text-white" />
        ) : (
          <Sun size={24} className="text-white" />
        )}
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
        }}
      />
    </motion.button>
  );
}
