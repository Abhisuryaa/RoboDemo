"use client";

import { motion } from "framer-motion";
import { Truck, HeartPulse, ShieldAlert, ArrowRight } from "lucide-react";
import Magnet from "../ui/Magnet";

const products = [
  {
    icon: <Truck className="w-6 h-6 stroke-[1.5px]" />,
    tag: "Industrial",
    name: "ABHI-X1",
    desc: "Heavy-duty autonomous robot for warehouse logistics and manufacturing floors. Carries up to 200kg with precision positional accuracy.",
    specs: "200kg payload • 12hr battery • LiDAR + Vision",
    featured: false,
  },
  {
    icon: <HeartPulse className="w-6 h-6 stroke-[1.5px]" />,
    tag: "Healthcare",
    name: "ABHI-CARE",
    desc: "Assistive healthcare companion robot. Monitors vitals, assists mobility-impaired patients, and coordinates with medical staff in real time.",
    specs: "24/7 Operation • HIPAA Compliant • Voice + Gesture UI",
    featured: true,
  },
  {
    icon: <ShieldAlert className="w-6 h-6 stroke-[1.5px]" />,
    tag: "Exploration",
    name: "ABHI-SCOUT",
    desc: "All-terrain autonomous scout for hazardous environment mapping, disaster response, and infrastructure inspection.",
    specs: "IP68 Rated • Thermal Camera • 6-leg Locomotion",
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="block font-display text-xs uppercase tracking-[0.15em] text-text-muted mb-4">— OUR ROBOTS</span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          A robot for every mission.
        </h2>
        <p className="text-text-secondary text-lg">From industrial floors to hospital corridors — ABHI ROBO has a solution engineered for your environment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`glass p-8 flex flex-col gap-6 relative group border-2 ${
              product.featured ? "border-black/5 scale-[1.02]" : "border-transparent"
            }`}
          >
            {product.featured && (
              <div className="absolute top-6 right-6 flex gap-2">
                <span className="px-3 py-1 bg-bg-base text-[10px] font-extrabold tracking-widest rounded-full uppercase">Featured</span>
              </div>
            )}
            
            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center text-accent">
              {product.icon}
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-display font-extrabold uppercase tracking-widest text-text-muted">{product.tag}</span>
              <h3 className="font-display text-2xl font-extrabold text-text-primary">{product.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{product.desc}</p>
            </div>

            <div className="mt-auto pt-6 border-t border-black/5 space-y-6">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{product.specs}</p>
              <Magnet>
                <a href="#" className="inline-flex items-center gap-2 font-display font-extrabold text-sm text-text-primary group-hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </Magnet>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
