"use client";

import { Box, Globe, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass rounded-t-[40px] rounded-b-none py-20 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2.5 font-display font-extrabold text-lg text-text-primary">
              <Box className="w-6 h-6 stroke-[2.5px]" />
              ABHI ROBO
            </a>
            <p className="text-text-secondary font-medium italic opacity-70 italic text-sm italic">Intelligence in Motion™</p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, Phone].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Products", links: ["ABHI-X1", "ABHI-CARE", "ABHI-SCOUT", "ROBOCORE™"] },
            { title: "Company", links: ["About", "Careers", "Press", "Partners"] },
            { title: "Contact", links: ["hello@abhirobo.com", "+91 80 1234 5678", "Bengaluru, India"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-extrabold text-xs uppercase tracking-[0.2em] text-text-muted mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-text-muted uppercase tracking-[0.15em]">
          <p>© 2025 ABHI ROBO Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
