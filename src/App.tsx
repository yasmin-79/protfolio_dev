import React, { useState, useEffect } from 'react';
import profileImg from './assets/superr.jpg';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { 
  Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Settings, Users, Award, Send, Menu, X, ChevronDown 
} from 'lucide-react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9tlj5ei',   // Replace with your Service ID
        'template_mmpq306',  // Replace with your Template ID
       form.current,
        'Ols3MGwg50u7ZoIF2' // Replace with your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="glass-card p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send Message</h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-400 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  );
};






function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Typewriter effect for hero section
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'React.js', icon: Code },
      { name: 'Bootstrap', icon: Code },
      { name: 'UI Designing', icon: Code }
    ],
    backend: [
      { name: 'Node.js', icon: Database },
      { name: 'Express.js', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Firebase', icon: Database },
      { name: 'SQL', icon: Database },
      { name: 'REST APIs', icon: Database },
      { name: 'JWT', icon: Database }
    ],
    tools: [
      { name: 'Git', icon: Settings },
      { name: 'GitHub', icon: Settings },
      { name: 'VS Code', icon: Settings },
      { name: 'Power BI', icon: Settings }
    ],
    softskills: [
      { name: 'Creative Thinking', icon: Users },
      { name: 'Problem Solving', icon: Users },
      { name: 'Effective Communication', icon: Users },
      { name: 'Team Management', icon: Users }
    ],
    languages: [
      { name: 'Python', icon: Code },
      { name: 'Java', icon: Code },
      { name: 'JavaScript', icon: Code }
    ]
  };

  const projects = [
  {
    title: "StudyBuddy",
    description:
      "A full-stack resource sharing platform enabling 100+ students to upload, search, and share study materials. Features secure JWT authentication, role-based access, REST APIs with Express.js, and PostgreSQL (Neon DB).",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT"],
    liveDemo: "https://study-buddy-4926.onrender.com", // 👈 ADD THIS
    github: "https://github.com/yasmin-79/Study_buddy"
  },
  {
    title: "HouseHunt",
    description:
      "A web platform designed for users to search, list, and filter rental properties with clean UI, responsive design, and Firebase backend for data management.",
    tech: ["React", "Firebase", "CSS3", "JavaScript", "MongoDB", "Express.js", "Node.js"],
    liveDemo: "#",
    github: "#"
  }
];


  const experiences = [
    {
      title: "TEDx – Hospitality Lead",
      description: "Led the hospitality team for a TEDx event, ensuring seamless management and coordination.",
      icon: Users
    },
    {
      title: "IIC Membership",
      description: "Active member in Institution's Innovation Council, contributing to project development and innovation activities.",
      icon: Award
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yasmin_Resume.pdf"; // file inside public/
    link.download = "Yasmin_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 capitalize ${
                      activeSection === item ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                {/* Resume Button */}
                <button
                  onClick={handleResumeDownload}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={16} />
                  Resume
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 capitalize"
                >
                  {item}
                </button>
              ))}
              {/* Mobile Resume Button */}
              <button
                onClick={handleResumeDownload}
                className="w-full text-left bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-2 rounded-lg text-base font-medium flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <Code size={40} className="text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                 Hi , I'm Yasmin
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 min-h-[2rem]">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="animate-pulse">|</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about Building Scalable & User-Friendly Applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                 Hi,there! I am a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                  
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                   I thrive in collaborative environments and am always eager to learn new technologies and tackle 
                  challenging problems.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  When I'm not coding, you'll find me contributing to open-source projects, participating 
                  in tech communities, or exploring the latest developments in web development and emerging technologies.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                
                  <div className="w-58 h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-2xl overflow-hidden">
  
                  <img 
                   src={profileImg} 
                   alt="Yasmin" 
                    className="w-full h-full object-cover rounded-full"
                       />
                  </div>

                
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are  my recent projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card glass-card p-8 rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <Code size={20} className="text-cyan-400" />
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-400 border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveDemo}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-white font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 border-2 border-slate-600 px-4 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-300 font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 text-center capitalize text-cyan-400">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="skill-item flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                          <IconComponent size={16} className="text-cyan-400" />
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key experiences that have shaped my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div key={index} className="experience-card glass-card p-8 rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-cyan-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30 flex-shrink-0">
                      <IconComponent size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-1">
  <ContactForm />
</div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Connect With Me</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:yasminshaik4641@gmail.com"
                  className="contact-link flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Email</p>
                    <p className="text-gray-400">yasminshaik4641@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/yasmin-79"
                  className="contact-link flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-cyan-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
                    <Github size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">GitHub</p>
                    <p className="text-gray-400">https://github.com/yasmin-79</p>
                  </div>
                </a>

                <a 
  href="https://www.linkedin.com/in/yasminshaik7981" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-link flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
>
  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
    <Linkedin size={20} className="text-blue-400" />
  </div>
  <div>
    <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">LinkedIn</p>
    <p className="text-gray-400">www.linkedin.com/in/yasminshaik7981</p>
  </div>
</a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"></div>
            <p className="text-gray-400">
              © 2025 Yasmin shaik. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;