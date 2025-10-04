import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  minItemWidth?: string;
  gap?: string;
  variant?: 'default' | 'cards' | 'masonry';
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className,
  minItemWidth = '280px',
  gap = 'clamp(1rem, 2vw, 2rem)',
  variant = 'default'
}) => {
  const gridClasses = {
    default: 'grid-responsive',
    cards: 'grid-responsive-cards',
    masonry: 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4'
  };

  const gridStyle = variant !== 'masonry' ? {
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${minItemWidth}, 100%), 1fr))`,
    gap
  } : {
    columnGap: gap
  };

  return (
    <div 
      className={cn(
        gridClasses[variant],
        'container-query',
        className
      )}
      style={gridStyle}
    >
      {variant === 'masonry' ? (
        React.Children.map(children, (child, index) => (
          <div 
            key={index}
            className="break-inside-avoid mb-4"
          >
            {child}
          </div>
        ))
      ) : children}
    </div>
  );
};