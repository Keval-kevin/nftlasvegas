import React from 'react';
import { cn } from '@/lib/utils';

interface FluidTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export const FluidText: React.FC<FluidTextProps> = ({
  children,
  as: Component = 'p',
  size = 'base',
  className,
  weight = 'normal',
  align = 'left'
}) => {
  const sizeClasses = {
    xs: 'text-fluid-xs',
    sm: 'text-fluid-sm',
    base: 'text-fluid-base',
    lg: 'text-fluid-lg',
    xl: 'text-fluid-xl',
    '2xl': 'text-fluid-2xl',
    '3xl': 'text-fluid-3xl',
    '4xl': 'text-fluid-4xl',
    '5xl': 'text-fluid-5xl',
    '6xl': 'text-fluid-6xl'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        'leading-relaxed',
        className
      )}
    >
      {children}
    </Component>
  );
};