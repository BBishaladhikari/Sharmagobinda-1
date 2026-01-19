import { motion } from 'motion/react';
import { useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';
import profilePhoto from 'figma:asset/d1e59756476d01eebb62f00808f4342e9bb0702e.png';

export function About() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Parallax effect for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'BIT Student', detail: 'Gandaki University' },
    { icon: Award, label: 'Expertise', value: 'UI/UX Design', detail: 'React & Django' },
    { icon: Users, label: 'Role', value: 'Project Manager', detail: 'PDI Nepal' },
    { icon: Target, label: 'Focus', value: 'User Experience', detail: 'Human-Centered Design' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-24 px-6 lg:px-8 bg-[#0F1419] overflow-hidden">
      {/* Neon background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] via-[#F97316] to-[#6366F1]" style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }} />
      
      {/* Floating neon orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-[#6366F1] rounded-full blur-[120px] opacity-20"
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
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#F97316] rounded-full blur-[120px] opacity-15"
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
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366F1] uppercase tracking-wider text-sm font-semibold" style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full" style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6366F1]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F97316]/20 rounded-full blur-2xl" />
              
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/5] relative"
                >
                  <img
                    src={profilePhoto}
                    alt="Gobinda Sharma"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/80 via-transparent to-transparent flex items-end justify-center pb-8"
                  >
                    <p className="text-white font-semibold text-lg">UI/UX Designer & Developer</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 w-16 h-16 border-4 border-[#F97316] rounded-2xl opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-[#6366F1] rounded-full opacity-30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold text-white">
              Designing with Purpose, Building with Passion
            </h3>
            <div className="space-y-4 text-[#94A3B8] leading-relaxed">
              <p>
                I'm a UI/UX designer and full-stack developer from Parbat, currently based in the beautiful 
                city of Pokhara. My journey in design and technology started with a simple curiosity about 
                how things work and evolved into a passion for creating meaningful digital experiences.
              </p>
              <p>
                As a BIT student at Gandaki University, I'm constantly learning and applying new technologies. 
                I specialize in React and Django, combining beautiful interfaces with robust functionality. 
                My design philosophy centers around understanding user needs and translating them into 
                intuitive, accessible solutions.
              </p>
              <p>
                Currently, I serve as a Project Manager at PDI Nepal, where I lead cross-functional teams 
                to deliver impactful projects. This role has sharpened my ability to balance creativity with 
                strategic thinking, ensuring every project not only looks great but achieves its business goals.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring the mountains around Pokhara, 
                drawing inspiration from nature's perfect design patterns.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6 lg:col-span-2"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-[#1E293B] p-6 rounded-2xl border-2 border-[#334155] hover:border-[#6366F1] transition-all group relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
                  }}
                >
                  {/* Neon glow on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#F97316]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#F97316] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10" style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
                    <Icon size={24} />
                  </div>
                  <h4 className="text-sm text-[#94A3B8] mb-1 relative z-10">{stat.label}</h4>
                  <p className="font-bold text-white mb-1 relative z-10">{stat.value}</p>
                  <p className="text-sm text-[#64748B] relative z-10">{stat.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}