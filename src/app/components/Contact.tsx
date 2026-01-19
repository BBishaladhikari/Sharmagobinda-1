import { motion, useMotionValue, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles, CheckCircle2, Zap, MessageCircle, AlertCircle } from 'lucide-react';
import { SplitText } from './TextAnimations';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Initialize EmailJS with Public Key
  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;
    
    // Check if credentials are still default values
    if (SERVICE_ID === 'YOUR_SERVICE_ID' || SERVICE_ID === 'service_abc1234') {
      setIsSubmitting(false);
      setErrorMessage('⚠️ You need to replace the example IDs with your REAL EmailJS IDs! Open /src/app/config/emailjs.config.ts and paste your actual Service ID from https://dashboard.emailjs.com/admin');
      return;
    }
    
    if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || TEMPLATE_ID === 'template_xyz5678') {
      setIsSubmitting(false);
      setErrorMessage('⚠️ You need to replace the example Template ID with your REAL Template ID! Go to https://dashboard.emailjs.com/admin → Email Templates → Copy your Template ID');
      return;
    }
    
    if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || PUBLIC_KEY === 'abc123XYZ') {
      setIsSubmitting(false);
      setErrorMessage('⚠️ You need to replace the example Public Key with your REAL Public Key! Go to https://dashboard.emailjs.com/admin/account → General tab → Copy your Public Key (NOT Private Key!)');
      return;
    }
    
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current!
    )
      .then((result) => {
        console.log('✅ Email sent successfully!', result.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setErrorMessage('');
        
        setTimeout(() => {
          setFormState({ name: '', email: '', subject: '', message: '' });
          setSubmitted(false);
        }, 3000);
      }, (error) => {
        console.error('❌ Email sending failed:', error);
        setIsSubmitting(false);
        setSubmitted(false);
        
        // Provide helpful error messages based on error type
        if (error.text?.includes('Public Key') || error.status === 400) {
          setErrorMessage('❌ Your Public Key is WRONG! Go to: https://dashboard.emailjs.com/admin/account → Click "General" tab → Scroll to "API Keys" → Copy the PUBLIC KEY (it\'s a random string like "abC123dEf456" - NO "service_" or "template_" prefix!)');
        } else if (error.text?.includes('Template')) {
          setErrorMessage('❌ Invalid Template ID! Go to: https://dashboard.emailjs.com/admin → Email Templates → Copy your Template ID (starts with "template_")');
        } else if (error.text?.includes('Service')) {
          setErrorMessage('❌ Invalid Service ID! Go to: https://dashboard.emailjs.com/admin → Email Services → Copy your Service ID (starts with "service_")');
        } else {
          setErrorMessage(`❌ Error: ${error.text || 'Please check your EmailJS configuration. Make sure you replaced ALL example values with your real IDs!'}`);
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bishalladhikari22@gmail.com',
      href: 'mailto:bishalladhikari22@gmail.com',
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9824157781',
      href: 'tel:+9779824157781',
      color: 'from-[#F97316] to-[#EAB308]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pokhara, Nepal',
      href: '#',
      color: 'from-[#10B981] to-[#14B8A6]',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'from-[#0077B5] to-[#005885]',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      color: 'from-[#1DA1F2] to-[#0C85D0]',
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:gobinda.sharma@example.com',
      color: 'from-[#F97316] to-[#EAB308]',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#0F1419] relative overflow-hidden">
      {/* Neon background orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-20"
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
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#F97316] rounded-full blur-[150px] opacity-15"
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
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
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
            <MessageCircle size={16} />
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            <SplitText delay={0.2}>Get In Touch</SplitText>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#F97316] mx-auto rounded-full"
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}
          />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="block relative group"
                  >
                    <div className="relative p-6 rounded-2xl bg-[#1E293B] border-2 border-[#334155] overflow-hidden group-hover:border-[#6366F1] transition-all"
                      style={{
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
                      }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/10 to-[#F97316]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          style={{
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                          }}
                        >
                          <Icon size={24} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <p className="text-sm text-[#94A3B8] mb-1">{info.label}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                        
                        <Zap size={20} className="text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-[#6366F1]" />
                Connect on Social
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.7, type: 'spring' }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} text-white flex items-center justify-center overflow-hidden group`}
                      style={{
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                      }}
                    >
                      <Icon size={24} className="relative z-10" />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
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

              {/* Form container */}
              <div className="relative bg-[#1E293B] rounded-3xl p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <FormInput
                    name="name"
                    label="Your Name"
                    type="text"
                    placeholder="Gobinda Sharma"
                    value={formState.name}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />

                  {/* Email Input */}
                  <FormInput
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="gobinda@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />

                  {/* Subject Input */}
                  <FormInput
                    name="subject"
                    label="Subject"
                    type="text"
                    placeholder="Project Collaboration"
                    value={formState.subject}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />

                  {/* Message Textarea */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-[#94A3B8] mb-2">
                      Message
                    </label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project..."
                        required
                        className={`w-full px-4 py-3 bg-[#0F1419] border-2 ${
                          focused === 'message' ? 'border-[#6366F1]' : 'border-[#334155]'
                        } rounded-xl text-white placeholder:text-[#64748B] focus:outline-none transition-all resize-none`}
                        style={{
                          boxShadow: focused === 'message' 
                            ? '0 0 20px rgba(99, 102, 241, 0.3)' 
                            : 'none',
                        }}
                      />
                      
                      {/* Floating particles on focus */}
                      {focused === 'message' && (
                        <>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-[#6366F1] rounded-full"
                              initial={{ x: 0, y: 0, opacity: 0 }}
                              animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, -50],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: '50%',
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-50"
                    whileHover={{ scale: submitted ? 1 : 1.02 }}
                    whileTap={{ scale: submitted ? 1 : 0.98 }}
                    style={{
                      boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
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

                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Sparkles size={20} />
                          </motion.div>
                          Sending...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle2 size={20} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </span>

                    {/* Shimmer effect */}
                    {!submitted && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    )}
                  </motion.button>

                  {/* Error Message */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative p-4 rounded-xl bg-red-500/10 border-2 border-red-500/50 overflow-hidden"
                      style={{
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200 leading-relaxed break-words">
                          {errorMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </form>

                {/* Success overlay */}
                {submitted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 bg-[#1E293B]/95 backdrop-blur-sm rounded-3xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', duration: 0.8 }}
                      >
                        <CheckCircle2 size={80} className="text-[#10B981] mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-[#94A3B8]">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Form Input Component
function FormInput({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  focused,
  setFocused,
  required,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focused: string | null;
  setFocused: (name: string | null) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-semibold text-[#94A3B8] mb-2">
        {label}
      </label>
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
      >
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 bg-[#0F1419] border-2 ${
            focused === name ? 'border-[#6366F1]' : 'border-[#334155]'
          } rounded-xl text-white placeholder:text-[#64748B] focus:outline-none transition-all`}
          style={{
            boxShadow: focused === name 
              ? '0 0 20px rgba(99, 102, 241, 0.3)' 
              : 'none',
          }}
        />
        
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#F97316]"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: focused === name ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Floating particles on focus */}
        {focused === name && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#6366F1] rounded-full"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, -30],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '50%',
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}