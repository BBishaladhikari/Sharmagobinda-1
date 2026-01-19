import { motion, useMotionValue, useSpring, useTransform, useAnimationControls } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Sparkles, Zap, Code2, Palette, Grid3x3, List, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SplitText } from './TextAnimations';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'featured'>('featured');

  const projects = [
    {
      title: 'Analytics Dashboard',
      category: 'UI/UX Design',
      description: 'A comprehensive analytics platform with real-time data visualization, designed for enterprise users to track KPIs and make data-driven decisions.',
      longDescription: 'Built a complete enterprise analytics solution featuring real-time data streams, customizable widgets, and advanced filtering capabilities. The interface prioritizes clarity and efficiency for data-driven decision making.',
      image: 'https://images.unsplash.com/photo-1496660782328-0957101c8c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njc3MzU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'React', 'Recharts', 'Design System'],
      demoLink: '#',
      codeLink: '#',
      featured: true,
      year: '2025',
    },
    {
      title: 'HealthTrack Mobile App',
      category: 'Full Stack',
      description: 'A wellness tracking mobile application that helps users monitor their fitness goals, nutrition, and mental health with personalized insights.',
      longDescription: 'Developed a comprehensive health tracking application with personalized AI-driven insights, social features, and gamification elements to boost user engagement and health outcomes.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNjc3NzAwODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Django', 'PostgreSQL', 'UI/UX'],
      demoLink: '#',
      codeLink: '#',
      featured: true,
      year: '2025',
    },
    {
      title: 'ShopEase E-commerce',
      category: 'Full Stack',
      description: 'Modern e-commerce platform with seamless checkout experience, product recommendations, and admin dashboard for inventory management.',
      longDescription: 'Created a full-featured e-commerce platform with AI-powered recommendations, one-click checkout, and comprehensive admin tools for inventory and order management.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NzcyODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Django', 'Stripe', 'TailwindCSS'],
      demoLink: '#',
      codeLink: '#',
      featured: false,
      year: '2024',
    },
    {
      title: 'TravelHub Booking Platform',
      category: 'UI/UX Design',
      description: 'Travel booking platform focusing on user experience, featuring intuitive search, comparison tools, and interactive destination guides.',
      longDescription: 'Designed an immersive travel booking experience with interactive maps, 360° virtual tours, and smart price comparison tools to help users make informed decisions.',
      image: 'https://images.unsplash.com/photo-1741721816773-ff31d089c227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3Njc3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'User Research', 'Prototyping', 'Testing'],
      demoLink: '#',
      codeLink: '#',
      featured: false,
      year: '2024',
    },
    {
      title: 'PDI Project Management Tool',
      category: 'Full Stack',
      description: 'Internal project management tool for PDI Nepal, streamlining team collaboration, task tracking, and resource allocation.',
      longDescription: 'Built a collaborative project management platform with real-time updates, Kanban boards, Gantt charts, and resource planning tools specifically for PDI Nepal\'s workflow.',
      image: 'https://images.unsplash.com/photo-1496660782328-0957101c8c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njc3MzU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Django', 'WebSocket', 'Agile'],
      demoLink: '#',
      codeLink: '#',
      featured: true,
      year: '2025',
    },
    {
      title: 'Design System Library',
      category: 'UI/UX Design',
      description: 'Comprehensive design system with reusable components, patterns, and guidelines ensuring consistency across multiple products.',
      longDescription: 'Developed a scalable design system with 100+ components, comprehensive documentation, accessibility standards, and automated design token management.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNjc3NzAwODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'Components', 'Documentation', 'Accessibility'],
      demoLink: '#',
      codeLink: '#',
      featured: false,
      year: '2024',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: Sparkles },
    { value: 'UI/UX Design', label: 'UI/UX Design', icon: Palette },
    { value: 'Full Stack', label: 'Full Stack', icon: Code2 },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-[#0A0B14] relative overflow-hidden">
      {/* Enhanced neon background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-[150px] opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Star size={20} className="text-[#F97316]" fill="#F97316" />
            </motion.div>
            <span 
              className="text-[#6366F1] uppercase tracking-wider text-sm font-semibold"
              style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
            >
              Showcasing my work
            </span>
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Star size={20} className="text-[#F97316]" fill="#F97316" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-white">
            <SplitText delay={0.2}>Featured Projects</SplitText>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1.5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] mx-auto rounded-full relative"
            style={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)' }}
          >
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="text-[#94A3B8] mt-6 text-lg max-w-2xl mx-auto"
          >
            Explore my latest work in UI/UX design and full-stack development
          </motion.p>
        </motion.div>

        {/* Filter & View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16"
        >
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isActive = filter === cat.value;
              
              return (
                <motion.button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className="relative px-6 py-3 rounded-2xl font-medium text-sm overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] rounded-2xl"
                      style={{
                        boxShadow: '0 0 40px rgba(99, 102, 241, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  
                  {/* Border for inactive */}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-[#1E293B]/50 backdrop-blur-sm border-2 border-[#334155] group-hover:border-[#6366F1] transition-colors" />
                  )}
                  
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Content */}
                  <span className={`relative z-10 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                  }`}>
                    <Icon size={18} />
                    {cat.label}
                  </span>
                  
                  {/* Shimmer effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.7 }}
            className="flex gap-2 bg-[#1E293B]/50 backdrop-blur-sm border-2 border-[#334155] rounded-2xl p-1.5"
          >
            <motion.button
              onClick={() => setViewMode('featured')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                viewMode === 'featured' ? 'text-white' : 'text-[#94A3B8]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {viewMode === 'featured' && (
                <motion.div
                  layoutId="viewMode"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl"
                  style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Star size={16} />
                Featured
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                viewMode === 'grid' ? 'text-white' : 'text-[#94A3B8]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {viewMode === 'grid' && (
                <motion.div
                  layoutId="viewMode"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl"
                  style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Grid3x3 size={16} />
                Grid
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className={viewMode === 'featured' ? 'space-y-8' : 'grid md:grid-cols-2 gap-8'}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              isHovered={hoveredProject === index}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              viewMode={viewMode}
            />
          ))}
        </motion.div>

        {/* Show count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-[#94A3B8] text-sm">
            Showing <span className="text-[#6366F1] font-bold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Project Card Component
function ProjectCard({ 
  project, 
  index, 
  isInView,
  isHovered,
  onHoverStart,
  onHoverEnd,
  viewMode,
}: { 
  project: any; 
  index: number; 
  isInView: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  viewMode: 'grid' | 'featured';
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHoverEnd();
  };

  const isFeaturedLayout = viewMode === 'featured' && project.featured;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: viewMode === 'grid' ? rotateX : 0,
        rotateY: viewMode === 'grid' ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`group cursor-pointer ${isFeaturedLayout ? 'w-full' : ''}`}
    >
      <motion.div
        className={`relative rounded-3xl overflow-hidden bg-[#1E293B] border-2 border-[#334155] h-full ${
          isFeaturedLayout ? 'flex flex-col lg:flex-row' : ''
        }`}
        whileHover={{ scale: viewMode === 'grid' ? 1.03 : 1.01 }}
        transition={{ duration: 0.4 }}
        style={{
          boxShadow: isHovered 
            ? '0 0 60px rgba(99, 102, 241, 0.5), 0 25px 70px rgba(0, 0, 0, 0.6)'
            : '0 0 30px rgba(99, 102, 241, 0.15), 0 15px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          style={{
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F97316, #EAB308, #6366F1)',
            backgroundSize: '300% 300%',
            padding: '2px',
            zIndex: -1,
          }}
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F97316, #EAB308, #6366F1)',
              backgroundSize: '300% 300%',
            }}
          />
        </motion.div>

        {/* Year badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
          className="absolute top-4 left-4 z-20 px-4 py-2 rounded-xl bg-[#0F1419]/90 backdrop-blur-sm border border-[#334155] text-[#94A3B8] text-xs font-bold"
        >
          {project.year}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
            className="absolute top-4 right-4 z-20 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F97316] via-[#EAB308] to-[#F97316] text-white text-xs font-bold flex items-center gap-2"
            style={{
              boxShadow: '0 0 30px rgba(249, 115, 22, 0.8)',
              backgroundSize: '200% 100%',
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Star size={14} fill="white" />
            </motion.div>
            Featured
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.div>
        )}

        {/* Image Container */}
        <div className={`relative overflow-hidden ${
          isFeaturedLayout 
            ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' 
            : 'aspect-[16/10]'
        }`}>
          <motion.div
            className="w-full h-full"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay */}
          <motion.div
            className={`absolute inset-0 ${
              isFeaturedLayout 
                ? 'bg-gradient-to-r from-[#1E293B] via-[#1E293B]/60 to-transparent' 
                : 'bg-gradient-to-t from-[#1E293B] via-[#1E293B]/60 to-transparent'
            }`}
            animate={{
              opacity: isHovered ? 0.95 : 0.7,
            }}
          />

          {/* Holographic shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/30 via-transparent to-[#F97316]/30 opacity-0"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated scan line */}
          {isHovered && (
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent"
              initial={{ top: '-100%' }}
              animate={{ top: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
              }}
            />
          )}

          {/* Action buttons - revealed on hover */}
          <motion.div
            className="absolute bottom-6 right-6 flex gap-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            <motion.a
              href={project.demoLink}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white flex items-center justify-center relative overflow-hidden group/btn"
              style={{
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)',
              }}
            >
              <Eye size={22} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, borderRadius: '50%' }}
                whileHover={{ scale: 2, borderRadius: '0%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            
            <motion.a
              href={project.codeLink}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EAB308] text-white flex items-center justify-center relative overflow-hidden group/btn"
              style={{
                boxShadow: '0 0 30px rgba(249, 115, 22, 0.8)',
              }}
            >
              <Github size={22} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, borderRadius: '50%' }}
                whileHover={{ scale: 2, borderRadius: '0%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className={`p-8 relative ${isFeaturedLayout ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
          {/* Category badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F1419] border border-[#334155] mb-4 w-fit"
            whileHover={{ scale: 1.05, borderColor: '#6366F1' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`w-2.5 h-2.5 rounded-full ${
                project.category === 'UI/UX Design' 
                  ? 'bg-[#6366F1]' 
                  : 'bg-[#F97316]'
              }`}
              animate={{
                boxShadow: [
                  project.category === 'UI/UX Design'
                    ? '0 0 10px rgba(99, 102, 241, 0.8)'
                    : '0 0 10px rgba(249, 115, 22, 0.8)',
                  project.category === 'UI/UX Design'
                    ? '0 0 20px rgba(99, 102, 241, 1)'
                    : '0 0 20px rgba(249, 115, 22, 1)',
                  project.category === 'UI/UX Design'
                    ? '0 0 10px rgba(99, 102, 241, 0.8)'
                    : '0 0 10px rgba(249, 115, 22, 0.8)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
              {project.category}
            </span>
          </motion.div>

          <motion.h3 
            className={`${isFeaturedLayout ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#F97316] transition-all`}
            style={{
              textShadow: isHovered ? '0 0 30px rgba(99, 102, 241, 0.5)' : 'none',
            }}
          >
            {project.title}
          </motion.h3>
          
          <p className={`text-[#94A3B8] ${isFeaturedLayout ? 'text-base' : 'text-sm'} leading-relaxed mb-6`}>
            {isFeaturedLayout ? project.longDescription : project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.6 }}
                whileHover={{ scale: 1.15, y: -3 }}
                className="px-4 py-2 bg-[#0F1419] border border-[#334155] rounded-xl text-xs font-semibold text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-all cursor-default relative overflow-hidden group/tag"
              >
                <span className="relative z-10">{tag}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/10 to-[#F97316]/10 opacity-0 group-hover/tag:opacity-100 transition-opacity"
                />
              </motion.span>
            ))}
          </div>

          {/* Bottom glow line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: '0 0 20px rgba(99, 102, 241, 1)',
            }}
          />
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-8 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#F97316]/20 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
}