"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block font-display text-xs uppercase tracking-[0.15em] text-text-muted mb-4">— ABOUT US</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Built by engineers.<br />Driven by purpose.
          </h2>
          <div className="space-y-6 text-lg text-text-secondary">
            <p>ABHI ROBO was founded on a single belief — that intelligent machines should work alongside humans, not replace them. Our robots are designed with empathy-first engineering, combining precision hardware with adaptive AI.</p>
            <div className="h-px w-full bg-black/10 my-8" />
            <p>From warehouse automation to assistive healthcare robots, we build systems that understand context, communicate naturally, and operate safely in the real world.</p>
            <p>Every ABHI ROBO unit is trained on millions of real-world scenarios using our proprietary simulation engine, ROBOCORE™ — ensuring reliable performance in unpredictable environments.</p>
          </div>
        </motion.div>

        <div className="relative h-[440px] hidden md:block">
          {[
            { label: "Founded", val: "2019", class: "z-30 top-0 left-0" },
            { label: "Team Members Globally", val: "150+", class: "z-20 top-20 left-16 scale-95 opacity-80" },
            { label: "Active Countries", val: "7", class: "z-10 top-40 left-32 scale-90 opacity-60" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`absolute w-[280px] p-8 glass flex flex-col gap-2 ${card.class}`}
            >
              <h3 className="font-display text-5xl font-extrabold text-text-primary">{card.val}</h3>
              <p className="text-[10px] font-display font-extrabold uppercase tracking-widest text-text-muted">{card.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
