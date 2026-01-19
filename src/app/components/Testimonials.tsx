import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SplitText } from './TextAnimations';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: "Gobinda's UI/UX expertise transformed our product. His attention to detail and understanding of user psychology resulted in a 40% increase in user engagement. Highly recommended!",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Working with Gobinda was exceptional! He delivered a stunning, user-friendly design that exceeded our expectations. His React development skills are top-notch.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: "Gobinda's design thinking and project management skills are outstanding. He delivered our project on time with exceptional quality. A true professional!",
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'InnovateLabs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'His ability to combine beautiful design with technical excellence is rare. Gobinda created an intuitive interface that our users love. Best designer we have worked with!',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'DesignFirst',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Gobinda brings creativity and professionalism to every project. His Django and React expertise, combined with his design skills, make him a complete package!',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0F1419] relative overflow-hidden">
      {/* Neon background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-20"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-15"
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

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-[#6366F1] uppercase tracking-wider text-sm font-semibold inline-flex items-center gap-2"
            style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          >
            <Sparkles size={16} />
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            <SplitText delay={0.2}>What Clients Say</SplitText>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full"
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-[2px]"
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
          />

          {/* Card Content */}
          <div className="relative bg-[#1E293B] rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center"
              style={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
            >
              <Quote size={32} className="text-white" />
            </motion.div>

            <div className="mt-12">
              {/* Testimonial Text */}
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#E2E8F0] text-lg md:text-xl leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                    >
                      <Star
                        size={24}
                        className="text-[#F97316] fill-[#F97316]"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))' }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#6366F1] relative">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#6366F1]"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  <div>
                    <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-[#94A3B8]">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-[#6366F1] to-[#F97316] w-8'
                        : 'bg-[#334155]'
                    }`}
                    style={
                      index === currentIndex
                        ? { boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }
                        : {}
                    }
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Auto-rotate every 5 seconds */}
        <motion.div
          key={currentIndex}
          onAnimationComplete={() => {
            setTimeout(() => {
              nextTestimonial();
            }, 5000);
          }}
        />
      </div>
    </section>
  );
}