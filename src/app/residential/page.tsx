"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionBackground from "@/components/SectionBackground";
import {
  Settings,
  Smartphone,
  Armchair,
  Calculator,
  Palette,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Zap,
  Briefcase,
  Star,
  Check,
  X,
  TrendingDown,
  Globe2,
  Box
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Residential() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />

      {/* Hero 1 - Intelligent By Design */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
        <SectionBackground imageUrl="/images/RHome.png" overlayOpacity={40} priority={true} objectPosition="center" className="z-[1]" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full lg:w-3/5"
            >
              <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[0.9] text-on-bg tracking-tighter">
                INTELLIGENT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FF6B6B]">BY DESIGN.</span>
              </h1>
              <p className="text-xl text-on-bg-muted font-light leading-relaxed mb-10 max-w-xl">
                Luxora creates intelligent living environments where cutting-edge technology meets timeless luxury.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button className="btn-primary px-10 py-5 text-sm uppercase tracking-widest font-bold">Explore Luxora</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Automation Card */}
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-8 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[220px] flex flex-col justify-between">
                  <div className="relative z-20">
                    <h6 className="text-xs font-black !text-white uppercase tracking-[0.2em] mb-3">Intelligent <br />Automation</h6>
                    <p className="!text-white/70 text-[11px] leading-relaxed pr-4">Seamless control over lighting, climate, security, and entertainment.</p>
                  </div>
                  {/* Floorplan Visual */}
                  <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none z-10">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 border-t border-l border-white/20 m-4 rounded-tl-2xl"></div>
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#4F46E5] rounded-full blur-[4px] animate-pulse"></div>
                      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#4F46E5] rounded-full blur-[3px] animate-pulse delay-700"></div>
                      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#4F46E5] rounded-full blur-[4px] animate-pulse delay-1000"></div>
                    </div>
                  </div>
                  <Image
                    src="/images/automated.png"
                    alt="Smart Automation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  />
                </motion.div>

                {/* Interiors Card */}
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-8 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[220px] flex flex-col justify-between">
                  <div className="relative z-20">
                    <h6 className="text-xs font-black !text-white uppercase tracking-[0.2em] mb-3">Curated <br />Interiors</h6>
                    <p className="!text-white/70 text-[11px] leading-relaxed pr-4">Bespoke interior selections from world's prestigious brands.</p>
                  </div>
                  {/* Faint Furniture Image */}
                  <Image
                    src="/images/interiors.jpg"
                    alt="Luxury Interiors"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  />
                </motion.div>

                {/* AI Card */}
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-8 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[220px] flex flex-col justify-between">
                  <div className="relative z-20">
                    <h6 className="text-xs font-black !text-white uppercase tracking-[0.2em] mb-3">AI-Powered <br />Experience</h6>
                    <p className="!text-white/70 text-[11px] leading-relaxed pr-4">Adaptive intelligence that learns your lifestyle and elevates living.</p>
                  </div>
                  {/* Glowing AI Orb */}
                  <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-20 h-20 bg-[#4F46E5] rounded-full blur-[40px] opacity-20 group-hover:opacity-50 animate-pulse"></div>
                    <div className="absolute w-12 h-12 border border-[#4F46E5]/30 rounded-full animate-ping"></div>
                  </div>
                  <Image
                    src="/images/ai.png"
                    alt="AI Experience"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Hero 2 - Build Luxury Spaces */}
      <section className="py-32 relative overflow-hidden !bg-transparent">
        <SectionBackground imageUrl="/images/RHome2.png" overlayOpacity={40} priority={true} className="z-[1]" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl md:text-7xl font-extrabold mb-8 text-on-bg tracking-tight">
                Build Luxury Spaces. <br />
                <span className="text-[#4F46E5]">Spend Smarter.</span>
              </h2>
              <p className="text-xl text-on-bg-muted font-light leading-relaxed mb-12 max-w-xl">
                From premium furniture and smart automation systems to curated interiors and modern décor—we source, quality-check, deliver, and support installation for modern dream homes.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button className="btn-primary">Explore Solutions</button>
                <button className="btn-glass !text-white border-white/20 hover:border-white/40 backdrop-blur-md bg-white/10">Get Design Consultation</button>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl border-white/10 bg-black/20 backdrop-blur-xl w-fit">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden relative bg-zinc-800">
                      <Image
                        src={`/images/user${i}.png`}
                        alt={`User ${i}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-on-bg font-bold text-sm">Trusted by 250+ Homeowners</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                    <span className="text-[10px] text-on-bg-muted font-bold">5.0/5 Average Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Smart Home Automation", desc: "Intelligent control for lighting, climate, security, entertainment & more.", icon: <Smartphone size={24} />, img: "/images/smart-autotaion.jpg" },
                { title: "Premium Furniture", desc: "Curated luxury pieces from world-class brands.", icon: <Armchair size={24} />, img: "/images/premium.jpg" },
                { title: "Intelligent Budgeting", desc: "Smart budgeting with real-time tracking and cost optimization.", icon: <Calculator size={24} />, img: "/images/budgeting.png" },
                { title: "Luxury Interior Sourcing", desc: "Handpicked materials, finishes & decor for exceptional interiors.", icon: <Palette size={24} />, img: "/images/interior-work.jpg" },
                { title: "Smart Curtain Systems", desc: "Automated elegance with light control & privacy automation.", icon: <Settings size={24} />, img: "/images/curtains.png" },
                { title: "Designer Lighting", desc: "Architectural lighting designed to elevate every space.", icon: <Lightbulb size={24} />, img: "/images/lighting.png" }
              ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel !bg-black/20 p-8 border-white/10 hover:border-[#4F46E5]/40 transition-all group flex flex-col justify-between aspect-square md:aspect-auto relative overflow-hidden rounded-[32px]"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    />
                    <div className="relative z-10">
                      <div className="text-[#4F46E5] mb-6 p-4 rounded-2xl bg-[#4F46E5]/10 w-fit group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-on-bg mb-2">{item.title}</h4>
                      <p className="text-on-bg-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Comparison */}
      <section className="py-32 relative overflow-hidden !bg-transparent">
        <SectionBackground imageUrl="/images/RHome3.png" overlayOpacity={40} priority={true} className="z-[1]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <span className="text-[#4F46E5] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Intelligent Luxury Execution</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-on-bg tracking-tight">
              Premium Spaces. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6]">Smarter Financial Planning.</span>
            </h2>
            <p className="text-lg text-on-bg-muted font-light leading-relaxed">
              We help optimize sourcing, automation, furniture, and interior execution strategies to create luxury living experiences with more intelligent budget allocation.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 glass-panel !bg-black/20 p-10 border-white/10"
            >
              <div className="text-orange-500 mb-8"><TrendingDown size={32} /></div>
              <h4 className="text-xl font-bold text-on-bg mb-4">Traditional <br />Luxury Execution</h4>
              <p className="text-on-bg-muted text-xs mb-8 leading-relaxed">Fragmeted sourcing, inflated procurement layers, and unnecessary overspending.</p>
              <ul className="space-y-4">
                {["Multiple vendor markups", "Unoptimized procurement", "Inconsistent planning", "Allocation inefficiencies"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-bg-muted text-[11px] font-medium">
                    <X size={14} className="text-red-500" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Savings Badge */}
            <div className="relative z-20 -my-8 lg:my-0">
              <div className="glass-panel !bg-black/40 p-10 md:p-14 border-[#4F46E5]/40 shadow-2xl text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[#4F46E5] text-[10px] font-black tracking-widest uppercase mb-4">Save Up To</p>
                <h3 className="text-5xl md:text-7xl font-black text-on-bg mb-4 tracking-tighter">30-40%</h3>
                <p className="text-on-bg-muted text-[10px] font-medium max-w-[140px] mx-auto uppercase">Depending on project scope and strategy.</p>
              </div>
            </div>

            {/* Optimized */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 glass-panel p-10 border-[#4F46E5]/30 !bg-transparent shadow-2xl"
            >
              <div className="text-[#4F46E5] mb-8"><ShieldCheck size={32} /></div>
              <h4 className="text-xl font-bold text-on-bg mb-4">Optimized <br />Smart Procurement</h4>
              <p className="text-on-bg-muted text-xs mb-8 leading-relaxed">Strategic sourcing and coordinated execution to significantly improve efficiency.</p>
              <ul className="space-y-4">
                {["Curated sourcing strategy", "Integrated execution planning", "Balanced allocation", "Premium design consistency"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-bg text-[11px] font-semibold">
                    <Check size={14} className="text-[#4F46E5]" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-20 glass-panel p-6 border-white/10 !bg-transparent text-center max-w-2xl mx-auto flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#4F46E5]/20 flex items-center justify-center text-[#4F46E5]"><Briefcase size={18} /></div>
            <p className="text-on-bg-muted text-sm font-light italic">Luxury isn't always about spending more. <span className="text-on-bg font-bold not-italic">It's about allocating better.</span></p>
          </div>
        </div>
      </section>

      {/* Modern Home Services */}
      <section className="py-32 relative overflow-hidden !bg-transparent">
        <SectionBackground imageUrl="/images/RHome4.png" overlayOpacity={40} priority={true} className="z-[1]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 max-w-2xl"
          >
            <span className="text-[#4F46E5] text-[10px] font-black tracking-widest uppercase mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-on-bg tracking-tight mb-6">
              Everything Your <br />
              Modern Home <span className="text-[#4F46E5]">Needs.</span>
            </h2>
            <p className="text-on-bg-muted text-lg font-light leading-relaxed">
              Professionally sourced, quality-verified, and intelligently integrated for the modern homeowner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Premium Furniture", desc: "Handpicked luxury furniture from world-class brands and craftsmen.", icon: <Armchair size={24} />, img: "/images/premium.jpg" },
              { title: "Smart Automation", desc: "Intelligent home automation systems for comfort, security, and efficiency.", icon: <Smartphone size={24} />, img: "/images/smart-autotaion.jpg" },
              { title: "Interior Styling", desc: "Curated décor, lighting, and finishes that define luxury living.", icon: <Palette size={24} />, img: "/images/interior-work.jpg" },
              { title: "Cabinet Solutions", desc: "Custom modular cabinets designed for elegance and functionality.", icon: <Box size={24} />, img: "/images/cabinate.jpg" },
              { title: "Smart Electrical", desc: "Advanced electrical solutions built for safety and performance.", icon: <Zap size={24} />, img: "/images/bg5.jpg" },
              { title: "Custom Procurement", desc: "End-to-end procurement with quality checks and best pricing.", icon: <Globe2 size={24} />, img: "/images/custom-procurement.jpg" }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[320px] rounded-[32px] overflow-hidden border border-white/10 glass-panel !bg-black/20 hover:border-[#4F46E5]/40 transition-all"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center opacity-10 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4F46E5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div>
                    <div className="text-[#4F46E5] mb-6 p-4 rounded-2xl bg-[#4F46E5]/10 w-fit group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold !text-white mb-2">{service.title}</h4>
                    <p className="!text-white/60 text-xs font-light leading-relaxed line-clamp-2">{service.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#4F46E5] group-hover:border-[#4F46E5]/40 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <SectionBackground imageUrl="/images/RHome5.png" overlayOpacity={75} objectPosition="center" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-on-bg tracking-tighter leading-tight">
              Your Dream Home Deserves <br />
              <span className="text-[#4F46E5]">Better Procurement.</span>
            </h2>
            <p className="text-xl text-on-bg-muted font-light leading-relaxed mb-16 max-w-2xl">
              Build premium spaces with smarter sourcing strategies and curated modern systems.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/contact" className="btn-primary px-12 py-5 text-base uppercase tracking-widest font-bold">Book Consultation</Link>
              <Link href="/contact" className="btn-glass px-12 py-5 text-base uppercase tracking-widest font-bold !text-white border-white/20 hover:border-white/40 backdrop-blur-md bg-white/10">Talk With Our Team</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
