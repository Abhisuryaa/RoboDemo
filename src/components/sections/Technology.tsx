"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Zap, RefreshCw } from "lucide-react";

const stats = [
  "Processing Speed: 2.4ms",
  "Obstacle Avoidance: 99.8%",
  "Self-Calibration: Real-time",
  "Energy Efficiency: +40% vs industry",
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 container mx-auto px-6">
      <div className="glass-dark p-8 md:p-16 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-text-primary/20 to-transparent" />
        
        <span className="block font-display text-xs uppercase tracking-[0.15em] text-text-muted mb-4">— TECHNOLOGY</span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-16">
          The intelligence inside.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Cpu />, title: "ROBOCORE™ AI", desc: "Proprietary neural engine trained on 50M+ real-world events" },
            { icon: <Eye />, title: "Sensor Fusion", desc: "24-sensor array combining LiDAR, depth cameras, and tactile" },
            { icon: <Zap />, title: "Edge Computing", desc: "All processing happens on-device. Zero cloud latency" },
            { icon: <RefreshCw />, title: "OTA Updates", desc: "Robots improve over time via secure over-the-air learning" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 flex flex-col gap-4 hover:border-black/20 transition-colors duration-300"
            >
              <div className="text-accent">{item.icon}</div>
              <h4 className="font-display font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full overflow-hidden bg-black/[0.03] py-6 px-12 rounded-full border border-black/[0.05]">
          <motion.div 
            className="flex gap-24 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <span key={i} className="font-display font-extrabold text-sm uppercase tracking-widest flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {stat}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
