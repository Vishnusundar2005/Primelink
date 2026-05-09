"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#0B0F19] border-b border-white/5">
      {/* Background Orbs */}
      <div className="glow-orb glow-orb-primary w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-20%] left-[-10%] opacity-30"></div>
      <div className="glow-orb glow-orb-coral w-[250px] h-[250px] md:w-[400px] md:h-[400px] bottom-[-20%] right-[-10%] opacity-20"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", 
          backgroundSize: "40px 40px" 
        }}
      ></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {title}
          </h1>
          
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-xl">
            <Link href="/" className="text-[#94A3B8] hover:text-white transition-colors font-medium">Home</Link>
            <ChevronRight size={16} className="text-[#4F46E5]" />
            <span className="text-white font-bold">{breadcrumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
