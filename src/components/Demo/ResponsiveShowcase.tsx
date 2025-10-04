import React from 'react';
import { FluidText } from '@/components/FluidText';
import { ResponsiveGrid } from '@/components/ResponsiveGrid';
import { LazyImage } from '@/components/ui/lazy-image';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card } from '@/components/ui/card';

export const ResponsiveShowcase = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      title: 'Mobile-First Design',
      description: 'Optimized for all devices with fluid typography and responsive breakpoints',
      image: '/lovable-uploads/45d400ac-8bf5-41af-8aaf-1c03b17e2b04.png'
    },
    {
      title: 'Performance Optimized',
      description: 'Lazy loading, container queries, and advanced performance monitoring',
      image: '/lovable-uploads/1c9723c9-35fd-49bd-878c-7cea1e3e924f.png'
    },
    {
      title: 'Accessibility First',
      description: '44px touch targets, semantic markup, and comprehensive keyboard navigation',
      image: '/lovable-uploads/2590ecdf-f5a3-4f09-b4e5-a76ac10b6706.png'
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="section-padding bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto container-padding">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <FluidText 
            as="h2" 
            size="4xl" 
            weight="bold" 
            className="mb-4 text-gradient"
          >
            Modern Responsive Design
          </FluidText>
          <FluidText 
            size="lg" 
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Experience our advanced responsive architecture with fluid typography, 
            container queries, and performance-first optimizations.
          </FluidText>
        </div>

        <ResponsiveGrid 
          variant="cards" 
          className={`transition-all duration-700 delay-300 ${
            isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-6 hover-lift transition-all duration-300 delay-${index * 100}`}
            >
              <div className="aspect-ratio aspect-video mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  placeholder="/placeholder.svg"
                />
              </div>
              <FluidText as="h3" size="xl" weight="semibold" className="mb-2">
                {feature.title}
              </FluidText>
              <FluidText className="text-muted-foreground mb-4">
                {feature.description}
              </FluidText>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full touch-friendly"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </ResponsiveGrid>

        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${
          isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <FluidText size="sm" className="text-muted-foreground mb-4">
            Responsive across all breakpoints: 360px → 1920px+
          </FluidText>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {['Mobile', 'Tablet', 'Desktop', 'Wide Screen'].map((device, index) => (
              <span 
                key={device}
                className={`px-3 py-1 bg-primary/10 text-primary rounded-full transition-all duration-300 delay-${index * 100}`}
              >
                {device}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};