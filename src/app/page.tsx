"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionBackground from "@/components/SectionBackground";
import { ChevronRight, Shield, CheckCircle, Zap, Headphones, Globe2, TrendingUp, PackageSearch, PlaneTakeoff, Ship } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />
      <Hero />

      {/* Animated Metrics / About - Bento Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Left Column: Text */}
            <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md mb-8 w-fit" style={{ borderColor: "var(--pl-border)", background: "var(--pl-glass-bg)" }}>
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse"></span>
                <span className="text-xs font-semibold tracking-widest uppercase text-body">The PrimeLink Advantage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Redefining the standard of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FF6B6B]">Global Logistics.</span>
              </h2>
              <p className="text-xl text-body leading-relaxed mb-10 font-light">
                We are more than just a freight forwarder. We are your end-to-end strategic partner, turning complex supply chains into your competitive advantage.
              </p>

              <ul className="space-y-6 mb-10">
                {[
                  "1,143+ Shipments successfully completed worldwide.",
                  "Verified supplier network with strict QA protocols.",
                  "Zero hidden fees. 100% transparent tracking."
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    className="flex items-center gap-4 text-lg text-heading font-medium"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#4F46E5]/20 flex items-center justify-center border border-[#4F46E5]/50 flex-shrink-0">
                      <CheckCircle size={16} className="text-[#4F46E5]" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Bento Grid */}
            <motion.div variants={staggerContainer} className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="col-span-2 glass-panel p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Globe2 size={40} className="text-[#4F46E5] mb-6" />
                <h3 className="text-2xl font-bold mb-2">Global Network</h3>
                <p className="text-body">Operating across major trade routes with hyper-local expertise.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <TrendingUp size={40} className="text-[#FF6B6B] mb-6" />
                <h3 className="text-4xl font-black mb-2">6+</h3>
                <p className="text-body text-sm uppercase tracking-wider font-semibold">Years Exp.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel p-8 relative overflow-hidden group bg-gradient-to-br from-[#4F46E5] to-[#3730A3] border-none">
                <Shield size={40} className="text-white mb-6" />
                <h3 className="text-xl font-bold mb-2 !text-white">Risk Free</h3>
                <p className="!text-white/80 text-sm font-medium">Escrow payments & full cargo insurance.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Futuristic Services Section */}
      <section className="py-32 relative">
        <SectionBackground imageUrl="/images/Core.jpg" gradient={true} overlayOpacity={55} objectPosition="center" mobileObjectPosition="center" fixed={true} />
        <div className="glow-orb glow-orb-primary w-[1000px] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 z-10"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-on-bg">Our Core Capabilities</h2>
            <p className="text-xl font-medium text-on-bg-muted">From factory floor to your front door, we handle the friction so you can focus on scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Product Sourcing", icon: <PackageSearch size={32} />, color: "from-[#4F46E5]", desc: "Direct access to audited manufacturers with negotiation leverage." },
              { title: "Air Freight", icon: <PlaneTakeoff size={32} />, color: "from-[#FF6B6B]", desc: "Expedited shipping for time-critical high-value cargo." },
              { title: "Ocean Freight", icon: <Ship size={32} />, color: "from-[#F59E0B]", desc: "FCL and LCL optimization with global container tracking." },
              { title: "Customs Clearance", icon: <Shield size={32} />, color: "from-[#10B981]", desc: "Frictionless border transitions with expert tariff classification." },
              { title: "Secure Escrow", icon: <CheckCircle size={32} />, color: "from-[#8B5CF6]", desc: "Milestone-based fund releases to eliminate supplier fraud." },
              { title: "Warehousing", icon: <Zap size={32} />, color: "from-[#06B6D4]", desc: "Strategic staging, labeling, and last-mile distribution." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative glass-panel p-10 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} to-transparent opacity-20 rounded-tr-3xl group-hover:opacity-40 transition-opacity`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} to-transparent/10 flex items-center justify-center mb-8 border-theme border group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-body leading-relaxed mb-8">{service.desc}</p>
                <a href="/services" className="inline-flex items-center gap-2 text-heading font-semibold uppercase tracking-wider text-sm group-hover:text-[#4F46E5] transition-colors">
                  Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Process Timeline */}
      <section className="py-32 relative border-y" style={{ background: "var(--pl-bg-alt)", borderColor: "var(--pl-border)" }}>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The 10-Step Fulfillment Engine</h2>
            <p className="text-xl text-body font-light">A surgically precise workflow designed to eliminate variance and guarantee delivery.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}


            <div className="space-y-12 lg:space-y-24">
              {[
                { step: "01", title: "Inquiry & Alignment", desc: "We map your exact specs, quality tolerances, and unit economics." },
                { step: "02", title: "Supplier Sourcing", desc: "Matching requirements against our proprietary network of audited factories." },
                { step: "03", title: "Sample Verification", desc: "Physical inspection of golden samples before mass production authorization." },
                { step: "04", title: "Production Oversight", desc: "On-site and remote monitoring to prevent delays and quality fade." },
                { step: "05", title: "Logistics Execution", desc: "Seamless transfer from factory floor to container vessel with real-time tracking." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} glass-panel p-8 relative group hover:border-[#4F46E5]/50 transition-colors`}>
                    <div className="text-6xl font-black opacity-5 text-heading absolute top-4 right-4 group-hover:text-[#4F46E5] group-hover:opacity-10 transition-all duration-300">{item.step}</div>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-body text-lg">{item.desc}</p>
                  </div>

                  <div className="hidden lg:flex w-16 h-16 rounded-full border-4 border-[#4F46E5] z-10 items-center justify-center relative shadow-[0_0_30px_rgba(79,70,229,0.5)]" style={{ background: "var(--pl-bg-alt)" }}>
                    <span className="font-bold" style={{ color: "var(--pl-text-heading)" }}>{item.step}</span>
                  </div>

                  <div className="w-full lg:w-1/2 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <a href="/how-it-works" className="btn-primary">
              View All 10 Steps
            </a>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
