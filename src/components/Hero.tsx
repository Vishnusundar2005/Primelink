"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Box } from "lucide-react";
import SectionBackground from "./SectionBackground";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24" style={{ background: "var(--pl-bg)" }}>
      <SectionBackground imageUrl="/images/Home1.png" gradient={true} overlayOpacity={65} />

      {/* Mouse Glow — desktop only */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-30 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
        }}
      />

      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-primary w-[200px] h-[200px] md:w-[700px] md:h-[700px] top-[-10%] left-[-10%] opacity-30 md:opacity-50 pointer-events-none z-10" />
      <div className="glow-orb glow-orb-coral w-[150px] h-[150px] md:w-[500px] md:h-[500px] bottom-[-5%] right-[-5%] opacity-20 md:opacity-30 pointer-events-none z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-10 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, var(--pl-text-heading) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Text Content ── */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B6B]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-on-bg">
                Next-Gen Global Logistics
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight text-on-bg"
            >
              Mastering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#A855F7] to-[#FF6B6B]">
                Global Trade
              </span>{" "}
              Seamlessly.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-on-bg-muted"
            >
              We handle everything from{" "}
              <strong className="text-on-bg font-semibold">A to Z</strong>. From
              sourcing premium products to delivering them safely to your doorstep
              anywhere in India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 items-center justify-center lg:justify-start"
            >
              <Link href="/about" className="btn-primary group text-base w-full sm:w-auto">
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-glass group text-base w-full sm:w-auto !text-white border-white/20 hover:border-white/40 backdrop-blur-md bg-white/10">
                Get a Free Quote
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t max-w-sm mx-auto lg:mx-0"
              style={{ borderColor: "var(--pl-border)" }}
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-on-bg mb-0.5">6+</h4>
                <p className="text-xs text-on-bg-muted uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-on-bg mb-0.5">1143+</h4>
                <p className="text-xs text-on-bg-muted uppercase tracking-wider font-semibold">Shipments</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-[#FF6B6B] mb-0.5 text-on-bg">100%</h4>
                <p className="text-xs text-on-bg-muted uppercase tracking-wider font-semibold">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Desktop Floating Cards ── */}

        </div>
      </div>
    </section>
  );
}
