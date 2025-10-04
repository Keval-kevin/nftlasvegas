import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface AspectRatioResponsiveProps {
  children: React.ReactNode;
  className?: string;
  ratios?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export const AspectRatioResponsive: React.FC<AspectRatioResponsiveProps> = ({
  children,
  className,
  ratios = {
    mobile: 16/9,
    tablet: 4/3,
    desktop: 16/9
  }
}) => {
  return (
    <div className="container-query">
      {/* Mobile */}
      <div className="block sm:hidden">
        <AspectRatio ratio={ratios.mobile} className={cn("w-full", className)}>
          {children}
        </AspectRatio>
      </div>
      
      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        <AspectRatio ratio={ratios.tablet} className={cn("w-full", className)}>
          {children}
        </AspectRatio>
      </div>
      
      {/* Desktop */}
      <div className="hidden lg:block">
        <AspectRatio ratio={ratios.desktop} className={cn("w-full", className)}>
          {children}
        </AspectRatio>
      </div>
    </div>
  );
};