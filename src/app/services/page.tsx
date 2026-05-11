"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesIndex() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />
      <PageHeader title="Global Services" breadcrumb="Services Index" />

      <section className="py-24 relative overflow-hidden">
        <div className="glow-orb glow-orb-primary w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Specialist Capabilities</h2>
            <p className="text-lg md:text-xl text-body font-light leading-relaxed">
              Explore our comprehensive suite of logistics, sourcing, and supply chain solutions engineered for scale.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {servicesData.map((service, idx) => (
              <motion.div key={service.slug} variants={fadeUp} className="group h-full">
                <Link href={`/services/${service.slug}`} className="block h-full glass-panel p-6 md:p-8 border-theme border hover:border-[#4F46E5]/50 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F46E5] to-transparent opacity-0 group-hover:opacity-10 rounded-tr-3xl transition-opacity duration-500"></div>
                  
                  <div className="w-16 h-16 rounded-2xl border flex items-center justify-center text-[#4F46E5] mb-8 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors duration-500 shadow-xl" style={{ background: "var(--pl-bg)", borderColor: "var(--pl-border)" }}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-heading mb-4 pr-4">{service.title}</h3>
                  <p className="text-body font-light leading-relaxed mb-8 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#4F46E5] font-semibold text-sm uppercase tracking-wider group-hover:text-heading transition-colors">
                    Explore Capability <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
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
