"use client";
import projects from "@/constants/projects.json";
import skills from "@/constants/skills.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  LuCode,
  LuGithub,
  LuLayers,
  LuLinkedin,
  LuMail,
  LuMenu,
  LuX,
  LuZap,
} from "react-icons/lu";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NoDak Solutions
            </div>

            {/* Desktop Menu - Always visible on md and up */}
            <div className="hidden md:block">
              <div className="flex gap-8 items-center">
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              className="block md:hidden text-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a
                href="#home"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      >
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="text-cyan-400 text-sm font-mono border border-cyan-400/30 rounded-full px-4 py-2 bg-cyan-400/5">
              Wyatt @ NoDak Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Digital
            <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Solutions That Scale
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Full-stack developer crafting modern web applications with clean
            code, innovative design, and performance-first architecture
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-slate-900"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-400/50 transition-all">
              <LuCode className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Custom Development</h3>
              <p className="text-slate-400">
                Tailored web applications built with modern frameworks and best
                practices
              </p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-400/50 transition-all">
              <LuZap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">
                Performance Optimization
              </h3>
              <p className="text-slate-400">
                Speed up existing applications and improve user experience
              </p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-purple-400/50 transition-all">
              <LuLayers className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
              <p className="text-slate-400">
                End-to-end development from database to deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of recent work showcasing technical expertise and
            problem-solving capabilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-slate-500 text-sm italic">
                    Project details coming soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About NoDak Solutions</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Hi, I&apos;m Wyatt. I founded NoDak Solutions to deliver
                high-quality software development services with a focus on
                modern technologies and clean, maintainable code.
              </p>
              <p className="text-slate-400 mb-4 leading-relaxed">
                With expertise across the full development stack, I help
                businesses and individuals bring their ideas to life through
                custom web applications, performance optimization, and technical
                consulting.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether you need a complete application built from scratch or
                want to improve an existing system, I&apos;m here to help create
                solutions that are both technically sound and user-friendly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillSet, idx) => (
                  <div key={idx}>
                    <h4 className="text-cyan-400 font-semibold mb-3">
                      {skillSet.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Have a project in mind or want to discuss how we can collaborate?
            Get in touch.
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a
              href="mailto:wyatt@nodaksolutions.com"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuMail size={20} />
              wyatt@nodaksolutions.com
            </a>
            <a
              href="https://github.com/wyatt-nodak-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuGithub size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/wyatt-cuypers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuLinkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2024 NoDak Solutions. Building the future, one line of code at
              a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
