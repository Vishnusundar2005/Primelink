"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Industry", href: "/industry" },
  { name: "Residential", href: "/residential" },
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

/** Animated Sun/Moon toggle button */
function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-300 active:scale-95",
        isDark
          ? "bg-white/8 border-white/12 text-[#94A3B8] hover:text-white hover:bg-white/15"
          : "bg-black/6 border-black/10 text-[#475569] hover:text-[#0F172A] hover:bg-black/12",
        className
      )}
      style={{
        background: isDark ? "var(--pl-toggle-bg)" : "var(--pl-toggle-bg)",
        borderColor: isDark ? "var(--pl-toggle-border)" : "var(--pl-toggle-border)",
      }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      >
        <Moon size={16} />
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      >
        <Sun size={16} />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();
  const pathname = usePathname();
  const isDark = theme === "dark";
  const isHome = pathname === "/";

  const isIndustry = pathname === "/industry";

  // Always white at the top for consistent branding (matches Home page look)
  const getNavTextColor = () => {
    if (isScrolled) return isDark ? "#ffffff" : "#0F172A";
    return "#ffffff";
  };

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
            ? "backdrop-blur-xl border-b shadow-2xl py-1"
            : "bg-transparent py-2",
          isOpen && "lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto"
        )}
        style={
          isScrolled
            ? {
                background: "var(--pl-nav-bg-scrolled)",
                borderColor: "var(--pl-border)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo/Primelink Logo - Final without BG.png"
                alt="PrimeLink Global Services"
                height={isScrolled ? 26 : 30}
                width={0}
                sizes="140px"
                className="transition-all duration-300 object-contain w-auto"
                style={{ filter: getNavTextColor() === "#ffffff" ? "brightness(0) invert(1)" : "var(--pl-logo-filter)" }}
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
                        <button
                          className="flex items-center gap-1.5 font-bold text-sm tracking-wide transition-colors py-2 whitespace-nowrap"
                          style={{ 
                            color: getNavTextColor(),
                            textShadow: getNavTextColor() === "#ffffff" ? "0 2px 10px rgba(0,0,0,0.3)" : "none" 
                          }}
                        >
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
                            "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 backdrop-blur-2xl border rounded-2xl shadow-2xl py-2 transition-all duration-200 origin-top",
                            activeDropdown === link.name
                              ? "opacity-100 scale-100 visible pointer-events-auto"
                              : "opacity-0 scale-95 invisible pointer-events-none"
                          )}
                          style={{
                            background: isDark ? "rgba(17, 24, 39, 0.95)" : "rgba(255,255,255,0.97)",
                            borderColor: "var(--pl-border)",
                          }}
                        >
                          <div className="flex flex-col">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="px-5 py-2.5 text-sm font-medium transition-colors"
                                style={{ color: "var(--pl-nav-text)" }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--pl-nav-text-hover)";
                                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--pl-card-hover)";
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--pl-nav-text)";
                                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
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
                        className="font-bold text-sm tracking-wide transition-colors whitespace-nowrap"
                        style={{ 
                          color: getNavTextColor(),
                          textShadow: getNavTextColor() === "#ffffff" ? "0 2px 10px rgba(0,0,0,0.3)" : "none"
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
            ))}

            {/* Theme Toggle — desktop */}
            <ThemeToggle />

            <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
              Get Quote
            </Link>
          </div>

          {/* Mobile right controls: toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex-shrink-0 p-2.5 rounded-xl border border-[var(--pl-border)] active:scale-95 transition-all"
              style={{ background: "var(--pl-toggle-bg)", color: "var(--pl-text-heading)" }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
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
            "absolute top-0 right-0 h-full w-[85vw] max-w-sm border-l shadow-2xl flex flex-col transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: "var(--pl-mobile-panel)",
            borderColor: "var(--pl-border)",
          }}
        >
          {/* Panel Header — logo + close button */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0"
            style={{ borderColor: "var(--pl-border)" }}
          >
            <Image
              src="/assets/images/logo/Primelink Logo - Final without BG.png"
              alt="PrimeLink"
              height={35}
              width={0}
              sizes="150px"
              className="object-contain w-auto"
              style={{ filter: "var(--pl-logo-filter)" }}
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-xl transition-colors"
              style={{ color: "var(--pl-nav-text)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--pl-nav-text-hover)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--pl-toggle-bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--pl-nav-text)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-3 py-3 no-scrollbar">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="border-b last:border-0"
                style={{ borderColor: "var(--pl-border)" }}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-sm py-4 px-3 transition-colors"
                      style={{ color: "var(--pl-text-heading)" }}
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
                      <div
                        className="rounded-xl mx-2 mb-3 px-3 py-1 flex flex-col"
                        style={{ background: "var(--pl-toggle-bg)" }}
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-sm font-medium py-2.5 px-1 transition-colors border-b last:border-0"
                            style={{ color: "var(--pl-nav-text)", borderColor: "var(--pl-border)" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#4F46E5")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--pl-nav-text)")}
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
                    className="block font-semibold text-sm py-4 px-3 transition-colors"
                    style={{ color: "var(--pl-text-heading)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#4F46E5")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--pl-text-heading)")}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div
            className="px-5 py-5 border-t flex-shrink-0"
            style={{ borderColor: "var(--pl-border)" }}
          >
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
