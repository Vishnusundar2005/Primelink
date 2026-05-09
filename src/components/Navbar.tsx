"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Global Product Sourcing", href: "/services/global-product-sourcing" },
      { name: "Supplier Negotiation", href: "/services/supplier-negotiation-and-management" },
      { name: "Quality Control", href: "/services/quality-control-and-inspection" },
      { name: "Logistics & Freight", href: "/services/logistics-and-freight-forwarding" },
      { name: "Customs Clearance", href: "/services/customs-clearance" },
      { name: "Warehousing", href: "/services/warehousing-and-distribution" },
      { name: "Secure Payments", href: "/services/secure-payment-handling" },
      { name: "Risk Management", href: "/services/risk-management-and-legal-support" },
      { name: "After-Sales Support", href: "/services/after-sales-support" },
    ],
  },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* ── Main Navbar Bar ──
          Hidden when mobile menu is open to avoid double bars */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300",
          isScrolled
            ? "bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-1.5"
            : "bg-transparent py-3",
          // Hide navbar behind the mobile menu panel when open
          isOpen && "lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo/Primelink Logo - Final without BG.png"
                alt="PrimeLink Global Services"
                height={isScrolled ? 32 : 38}
                width={0}
                sizes="160px"
                className="transition-all duration-300 object-contain brightness-0 invert w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 font-semibold text-sm tracking-wide text-[#94A3B8] hover:text-white transition-colors py-2 whitespace-nowrap">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#111827]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-2 transition-all duration-200 origin-top",
                        activeDropdown === link.name
                          ? "opacity-100 scale-100 visible pointer-events-auto"
                          : "opacity-0 scale-95 invisible pointer-events-none"
                      )}
                    >
                      <div className="flex flex-col">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="px-5 py-2.5 text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="font-semibold text-sm tracking-wide text-[#94A3B8] hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger — only visible when menu is CLOSED */}
          <button
            className="lg:hidden flex-shrink-0 text-white p-2.5 bg-white/5 rounded-xl border border-white/10 active:scale-95 transition-all"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ──
          z-[110] = above the navbar, so it fully covers it */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[110] transition-all duration-300",
          isOpen ? "visible" : "invisible"
        )}
      >
        {/* Dark backdrop — click to close */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />

        {/* Slide-in panel from right */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0B0F19] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel Header — logo + single close button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
            <Image
              src="/assets/images/logo/Primelink Logo - Final without BG.png"
              alt="PrimeLink"
              height={35}
              width={0}
              sizes="150px"
              className="object-contain brightness-0 invert w-auto"
            />
            <button
              onClick={closeMenu}
              className="text-[#94A3B8] hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-3 py-3 no-scrollbar">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/5 last:border-0">
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-white text-sm py-4 px-3"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-300 text-[#4F46E5] flex-shrink-0",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        activeDropdown === link.name ? "max-h-[500px]" : "max-h-0"
                      )}
                    >
                      <div className="bg-white/5 rounded-xl mx-2 mb-3 px-3 py-1 flex flex-col">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-[#94A3B8] text-sm font-medium py-2.5 px-1 hover:text-[#4F46E5] transition-colors border-b border-white/5 last:border-0"
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block font-semibold text-white text-sm py-4 px-3 hover:text-[#4F46E5] transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="px-5 py-5 border-t border-white/10 flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary py-3.5 text-sm w-full flex items-center justify-center gap-2"
              onClick={closeMenu}
            >
              Request A Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
