"use client";

import { motion } from "framer-motion";
import Magnet from "../ui/Magnet";

export default function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-12 md:p-24 text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_200%] animate-shimmer opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-1000" />
        
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Ready to deploy<br />intelligence?
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Talk to our engineering team and find the right robot for your operations.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Magnet>
              <button className="btn btn-primary px-12 py-4">Request a Demo</button>
            </Magnet>
            <Magnet>
              <button className="btn btn-ghost px-12 py-4">View Pricing</button>
            </Magnet>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-black/5 rounded-[40px] rotate-12 -z-10" />
        <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-black/5 rounded-[60px] -rotate-12 -z-10" />
      </motion.div>
    </section>
  );
}
