import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="floating-contact fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[80] flex flex-col gap-3 transition-all duration-300">
      <a
        href="https://api.whatsapp.com/send?phone=918220625251&text=Hi, I would like to know about your Services..!!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366]/20 backdrop-blur-md border border-[#25D366]/50 text-[#25D366] p-4 rounded-2xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all duration-300 group"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
      </a>
      <a
        href="tel:918220625251"
        className="bg-[#4F46E5]/20 backdrop-blur-md border border-[#4F46E5]/50 text-[#4F46E5] p-4 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-[#4F46E5] hover:text-white hover:scale-110 transition-all duration-300 group"
        title="Call Us"
      >
        <Phone size={28} className="group-hover:animate-pulse" />
      </a>
    </div>
  );
}
