"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

const faqData = [
  {
    question: "What is product sourcing, and how does it work?",
    answer: "Product sourcing is the process of finding and acquiring products for resale or distribution. We help businesses source high-quality products directly from manufacturers, ensuring cost efficiency and reliability."
  },
  {
    question: "Do you handle bulk and customized orders?",
    answer: "Yes, we specialize in bulk and customized order processing. Whether you need large quantities or personalized branding, we offer tailored solutions to meet your specific business needs."
  },
  {
    question: "How long does it take to process bulk orders?",
    answer: "Processing time varies based on product type, quantity, and customization requirements. Typically, standard bulk orders take 5-15 business days, while customized orders may take longer."
  },
  {
    question: "What logistics services do you offer for order fulfillment?",
    answer: "We provide end-to-end logistics solutions, including warehousing, inventory management, shipping, and last-mile delivery, ensuring smooth and timely product distribution globally."
  },
  {
    question: "Do you offer international shipping and tracking?",
    answer: "Yes, we offer international shipping with real-time tracking, ensuring safe and efficient delivery. Our logistics partners handle customs clearance and global transportation seamlessly."
  }
];

export default function Faq() {
  return (
    <main className="min-h-screen selection:bg-[#4F46E5] selection:text-white" style={{ background: "var(--pl-bg)", color: "var(--pl-text-body)" }}>
      <Navbar />
      <PageHeader title="Knowledge Base" breadcrumb="FAQ" />

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="glow-orb glow-orb-primary w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-body font-light leading-relaxed">
              Find answers to the most common queries about our global product sourcing, logistics, and supply chain solutions.
            </p>
          </div>

          <FaqAccordion items={faqData} />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
