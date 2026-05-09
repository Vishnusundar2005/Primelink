"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { servicesData } from "@/data/services";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-[#4F46E5] selection:text-white">
      <Navbar />
      <PageHeader title={service.title} breadcrumb="Services" />

      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Background Glow */}
        <div className="glow-orb glow-orb-primary w-[800px] h-[800px] top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Area */}
            <div className="w-full lg:w-2/3">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Massive Image Header */}
                <motion.div variants={fadeUp} className="relative w-full h-[250px] md:h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 mb-8 md:mb-12 group">
                   <Image 
                    src={`/assets/images/${service.image}`} 
                    alt={service.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#0B0F19]/80 backdrop-blur-xl border border-white/20 flex-shrink-0 flex items-center justify-center text-[#4F46E5] shadow-2xl">
                      {service.icon}
                    </div>
                    <h2 className="text-xl md:text-4xl font-extrabold text-white leading-tight">{service.title}</h2>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeUp} className="prose prose-invert max-w-none mb-12 md:mb-16">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Service Overview</h3>
                  <p className="text-lg md:text-xl text-[#94A3B8] font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                {/* Features Bento Grid */}
                <motion.div variants={fadeUp}>
                  <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Key Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="glass-panel p-6 md:p-8 border border-white/10 hover:border-[#4F46E5]/50 transition-colors group">
                        <CheckCircle className="text-[#4F46E5] mb-4 group-hover:scale-110 transition-transform" size={24} />
                        <p className="text-base md:text-lg text-white font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Mini */}
                <motion.div variants={fadeUp} className="mt-12 md:mt-16 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-[#4F46E5]/20 to-transparent border border-[#4F46E5]/30 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Ready to scale your operations?</h4>
                      <p className="text-[#94A3B8] text-sm md:text-base">Deploy our {service.title} architecture today.</p>
                    </div>
                    <Link href="/contact" className="btn-primary flex-shrink-0 w-full md:w-auto text-center">
                      Initiate Protocol
                    </Link>
                  </div>
                </motion.div>

              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="glass-panel p-8 border border-white/10 mb-8">
                  <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#4F46E5] rounded-full"></span>
                    All Services
                  </h4>
                  <ul className="space-y-2">
                    {servicesData.map((s) => (
                      <li key={s.slug}>
                        <Link 
                          href={`/services/${s.slug}`}
                          className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                            slug === s.slug 
                              ? "bg-[#4F46E5] text-white font-bold shadow-lg" 
                              : "bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="text-sm">{s.title}</span>
                          {slug === s.slug && <ArrowRight size={16} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel p-8 border border-[#FF6B6B]/30 bg-gradient-to-b from-[#FF6B6B]/10 to-transparent">
                  <h4 className="text-2xl font-black text-white mb-4">Urgent Freight?</h4>
                  <p className="text-[#94A3B8] text-sm mb-6">Connect directly with our logistics architects for immediate routing.</p>
                  <a href="tel:+918220625251" className="text-[#FF6B6B] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
                    +91 8220625251
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
