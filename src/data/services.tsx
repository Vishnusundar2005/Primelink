import { Globe2, Users, ShieldCheck, Ship, FileCheck, Home as HomeIcon, CreditCard, Scale, Wrench } from "lucide-react";
import React from "react";

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  bgImage?: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "global-product-sourcing",
    title: "Global Product Sourcing",
    description: "We identify and connect you with verified manufacturers and suppliers from around the world, ensuring high-quality products at competitive prices.",
    icon: <Globe2 size={32} />,
    image: "img-5.jpg",
    bgImage: "/images/bg20.jpg",
    features: [
      "Customized product search as per your specifications.",
      "Supplier background checks and verification.",
      "Market analysis for the best pricing.",
      "Sample collection and approval before mass production."
    ]
  },
  {
    slug: "supplier-negotiation-and-management",
    title: "Supplier Negotiation and Management",
    description: "Leave the negotiation to us! We ensure you get the best deals, secure contracts, and smooth production flow.",
    icon: <Users size={32} />,
    image: "service-2.jpg",
    bgImage: "/images/bg18.jpg",
    features: [
      "Transparent price negotiations.",
      "Drafting and managing purchase agreements.",
      "Setting delivery terms, payment milestones, and penalties for delays.",
      "Continuous production monitoring."
    ]
  },
  {
    slug: "quality-control-and-inspection",
    title: "Quality Control and Inspection",
    description: "We ensure that the products you receive meet the highest standards and match your expectations.",
    icon: <ShieldCheck size={32} />,
    image: "service-main.jpg",
    bgImage: "/images/bg21.jpg",
    features: [
      "Pre-production sample evaluation.",
      "In-line production inspections.",
      "Final pre-shipment quality checks.",
      "Detailed inspection reports with photos and videos."
    ]
  },
  {
    slug: "logistics-and-freight-forwarding",
    title: "Logistics and Freight Forwarding",
    description: "Comprehensive logistics and freight forwarding solutions tailored to your unique supply chain needs.",
    icon: <Ship size={32} />,
    image: "service-1.jpg",
    bgImage: "/images/bg24.jpg",
    features: [
      "Sea Freight (FCL and LCL).",
      "Air Freight for urgent deliveries.",
      "Road transportation within India.",
      "Cargo consolidation services.",
      "Cargo insurance options."
    ]
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    description: "We handle all customs formalities to prevent delays and extra costs.",
    icon: <FileCheck size={32} />,
    image: "service-3.jpg",
    bgImage: "/images/bg25.jpg",
    features: [
      "HS code classification.",
      "Duty and tax assessment.",
      "Document preparation (Invoice, Packing List, BL/AWB, COO, etc.).",
      "Handling customs inspections.",
      "Fast-track clearance support."
    ]
  },
  {
    slug: "warehousing-and-distribution",
    title: "Warehousing and Distribution",
    description: "Store your goods securely and distribute them efficiently through our network.",
    icon: <HomeIcon size={32} />,
    image: "service-2.jpg",
    bgImage: "/images/bg26.jpg",
    features: [
      "Short-term and long-term warehousing.",
      "Inventory management.",
      "Packaging and labeling.",
      "Last-mile delivery to any location."
    ]
  },
  {
    slug: "secure-payment-handling",
    title: "Secure Payment Handling",
    description: "We safeguard your financial transactions to protect you from fraud and losses.",
    icon: <CreditCard size={32} />,
    image: "service-main.jpg",
    bgImage: "/images/bg27.jpg",
    features: [
      "Escrow services.",
      "Structured payment plans.",
      "Safe currency exchange support.",
      "Legal documentation for each payment milestone."
    ]
  },
  {
    slug: "risk-management-and-legal-support",
    title: "Risk Management and Legal Support",
    description: "We ensure your sourcing journey is safe and secure.",
    icon: <Scale size={32} />,
    image: "img-5.jpg",
    bgImage: "/images/bg28.jpg",
    features: [
      "Legal trade compliance.",
      "Non-Disclosure Agreements (NDAs).",
      "Penalty clauses for breach of contract.",
      "Regular supplier audits."
    ]
  },
  {
    slug: "after-sales-support",
    title: "After-Sales Support",
    description: "Our job does not end with delivery. We provide ongoing support to ensure your satisfaction.",
    icon: <Wrench size={32} />,
    image: "service-1.jpg",
    bgImage: "/images/bg29.jpg",
    features: [
      "Claim management for damaged goods.",
      "Reorder management.",
      "Dispute resolution.",
      "Ongoing supplier communication."
    ]
  }
];
