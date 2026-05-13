"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SectionBackground from "@/components/SectionBackground";
import { CheckCircle, MessageSquare, Search, Beaker, CreditCard, Activity, ShieldCheck, Ship, FileCheck, MapPin, Wrench } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Inquiry & Consultation",
    icon: <MessageSquare size={24} />,
    color: "from-[#4F46E5]",
    items: [
      "Contact us via phone, WhatsApp, email, or website.",
      "Share specs: product details, quantity, target price, destination.",
      "Our expert team schedules a detailed consultation."
    ]
  },
  {
    step: "02",
    title: "Supplier Search & Product Sourcing",
    icon: <Search size={24} />,
    color: "from-[#FF6B6B]",
    items: [
      "Connect with verified global manufacturers.",
      "Collect multiple quotations based on requirements.",
      "Analyze quality, pricing, certifications, and capabilities.",
      "Share detailed final quotation."
    ]
  },
  {
    step: "03",
    title: "Sample Testing (Optional)",
    icon: <Beaker size={24} />,
    color: "from-[#F59E0B]",
    items: [
      "Arrange physical product samples.",
      "Ship samples to you for verification.",
      "Optional: Our team inspects and provides reports."
    ]
  },
  {
    step: "04",
    title: "Order Confirmation & Payment",
    icon: <CreditCard size={24} />,
    color: "from-[#10B981]",
    items: [
      "Finalize order upon quotation approval.",
      "Process payment directly or via escrow.",
      "Ensure clear documentation before production."
    ]
  },
  {
    step: "05",
    title: "Production Monitoring",
    icon: <Activity size={24} />,
    color: "from-[#8B5CF6]",
    items: [
      "Monitor entire production process.",
      "Provide regular updates, photos, and progress reports."
    ]
  },
  {
    step: "06",
    title: "Quality Inspection",
    icon: <ShieldCheck size={24} />,
    color: "from-[#06B6D4]",
    items: [
      "Detailed quality inspection post-production.",
      "Third-party inspection available upon request."
    ]
  },
  {
    step: "07",
    title: "Logistics & Shipment",
    icon: <Ship size={24} />,
    color: "from-[#EC4899]",
    items: [
      "Handle inland transport, export docs, and freight booking.",
      "Utilize cost-effective and reliable shipping methods."
    ]
  },
  {
    step: "08",
    title: "Customs Clearance",
    icon: <FileCheck size={24} />,
    color: "from-[#4F46E5]",
    items: [
      "Complete clearance handled by expert agents in India.",
      "Manage all formalities, duties, and taxes."
    ]
  },
  {
    step: "09",
    title: "Local Delivery",
    icon: <MapPin size={24} />,
    color: "from-[#FF6B6B]",
    items: [
      "Seamless door-to-door delivery.",
      "Real-time tracking to final destination."
    ]
  },
  {
    step: "10",
    title: "Post-Delivery Support",
    icon: <Wrench size={24} />,
    color: "from-[#F59E0B]",
    items: [
      "Assistance with reorders.",
      "Warranty claims management.",
      "Future product sourcing alignment."
    ]
  }
];

export default function HowItWorks() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />
      <PageHeader title="How It Works" breadcrumb="Process" imageUrl="/images/bg17.jpg" />

      {/* Intro Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">A Streamlined, Transparent Process</h2>
            <p className="text-lg md:text-xl text-body font-light leading-relaxed">
              At Prime Link Global Services, we follow a streamlined, transparent, and efficient process to handle your product sourcing, importing, and delivery needs. Here is a step-by-step breakdown of how our service works:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Massive Interactive Timeline */}
      <section className="py-12 pb-32 relative overflow-hidden">
        <SectionBackground imageUrl="/images/HIW.jpg" objectPosition="center" />

        <div className="container-custom relative z-10">
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:py-16`}
              >
                {/* Content Side */}
                <div className={`w-full lg:w-1/2 flex ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <div className="glass-panel p-6 md:p-10 relative overflow-hidden group w-full max-w-xl hover:border-[#4F46E5]/50 transition-colors">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.color} to-transparent opacity-10 rounded-tr-3xl group-hover:opacity-30 transition-opacity`}></div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} to-transparent/10 flex-shrink-0 flex items-center justify-center border-theme border text-white shadow-lg`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold leading-tight">{step.title}</h3>
                    </div>

                    <ul className="space-y-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-body font-medium text-sm md:text-base">
                          <CheckCircle size={18} className="text-[#4F46E5] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node (Desktop only) */}
                <div className="hidden lg:flex w-20 h-20 rounded-full border-4 border-[#4F46E5] z-10 items-center justify-center absolute left-1/2 -translate-x-1/2 shadow-[0_0_40px_rgba(79,70,229,0.4)]" style={{ background: "var(--pl-bg)" }}>
                  <span className="text-2xl font-black" style={{ color: "var(--pl-text-heading)" }}>{step.step}</span>
                </div>

                {/* Empty Side for layout */}
                <div className="hidden lg:block w-full lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-24 relative border-t" style={{ background: "var(--pl-bg-alt)", borderColor: "var(--pl-border)" }}>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Why Choose Our Process?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                "Transparent workflow with constant updates.",
                "Minimized risk through verified suppliers and inspections.",
                "Hassle-free end-to-end handling from sourcing to doorstep delivery.",
                "Low sourcing fee of just 2% on the total value."
              ].map((reason, idx) => (
                <div key={idx} className="glass-panel p-6 flex items-start gap-4">
                  <div className="bg-[#4F46E5]/20 p-2 rounded-lg text-[#4F46E5]">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-lg font-medium text-heading">{reason}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
