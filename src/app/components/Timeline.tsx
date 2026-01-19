import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, Rocket, Sparkles, Calendar, MapPin } from 'lucide-react';
import { SplitText } from './TextAnimations';

interface TimelineItem {
  id: number;
  type: 'education' | 'work' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  icon: any;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'UI/UX Designer & Developer',
    organization: 'PDI Nepal',
    location: 'Pokhara, Nepal',
    period: '2023 - Present',
    description: 'Leading design and development initiatives, managing projects, and creating user-centered digital experiences.',
    highlights: [
      'Lead UI/UX design for multiple client projects',
      'Full-stack development with React & Django',
      'Project management and team coordination',
      'Increased user engagement by 40% through redesign',
    ],
    icon: Briefcase,
    color: 'from-[#6366F1] to-[#8B5CF6]',
  },
  {
    id: 2,
    type: 'education',
    title: 'Bachelor of Information Technology (BIT)',
    organization: 'Gandaki University',
    location: 'Parbat, Nepal',
    period: '2021 - Present',
    description: 'Pursuing comprehensive education in Information Technology with focus on software development and design.',
    highlights: [
      'Software Engineering & Development',
      'Database Management Systems',
      'Web Technologies & Frameworks',
      'UI/UX Design Principles',
    ],
    icon: GraduationCap,
    color: 'from-[#F97316] to-[#EAB308]',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Professional Portfolio Launch',
    organization: 'Personal Project',
    location: 'Pokhara, Nepal',
    period: '2024',
    description: 'Designed and developed a world-class portfolio showcasing advanced animations and modern web technologies.',
    highlights: [
      'Cutting-edge neon animations with Framer Motion',
      'Responsive design with Tailwind CSS',
      'EmailJS integration for contact form',
      'Custom cursor and interactive elements',
    ],
    icon: Rocket,
    color: 'from-[#10B981] to-[#14B8A6]',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'UI/UX Design Excellence',
    organization: 'Multiple Client Projects',
    location: 'Nepal',
    period: '2022 - 2024',
    description: 'Delivered exceptional design solutions for various clients, focusing on user experience and modern aesthetics.',
    highlights: [
      'Increased conversion rates by 35%',
      'Improved user satisfaction scores',
      'Streamlined user workflows',
      'Created comprehensive design systems',
    ],
    icon: Award,
    color: 'from-[#EC4899] to-[#8B5CF6]',
  },
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0A0B14] relative overflow-hidden">
      {/* Neon background orbs */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-20"
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
        className="absolute bottom-40 left-20 w-96 h-96 bg-[#F97316] rounded-full blur-[150px] opacity-15"
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
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-[#6366F1] uppercase tracking-wider text-sm font-semibold inline-flex items-center gap-2"
            style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          >
            <Sparkles size={16} />
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            <SplitText delay={0.2}>Timeline</SplitText>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full"
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto text-lg">
            From education to professional achievements, here's my journey in design and development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#F97316] transform -translate-x-1/2 origin-top hidden md:block"
            style={{
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8 gap-0`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="md:w-[calc(50%-4rem)] w-full relative"
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl p-[2px]"
                      animate={{
                        background: hoveredId === item.id
                          ? `linear-gradient(135deg, ${item.color.split(' ')[0].replace('from-', '')}, ${item.color.split(' ')[1].replace('to-', '')})`
                          : 'linear-gradient(135deg, #334155, #334155)',
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative bg-[#1E293B] rounded-2xl p-6 overflow-hidden">
                      {/* Background glow on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === item.id ? 0.1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                      />

                      <div className="relative z-10">
                        {/* Type Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}
                            style={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)' }}
                          >
                            {item.type === 'education' && '🎓 Education'}
                            {item.type === 'work' && '💼 Work'}
                            {item.type === 'achievement' && '🏆 Achievement'}
                          </motion.span>

                          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

                        {/* Organization & Location */}
                        <div className="space-y-1 mb-4">
                          <p className="text-[#6366F1] font-semibold">{item.organization}</p>
                          <div className="flex items-center gap-1 text-sm text-[#94A3B8]">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <motion.div
                                animate={{
                                  scale: hoveredId === item.id ? [1, 1.2, 1] : 1,
                                }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-1.5 flex-shrink-0`}
                                style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)' }}
                              />
                              <p className="text-sm text-[#E2E8F0]">{highlight}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="absolute md:relative left-4 md:left-auto z-20"
                  >
                    <motion.div
                      animate={{
                        boxShadow: hoveredId === item.id
                          ? [
                              '0 0 20px rgba(99, 102, 241, 0.5)',
                              '0 0 40px rgba(99, 102, 241, 0.8)',
                              '0 0 20px rgba(99, 102, 241, 0.5)',
                            ]
                          : '0 0 20px rgba(99, 102, 241, 0.3)',
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                    >
                      <Icon size={28} className="text-white relative z-10" />

                      {/* Pulse effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="md:w-[calc(50%-4rem)] w-0 hidden md:block" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.5, type: 'spring' }}
            className="hidden md:flex items-center justify-center mt-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                  '0 0 40px rgba(99, 102, 241, 0.8)',
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#F97316]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
