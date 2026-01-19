import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Palette, Code2, Lightbulb, Layers, Figma, Database } from 'lucide-react';
import { ScrambleText, SplitText } from './TextAnimations';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-[#6366F1] to-[#8B5CF6]',
      bgGlow: 'rgba(99, 102, 241, 0.15)',
      skills: [
        { name: 'User Research', level: 90 },
        { name: 'Wireframing', level: 95 },
        { name: 'Prototyping', level: 92 },
        { name: 'Visual Design', level: 88 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-[#F97316] to-[#EAB308]',
      bgGlow: 'rgba(249, 115, 22, 0.15)',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Motion/Framer', level: 88 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-[#10B981] to-[#14B8A6]',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
      skills: [
        { name: 'Django', level: 87 },
        { name: 'REST APIs', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Python', level: 88 },
      ],
    },
    {
      title: 'Design Tools',
      icon: Figma,
      color: 'from-[#EC4899] to-[#F43F5E]',
      bgGlow: 'rgba(236, 72, 153, 0.15)',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Illustrator', level: 80 },
        { name: 'After Effects', level: 75 },
      ],
    },
    {
      title: 'Project Management',
      icon: Layers,
      color: 'from-[#3B82F6] to-[#0EA5E9]',
      bgGlow: 'rgba(59, 130, 246, 0.15)',
      skills: [
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Jira', level: 85 },
        { name: 'Communication', level: 92 },
      ],
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      color: 'from-[#8B5CF6] to-[#A855F7]',
      bgGlow: 'rgba(139, 92, 246, 0.15)',
      skills: [
        { name: 'Critical Thinking', level: 90 },
        { name: 'Creative Solutions', level: 93 },
        { name: 'User Empathy', level: 95 },
        { name: 'Attention to Detail', level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#0A0B14] relative overflow-hidden">
      {/* Neon background elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-20"
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
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#F97316] rounded-full blur-[150px] opacity-15"
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
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[120px] opacity-15"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
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
            className="text-[#6366F1] uppercase tracking-wider text-sm font-semibold inline-block"
            style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          >
            What I bring to the table
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            <SplitText delay={0.2}>Skills & Expertise</SplitText>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full origin-center"
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -12,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="magnetic bg-[#1E293B] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-[#334155] hover:border-[#6366F1] relative group cursor-pointer"
                style={{
                  boxShadow: hoveredCard === index 
                    ? '0 0 40px rgba(99, 102, 241, 0.4)' 
                    : '0 0 20px rgba(99, 102, 241, 0.1)',
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-0.5 rounded-2xl blur-xl -z-10"
                  style={{ background: category.bgGlow }}
                />

                {/* Animated gradient border */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 -z-10`}
                  style={{ padding: '2px' }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </motion.div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.cos(i * 60 * Math.PI / 180) * 50,
                          y: Math.sin(i * 60 * Math.PI / 180) * 50,
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`}
                      />
                    ))}
                  </>
                )}
                
                {/* Icon with 3D effect */}
                <motion.div
                  animate={{
                    rotateY: isHovered ? 360 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center mb-6 relative`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Icon size={28} />
                  
                  {/* Icon shadow */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                      scale: isHovered ? 1.5 : 1,
                    }}
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} blur-md -z-10`}
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  <ScrambleText>{category.title}</ScrambleText>
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + skillIndex * 0.08 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#475569] font-medium">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.08 + 0.5 }}
                          className="text-xs text-[#64748B] font-semibold"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Skill bar with particles */}
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1 + skillIndex * 0.08,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: index * 0.1 + skillIndex * 0.08,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                          
                          {/* Flowing particles */}
                          {isHovered && (
                            <>
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ x: 0, opacity: 0 }}
                                  animate={{
                                    x: ['0%', '100%'],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: 'linear',
                                  }}
                                  className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                                />
                              ))}
                            </>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card corner accent */}
                <motion.div
                  animate={{
                    rotate: isHovered ? 90 : 0,
                    scale: isHovered ? 1.2 : 1,
                  }}
                  className={`absolute top-4 right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} opacity-10`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills tags with stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[#64748B] mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Docker', 'CI/CD', 'Responsive Design', 'Accessibility',
              'SEO', 'Performance', 'Testing', 'Design Systems', 'API Design'
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="magnetic px-5 py-2.5 bg-white border-2 border-[#E2E8F0] rounded-full text-sm text-[#475569] hover:border-[#6366F1] hover:text-[#6366F1] hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group"
              >
                {/* Hover background effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/10 to-[#F97316]/10 -z-10"
                />
                <span className="relative z-10">{tag}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}