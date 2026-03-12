import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { BackToTop } from './components/BackToTop';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AnimatePresence>
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen bg-[#0A0B14]"
        >
          <ThemeToggle />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Timeline />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}