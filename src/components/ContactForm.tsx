"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, User, Building, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";
import SectionBackground from "./SectionBackground";

const WHATSAPP_NUMBER = "918220625251"; // PrimeLink WhatsApp number

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Refs to grab values on submit
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const name    = nameRef.current?.value || "";
    const company = companyRef.current?.value || "";
    const phone   = phoneRef.current?.value || "";
    const email   = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";

    // Build the WhatsApp pre-typed message
    const text = [
      `Hello PrimeLink Team! 👋`,
      ``,
      `*New Enquiry from Website*`,
      ``,
      `👤 *Name:* ${name}`,
      company ? `🏢 *Company:* ${company}` : null,
      `📞 *Phone:* ${phone}`,
      `📧 *Email:* ${email}`,
      ``,
      `📋 *Message:*`,
      message,
      ``,
      `_Sent from PrimeLink Global Services website_`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

    // Small delay for UX, then open WhatsApp
    setTimeout(() => {
      setStatus("success");
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <SectionBackground imageUrl="/images/bg7.jpg" overlayOpacity={60} />
      <div className="glow-orb glow-orb-coral w-[400px] h-[400px] md:w-[600px] md:h-[600px] top-0 right-0 opacity-20 z-10" />

      <div className="container-custom relative z-10">
        <div className="glass-panel overflow-hidden flex flex-col lg:flex-row shadow-2xl border-theme border">

          {/* ── Left info panel ── */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 relative overflow-hidden border-b lg:border-b-0 lg:border-r" style={{ background: "var(--pl-bg-alt)", borderColor: "var(--pl-border)" }}>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 relative z-10">Get In Touch</h2>
            <p className="text-body mb-8 relative z-10 leading-relaxed text-base md:text-lg font-light">
              Fill the form and we'll send your details directly to our team on WhatsApp for a fast response.
            </p>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl group-hover:bg-[#4F46E5]/20 group-hover:border-[#4F46E5]/50 transition-colors flex-shrink-0 border" style={{ background: "var(--pl-toggle-bg)", borderColor: "var(--pl-border)" }}>
                  <Phone size={20} className="text-[#4F46E5]" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Direct Line</p>
                  <a href="tel:+918220625251" className="text-heading text-base md:text-lg font-bold hover:text-[#4F46E5] transition-colors">+91 8220625251</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl group-hover:bg-[#FF6B6B]/20 group-hover:border-[#FF6B6B]/50 transition-colors flex-shrink-0 border" style={{ background: "var(--pl-toggle-bg)", borderColor: "var(--pl-border)" }}>
                  <Mail size={20} className="text-[#FF6B6B]" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Email</p>
                  <a href="mailto:Support@primelink.co.in" className="text-heading text-sm md:text-base font-bold break-all hover:text-[#FF6B6B] transition-colors">Support@primelink.co.in</a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t relative z-10" style={{ borderColor: "var(--pl-border)" }}>
              <h5 className="font-bold mb-4 text-heading tracking-wide text-sm">The PrimeLink Standard</h5>
              <ul className="space-y-3 text-sm text-body">
                <li className="flex items-center gap-3 font-medium">
                  <div className="w-2 h-2 bg-[#4F46E5] rounded-full shadow-[0_0_8px_#4F46E5] flex-shrink-0" />
                  Audited Supplier Network
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full shadow-[0_0_8px_#FF6B6B] flex-shrink-0" />
                  Escrow Fund Protection
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <div className="w-2 h-2 bg-[#F59E0B] rounded-full shadow-[0_0_8px_#F59E0B] flex-shrink-0" />
                  Transparent 2% Sourcing Fee
                </li>
              </ul>
            </div>
          </div>

          {/* ── Right form panel ── */}
          <div className="w-full lg:w-3/5 p-6 sm:p-10 md:p-12 relative" style={{ background: "var(--pl-surface)" }}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 gap-6"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                  <CheckCircle size={40} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-heading mb-3">Message Sent!</h3>
                  <p className="text-body text-base md:text-lg max-w-sm mx-auto font-light leading-relaxed">
                    WhatsApp has opened with your details pre-filled. Our team will respond shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 btn-glass px-8 py-2.5"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F46E5]" size={18} />
                      <input
                        ref={nameRef}
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-sm"
                        style={{ background: "var(--pl-input-bg)", borderColor: "var(--pl-input-border)", color: "var(--pl-text-heading)", caretColor: "var(--pl-text-heading)" }}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F46E5]" size={18} />
                      <input
                        ref={companyRef}
                        type="text"
                        placeholder="Acme Corp."
                        className="w-full pl-11 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-sm"
                        style={{ background: "var(--pl-input-bg)", borderColor: "var(--pl-input-border)", color: "var(--pl-text-heading)", caretColor: "var(--pl-text-heading)" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F46E5]" size={18} />
                      <input
                        ref={phoneRef}
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-sm"
                        style={{ background: "var(--pl-input-bg)", borderColor: "var(--pl-input-border)", color: "var(--pl-text-heading)", caretColor: "var(--pl-text-heading)" }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F46E5]" size={18} />
                      <input
                        ref={emailRef}
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all text-sm"
                        style={{ background: "var(--pl-input-bg)", borderColor: "var(--pl-input-border)", color: "var(--pl-text-heading)", caretColor: "var(--pl-text-heading)" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">
                    Message / Requirements *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-[#4F46E5]" size={18} />
                    <textarea
                      ref={messageRef}
                      required
                      rows={4}
                      placeholder="Describe your product, quantity, destination, and any other details..."
                      className="w-full pl-11 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all resize-none text-sm"
                      style={{ background: "var(--pl-input-bg)", borderColor: "var(--pl-input-border)", color: "var(--pl-text-heading)", caretColor: "var(--pl-text-heading)" }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-primary py-4 text-base flex items-center justify-center gap-3 mt-2"
                >
                  {status === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send via WhatsApp
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.114 1.535 5.836L.057 23.617a.5.5 0 00.603.625l5.99-1.57A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 01-5.192-1.452l-.37-.224-3.836 1.005 1.025-3.74-.243-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-body mt-1">
                  Clicking submit will open WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
