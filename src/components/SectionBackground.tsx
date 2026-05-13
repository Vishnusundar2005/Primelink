import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SectionBackgroundProps {
  imageUrl: string;
  opacity?: number;
  overlayOpacity?: number;
  blur?: number;
  gradient?: boolean;
  objectPosition?: string;
  mobileObjectPosition?: string;
  priority?: boolean;
  parallax?: boolean;
  fixed?: boolean;
}

export default function SectionBackground({
  imageUrl,
  opacity = 100,
  overlayOpacity = 50,
  blur = 0,
  gradient = false,
  objectPosition = "center",
  mobileObjectPosition,
  priority = false,
  parallax = true,
  fixed = false
}: SectionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect for desktop, reduced for mobile
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["-2%", "2%"] : ["-10%", "10%"]);
  const scale = isMobile ? 1.05 : 1.1;

  const effectiveObjectPosition = isMobile && mobileObjectPosition ? mobileObjectPosition : objectPosition;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <div className={fixed && !isMobile ? "sticky top-0 h-screen w-full overflow-hidden" : "absolute inset-0 overflow-hidden"}>
        <motion.div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: opacity / 100,
            y: parallax && !shouldReduceMotion && !(fixed && !isMobile) ? y : 0,
            scale: parallax && !shouldReduceMotion ? scale : 1
          }}
        >
          <Image
            src={imageUrl}
            alt=""
            fill
            priority={priority}
            className={`object-cover ${effectiveObjectPosition.startsWith('object-') ? effectiveObjectPosition : `object-${effectiveObjectPosition}`}`}
            sizes="100vw"
            quality={75}
          />
        </motion.div>
      </div>

      {/* Overlay to ensure text readability */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: gradient
            ? "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)"
            : `rgba(0,0,0,${overlayOpacity / 100})`,
          backdropFilter: blur > 0 ? `blur(${blur}px)` : 'none'
        }}
      />
    </div>
  );
}
