import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, Phone, Github, Linkedin, MapPin, Lock, Briefcase, GraduationCap, Code, Folder, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set to true if user is logged in
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    const primaryRed = [220, 20, 60];
    const darkText = [60, 60, 60];
    const grayText = [100, 100, 100];
    const lightGray = [180, 180, 180];
    const bgGray = [245, 245, 245];
    
    // Header
    doc.setFillColor(bgGray[0], bgGray[1], bgGray[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFontSize(32);
    doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
    doc.setFont(undefined, 'bold');
    doc.text('GOBINDA SHARMA', 105, 22, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text('UI/UX DESIGNER & DEVELOPER', 15, 50);
    
    let yPos = 50;
    doc.setFontSize(11);
    doc.text('CONTACT ME', 145, yPos);
    
    yPos += 7;
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont(undefined, 'normal');
    doc.text('9824157781', 145, yPos);
    yPos += 5;
    doc.text('bishalladhikari22@gmail.com', 145, yPos);
    yPos += 5;
    doc.text('Palyun 07, Parbat', 145, yPos);
    
    yPos = 65;
    doc.text('Bachelor of Information Technology (BIT)', 15, yPos);
    yPos += 5;
    doc.text('Gandaki University, Pokhara', 15, yPos);
    
    doc.save('Gobinda_Sharma_Resume.pdf');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ 
              y: window.innerWidth < 768 ? '100%' : 0,
              x: window.innerWidth >= 768 ? '100%' : 0,
              opacity: 0 
            }}
            animate={{ 
              y: 0,
              x: 0,
              opacity: 1 
            }}
            exit={{ 
              y: window.innerWidth < 768 ? '100%' : 0,
              x: window.innerWidth >= 768 ? '100%' : 0,
              opacity: 0 
            }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 300,
              duration: 0.3 
            }}
            className="fixed inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[800px] bg-[#0A0F1E] z-[101] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/50 via-[#0A0F1E] to-[#1E293B]/50" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#6366F1] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-[120px]" />
            </div>

            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/10">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-2">
                      Gobinda Sharma
                    </h1>
                    <p className="text-lg text-[#F97316] font-semibold mb-1">
                      Junior UI/UX Designer & Project Manager
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>Pokhara, Nepal</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={handleDownloadPDF}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all"
                    >
                      <Download size={20} />
                    </motion.button>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar px-6 md:px-8 py-6">
              
              {/* Professional Summary */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-gray-300 leading-relaxed">
                    Junior UI/UX Designer and Project Manager with <span className="text-[#F97316] font-semibold">1+ year experience</span> at Pravidhi Digital Innovations (PDI Nepal). Specialized in SaaS platforms, dashboards, multi-role systems, and human-centered design, with experience coordinating design and development teams.
                  </p>
                </div>
              </motion.section>

              {/* Work Experience */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F97316] to-[#EAB308] flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                </div>

                {/* Company Card */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">Pravidhi Digital Innovations (PDI Nepal)</h3>
                  
                  {/* UI/UX Designer Role */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-[#6366F1]">Junior UI/UX Designer</h4>
                        <p className="text-sm text-gray-400">1 Year</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Designed SaaS dashboards, admin panels, and user flows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Created wireframes, UI kits, and design systems in Figma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Collaborated with developers for design-to-code accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Improved usability through UX testing and iteration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Worked on manpower systems, AI platforms, and business websites</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project Manager Role */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-[#8B5CF6]">Project Manager</h4>
                        <p className="text-sm text-gray-400">1 Year</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Managed timelines, tasks, and sprint planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Coordinated designers, developers, and stakeholders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Converted business requirements into UI/UX workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">▹</span>
                        <span>Ensured on-time delivery of SaaS and manpower projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#14B8A6] flex items-center justify-center">
                    <Code size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Skills</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* UI/UX */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-[#6366F1] mb-3 uppercase">UI / UX</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Figma (Auto Layout, Components)</li>
                      <li>• Wireframing & User Flows</li>
                      <li>• Design Systems</li>
                      <li>• SaaS Dashboard Design</li>
                      <li>• Responsive Design</li>
                    </ul>
                  </div>

                  {/* Technical */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-[#F97316] mb-3 uppercase">Technical</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• HTML, CSS, JavaScript</li>
                      <li>• Python (Beginner–Intermediate)</li>
                      <li>• C, C++</li>
                      <li>• PHP (Basic)</li>
                      <li>• Git & GitHub</li>
                    </ul>
                  </div>

                  {/* Management */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-[#8B5CF6] mb-3 uppercase">Management</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Project Coordination</li>
                      <li>• Requirement Analysis</li>
                      <li>• Team Communication</li>
                      <li>• Sprint Planning</li>
                      <li>• Stakeholder Management</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F97316] to-[#EAB308] flex items-center justify-center">
                    <Folder size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Projects</h2>
                </div>

                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                    <h3 className="text-lg font-semibold text-white mb-2">🧩 OS Kernel Development</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Built 64-bit custom OS kernel with file system (create, delete, save) and custom bootloader
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-xs">C</span>
                      <span className="px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-xs">Assembly</span>
                      <span className="px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-xs">OS Development</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                    <h3 className="text-lg font-semibold text-white mb-2">📋 Attendance Management System</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Web-based system for teachers with authentication, reports, and real-time tracking
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F97316]/20 text-[#F97316] text-xs">MySQL</span>
                      <span className="px-3 py-1 rounded-full bg-[#F97316]/20 text-[#F97316] text-xs">HTML/CSS</span>
                      <span className="px-3 py-1 rounded-full bg-[#F97316]/20 text-[#F97316] text-xs">JavaScript</span>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                    <h3 className="text-lg font-semibold text-white mb-2">🍔 Online Food Delivery System</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Dynamic website with login & ordering functionality using PHP backend
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs">HTML/CSS</span>
                      <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs">JavaScript</span>
                      <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs">PHP</span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>

                <div className="space-y-3">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-1">BIT – Gandaki University</h3>
                    <p className="text-sm text-gray-400">Bachelor of Information Technology (Running)</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-1">+2 – Janasewa Sanskrit Secondary School</h3>
                    <p className="text-sm text-gray-400">Higher Secondary Education</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-1">School – Shree Dharmodaya Secondary School</h3>
                    <p className="text-sm text-gray-400">Secondary Education</p>
                  </div>
                </div>
              </motion.section>

              {/* Languages */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#14B8A6] flex items-center justify-center">
                    <Globe size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Languages</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Nepali</span>
                      <span className="text-sm text-gray-400">Native</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-[#10B981] to-[#14B8A6]" />
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">English</span>
                      <span className="text-sm text-gray-400">Professional</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]" />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact Footer */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 via-[#8B5CF6]/10 to-[#F97316]/10 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Lock Overlay if not authenticated */}
                  {!isAuthenticated && (
                    <div className="absolute inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-10">
                      <div className="text-center">
                        <Lock size={40} className="text-white mx-auto mb-3" />
                        <p className="text-white font-semibold mb-2">Login to view full contact info</p>
                        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm hover:shadow-lg transition-all">
                          Login
                        </button>
                      </div>
                    </div>
                  )}

                  <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center">
                        <Mail size={18} className="text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-white font-medium">bishalladhikari22@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F97316]/20 flex items-center justify-center">
                        <Phone size={18} className="text-[#F97316]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="text-white font-medium">+977 9824157781</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
                        <Github size={18} className="text-[#8B5CF6]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">GitHub</p>
                        <p className="text-white font-medium">@gobindasharma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                        <Globe size={18} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Portfolio</p>
                        <p className="text-white font-medium">sharmagobinda.com.np</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
