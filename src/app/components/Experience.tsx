import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { SplitText } from './TextAnimations';

export function Experience() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animate timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const experiences = [
    {
      type: 'work',
      title: 'Project Manager',
      organization: 'PDI Nepal',
      period: '2023 - Present',
      location: 'Pokhara, Nepal',
      description: [
        'Leading cross-functional teams in delivering user-centered digital products',
        'Managing project timelines, resources, and stakeholder communications',
        'Implementing agile methodologies to improve team efficiency by 40%',
        'Overseeing UI/UX design processes and development workflows',
      ],
      skills: ['Project Management', 'Team Leadership', 'Agile/Scrum', 'Stakeholder Management'],
      achievements: '40% efficiency improvement',
    },
    {
      type: 'work',
      title: 'UI/UX Designer & Developer',
      organization: 'Freelance',
      period: '2022 - Present',
      location: 'Remote',
      description: [
        'Designed and developed responsive web applications for diverse clients',
        'Conducted user research and usability testing to inform design decisions',
        'Created design systems and component libraries for scalable solutions',
        'Collaborated with clients to translate business goals into user experiences',
      ],
      skills: ['Figma', 'React', 'Django', 'User Research', 'Design Systems'],
      achievements: '20+ successful projects',
    },
    {
      type: 'education',
      title: 'Bachelor in Information Technology (BIT)',
      organization: 'Gandaki University',
      period: '2021 - Present',
      location: 'Pokhara, Nepal',
      description: [
        'Pursuing comprehensive education in software engineering and IT management',
        'Active member of university tech and design clubs',
        'Leading student projects focused on community impact',
        'Maintaining strong academic performance while working professionally',
      ],
      skills: ['Software Engineering', 'Database Systems', 'Web Technologies', 'Algorithms'],
      achievements: 'Honor Roll Student',
    },
    {
      type: 'work',
      title: 'Junior UI/UX Designer',
      organization: 'Various Projects',
      period: '2021 - 2022',
      location: 'Pokhara, Nepal',
      description: [
        'Assisted in designing user interfaces for web and mobile applications',
        'Created wireframes, mockups, and prototypes for client presentations',
        'Participated in user testing sessions and incorporated feedback',
        'Learned industry-standard design tools and best practices',
      ],
      skills: ['UI Design', 'Prototyping', 'User Testing', 'Collaboration'],
      achievements: '10+ projects completed',
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 lg:px-8 bg-[#0F1419] overflow-hidden">
      {/* Neon background elements */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-[#6366F1] rounded-full blur-[140px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-[#F97316] rounded-full blur-[130px] opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
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
          >
            <TrendingUp size={16} />
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <SplitText delay={0.2}>Experience & Education</SplitText>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full"
          />
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#E2E8F0]" />
            
            {/* Animated progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#F97316]"
            >
              {/* Glowing effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-b from-[#6366F1] to-[#F97316] blur-sm"
              />
            </motion.div>

            {/* Animated particles along timeline */}
            {isInView && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{
                      y: '200%',
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: 'linear',
                    }}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                  />
                ))}
              </>
            )}
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.type === 'work' ? Briefcase : GraduationCap;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -80 : 80 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Timeline dot with animation */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.3,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className="relative"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${
                        exp.type === 'work' 
                          ? 'from-[#6366F1] to-[#8B5CF6]' 
                          : 'from-[#F97316] to-[#EAB308]'
                      } border-4 border-white shadow-xl`} />
                      
                      {/* Pulsing ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className={`absolute inset-0 rounded-full border-2 ${
                          exp.type === 'work' 
                            ? 'border-[#6366F1]' 
                            : 'border-[#F97316]'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'} pl-20 md:pl-0`}>
                    <motion.div
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ 
                        scale: 1.02,
                        y: -8,
                      }}
                      className="magnetic inline-block w-full cursor-pointer"
                    >
                      <div className={`relative bg-white p-8 rounded-3xl border-2 ${
                        isHovered ? 'border-[#6366F1]' : 'border-[#E2E8F0]'
                      } transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                        
                        {/* Gradient background on hover */}
                        <motion.div
                          animate={{
                            opacity: isHovered ? 0.1 : 0,
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${
                            exp.type === 'work' 
                              ? 'from-[#6366F1] to-[#8B5CF6]' 
                              : 'from-[#F97316] to-[#EAB308]'
                          }`}
                        />

                        {/* Animated corner accents */}
                        <motion.div
                          animate={{
                            rotate: isHovered ? 180 : 0,
                            scale: isHovered ? 1.2 : 1,
                          }}
                          className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} w-12 h-12 rounded-xl bg-gradient-to-br ${
                            exp.type === 'work' 
                              ? 'from-[#6366F1]/20 to-[#8B5CF6]/20' 
                              : 'from-[#F97316]/20 to-[#EAB308]/20'
                          }`}
                        />

                        <div className={`relative z-10 flex items-start gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <motion.div
                            animate={{
                              rotate: isHovered ? [0, -10, 10, 0] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                              exp.type === 'work' 
                                ? 'from-[#6366F1] to-[#8B5CF6]' 
                                : 'from-[#F97316] to-[#EAB308]'
                            } text-white flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <Icon size={28} />
                          </motion.div>
                          
                          <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-[#6366F1] font-bold text-lg mb-2">
                              {exp.organization}
                            </p>
                            
                            <div className={`flex flex-wrap items-center gap-3 text-sm text-[#64748B] ${isEven ? 'md:justify-end' : ''}`}>
                              <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-[#F97316]" />
                                <span>{exp.period}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-[#F97316]" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Achievement badge */}
                        <motion.div
                          initial={{ scale: 0, y: 20 }}
                          animate={isInView ? { scale: 1, y: 0 } : { scale: 0, y: 20 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${
                            exp.type === 'work' 
                              ? 'from-[#EEF2FF] to-[#F8FAFC]' 
                              : 'from-[#FFF7ED] to-[#F8FAFC]'
                          } rounded-full border border-[#E2E8F0] mb-6 ${isEven ? 'md:float-right' : ''}`}
                        >
                          <TrendingUp size={14} className="text-[#6366F1]" />
                          <span className="text-sm font-semibold text-[#475569]">
                            {exp.achievements}
                          </span>
                        </motion.div>

                        <ul className={`space-y-3 mb-6 clear-both ${isEven ? 'md:text-right' : ''}`}>
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                              className="text-[#475569] text-sm leading-relaxed flex items-start gap-3"
                            >
                              <motion.span
                                whileHover={{ scale: 1.3, rotate: 90 }}
                                className={`text-[#6366F1] flex-shrink-0 font-bold text-lg ${isEven ? 'md:order-2' : ''}`}
                              >
                                ▸
                              </motion.span>
                              <span className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                              transition={{ delay: index * 0.2 + 0.7 + i * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-4 py-2 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border-2 border-[#E2E8F0] rounded-full text-xs font-semibold text-[#475569] hover:border-[#6366F1] hover:text-[#6366F1] transition-all cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Hover progress bar */}
                        <motion.div
                          animate={{
                            width: isHovered ? '100%' : '0%',
                          }}
                          transition={{ duration: 0.4 }}
                          className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} h-1 bg-gradient-to-r ${
                            exp.type === 'work' 
                              ? 'from-[#6366F1] to-[#8B5CF6]' 
                              : 'from-[#F97316] to-[#EAB308]'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side (empty on even items for desktop) */}
                  <div className={isEven ? 'md:col-start-2' : ''} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}