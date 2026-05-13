"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionBackground from "./SectionBackground";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  imageUrl?: string;
  overlayOpacity?: number;
  blur?: number;
}

export default function PageHeader({
  title,
  breadcrumb,
  imageUrl,
  overlayOpacity = 40,
  blur = 1
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b" style={{ background: "var(--pl-bg)", borderColor: "var(--pl-border)" }}>
      {imageUrl && <SectionBackground imageUrl={imageUrl} overlayOpacity={overlayOpacity} blur={blur} gradient={true} priority={true} />}
      {/* Background Orbs */}
      <div className="glow-orb glow-orb-primary w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-20%] left-[-10%] opacity-30 z-10"></div>
      <div className="glow-orb glow-orb-coral w-[250px] h-[250px] md:w-[400px] md:h-[400px] bottom-[-20%] right-[-10%] opacity-20 z-10"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, var(--pl-text-heading) 1px, transparent 0)",
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
          <h1 className={imageUrl ? "text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-on-bg" : "text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-heading"}>
            {title}
          </h1>

          <div className="inline-flex items-center gap-3 backdrop-blur-md border px-6 py-3 rounded-full shadow-xl" style={{ background: "var(--pl-glass-bg)", borderColor: "var(--pl-border)" }}>
            <Link href="/" className={imageUrl ? "font-medium transition-colors text-on-bg-muted hover:!text-white" : "font-medium transition-colors text-body"}>Home</Link>
            <ChevronRight size={16} className="text-[#4F46E5]" />
            <span className={imageUrl ? "font-bold text-on-bg" : "font-bold text-heading"}>{breadcrumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
