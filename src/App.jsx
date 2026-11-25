
import { useState, useEffect, useRef } from 'react';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion
} from 'framer-motion';

import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  GraduationCap,
  Award,
  Menu,
  X,
  Code,
  Code as CodeIcon,
  Database,
  Music,
  Film,
  Type,
  Car,
  ExternalLink,
  Send,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Download,
  Palette
} from 'lucide-react';

import Deepanshu from "./assets/Deepanshu.png";
import DeepanshuAbout from "./assets/DeepanshuAbout.png";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./loader.css";

import { Analytics } from "@vercel/analytics/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiC,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiMysql
} from "react-icons/si";


export default function Component() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [colorTheme, setColorTheme] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('portfolio-color-theme') || 'aurora'
    return 'aurora'
  })
  const [themePickerOpen, setThemePickerOpen] = useState(false)

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    certificates: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-color-theme', colorTheme)
    localStorage.setItem('portfolio-color-theme', colorTheme)
  }, [colorTheme])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && ref.current.offsetTop <= scrollPosition && 
            ref.current.offsetTop + ref.current.offsetHeight > scrollPosition) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ToastContainer position="top-right" autoClose={3000} />
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(139, 92, 246, 0.22); }
        * { -webkit-tap-highlight-color: transparent; }
        a, button { touch-action: manipulation; }
        :focus-visible { outline: 2px solid #8b5cf6; outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        /* Theme accents: Aurora remains the default; Emerald and Lavender recolor the existing UI. */
        [data-color-theme="emerald"] [class~="from-blue-500"][class~="to-purple-500"],
        [data-color-theme="emerald"] [class~="from-blue-500"][class~="via-purple-500"],
        [data-color-theme="emerald"] [class~="from-blue-600"][class~="to-purple-600"] {
          background-image: linear-gradient(to right, #059669, #10b981) !important;
        }
        [data-color-theme="lavender"] [class~="from-blue-500"][class~="to-purple-500"],
        [data-color-theme="lavender"] [class~="from-blue-500"][class~="via-purple-500"],
        [data-color-theme="lavender"] [class~="from-blue-600"][class~="to-purple-600"] {
          background-image: linear-gradient(to right, #8b5cf6, #c084fc) !important;
        }
        [data-color-theme="emerald"] [class~="from-blue-500"][class~="via-purple-500"][class~="to-pink-500"] { background-image: linear-gradient(to right, #059669, #10b981, #a7f3d0) !important; }
        [data-color-theme="lavender"] [class~="from-blue-500"][class~="via-purple-500"][class~="to-pink-500"] { background-image: linear-gradient(to right, #8b5cf6, #a78bfa, #f0abfc) !important; }
        [data-color-theme="emerald"] [class~="text-blue-600"], [data-color-theme="emerald"] [class~="text-blue-500"], [data-color-theme="emerald"] [class~="text-purple-600"], [data-color-theme="emerald"] [class~="text-purple-500"] { color: #059669 !important; }
        [data-color-theme="lavender"] [class~="text-blue-600"], [data-color-theme="lavender"] [class~="text-blue-500"], [data-color-theme="lavender"] [class~="text-purple-600"], [data-color-theme="lavender"] [class~="text-purple-500"] { color: #8b5cf6 !important; }
        [data-color-theme="emerald"] [class~="text-purple-300"] { color: #6ee7b7 !important; }
        [data-color-theme="lavender"] [class~="text-purple-300"] { color: #d8b4fe !important; }
        [data-color-theme="emerald"] [class~="border-blue-200"], [data-color-theme="emerald"] [class~="border-purple-500"], [data-color-theme="emerald"] [class~="border-purple-400"] { border-color: #a7f3d0 !important; }
        [data-color-theme="lavender"] [class~="border-blue-200"], [data-color-theme="lavender"] [class~="border-purple-500"], [data-color-theme="lavender"] [class~="border-purple-400"] { border-color: #ddd6fe !important; }
        [data-color-theme="emerald"] [class~="bg-blue-50"], [data-color-theme="emerald"] [class~="bg-purple-50"] { background-color: #ecfdf5 !important; }
        [data-color-theme="lavender"] [class~="bg-blue-50"], [data-color-theme="lavender"] [class~="bg-purple-50"] { background-color: #f5f3ff !important; }
        [data-color-theme="emerald"] [class~="bg-blue-500"], [data-color-theme="emerald"] [class~="bg-purple-500"] { background-color: #059669 !important; }
        [data-color-theme="lavender"] [class~="bg-blue-500"], [data-color-theme="lavender"] [class~="bg-purple-500"] { background-color: #8b5cf6 !important; }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-[0%] z-50"
        style={{ scaleX }}
      />
      
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 dark:bg-purple-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              size: Math.random() * 5 + 2,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
            }}
          />
        ))}
      </div>

      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_8px_32px_rgba(31,41,55,0.08)] backdrop-blur-2xl dark:border-gray-700/80 dark:bg-gray-900/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.24)] sm:px-6">
          {/* Brand */}
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            onClick={() => scrollToSection("home")}
            className="shrink-0 text-lg font-extrabold tracking-tight sm:text-xl"
            aria-label="Go to home"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Deepanshu<span className="text-gray-800 dark:text-white">.</span>
            </span>
          </motion.button>

          {/* Desktop capsule navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-200/80 bg-gray-100/70 p-1 dark:border-gray-700/80 dark:bg-gray-800/70 md:flex">
            {["home", "about", "education", "experience", "projects", "certificates"].map((section) => (
              <motion.button
                key={section}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection(section)}
                className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium capitalize transition-colors duration-300 lg:px-4 ${
                  activeSection === section
                    ? "text-blue-600 dark:text-purple-300"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-purple-300"
                }`}
              >
                {activeSection === section && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm dark:bg-gray-700"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{section}</span>
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <motion.a
              href="/Deepanshu_Dhakad_16433.pdf"
              download="Deepanshu_Dhakad_16433.pdf"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-colors hover:border-purple-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:text-purple-300 dark:hover:border-purple-500 dark:hover:bg-gray-700"
            >
              <Download size={16} /> Resume
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-shadow hover:shadow-lg hover:shadow-purple-500/20"
            >
              Let's Talk
            </motion.button>
            <motion.button
              whileHover={{ rotate: 12, scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setThemePickerOpen((open) => !open)}
              className="rounded-full border border-gray-200 bg-white/80 p-2.5 text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
              aria-label="Choose color theme"
              aria-expanded={themePickerOpen}
            >
              <Palette size={18} />
            </motion.button>
            <motion.button
              whileHover={{ rotate: 12, scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="rounded-full border border-gray-200 bg-white/80 p-2.5 text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setThemePickerOpen((open) => !open)}
              className="rounded-full border border-gray-200 bg-white/80 p-2.5 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              aria-label="Choose color theme"
              aria-expanded={themePickerOpen}
            >
              <Palette size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="rounded-full border border-gray-200 bg-white/80 p-2.5 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2.5 text-white shadow-md"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Color theme picker */}
      <motion.div
        initial={false}
        animate={{ opacity: themePickerOpen ? 1 : 0, y: themePickerOpen ? 0 : -8, scale: themePickerOpen ? 1 : 0.98 }}
        transition={{ duration: 0.18 }}
        className={`fixed right-3 top-[5.35rem] z-40 w-64 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-2xl shadow-gray-900/15 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-900/95 sm:right-6 md:right-8 ${themePickerOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}`}
      >
        <div className="mb-2 flex items-center justify-between px-1">
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">Choose your vibe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Personalize accent colors</p>
          </div>
          <button onClick={() => setThemePickerOpen(false)} className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Close theme picker"><X size={16} /></button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'aurora', name: 'Aurora', colors: ['#3B82F6', '#8B5CF6', '#EC4899'] },
            { id: 'emerald', name: 'Emerald', colors: ['#059669', '#10B981', '#A7F3D0'] },
            { id: 'lavender', name: 'Lavender', colors: ['#8B5CF6', '#A78BFA', '#F0ABFC'] },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setColorTheme(item.id); setThemePickerOpen(false) }}
              className={`rounded-xl border p-2 text-left transition-all hover:-translate-y-0.5 ${colorTheme === item.id ? 'border-purple-500 bg-purple-50/70 dark:bg-purple-500/10' : 'border-gray-200 bg-white/70 dark:border-gray-700 dark:bg-gray-800/70'}`}
            >
              <span className="mb-2 flex gap-1.5">
                {item.colors.map((color) => <span key={color} className="h-5 flex-1 rounded-md" style={{ backgroundColor: color }} />)}
              </span>
              <span className="flex items-center justify-between text-xs font-semibold text-gray-800 dark:text-gray-100">
                {item.name}
                {colorTheme === item.id && <CheckCircle2 size={14} className="text-purple-600 dark:text-purple-300" />}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Compact floating mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -8,
          scale: mobileMenuOpen ? 1 : 0.98
        }}
        transition={{ duration: 0.2 }}
        className={`fixed left-3 right-3 top-[5.25rem] z-30 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-2xl shadow-gray-900/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-900/95 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div className="grid grid-cols-2 gap-2">
          {["home", "about", "education", "experience", "projects", "certificates", "contact"].map((section) => (
            <motion.button
              key={section}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection(section)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition-colors ${
                activeSection === section
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {section}
            </motion.button>
          ))}
        </div>
        <a
          href="/Deepanshu_Dhakad_16433.pdf"
          download="Deepanshu_Dhakad_16433.pdf"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-transform active:scale-[0.98]"
        >
          <Download size={17} /> Download Resume
        </a>
      </motion.div>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <AnimatedSection sectionRef={sectionRefs.home}>
          <Home scrollToProjects={() => scrollToSection('projects')} scrollToContact={()=> scrollToSection('contact')}/>
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.about}>
          <About />
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.education}>
          <Education />
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.experience}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.projects}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.certificates}>
          <Certificates />
        </AnimatedSection>
        <AnimatedSection sectionRef={sectionRefs.contact}>
          <Contact />
        </AnimatedSection>
      </main>

      <footer className="relative mt-16 overflow-hidden border-t border-gray-200/80 bg-white/80 dark:border-gray-800 dark:bg-gray-950/80 backdrop-blur-xl">
        <div className="pointer-events-none absolute -top-28 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-purple-500/10" />
        <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl dark:bg-pink-500/10" />

        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-7">
          {/* Footer call-to-action */}
          <motion.div
            className="mb-12 overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 shadow-sm dark:border-purple-500/20 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/40 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-purple-500/30 dark:bg-gray-800 dark:text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Let's build something
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Have an idea? <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Let's make it real.</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
                  I'm open to meaningful projects, collaborations, and new opportunities.
                </p>
              </div>
              <motion.a
                href="mailto:deepanshudhakad381@gmail.com"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-purple-600"
              >
                Let's Talk <Send size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-10 border-b border-gray-200/80 pb-10 dark:border-gray-800 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <a href="#home" className="inline-block text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Deepanshu Dhakad.
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                MERN Stack Developer passionate about building responsive, useful, and user-friendly web applications.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/deepanshu8000", icon: <Github size={18} /> },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshu-dhakad/", icon: <Linkedin size={18} /> },
                  { label: "Email", href: "mailto:deepanshudhakad381@gmail.com", icon: <Mail size={18} /> }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-500 dark:hover:text-purple-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">Explore</h3>
              <div className="flex flex-col items-start gap-3">
                {["home", "about", "education", "experience", "projects", "certificates", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm capitalize text-gray-600 transition-colors hover:translate-x-1 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-300"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">Get in touch</h3>
              <a
                href="mailto:deepanshudhakad381@gmail.com"
                className="break-all text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-300"
              >
                deepanshudhakad381@gmail.com
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Deepanshu Dhakad. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Designed & built with <span className="font-semibold text-blue-500 dark:text-purple-400">passion</span>.
            </p>
          </div>
        </div>
      </footer>
      
      <Analytics />
    </div>
  )
}

function AnimatedSection({ children, sectionRef }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen scroll-mt-28 flex items-center justify-center py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 34, filter: prefersReducedMotion ? "none" : "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-purple-500/[0.045] blur-3xl dark:bg-purple-400/[0.07]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <div className="w-full relative z-10">
        {children}
      </div>
    </motion.section>
  )
}

function Home({ scrollToProjects, scrollToContact }) {
  const textVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12 + 0.2, duration: 0.55 }
    })
  };

  const techStack = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"];

  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-[calc(100vh-9rem)] flex items-center py-10 md:py-14">
      {/* Soft theme-matched background glow */}
      <div className="pointer-events-none absolute -top-10 right-8 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-64 h-64 rounded-full bg-purple-400/10 dark:bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 grid w-full grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] items-center gap-12 lg:gap-10">
        {/* LEFT: Intro and actions */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-purple-500/30 bg-white/80 dark:bg-gray-800/70 px-4 py-2 mb-6 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              MERN Stack Developer
            </span>
          </motion.div>

          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h2
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-5"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Deepanshu
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Dhakad.</span>
          </motion.h2>

          <motion.h3
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          >
            I build <span className="text-blue-500 dark:text-purple-400">web experiences</span>
            <span className="text-gray-800 dark:text-gray-100"> that matter.</span>
          </motion.h3>

          <motion.p
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-7"
          >
            Software developer passionate about creating responsive,
            user-friendly applications and turning ideas into meaningful
            digital experiences.
          </motion.p>

          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-7"
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-purple-600"
            >
              View My Work <ExternalLink size={17} />
            </motion.button>

            <motion.a
              href="/Deepanshu_Dhakad_16433.pdf"
              download="Deepanshu_Dhakad_16433.pdf"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-purple-400 dark:border-purple-400 bg-white/70 dark:bg-gray-800/70 px-7 py-3.5 font-semibold text-purple-600 dark:text-purple-300 shadow-sm transition-colors hover:bg-purple-50 dark:hover:bg-purple-500/10"
            >
              Download Resume <Download size={17} />
            </motion.a>

            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-500 dark:border-purple-400 px-7 py-3.5 font-semibold text-blue-600 dark:text-purple-300 transition-colors hover:bg-blue-500/10 dark:hover:bg-purple-500/10"
            >
              Contact Me <Mail size={17} />
            </motion.button>
          </motion.div>

          <motion.div
            custom={6}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">Find me on</span>
            <a
              href="https://github.com/deepanshu8000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-2.5 text-gray-700 dark:text-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:text-blue-500 dark:hover:text-purple-400"
            >
              <Github size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepanshu-dhakad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-2.5 text-gray-700 dark:text-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:text-blue-500 dark:hover:text-purple-400"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="mailto:deepanshudhakad381@gmail.com"
              aria-label="Email"
              className="rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-2.5 text-gray-700 dark:text-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:text-blue-500 dark:hover:text-purple-400"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Profile image with floating info cards */}
        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-20 dark:opacity-30" />

          <div className="relative mx-auto w-[min(78vw,19rem)] sm:w-80">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 rotate-3" />
            <div className="relative h-[19rem] sm:h-[21rem] overflow-hidden rounded-[1.7rem] border-4 border-white dark:border-gray-800 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 shadow-2xl">
              <motion.img
                src={Deepanshu}
                alt="Deepanshu Dhakad"
                className="h-full w-full object-cover object-top"
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -left-2 sm:-left-8 rounded-2xl border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-blue-100 dark:bg-purple-900/50 p-2 text-blue-600 dark:text-purple-300">
                <Code size={21} />
              </span>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Focused on</p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">Full-Stack Web</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 -right-2 sm:-right-8 rounded-2xl border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-purple-100 dark:bg-blue-900/50 p-2 text-purple-600 dark:text-blue-300">
                <Database size={21} />
              </span>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tech stack</p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">MERN Stack</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-blue-200 dark:border-purple-500/30 bg-white/90 dark:bg-gray-800/90 px-4 py-2 shadow-lg backdrop-blur-md"
          >
            <p className="whitespace-nowrap text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              Learning • Building • Improving
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack strip */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 hidden md:flex flex-wrap items-center justify-center gap-3 border-t border-gray-200/70 dark:border-gray-700/70 pt-5"
      >
        <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Working with
        </span>
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

//About
function About() {

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-500" size={20} />,
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-green-500" size={20} />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-600" /> },
        {name: "MySQL",icon: <SiMysql className="text-blue-600" />,
},
      ]
    },
    {
      title: "Programming & Core Concepts",
      icon: <Code className="text-purple-500" size={20} />,
      items: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C", icon: <SiC className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "DSA", icon: <Code className="text-purple-500" /> },
      ]
    }
  ];

  const tools = [
   { name: "VS Code", icon: <Code className="text-blue-500" /> },
    { name: "Antigravity", icon: <Code className="text-purple-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "GitHub", icon: <Github className="text-gray-800 dark:text-white" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full py-2">

      {/* ABOUT HEADING + FULL-WIDTH DESCRIPTION */}
      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="w-full max-w-none space-y-2 text-justify text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I am a passionate MERN Stack Developer aspiring to build modern
            and scalable web applications. I enjoy learning new technologies
            and continuously improving my skills in MongoDB, Express.js,
            React.js, Node.js, and JavaScript.
          </p>

          <p>
            I enjoy creating responsive and user-friendly interfaces using
            React, while also working on backend development with Node.js
            and MongoDB to deliver complete full-stack solutions.
          </p>

          <p>
            Beyond coding, I like exploring new technologies, working on
            personal projects, and participating in hackathons to challenge
            myself and gain real-world development experience.
          </p>
        </div>
      </div>

      {/* SKILLS & TOOLS LEFT / ILLUSTRATION RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 items-center">

        {/* LEFT SIDE: SKILLS AND TOOLS */}
        <div className="w-full">

          {/* SKILLS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Technical Skills
            </h3>

            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h4 className="font-semibold text-base text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4, scale: 1.04 }}
                      className="flex items-center gap-2 px-3 py-2
                      rounded-lg bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      shadow-sm hover:shadow-lg
                      transition-all duration-300"
                    >
                      <span className="text-xl">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* TOOLS */}
          <div className="mt-5">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="flex items-center gap-2 px-3 py-2
                  rounded-lg bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xl">
                    {tool.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: ILLUSTRATION */}
        <motion.div
          className="w-full h-full flex justify-center items-center self-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-[430px] mx-auto">
            {/* Background Glow */}
            <div className="absolute -inset-5 bg-gradient-to-r
            from-blue-500 to-purple-500 rounded-3xl
            blur-3xl opacity-25">
            </div>

            {/* Illustration */}
            <motion.img
              src={DeepanshuAbout}
              alt="3D Developer working on laptop"
              className="relative w-full max-h-[400px] object-contain
              rounded-2xl drop-shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// Education
function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Poornima University, Jaipur",
      year: "2023 – 2027",
      description: "Pursuing Computer Science, with a focus on building a strong foundation in programming, software development, and modern web technologies.",
      status: "Currently pursuing",
      icon: <GraduationCap size={23} />,
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Bhuvnesh Bal Vidyalaya",
      year: "2022 – 2023",
      description: "Completed senior secondary education under the CBSE curriculum.",
      status: "Completed",
      icon: <GraduationCap size={23} />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Education
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          The academic milestones that built my foundation and continue to shape my journey in technology.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[19px] md:left-1/2 top-3 bottom-3 w-px md:-translate-x-1/2 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-50" />

        <div className="space-y-7 md:space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className={`relative flex pl-12 md:pl-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="absolute left-[9px] md:left-1/2 top-7 md:-translate-x-1/2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-gray-900 ring-4 ring-blue-500/15">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              </div>

              <div className={`w-full md:w-[calc(50%-34px)] ${index % 2 === 0 ? "md:pr-2" : "md:pl-2"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-800/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-purple-500/70 transition-all duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80" />
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-xl p-3 text-blue-600 dark:text-purple-300 bg-blue-50 dark:bg-purple-500/15 ring-1 ring-blue-100 dark:ring-purple-400/20">
                      {edu.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${index === 0 ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"}`}>
                          {edu.status}
                        </span>
                        <span className="text-xs font-semibold text-blue-600 dark:text-purple-300">{edu.year}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">{edu.degree}</h3>
                      <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{edu.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Experience & Training
function Experience() {
  const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"];

  return (
    <div className="mx-auto w-full max-w-6xl">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-purple-400/20 dark:bg-purple-500/10 dark:text-purple-300">
          <Sparkles size={13} /> Practical learning
        </span>
        <h2 className="mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Experience & Training
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
          Hands-on learning that helped me connect frontend and backend concepts while building my development skills.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4 }}
        className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-200/70 bg-white/90 shadow-lg shadow-blue-950/[0.04] transition-all duration-300 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-800/90 dark:hover:border-purple-500/60"
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-150" />

        <div className="relative grid gap-7 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:gap-10 md:p-10">
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <CheckCircle2 size={14} /> Successfully completed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
                <CalendarDays size={13} /> May – July · 90 Days
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                <BriefcaseBusiness size={23} />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl">
                  MERN Stack Developer Training
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-blue-600 dark:text-purple-300">
                  AU Ignite Future Skills Academy
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-[15px]">
              Completed a 90-day MERN Stack training program focused on modern web development. Gained practical exposure to building full-stack applications, understanding frontend–backend integration, working with databases, and developing REST APIs.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                Technologies covered
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="rounded-lg border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-purple-400/15 dark:bg-purple-500/10 dark:text-purple-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 border-t border-gray-100 pt-5 dark:border-gray-700 md:w-44 md:flex-col md:justify-center md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/15 text-blue-600 ring-1 ring-blue-200/70 dark:text-purple-300 dark:ring-purple-400/20">
              <Award size={31} />
            </div>
            <div className="md:text-center">
              <p className="text-sm font-bold text-gray-900 dark:text-white">Certificate Earned</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">90-day training program</p>
            </div>
            <a
              href="https://raw.githubusercontent.com/deepanshu8000/Personal-Portfolio-Page/main/src/assets/training_certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-purple-600 transition-colors hover:text-blue-600 dark:text-purple-300 dark:hover:text-purple-200 md:ml-0"
            >
              View certificate <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      image: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/simplepoetfolio%20(2).png?raw=true",
      title: "Car Rentals Website",
      description: "A MERN stack-based car rental app where users can explore cars, view details, and book vehicles through a responsive interface.",
      link: "https://dcarrental.vercel.app/",
      repo: "https://github.com/deepanshu8000/CarRentals",
      icon: <Car className="text-green-500" size={20} />,
      tags: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      id: 2,
      image: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/simplepoetfolio%20(1).png?raw=true",
      title: "Simple Portfolio",
      description: "A clean and simple personal portfolio website developed using HTML and CSS.",
      link: "https://deepanshu26.vercel.app/",
      repo: "https://github.com/deepanshu8000/portfolio-html-css",
      icon: <CodeIcon className="text-pink-500" size={20} />,
      tags: ["HTML", "CSS"]
    },
    {
      id: 3,
      image: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/portfolio.png?raw=true",
      title: "Personal Portfolio",
      description: "A responsive portfolio showcasing projects, technical skills, and professional details with a modern interface.",
      link: "https://deepanshu125.vercel.app",
      repo: "https://github.com/deepanshu8000/Personal-Portfolio-Page",
      icon: <CodeIcon className="text-green-500" size={20} />,
      tags: ["HTML", "JavaScript", "React"]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Section Heading */}
      <motion.div
        className="text-center mb-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          My Projects
        </h2>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of projects where I turn ideas into functional and user-friendly applications.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            whileHover={{ y: -7 }}
            className="group h-full flex flex-col overflow-hidden rounded-2xl
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            shadow-md hover:shadow-xl
            hover:border-blue-400 dark:hover:border-purple-500
            transition-all duration-300"
          >

            {/* Project Image */}
            <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />

              <span className="absolute top-3 left-3 text-xs font-medium
              px-3 py-1 rounded-full bg-black/50 text-white backdrop-blur-md">
                Project 0{project.id}
              </span>
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-purple-900/40">
                  {project.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 min-h-[66px] mb-4">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full
                    bg-blue-50 text-blue-700
                    dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2
                  text-sm font-semibold py-2.5 px-3 rounded-lg
                  bg-gradient-to-r from-blue-500 to-purple-500
                  hover:from-blue-600 hover:to-purple-600
                  text-white shadow-sm transition-all"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </motion.a>

                {project.repo && (
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2
                    text-sm font-semibold py-2.5 px-3 rounded-lg
                    border border-gray-300 dark:border-gray-600
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    transition-all"
                  >
                    <Github size={15} />
                    View Code
                  </motion.a>
                )}

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}


function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Enigma Inter College Hackathon",
      issuer: "RIET",
      year: "2026",
      category: "Hackathon",
      link: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/Enigma.jpeg?raw=true",
    },
    {
      id: 2,
      title: "Google Launchpad – Gen AI",
      issuer: "Google Cloud",
      year: "2026",
      category: "Generative AI",
      link: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/GenAI_page-0001.jpg?raw=true",
    },
    {
      id: 3,
      title: "Oracle Certified Foundation Associates",
      issuer: "Oracle University",
      year: "2025",
      category: "Oracle",
      link: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/eCertificate_page-0001.jpg?raw=true",
    },
    {
      id: 4,
      title: "Gen AI Study Jams Program",
      issuer: "Google Cloud",
      year: "2025",
      category: "Generative AI",
      link: "https://github.com/deepanshu8000/Personal-Portfolio-Page/blob/main/src/assets/91.png?raw=true",
    },
    {
      id: 5,
      title: "Full Stack Developer – Skill Competency",
      issuer: "Medhavi Skills University · AU Ignite Future Skills Centre",
      year: "2026",
      category: "Full Stack Development",
      link: "https://raw.githubusercontent.com/deepanshu8000/Personal-Portfolio-Page/main/src/assets/training_certificate.jpeg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Certificates & Achievements
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A few milestones from my learning journey, technical events, and exploration of emerging technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {certificates.map((cert, index) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.09 }}
            whileHover={{ y: -6 }}
            className="group h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-purple-500/70 transition-all duration-300"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900" aria-label={`View ${cert.title} certificate`}>
              <img
                src={cert.link}
                alt={`${cert.title} certificate`}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-transparent opacity-70" />
              <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white bg-black/45 backdrop-blur-md border border-white/20">
                {cert.category}
              </span>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-gray-900/90 px-3 py-1.5 text-xs font-semibold text-gray-800 dark:text-white shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View certificate <ExternalLink size={13} />
              </span>
            </a>

            <div className="p-5 flex flex-col min-h-[148px]">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                </div>
                <div className="shrink-0 rounded-xl p-2.5 text-blue-600 dark:text-purple-300 bg-blue-50 dark:bg-purple-500/15">
                  <Award size={20} />
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Certificate</span>
                <span className="text-xs font-semibold text-blue-600 dark:text-purple-300">{cert.year}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message. Please try again.');
      }

      toast.success(result.message || 'Message sent successfully! Thank you for reaching out.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      title: 'Email',
      value: 'deepanshudhakad381@gmail.com',
      href: 'mailto:deepanshudhakad381@gmail.com',
      icon: <Mail size={20} />,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/deepanshu-dhakad',
      href: 'https://www.linkedin.com/in/deepanshu-dhakad/',
      icon: <Linkedin size={20} />,
    },
    {
      title: 'GitHub',
      value: 'github.com/deepanshu8000',
      href: 'https://github.com/deepanshu8000',
      icon: <Github size={20} />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">

      {/* Heading */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2
        bg-gradient-to-r from-blue-500 to-purple-500
        text-transparent bg-clip-text">
          Let's Connect
        </h2>

        <p className="text-sm md:text-base text-gray-600
        dark:text-gray-400 max-w-xl mx-auto">
          Have a project, idea, or opportunity?
          Feel free to reach out. I'd love to connect with you!
        </p>
      </motion.div>

      {/* Main Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]
      gap-5 lg:gap-6 items-stretch">

        {/* LEFT: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full p-5 md:p-6 rounded-2xl
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          shadow-md flex flex-col"
        >
          <div className="mb-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Contact Information
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Let's start a conversation.
            </p>
          </div>

          <div className="space-y-3">
            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.title === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-3 rounded-xl
                bg-gray-50 dark:bg-gray-700/50
                border border-transparent
                hover:border-blue-300 dark:hover:border-purple-500
                transition-all duration-300"
              >
                <div className="shrink-0 p-3 rounded-lg
                bg-blue-100 dark:bg-purple-900/50
                text-blue-600 dark:text-purple-300">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>

                  <p className="text-sm font-medium text-gray-800
                  dark:text-gray-100 break-all">
                    {item.value}
                  </p>
                </div>

                <ExternalLink
                  size={15}
                  className="ml-auto shrink-0 text-gray-400"
                />
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <div className="mt-auto pt-5">
            <div className="rounded-xl p-4
            bg-gradient-to-r from-blue-500/10 to-purple-500/10
            border border-blue-200 dark:border-purple-700/40">

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500
                animate-pulse" />

                <h4 className="font-semibold text-sm text-gray-800
                dark:text-gray-100">
                  Open to Opportunities
                </h4>
              </div>

              <p className="text-xs leading-relaxed text-gray-600
              dark:text-gray-400">
                Interested in software development roles,
                collaborations, and learning opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full p-5 md:p-6 rounded-2xl
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          shadow-md"
        >
          <div className="mb-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Send Me a Message
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <label htmlFor="name"
                className="block text-sm font-medium mb-1.5
                text-gray-700 dark:text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                maxLength={80}
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-gray-50 dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email"
                className="block text-sm font-medium mb-1.5
                text-gray-700 dark:text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                maxLength={254}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-gray-50 dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-all"
              />
            </div>

            {/* Subject */}
            <div className="sm:col-span-2">
              <label htmlFor="subject"
                className="block text-sm font-medium mb-1.5
                text-gray-700 dark:text-gray-300">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                maxLength={120}
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-gray-50 dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-all"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message"
                className="block text-sm font-medium mb-1.5
                text-gray-700 dark:text-gray-300">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={5000}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-gray-50 dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 rounded-lg
                bg-gradient-to-r from-blue-500 to-purple-500
                hover:from-blue-600 hover:to-purple-600
                text-white text-sm font-semibold
                shadow-md transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30
                    border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </div>

          </div>
        </motion.form>
      </div>
    </div>
  );
}
