"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const projects = [
    { title: "TATA COE", category: "Subject Matter Expert", year: "2025" },
    { title: "SDBS Infracon", category: "Project Coordinator", year: "2023-25" },
    { title: "3D Printing", category: "Freelance Services", year: "2023-Present" },
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#050505] text-[#E5E5E5] overflow-hidden selection:bg-[#E5E5E5] selection:text-[#050505]">
      
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference hidden md:flex items-center justify-center rounded-full border border-white"
        animate={{
          x: mousePosition.x - (isHovering ? 32 : 8),
          y: mousePosition.y - (isHovering ? 32 : 8),
          width: isHovering ? 64 : 16,
          height: isHovering ? 64 : 16,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 p-4 md:p-12 flex justify-center md:justify-end items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5 md:border-none">
        <nav className="flex gap-6 md:gap-8 text-xs md:text-sm uppercase tracking-widest">
          <a href="#work" className="hover:opacity-70 transition-opacity" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Work</a>
          <a href="#about" className="hover:opacity-70 transition-opacity" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <h1 className="font-serif text-[12vw] leading-[0.85] tracking-tighter uppercase mb-6">
            Samiksha<br />
            <span className="italic text-[#888]">Industrial</span>
            <br />
            Designer
          </h1>
          <p className="max-w-md text-sm md:text-base text-gray-400 uppercase tracking-widest leading-relaxed">
            Bridging the gap between engineering precision and user-centered design aesthetics. Based in India.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 text-sm uppercase tracking-widest text-gray-500">
            [ 01 — About ]
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-12">
              I believe in the intersection of <span className="italic text-gray-400">design</span> and <span className="italic text-gray-400">engineering</span>. Building products that feel alive, intuitive, and performant.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-400">
              <div>
                <h3 className="text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Core Tools</h3>
                <ul className="space-y-2">
                  <li>AutoCAD</li>
                  <li>SolidWorks</li>
                  <li>ANSYS</li>
                  <li>SketchUp</li>
                  <li>Blender</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="text-white">Master of Design (M.Des)</div>
                    <div className="text-xs">Vellore Institute of Technology — 2026-Present</div>
                  </li>
                  <li>
                    <div className="text-white">B.Tech Mechanical Engineering</div>
                    <div className="text-xs">GEC Banka — 2019-2023</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="flex justify-between items-end mb-16">
          <div className="text-sm uppercase tracking-widest text-gray-500">
            [ 02 — Professional Experience ]
          </div>
        </div>
        
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative border-b border-white/10 pb-12 cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                <div>
                  <div className="text-xs text-gray-500 mb-4 font-mono">{project.year} — {project.category}</div>
                  <h3 className="font-serif text-4xl md:text-6xl transition-colors group-hover:text-gray-400">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all transform group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              {/* Image reveal on hover - Simplified for now with an overlay div */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[25vw] bg-zinc-900 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg overflow-hidden pointer-events-none hidden md:block">
                <Image src={`https://picsum.photos/seed/${index}/800/500`} alt={project.title} fill className="object-cover opacity-50 mix-blend-overlay" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 border-t border-white/10 min-h-[70vh] flex flex-col justify-center">
        <div className="text-center">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8">
            [ 03 — Let&apos;s Connect ]
          </div>
          <h2 className="font-serif text-[6.5vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] mb-12 hover:italic transition-all cursor-pointer inline-block w-full break-words"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
          >
            samiksha21092001@gmail.com
          </h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors"
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-400 transition-colors"
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
