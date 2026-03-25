"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "ABHI-X1 reduced our warehouse picking errors by 78% in the first quarter alone. The ROI was immediate.",
    name: "Rajan Mehta",
    title: "VP Operations, SwiftLog India"
  },
  {
    quote: "ABHI-CARE has transformed patient monitoring in our ICU. The accuracy and responsiveness is beyond anything we've tested.",
    name: "Dr. Priya Nair",
    title: "Chief of Technology, Apollo MedTech"
  },
  {
    quote: "ABHI-SCOUT handled environments our human teams couldn't safely enter. It's become indispensable.",
    name: "Col. Aarav Sharma",
    title: "Director, NDRF Tech Division"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 container mx-auto px-6">
       <span className="block font-display text-xs uppercase tracking-[0.15em] text-text-muted mb-4">— TRUSTED BY</span>
       <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-16">
         What our partners say.
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {testimonials.map((t, i) => (
           <motion.div
             key={t.name}
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.2, duration: 0.6 }}
             className="glass p-10 flex flex-col gap-8 group hover:bg-white/30 transition-all duration-500"
           >
             <p className="text-xl font-medium leading-relaxed italic text-text-primary">"{t.quote}"</p>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black/5 to-black/20 border border-black/5" />
               <div>
                 <h5 className="font-display font-extrabold text-text-primary">{t.name}</h5>
                 <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{t.title}</p>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
    </section>
  );
}
