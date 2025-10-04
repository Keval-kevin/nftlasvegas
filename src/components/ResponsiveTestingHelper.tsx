
import { useState, useEffect } from "react";

export const ResponsiveTestingHelper = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    // Show helper in development mode
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  if (!isVisible) return null;

  const getBreakpoint = () => {
    if (screenSize.width < 640) return 'xs';
    if (screenSize.width < 768) return 'sm';
    if (screenSize.width < 1024) return 'md';
    if (screenSize.width < 1280) return 'lg';
    if (screenSize.width < 1536) return 'xl';
    return '2xl';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-2 rounded-lg z-50 font-mono backdrop-blur-sm">
      <div>Screen: {screenSize.width}×{screenSize.height}</div>
      <div>Breakpoint: {getBreakpoint()}</div>
    </div>
  );
};
