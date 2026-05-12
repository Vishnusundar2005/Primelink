import { useTheme } from "./ThemeProvider";

interface SectionBackgroundProps {
  imageUrl: string;
  opacity?: number;
  overlayOpacity?: number;
  blur?: number;
  gradient?: boolean;
}

export default function SectionBackground({ 
  imageUrl, 
  opacity = 100, 
  overlayOpacity = 50,
  blur = 0,
  gradient = false
}: SectionBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          opacity: opacity / 100,
          backgroundAttachment: "fixed"
        }}
      />
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
