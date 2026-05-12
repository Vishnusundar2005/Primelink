"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SectionBackground from "@/components/SectionBackground";
import { 
  Settings, 
  Layout, 
  Wrench, 
  FileText, 
  Truck, 
  Cpu, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Factory,
  Layers,
  Container,
  Headphones
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Industry() {
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

      {/* Hero Content / Overview */}
      <section className="py-24 relative overflow-hidden">
        <SectionBackground imageUrl="/images/bg31.jpg" overlayOpacity={60} />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full lg:w-1/2"
            >
              
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-on-bg">
                Complete Factory Setup. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FF6B6B]">Engineered End-to-End.</span>
              </h2>
              <p className="text-xl text-on-bg-muted font-light leading-relaxed mb-10">
                From Machinery Procurement to Manufacturing Execution. We help businesses establish modern manufacturing ecosystems through strategic planning and precise execution.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary">Explore Solutions</Link>
                <Link href="/contact" className="btn-glass">Book Consultation</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <div>
                  <h4 className="text-3xl font-black text-on-bg mb-1">250+</h4>
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-on-bg-muted">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-on-bg mb-1">50+</h4>
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-on-bg-muted">Countries Served</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-on-bg mb-1">100%</h4>
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-on-bg-muted">Execution Support</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-on-bg mb-1">6+</h4>
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-on-bg-muted">Years Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden border-theme border shadow-2xl group">
                <Image 
                  src="/assets/images/service-main.jpg" 
                  alt="Industrial Factory" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                
                {/* Floating Detail */}
                <div className="absolute bottom-10 left-10 right-10 glass-panel p-8 backdrop-blur-2xl">
                  <Factory className="text-[#4F46E5] mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Manufacturing</h3>
                  <p className="text-white/70 text-sm">Industry 4.0 enabled factory solutions engineered for future scale.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Everything Required to Launch a Modern Factory</h2>
            <p className="text-lg text-body font-light">Comprehensive industrial services designed to handle complexity from A to Z.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Machinery Procurement", desc: "Global sourcing of industrial-grade manufacturing systems.", icon: <Settings size={30} />, color: "from-[#4F46E5]" },
              { title: "Factory Layout Planning", desc: "Optimized production-flow and infrastructure planning.", icon: <Layout size={30} />, color: "from-[#FF6B6B]" },
              { title: "Installation Coordination", desc: "End-to-end machinery setup and deployment support.", icon: <Wrench size={30} />, color: "from-[#F59E0B]" },
              { title: "Tax & Import Structuring", desc: "Strategic support for industrial import and tax optimization.", icon: <FileText size={30} />, color: "from-[#10B981]" },
              { title: "Raw Material Procurement", desc: "Reliable sourcing channels for manufacturing continuity.", icon: <Container size={30} />, color: "from-[#8B5CF6]" },
              { title: "Production Ecosystem Design", desc: "Integrated planning for scalable manufacturing operations.", icon: <Layers size={30} />, color: "from-[#06B6D4]" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-10 hover:border-[#4F46E5]/50 transition-colors group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} to-transparent/10 flex items-center justify-center mb-6 text-[#4F46E5] border-theme border`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-heading mb-4">{item.title}</h4>
                <p className="text-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionBackground imageUrl="/images/bg26.jpg" overlayOpacity={60} />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden border-theme border shadow-2xl group">
                <Image 
                  src="/images/manufacture.jpg" 
                  alt="Manufacturing" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Content Card - Theme Aware */}
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-8 md:p-10 border-theme border shadow-2xl">
                   <div className="max-w-md">
                      <h3 className="text-3xl md:text-5xl font-black text-heading mb-4">Built for Precision.</h3>
                      <p className="text-body text-base md:text-lg font-medium leading-relaxed">
                        Every workflow step is engineered to eliminate variance and guarantee output.
                      </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-on-bg">A Complete Manufacturing Ecosystem. <span className="text-[#4F46E5]">Seamlessly Built.</span></h2>
               <div className="space-y-8">
                  {[
                    { step: "01", title: "Machine Procurement", desc: "Sourcing the right machinery with global quality standards." },
                    { step: "02", title: "Import Coordination", desc: "End-to-end export handling, documentation & compliance." },
                    { step: "03", title: "Installation", desc: "Professional installation with safety and performance assurance." },
                    { step: "04", title: "Factory Planning", desc: "Optimized layouts for efficiency, scalability, and growth." },
                    { step: "05", title: "Raw Material Support", desc: "Consistent supply chain for uninterrupted production." },
                    { step: "06", title: "Production Launch", desc: "Smooth commissioning and operational readiness." }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 items-start group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#4F46E5] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_#4F46E5]">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-on-bg mb-2 group-hover:text-[#4F46E5] transition-colors">A to Z {step.title}</h4>
                        <p className="text-on-bg-muted text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Execution Section */}
      <section className="py-24 relative overflow-hidden bg-surface border-y" style={{ borderColor: "var(--pl-border)" }}>
        <div className="container-custom relative z-10">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] -top-20 -left-20 opacity-5 z-0"></div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-heading">Strategic Execution <span className="text-[#4F46E5]">Beyond Machinery Supply.</span></h2>
            <p className="text-lg text-body font-light">We don't just source equipment. We help structure scalable, high-performance manufacturing ecosystems.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Coordinated Procurement", desc: "Streamlined sourcing with absolute cost and quality optimization.", icon: <Layers size={24} />, color: "text-[#4F46E5]" },
              { title: "Installation Guidance", desc: "Expert supervision for smooth and safe machinery deployments.", icon: <Wrench size={24} />, color: "text-[#FF6B6B]" },
              { title: "Import Structuring", desc: "Complete compliance and tax-efficient global import solutions.", icon: <Shield size={24} />, color: "text-[#F59E0B]" },
              { title: "Vendor Alignment", desc: "Access to verified partners and reliable global manufacturer network.", icon: <Globe size={24} />, color: "text-[#10B981]" },
              { title: "Factory Ecosystem Planning", desc: "Designing future-ready infrastructure for long-term scalability.", icon: <Layout size={24} />, color: "text-[#8B5CF6]" },
              { title: "Long-Term Support", desc: "Continuous operational and manufacturing efficiency support.", icon: <Headphones size={24} />, color: "text-[#06B6D4]" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className={`${feature.color} transition-transform group-hover:scale-110 duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-heading mb-2">{feature.title}</h4>
                  <p className="text-body text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionBackground imageUrl="/images/bg30.jpg" overlayOpacity={60} />
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
             <div className="text-xs font-bold uppercase tracking-widest text-[#4F46E5] mb-4">Industries We Empower</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-on-bg">Smart Manufacturing Solutions</h2>
            <p className="text-lg text-on-bg-muted font-medium">Customized industrial infrastructure for various sectors.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Paper Manufacturing", desc: "Complete solutions for paper production units.", image: "/images/paper.jpg" },
              { title: "Packaging Industry", desc: "End-to-end plants for packaging excellence.", image: "/images/packing.jpg" },
              { title: "Automation Systems", desc: "Advanced automation and robotics integration.", image: "/images/automated.jpg" },
              { title: "Industrial Processing", desc: "Custom systems for process industries.", image: "/images/industry.jpg" },
              { title: "Smart Manufacturing", desc: "Industry 4.0 enabled smart factory solutions.", image: "/images/smart.jpg" },
              { title: "Production Infrastructure", desc: "Future-ready infrastructure design and execution.", image: "/images/production.jpg" }
            ].map((ind, idx) => (
              <div key={idx} className="glass-panel overflow-hidden border-theme border hover:border-[#4F46E5]/50 transition-all group flex flex-col h-full">
              <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60"></div>
                </div>
                <div className="p-8 flex-grow">
                  <h4 className="text-xl font-bold text-heading mb-3 flex items-center justify-between">
                    {ind.title}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#4F46E5]" />
                  </h4>
                  <p className="text-body text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--pl-bg-alt)" }}>
        <div className="container-custom relative z-10">
           <div className="glass-panel p-12 md:p-20 text-center relative overflow-hidden border-theme border">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-6xl font-black text-heading mb-8">Build Manufacturing Systems with Strategic Execution.</h2>
                <p className="text-xl text-body mb-12 max-w-2xl mx-auto font-light">From machinery procurement to production ecosystem planning — we help businesses build scalable industrial infrastructure.</p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                  <Link href="/contact" className="btn-primary">Schedule Consultation</Link>
                  <Link href="/contact" className="btn-glass">Talk With Our Team</Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t" style={{ borderColor: "var(--pl-border)" }}>
                   {[
                     { label: "Global Expertise", desc: "Serving clients across 50+ countries." },
                     { label: "End-to-End", desc: "From planning to production." },
                     { label: "Proven Track", desc: "250+ successful industrial projects." },
                     { label: "Future-Ready", desc: "Built for efficiency and scale." }
                   ].map((v, i) => (
                     <div key={i}>
                        <h5 className="text-heading font-bold text-lg mb-1">{v.label}</h5>
                        <p className="text-body text-[10px] uppercase font-bold tracking-widest">{v.desc}</p>
                     </div>
                   ))}
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
