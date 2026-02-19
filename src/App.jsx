import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, ArrowRight, Mail, Monitor, Server, Terminal as TerminalIcon, Wrench, Heart } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler for NavLinks
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ title }) => (
    <a 
      href={`#${title}`} 
      onClick={(e) => handleScroll(e, title)}
      className="relative group text-[#ABB2BF] hover:text-white transition-colors pb-1 text-lg cursor-pointer"
    >
      {title}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C778DD] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    // Added scroll-smooth for native smooth scrolling behavior
    <div className="min-h-screen bg-[#282C33] text-white font-mono selection:bg-[#C778DD] selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* --- LEFT SIDEBAR SOCIALS --- */}
      <div className="hidden md:flex flex-col items-center fixed left-4 top-0 z-50">
        <motion.div 
          initial={{ height: 0 }} animate={{ height: 128 }} transition={{ duration: 1, ease: "easeOut" }} 
          className="w-px bg-[#ABB2BF] mb-4"
        ></motion.div>
        <div className="flex flex-col gap-4 text-[#ABB2BF]">
          <motion.a 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
            whileHover={{ scale: 1.2, x: 2, color: "#C778DD" }} 
            href="https://github.com/brovoski69" target="_blank" rel="noopener noreferrer"
            className="transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.2, x: 2, color: "#C778DD" }} 
            href="https://www.linkedin.com/in/soumya-prakash-jena-a46989372" target="_blank" rel="noopener noreferrer"
            className="transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
      </div>

      {/* --- NAVIGATION BAR --- */}
      <header className="fixed top-0 w-full bg-[#282C33]/90 backdrop-blur-md z-40 border-b border-transparent transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-xl cursor-pointer hover:text-[#C778DD] transition-colors"
            onClick={(e) => handleScroll(e, 'home')}
          >
            <motion.div 
              whileHover={{ rotate: 90 }} transition={{ type: "spring", stiffness: 200 }}
              className="w-4 h-4 bg-transparent border-2 border-white flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white -mt-2 -mr-2"></div>
            </motion.div>
            SPJ.
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="hidden md:flex gap-8"
          >
            <NavLink title="home" />
            <NavLink title="works" />
            <NavLink title="about-me" />
            <NavLink title="contacts" />
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#ABB2BF] hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#282C33] border-b border-[#ABB2BF]/20 p-6 flex flex-col gap-6 text-[#ABB2BF] shadow-xl"
            >
              <NavLink title="home" />
              <NavLink title="works" />
              <NavLink title="about-me" />
              <NavLink title="contacts" />
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24" id="home">
          <div className="md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            >
              Hallo,<br/> Ich bin <span className="text-[#C778DD]">Soumya!!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#ABB2BF] mb-8 leading-relaxed text-lg"
            >
              Crafting digital experiences where <span className="text-white">logic meets creativity</span>. I turn complex problems into elegant, scalable code.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(199, 120, 221, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, 'contacts')}
              className="border border-[#C778DD] px-6 py-2 text-white transition-all shadow-[0_0_15px_rgba(199,120,221,0.2)] hover:shadow-[0_0_25px_rgba(199,120,221,0.4)]"
            >
              Contact me !!
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 relative flex justify-center"
          >
            {/* Animated Floating Accents */}
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-10 left-10 w-24 h-24 border border-[#C778DD] z-0"></motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute bottom-12 right-12 flex gap-2 z-20">
              <div className="grid grid-cols-5 gap-2 opacity-50">
                {[...Array(25)].map((_, i) => (<div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>))}
              </div>
            </motion.div>

            <div className="relative z-10 w-64 h-80 bg-[#ABB2BF]/5 border-b border-[#C778DD] flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-2xl hover:bg-[#ABB2BF]/10 transition-colors">
               <span className="text-[#ABB2BF] text-sm text-center px-4">Your Photo<br/>Goes Here</span>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-[#282C33] border border-[#ABB2BF] p-2 flex items-center gap-2 w-max max-w-[90%] shadow-lg cursor-pointer"
            >
              <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-3 h-3 bg-[#C778DD]"></motion.div>
              <p className="text-[#ABB2BF] text-sm">Currently exploring <span className="text-white font-bold">new technology</span></p>
            </motion.div>
          </motion.div>
        </section>

        {/* --- QUOTE SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex justify-center px-4"
        >
          <motion.div whileHover={{ scale: 1.02, borderColor: "#C778DD" }} className="relative border border-[#ABB2BF] p-6 max-w-2xl inline-block transition-all duration-300 shadow-lg">
            <div className="absolute -top-3 left-4 bg-[#282C33] px-2 text-2xl font-serif text-[#ABB2BF]">"</div>
            <p className="text-lg md:text-xl font-medium">Programs must be written for people to read, and only incidentally for machines to execute.</p>
            <div className="absolute -bottom-3 right-4 bg-[#282C33] px-2 text-2xl font-serif text-[#ABB2BF]">"</div>
            <div className="absolute -bottom-10 right-0 border border-[#ABB2BF] px-4 py-2 border-t-0 hover:border-[#C778DD] transition-colors duration-300 bg-[#282C33]">
              <p className="text-[#ABB2BF]">- Harold Abelson</p>
            </div>
          </motion.div>
        </motion.section>

        {/* --- ABOUT ME SECTION --- */}
        <section className="pt-24 md:pt-32" id="about-me">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-[#C778DD]">#</span>about-me</h2>
            <div className="h-px bg-[#C778DD] w-32 md:w-64"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Left Text Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:w-1/2 text-[#ABB2BF] text-base md:text-lg leading-relaxed space-y-6">
              <p>Hello, I'm Soumya!</p>
              <p>I'm a student at <span className="text-white font-medium">VIT Chennai</span>, currently pursuing my B.Tech in Computer Science. I am passionate about bridging the gap between complex backend logic and seamless user experiences.</p>
              <p>My journey in technology is driven by a love for problem-solving. I don't just write code, I <span className="text-[#C778DD]">architect solutions</span> that focus on performance, scalability, and intuitive design. Whether diving into Data Structures or building modern React applications, I am driven by curiosity and a commitment to excellence.</p>
              <motion.button whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }} className="mt-4 border border-[#C778DD] px-6 py-2 text-white transition-colors flex items-center gap-2 hover:bg-[#C778DD]/10">
                Read more <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            {/* Right Side Feature Cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:w-1/2 flex flex-col gap-5 mt-10 md:mt-0 relative w-full">
              
              {[
                { title: "Elegant Code", desc: "Focus on writing clean, modular, and efficient software." },
                { title: "Scalability", desc: "Building applications designed to grow and perform." },
                { title: "Continuous Learning", desc: "Always exploring new technologies and best practices." }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.15) }}
                  whileHover={{ x: -8, borderColor: "#C778DD", backgroundColor: "rgba(199, 120, 221, 0.05)" }}
                  className="border border-[#ABB2BF]/30 bg-[#282C33] p-5 rounded-lg flex items-start gap-4 transition-all duration-300 relative overflow-hidden group shadow-lg"
                >
                  {/* Subtle purple line on hover */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Custom CSS Diamond Icon */}
                  <div className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 border border-[#C778DD] rotate-45 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(199,120,221,0.5)] transition-all duration-300">
                      <div className="w-1 h-1 bg-[#C778DD] group-hover:bg-white transition-colors"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-[#ABB2BF] text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="pt-24 md:pt-32" id="skills">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-[#C778DD]">#</span>skills</h2>
            <div className="h-px bg-[#C778DD] w-32 md:w-64"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Side: Decorative Graphics (Kept for Theme Consistency) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="hidden md:block md:w-1/3 relative min-h-[300px]">
              <div className="absolute top-0 left-0 grid grid-cols-5 gap-3 opacity-50 z-20">{[...Array(25)].map((_, i) => (<div key={`dot1-${i}`} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>))}</div>
              <div className="absolute bottom-10 left-24 grid grid-cols-5 gap-3 opacity-50 z-20">{[...Array(25)].map((_, i) => (<div key={`dot2-${i}`} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>))}</div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-12 left-20 w-24 h-24 border border-[#C778DD] z-10"></motion.div>
              <div className="absolute top-20 left-32 w-20 h-20 border border-[#ABB2BF] z-10"></div>
            </motion.div>

            {/* Right Side: New Srijan-Style Grid */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <Monitor size={24} className="text-[#C778DD]" />, 
                  title: "Frontend Development", 
                  subtitle: "Creating modern, responsive UI",
                  tech: ["React", "JavaScript", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"] 
                },
                { 
                  icon: <Server size={24} className="text-[#C778DD]" />, 
                  title: "Backend & Databases", 
                  subtitle: "Building robust APIs & data storage",
                  tech: ["Node.js", "Express", "MySQL", "MongoDB", "Firebase"] 
                },
                { 
                  icon: <TerminalIcon size={24} className="text-[#C778DD]" />, 
                  title: "Core & Logic", 
                  subtitle: "Competitive programming & DSA",
                  tech: ["C", "C++", "Java", "Python", "Algorithms", "Data Structures"] 
                },
                { 
                  icon: <Wrench size={24} className="text-[#C778DD]" />, 
                  title: "Tools & Hardware", 
                  subtitle: "Workflows & physical computing",
                  tech: ["Git", "GitHub", "VSCode", "Figma", "Arduino"] 
                }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: "#C778DD", boxShadow: "0 10px 30px -10px rgba(199,120,221,0.2)" }}
                  className="border border-[#ABB2BF] p-5 transition-all duration-300 bg-[#282C33] flex flex-col h-full group"
                >
                  {/* Card Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{skill.title}</h3>
                      <p className="text-[#ABB2BF] text-xs md:text-sm mt-1">{skill.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#ABB2BF]/20">
                    {skill.tech.map((t) => (
                      <span 
                        key={t} 
                        className="border border-[#ABB2BF] text-[#ABB2BF] text-xs font-medium px-3 py-1 hover:border-[#C778DD] hover:text-[#C778DD] hover:bg-[#C778DD]/10 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="pt-24 md:pt-32 mb-24" id="works">
          <div className="flex justify-between items-center mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
              <h2 className="text-3xl font-medium"><span className="text-[#C778DD]">#</span>projects</h2>
              <div className="h-px bg-[#C778DD] w-32 md:w-64 hidden sm:block"></div>
            </motion.div>
            <motion.a initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} href="#" className="text-[#ABB2BF] hover:text-white transition-colors flex items-center gap-2 group">
              View all <span className="text-[#C778DD] group-hover:translate-x-1 transition-transform">~~&gt;</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "WatchWise", tech: ['React', 'Tailwind', 'Framer-Motion'], desc: "A dynamic movie recommendation web application featuring modern animations and responsive design.", code: true },
              { title: "NeuroSanus", tech: ['HTML', 'CSS', 'JS', 'Auth'], desc: "A specialized web platform focused on secure user authentication and personalized dashboards.", code: false },
              { title: "Spotify Clone", tech: ['React', 'Tailwind', 'CSS'], desc: "A frontend recreation of the popular music streaming platform focusing on pixel-perfect UI implementation.", code: false }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="border border-[#ABB2BF] flex flex-col transition-all duration-300 hover:border-[#C778DD] hover:shadow-[0_10px_30px_-15px_rgba(199,120,221,0.5)] group bg-[#282C33]"
              >
                <div className="h-48 border-b border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors relative overflow-hidden flex items-center justify-center bg-[#ABB2BF]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.span whileHover={{ scale: 1.1 }} className="text-[#ABB2BF] text-sm z-10 cursor-default">{project.title} Image</motion.span>
                </div>
                
                <div className="p-4 border-b border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-[#C778DD] bg-[#C778DD]/10 text-[#C778DD] text-xs font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#C778DD] transition-colors">{project.title}</h3>
                    <p className="text-[#ABB2BF] leading-relaxed mb-6">{project.desc}</p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="border border-[#C778DD] px-4 py-2 text-white hover:bg-[#C778DD]/10 transition-colors flex items-center gap-2">
                      Live <span className="text-[#ABB2BF]">&lt;~&gt;</span>
                    </motion.a>
                    {project.code && (
                      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="border border-[#ABB2BF] px-4 py-2 text-[#ABB2BF] hover:border-white hover:text-white transition-colors flex items-center gap-2">
                        Code <span className="text-[#ABB2BF]">&gt;=</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="pt-24 md:pt-32 mb-24" id="contacts">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-[#C778DD]">#</span>contacts</h2>
            <div className="h-px bg-[#C778DD] w-32 md:w-64"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:w-1/2">
              <p className="text-[#ABB2BF] text-base md:text-lg leading-relaxed mb-8">
                I typically respond within 1-2 working days. For urgent inquires, feel free to reach out directly via email.
              </p>
              
              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="border border-[#ABB2BF] p-4 inline-block hover:border-[#C778DD] transition-all duration-300 bg-[#282C33]">
                <h3 className="text-white font-medium mb-4">Message me here</h3>
                <div className="flex flex-col gap-3 text-[#ABB2BF]">
                  <a href="mailto:dearspj@gmail.com" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all">
                    <Mail size={20} /><span>Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/soumya-prakash-jena-a46989372" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all">
                    <Linkedin size={20} /><span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:w-1/2 w-full">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.input whileFocus={{ scale: 1.02, borderColor: "#C778DD" }} type="text" placeholder="Name" className="w-full sm:w-1/2 bg-[#ABB2BF]/5 border border-[#ABB2BF] p-3 text-white focus:outline-none transition-all" />
                  <motion.input whileFocus={{ scale: 1.02, borderColor: "#C778DD" }} type="email" placeholder="Email" className="w-full sm:w-1/2 bg-[#ABB2BF]/5 border border-[#ABB2BF] p-3 text-white focus:outline-none transition-all" />
                </div>
                <motion.input whileFocus={{ scale: 1.01, borderColor: "#C778DD" }} type="text" placeholder="Title" className="w-full bg-[#ABB2BF]/5 border border-[#ABB2BF] p-3 text-white focus:outline-none transition-all" />
                <motion.textarea whileFocus={{ scale: 1.01, borderColor: "#C778DD" }} placeholder="Message" rows="5" className="w-full bg-[#ABB2BF]/5 border border-[#ABB2BF] p-3 text-white focus:outline-none transition-all resize-none"></motion.textarea>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(199, 120, 221, 0.1)" }} whileTap={{ scale: 0.95 }} type="submit" onClick={(e) => e.preventDefault()} className="self-start border border-[#C778DD] px-8 py-2 text-white transition-all shadow-[0_0_10px_rgba(199,120,221,0.1)] hover:shadow-[0_0_20px_rgba(199,120,221,0.3)]">
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-[#ABB2BF]/20 mt-24 bg-[#282C33] pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Top Content Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            
            {/* Left: Brand & Tagline */}
            <div className="md:w-1/3">
              <div 
                className="flex items-center gap-2 font-bold text-xl cursor-pointer hover:text-[#C778DD] transition-colors mb-4 w-max"
                onClick={(e) => handleScroll(e, 'home')}
              >
                <div className="w-4 h-4 bg-transparent border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white -mt-2 -mr-2"></div>
                </div>
                SPJ.
              </div>
              <p className="text-[#ABB2BF] leading-relaxed text-sm">
                Crafting digital experiences where logic meets creativity. Building modern, responsive web applications.
              </p>
            </div>

            {/* Middle: Navigation */}
            <div className="md:w-1/3 flex flex-col md:items-center">
              <div>
                <h3 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Navigation</h3>
                <div className="flex flex-col gap-3 text-[#ABB2BF] text-sm">
                  {['home', 'works', 'about-me', 'skills', 'contacts'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item}`} 
                      onClick={(e) => handleScroll(e, item)}
                      className="hover:text-[#white] transition-colors w-max group flex items-center gap-1"
                    >
                      <span className="text-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> 
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Connect */}
            <div className="md:w-1/3 flex flex-col md:items-end">
              <div>
                <h3 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Connect</h3>
                <div className="flex gap-4 text-[#ABB2BF]">
                  <a href="https://github.com/brovoski69" target="_blank" rel="noopener noreferrer" className="hover:text-[#C778DD] hover:-translate-y-1 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/soumya-prakash-jena-a46989372" target="_blank" rel="noopener noreferrer" className="hover:text-[#C778DD] hover:-translate-y-1 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:dearspj@gmail.com" className="hover:text-[#C778DD] hover:-translate-y-1 transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom: Copyright & Tech */}
          <div className="border-t border-[#ABB2BF]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#ABB2BF]">
            <p>© 2026 Soumya Prakash Jena. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart size={14} className="text-[#C778DD] fill-[#C778DD]" /> using React & TailwindCSS
            </p>
          </div>

        </div>
      </footer>
      <Analytics />
    </div> /* <-- Main Container Closes Here */
  );
};

export default App;