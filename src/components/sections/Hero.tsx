"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Magnet from "../ui/Magnet";
import { useRef, Suspense } from "react";
import { Box } from "lucide-react";
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), { 
  ssr: false,
  loading: () => null 
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = "Where Intelligence Meets Motion".split(" ");

  const container: any = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section ref={containerRef} id="home" className="pt-32 pb-20 min-h-screen container mx-auto px-6 flex flex-col items-start justify-start relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ y, opacity }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full min-h-[60vh] rounded-3xl flex items-center justify-center mb-16 relative overflow-hidden group bg-transparent"
      >
        <Suspense fallback={
          <div className="flex flex-col items-center gap-4 text-text-primary/10">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Box className="w-64 h-64 stroke-[0.5px]" />
            </motion.div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">Initializing Intelligent Core...</span>
          </div>
        }>
          <div 
            className="w-full h-full scale-[0.8] md:scale-[1.1] pt-12 relative flex items-center justify-center overflow-hidden spline-container" 
            style={{ 
              position: 'relative',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
            }}
          >
            <div className="w-full h-full relative" style={{ clipPath: 'inset(0 0 50px 0)', position: 'relative', backgroundColor: '#ffffff' }}>
              <Spline
                className="w-full h-full relative"
                style={{ position: 'relative' }}
                scene="https://prod.spline.design/iDOFowil08diXt7F/scene.splinecode" 
              />
              {/* Occlusion layer for Spline Logo - matching #ffffff */}
              <div className="absolute bottom-0 right-0 w-40 h-16 bg-[#ffffff] z-[9999] pointer-events-none" style={{ backgroundColor: '#ffffff' }} />
            </div>
          </div>
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
      </motion.div>

      <div className="max-w-3xl">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block px-4 py-1.5 glass text-[10px] font-display font-extrabold uppercase tracking-widest mb-8"
        >
          Next-Gen Robotics • AI Powered
        </motion.span>

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 text-text-primary flex flex-wrap gap-x-[0.2em]"
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={child}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-[560px]"
        >
          ABHI ROBO engineers autonomous robotic systems that think, learn, and adapt — built for the world of tomorrow.
        </motion.p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Magnet>
            <a href="#products" className="btn btn-primary px-10">Explore Robots</a>
          </Magnet>
          <Magnet>
            <a href="#" className="btn btn-ghost px-10">Watch Demo ▶</a>
          </Magnet>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-3"
        >
          {["50+ Robots Deployed", "99.4% Uptime", "12 Patents Filed"].map((stat) => (
            <div key={stat} className="glass px-4 py-2 text-xs font-bold text-text-secondary">
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
