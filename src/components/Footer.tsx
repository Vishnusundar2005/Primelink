import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Mail, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#4F46E5]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Company Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center group w-fit">
              <Image
                src="/assets/images/logo/Primelink Logo - Final without BG.png"
                alt="PrimeLink Logo"
                height={48}
                width={0}
                sizes="200px"
                className="object-contain brightness-0 invert transition-all duration-300 group-hover:opacity-80 w-auto"
              />
            </Link>
            <p className="text-[#94A3B8] leading-relaxed text-lg font-light pr-8">
              Engineered for absolute precision in global trade. We absorb supply chain friction so you can focus on scale.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#4F46E5] hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 transition-all group">
                <Globe size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B6B] hover:border-[#FF6B6B]/50 hover:bg-[#FF6B6B]/10 transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F59E0B] hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 transition-all group">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Useful Links (Span 3) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-widest uppercase mb-8">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "About PrimeLink", href: "/about" },
                { name: "Global Services", href: "/services" },
                { name: "The 10-Step Process", href: "/how-it-works" },
                { name: "Knowledge Base", href: "/faq" },
                { name: "Contact Ops", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors group text-lg">
                    <ChevronRight size={16} className="text-[#4F46E5] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> 
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="sm:col-span-2">
               <h4 className="text-sm font-bold text-[#F8FAFC] tracking-widest uppercase mb-8">
                Global Headquarters
              </h4>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#4F46E5] flex-shrink-0 mt-1" />
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  16/4A, North Street, Mel Asaripallam,<br/>
                  Nagercoil, Tamil Nadu, India - 629201
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] tracking-widest uppercase mb-6">
                Direct Comms
              </h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+918220625251" className="text-[#94A3B8] hover:text-white transition-colors text-lg flex items-center gap-2 group">
                  <ArrowUpRight size={16} className="text-[#4F46E5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/> +91 8220625251
                </a>
                <a href="tel:+918524014671" className="text-[#94A3B8] hover:text-white transition-colors text-lg flex items-center gap-2 group">
                  <ArrowUpRight size={16} className="text-[#4F46E5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/> +91 8524014671
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] tracking-widest uppercase mb-6">
                Digital Drop
              </h4>
              <a href="mailto:Support@primelink.co.in" className="text-[#94A3B8] hover:text-white transition-colors text-lg flex items-center gap-2 group">
                  <ArrowUpRight size={16} className="text-[#FF6B6B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/> Support@primelink.co.in
              </a>
            </div>
          </div>

        </div>

        {/* Big Text Divider */}
        <div className="w-full border-t border-white/10 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <h2 className="text-[15vw] md:text-[8vw] font-black text-white/5 leading-none tracking-tighter select-none text-center">
            PRIMELINK
          </h2>
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
             <p className="text-[#94A3B8] text-xs md:text-sm">
              © {new Date().getFullYear()} PrimeLink Global Services.
            </p>
            <p className="text-[#94A3B8] text-xs md:text-sm">
              Engineered by <Link href="https://www.tahamedia.in/" className="text-white hover:text-[#4F46E5] font-bold transition-colors">Taha Media</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
