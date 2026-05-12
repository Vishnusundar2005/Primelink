"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SectionBackground from "@/components/SectionBackground";
import { CheckCircle, Shield, TrendingUp, Users, Ship, Plane, Home as HomeIcon } from "lucide-react";
import Image from "next/image";

export default function About() {
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
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />
      <PageHeader title="About PrimeLink" breadcrumb="About Us" imageUrl="/images/bg11.jpg" />

      {/* Main About Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--pl-bg-alt)" }}>
        {/* Subtle decorative orb instead of image */}
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-100 -left-100 opacity-10 z-0"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Image Grid */}
            <motion.div variants={fadeUp} className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
              <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
              <div className="col-span-1 space-y-4 pt-12">
                <div className="relative h-[250px] rounded-3xl overflow-hidden border-theme border glass-panel">
                  <Image 
                    src="/assets/images/service-main.jpg" 
                    alt="Logistics" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                  />
                </div>
                <div className="relative h-[200px] rounded-3xl overflow-hidden border-theme border glass-panel">
                  <Image 
                    src="/assets/images/service-1.jpg" 
                    alt="Shipping" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="relative h-[300px] rounded-3xl overflow-hidden border-theme border glass-panel">
                  <Image 
                    src="/assets/images/service-2.jpg" 
                    alt="Air Freight" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                  />
                </div>
                <div className="glass-panel p-6 rounded-3xl border-theme border bg-gradient-to-br from-[#4F46E5]/20 to-transparent flex flex-col justify-center items-center text-center h-[150px]">
                  <h3 className="text-4xl font-black text-heading">6+</h3>
                  <p className="text-sm text-body font-bold uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={fadeUp} className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md mb-6 w-fit" style={{ borderColor: "var(--pl-border)", background: "var(--pl-glass-bg)" }}>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#4F46E5]">Company Overview</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-heading">
                We are a Premier Product Sourcing & Logistics Company.
              </h2>
              <div className="space-y-6 text-body text-base md:text-lg font-light leading-relaxed mb-10">
                <p>
                  With <strong className="text-heading font-semibold">6 years of experience</strong>, we have successfully completed over 1,143 shipments to date. Specializing in comprehensive supply chain solutions, our expert team is dedicated to providing seamless end-to-end services that cater to your specific business needs.
                </p>
                <p>
                  From product sourcing and order processing to logistics and delivery, we ensure every step is handled with precision and professionalism. We offer tailored services that include sourcing quality products from trusted suppliers, managing bulk operations, and providing secure packing and warehousing solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="glass-panel p-6 border-l-4 border-l-[#4F46E5]">
                  <h4 className="text-2xl md:text-3xl font-black text-heading mb-2">1,143+</h4>
                  <p className="text-xs md:text-sm font-bold text-body uppercase tracking-wider">Shipments Delivered</p>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-[#FF6B6B]">
                  <h4 className="text-2xl md:text-3xl font-black text-heading mb-2">100%</h4>
                  <p className="text-xs md:text-sm font-bold text-body uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialist Services Preview */}
      <section className="py-24 relative border-y overflow-hidden" style={{ background: "var(--pl-bg-alt)", borderColor: "var(--pl-border)" }}>
        <div className="container-custom relative z-10">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Specialist Logistics Services</h2>
            <p className="text-lg md:text-xl text-body font-light">At Prime Link Global Services, we follow a streamlined, transparent, and efficient process.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sea Freight Transportation", icon: <Ship size={32} />, img: "service-1.jpg" },
              { title: "Air Freight Transportation", icon: <Plane size={32} />, img: "service-2.jpg" },
              { title: "Warehousing Solutions", icon: <HomeIcon size={32} />, img: "service-3.jpg" }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel overflow-hidden group border" style={{ borderColor: "var(--pl-border)" }}
              >
                <div className="h-40 md:h-48 relative overflow-hidden">
                  <Image 
                    src={`/assets/images/${srv.img}`} 
                    alt={srv.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent"></div>
                </div>
                <div className="p-6 md:p-8 relative -mt-10 md:-mt-12">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl border flex items-center justify-center mb-6 text-[#4F46E5] group-hover:text-[#FF6B6B] transition-colors" style={{ background: "var(--pl-bg)", borderColor: "var(--pl-border)" }}>
                    {srv.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-heading mb-4">{srv.title}</h4>
                  <a href="/services" className="text-[#4F46E5] font-semibold text-xs md:text-sm uppercase tracking-wider hover:text-[#FF6B6B] transition-colors">Learn More &rarr;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="glow-orb glow-orb-amber w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 z-10"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Leadership & Experts</h2>
            <p className="text-lg md:text-xl text-body font-light">The architects behind our streamlined, transparent, and efficient global operations.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Justus Rajan", role: "Managing Director", img: "rajan.jpeg", pos: "center top" },
              { name: "Rija Princy", role: "CEO", img: "princy.jpeg", pos: "center top" },
              { name: "Mohan Raj", role: "Freight Forwarding", img: "mohan.jpeg", pos: "center center" },
              { name: "Rijin Francis", role: "Business Dev. Manager", img: "bdm.jpeg", pos: "center top" }
            ].map((member, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group cursor-pointer">
                <div className="relative h-72 w-full rounded-3xl overflow-hidden mb-6 border-theme border glass-panel">
                  <Image
                    src={`/assets/images/${member.img}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectPosition: member.pos }}
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/50 via-transparent to-transparent" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-heading mb-1">{member.name}</h4>
                  <p className="text-xs text-[#4F46E5] uppercase font-bold tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
