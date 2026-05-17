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
  Palette,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Zap,
  Star,
  TrendingUp,
  Globe2,
  Box,
  Home,
  PieChart,
  Sparkles,
  Layers,
  ShoppingCart,
  XCircle,
  BarChart3,
  Target,
  Network,
  Clock,
  Gem,
  ChevronRight,
  Users
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
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-6 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[380px] flex flex-col justify-between">
                  <div className="mb-4">
                    <h6 className="text-sm font-black !text-white uppercase tracking-[0.2em] mb-2">Intelligent <br />Automation</h6>
                    <p className="!text-white/70 text-xs leading-relaxed">Seamless control over lighting, climate, security, and entertainment.</p>
                  </div>
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/R2.PNG"
                      alt="Smart Automation"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center pointer-events-none mix-blend-screen"
                    />
                    {/* 4-sided blending overlay */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_10px_rgba(11,15,25,0.95)] z-10"></div>
                  </div>
                </motion.div>

                {/* Interiors Card */}
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-6 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[380px] flex flex-col justify-between">
                  <div className="mb-4">
                    <h6 className="text-sm font-black !text-white uppercase tracking-[0.2em] mb-2">Curated <br />Interiors</h6>
                    <p className="!text-white/70 text-xs leading-relaxed">Bespoke interior selections from world's prestigious brands.</p>
                  </div>
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/R3.PNG"
                      alt="Luxury Interiors"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center pointer-events-none"
                    />
                    {/* 4-sided blending overlay */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_10px_rgba(11,15,25,0.95)] z-10"></div>
                  </div>
                </motion.div>

                {/* AI Card */}
                <motion.div variants={fadeUp} className="relative glass-panel !bg-black/20 backdrop-blur-xl rounded-3xl p-6 border-white/10 hover:border-[#4F46E5]/40 transition-all group overflow-hidden min-h-[380px] flex flex-col justify-between">
                  <div className="mb-4">
                    <h6 className="text-sm font-black !text-white uppercase tracking-[0.2em] mb-2">AI-Powered <br />Experience</h6>
                    <p className="!text-white/70 text-xs leading-relaxed">Adaptive intelligence that learns your lifestyle and elevates living.</p>
                  </div>
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/R1.PNG"
                      alt="AI Experience"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center pointer-events-none mix-blend-screen"
                    />
                    {/* 4-sided blending overlay */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_10px_rgba(11,15,25,0.95)] z-10"></div>
                  </div>
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
              <h2 className="text-4xl md:text-7xl font-extrabold mb-8 text-on-bg tracking-tight leading-[1.15]">
                Build <br />
                Luxury Spaces<span className="text-indigo-500">.</span> <br />
                Spend Smarter<span className="text-indigo-500">.</span>
              </h2>
              <p className="text-lg text-on-bg-muted font-light leading-relaxed mb-12 max-w-xl">
                From premium furniture and smart automation systems to curated interiors and modern décor—we source, quality-check, deliver, and support installation for modern dream homes.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link className="btn-primary py-4 px-8 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(79,70,229,0.35)] border border-indigo-400/25 text-sm uppercase tracking-wider font-bold group" href="/contact">
                 Get Design Consultation
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:bg-white/25 transition-colors">
                    <ArrowRight size={12} />
                  </span>
                </Link>

              </div>

              {/* Rating block with premium glass blur container */}
              <div className="flex items-center gap-5 p-4 pr-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl w-fit mt-8 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white/20 overflow-hidden relative bg-zinc-800">
                      <Image
                        src={`/images/user${i}.png`}
                        alt={`User ${i}`}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <p className="text-white/60 font-semibold uppercase tracking-[0.12em] text-[9px]">Trusted by 250+ homeowners</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-yellow-500 text-xs">★</span>
                    <span className="text-white font-bold tracking-wide text-[11px]">4.9/5 Average Rating</span>
                  </div>
                </div>
              </div>

              {/* Bottom bullets utilizing empty space after reviews */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-white/10 text-white font-extrabold text-[11px] uppercase tracking-[0.22em] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                <span>Premium Sourcing</span>
                <span className="text-indigo-400 font-black text-sm select-none drop-shadow-[0_0_8px_rgba(99,102,241,0.95)]">•</span>
                <span>Quality Assurance</span>
                <span className="text-indigo-400 font-black text-sm select-none drop-shadow-[0_0_8px_rgba(99,102,241,0.95)]">•</span>
                <span>White-Glove Delivery</span>
                <span className="text-indigo-400 font-black text-sm select-none drop-shadow-[0_0_8px_rgba(99,102,241,0.95)]">•</span>
                <span>On-Site Support</span>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Smart Home Automation", desc: "Intelligent control for lighting, climate, security, entertainment & more.", icon: <Home size={22} /> },
                { title: "Premium Furniture", desc: "Curated luxury pieces from world-class brands.", icon: <Armchair size={22} /> },
                { title: "Intelligent Budget Planning", desc: "Smart budgeting with real-time tracking and cost optimization.", icon: <PieChart size={22} /> },
                { title: "Luxury Interior Sourcing", desc: "Handpicked materials, finishes & decor for exceptional interiors.", icon: <Sparkles size={22} /> },
                { title: "Smart Curtain Systems", desc: "Automated elegance with light control & privacy automation.", icon: <Settings size={22} /> },
                { title: "Designer Lighting Concepts", desc: "Architectural lighting designed to elevate every space.", icon: <Lightbulb size={22} /> }
              ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="relative bg-transparent border border-indigo-500/60 rounded-3xl p-6 flex flex-col justify-between min-h-[200px] shadow-[0_0_22px_rgba(79,70,229,0.45),inset_0_0_12px_rgba(79,70,229,0.25)] hover:border-indigo-400 hover:shadow-[0_0_32px_rgba(79,70,229,0.65),inset_0_0_18px_rgba(79,70,229,0.35)] transition-all duration-500 group overflow-hidden"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors p-3 rounded-2xl bg-indigo-500/5 group-hover:bg-indigo-500/10 border border-indigo-500/5">
                        {item.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-on-bg mt-6 mb-2">{item.title}</h4>
                      <p className="text-on-bg-muted text-[11px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Comparison */}
      <section className="py-32 relative overflow-hidden !bg-transparent">
        <SectionBackground imageUrl="/images/RHome3.png" overlayOpacity={40} className="z-[1]" />
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

          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 bg-black/35 backdrop-blur-md border border-amber-500/40 rounded-[28px] p-8 flex flex-col justify-between shadow-[0_0_22px_rgba(245,158,11,0.18),inset_0_0_12px_rgba(245,158,11,0.08)] transition-all duration-500 hover:border-amber-400 group relative min-h-[500px]"
            >
              <div className="flex justify-between items-center w-full mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:bg-amber-500/15 transition-all duration-300">
                  <Layers size={22} />
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white/60 group-hover:border-white/20 transition-all duration-300">
                  <ChevronRight size={14} />
                </div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-on-bg mb-3 tracking-tight">Traditional <br />Luxury Execution</h4>
                  <p className="text-on-bg-muted text-[11px] leading-relaxed mb-8 font-light">
                    Luxury projects often involve fragmented sourcing, inflated procurement layers, and unnecessary overspending across furniture, décor, and automation systems.
                  </p>
                </div>
                
                <ul className="space-y-4 pt-4 border-t border-white/5">
                  {[
                    { text: "Multiple vendor markups", icon: <Users size={14} /> },
                    { text: "Unoptimized procurement", icon: <ShoppingCart size={14} /> },
                    { text: "Inconsistent planning", icon: <XCircle size={14} /> },
                    { text: "Excessive allocation inefficiencies", icon: <BarChart3 size={14} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-bg-muted text-[11px] font-medium group/item hover:text-white/80 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.1)]">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Savings Badge */}
            <div className="relative z-20 flex items-center -my-8 lg:my-0">
              <div className="bg-white/85 dark:bg-black/40 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 rounded-[32px] p-8 md:p-10 text-center shadow-2xl max-w-xs relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-slate-500 dark:text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase mb-4">SAVE UP TO</p>
                <div className="text-5xl md:text-6xl font-black mb-5 tracking-tighter bg-clip-text !text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 drop-shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.35)] select-none">
                  30-40%
                </div>
                <p className="text-slate-600 dark:text-white/50 text-[9px] font-semibold tracking-wider max-w-[180px] mx-auto uppercase leading-relaxed">
                  Depending on project scope, product selection, and execution strategy.
                </p>
              </div>
            </div>

            {/* Optimized */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 bg-black/35 backdrop-blur-md border border-indigo-500/40 rounded-[28px] p-8 flex flex-col justify-between shadow-[0_0_22px_rgba(99,102,241,0.18),inset_0_0_12px_rgba(99,102,241,0.08)] transition-all duration-500 hover:border-indigo-400 group relative min-h-[500px]"
            >
              <div className="flex justify-between items-center w-full mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:bg-indigo-500/15 transition-all duration-300">
                  <ShieldCheck size={22} />
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white/60 group-hover:border-white/20 transition-all duration-300">
                  <ChevronRight size={14} />
                </div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-on-bg mb-3 tracking-tight">Optimized <br />Smart Procurement</h4>
                  <p className="text-on-bg-muted text-[11px] leading-relaxed mb-8 font-light">
                    Strategic sourcing and coordinated execution can significantly improve cost efficiency while preserving premium aesthetics and functionality.
                  </p>
                </div>
                
                <ul className="space-y-4 pt-4 border-t border-white/5">
                  {[
                    { text: "Curated sourcing strategy", icon: <Target size={14} /> },
                    { text: "Integrated execution planning", icon: <Network size={14} /> },
                    { text: "Balanced allocation", icon: <Clock size={14} /> },
                    { text: "Premium design consistency", icon: <Gem size={14} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-semibold text-[11px] group/item hover:text-indigo-300 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.1)]">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 bg-black/25 backdrop-blur-xl border border-white/10 p-5 rounded-[24px] max-w-3xl mx-auto flex items-center gap-4 text-left shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-full border border-indigo-500/35 bg-indigo-500/10 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <TrendingUp size={20} />
            </div>
            <div className="h-10 w-px bg-white/10 mx-2"></div>
            <div>
              <center>
              <p className="text-white/60 text-xs font-light">Luxury isn't always about spending more.</p>
              <p className="text-indigo-400 text-sm font-bold mt-0.5 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]">It's about allocating better.</p>
              </center>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Home Services */}
      <section className="py-32 relative overflow-hidden !bg-transparent">
        <SectionBackground imageUrl="/images/RHome4.png" overlayOpacity={40} className="z-[1]" />
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
