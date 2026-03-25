"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Box } from "lucide-react";
import Magnet from "../ui/Magnet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-16 bg-white/70 backdrop-blur-xl border-b border-black/5" : "h-[68px] bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-display font-extrabold text-lg text-text-primary">
          <Box className="w-6 h-6 stroke-[2.5px]" />
          ABHI ROBO
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Products", "Technology", "Testimonials"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-text-primary group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-text-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Magnet>
          <a href="#contact" className="btn btn-primary !py-2.5 !px-6">
            Get Started
          </a>
        </Magnet>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
