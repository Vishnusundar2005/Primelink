"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SectionBackground from "@/components/SectionBackground";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
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
      <PageHeader title="Contact Operations" breadcrumb="Contact Us" imageUrl="/images/bg20.jpg" />

      {/* Contact Info Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="glow-orb glow-orb-coral w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 z-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Head Office */}
            <motion.div variants={fadeUp} className="glass-panel p-8 border-theme border hover:border-[#4F46E5]/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] mb-6 border border-[#4F46E5]/20 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-2">Head Office</h4>
              <p className="text-body leading-relaxed font-light text-sm">
                16/4A, North Street, Mel Asaripallam,<br />
                Nagercoil, Tamil Nadu<br />
                India - 629201
              </p>
            </motion.div>

            {/* Branch Office */}
            <motion.div variants={fadeUp} className="glass-panel p-8 border-theme border hover:border-[#FF6B6B]/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B] mb-6 border border-[#FF6B6B]/20 group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-2">Branch Office</h4>
              <p className="text-body leading-relaxed font-light text-sm">
                Express Shiine Campus, Thudiyalur Rd,<br />
                Opp to KCT, Saravanampatti,<br />
                Coimbatore - 641035
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp} className="glass-panel p-8 border-theme border hover:border-[#F59E0B]/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-6 border border-[#F59E0B]/20 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-2">Direct Line</h4>
              <div className="flex flex-col gap-2 mt-4">
                <a href="tel:+918220625251" className="text-body hover:text-[#4F46E5] transition-colors flex items-center gap-2 font-medium">
                  +91 8220625251 <ArrowUpRight size={14} className="text-[#F59E0B]" />
                </a>
                <a href="tel:+918524014671" className="text-body hover:text-[#4F46E5] transition-colors flex items-center gap-2 font-medium">
                  +91 8524014671 <ArrowUpRight size={14} className="text-[#F59E0B]" />
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="glass-panel p-8 border-theme border hover:border-[#10B981]/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-6 border border-[#10B981]/20 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-2">Digital Comms</h4>
              <div className="mt-4">
                <a href="mailto:Support@primelink.co.in" className="text-body hover:text-[#4F46E5] transition-colors flex items-center gap-2 font-medium break-all">
                  Support@primelink.co.in <ArrowUpRight size={14} className="text-[#10B981]" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Massive Map Section */}
      <section className="relative h-[400px] md:h-[600px] w-full border-t grayscale hover:grayscale-0 transition-all duration-1000" style={{ background: "var(--pl-bg-alt)", borderColor: "var(--pl-border)" }}>
        <SectionBackground imageUrl="/images/bg7.jpg" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6693488023126!2d76.9921835!3d11.0811496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f778a01e50bf%3A0x6d3b57883c6f9af2!2sPrime%20Link%20Global%20Services!5e0!3m2!1sen!2sin!4v1716188512345!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale opacity-80 z-10 relative"
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "var(--pl-bg-alt)" }}></div>
      </section>

      <Footer />
    </main>
  );
}
