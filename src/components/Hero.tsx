"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Box } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden" style={{ background: "var(--pl-bg)" }}>
      {/* Mouse Glow — desktop only */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-30 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
        }}
      />

      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-primary w-[200px] h-[200px] md:w-[700px] md:h-[700px] top-[-10%] left-[-10%] opacity-30 md:opacity-50 pointer-events-none" />
      <div className="glow-orb glow-orb-coral w-[150px] h-[150px] md:w-[500px] md:h-[500px] bottom-[-5%] right-[-5%] opacity-20 md:opacity-30 pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
              style={{ borderColor: "var(--pl-border)", background: "var(--pl-glass-bg)" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B6B]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-heading">
                Next-Gen Global Logistics
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-5 leading-[1.1] tracking-tight"
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
              className="text-base sm:text-lg md:text-xl text-body mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              We handle everything from{" "}
              <strong className="text-heading font-semibold">A to Z</strong>. From
              sourcing premium products to delivering them safely to your doorstep
              anywhere in India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center lg:justify-start"
            >
              <Link href="/about" className="btn-primary group text-base w-full sm:w-auto">
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-glass group text-base w-full sm:w-auto">
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
                <h4 className="text-2xl sm:text-3xl font-black text-heading mb-0.5">6+</h4>
                <p className="text-xs text-body uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-heading mb-0.5">1143+</h4>
                <p className="text-xs text-body uppercase tracking-wider font-semibold">Shipments</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-[#FF6B6B] mb-0.5">100%</h4>
                <p className="text-xs text-body uppercase tracking-wider font-semibold">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Desktop Floating Cards ── */}
          <motion.div
            className="w-full lg:w-2/5 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#FF6B6B] opacity-20 blur-2xl animate-pulse" />

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 glass-panel p-6 shadow-2xl w-64"
              >
                <Globe2 className="text-[#4F46E5] mb-4" size={32} />
                <h5 className="text-heading font-bold mb-2">Global Sourcing</h5>
                <p className="text-xs text-body">Connecting you with verified international suppliers.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-[-2rem] glass-panel p-6 shadow-2xl w-64 z-20"
              >
                <ShieldCheck className="text-[#FF6B6B] mb-4" size={32} />
                <h5 className="text-heading font-bold mb-2">Secure Payments</h5>
                <p className="text-xs text-body">Escrow services and milestone-based releases.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 left-10 glass-panel p-6 shadow-2xl w-64"
              >
                <Box className="text-[#F59E0B] mb-4" size={32} />
                <h5 className="text-heading font-bold mb-2">Customs &amp; Freight</h5>
                <p className="text-xs text-body">Door-to-door delivery with zero hassle.</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
