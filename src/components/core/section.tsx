import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full overflow-hidden transition-colors", {
  variants: {
    spacing: {
      none: "py-0",
      xs: "py-8 sm:py-12",
      sm: "py-12 sm:py-16",
      md: "py-14 sm:py-20",
      lg: "py-16 sm:py-24",
      xl: "py-20 sm:py-32",
      screenFit: "min-h-[90vh] lg:min-h-screen py-12 lg:py-16 flex flex-col justify-center",
      screen: "min-h-[100dvh] py-8 lg:py-12 flex flex-col justify-center",
    },
    background: {
      transparent: "bg-transparent",
      default: "bg-background text-foreground",
      white: "bg-white text-foreground border-y border-beige-200/60",
      beige: "bg-beige-100 text-charcoal-900 border-y border-beige-200",
      beigeLight: "bg-beige-50 text-charcoal-900",
      forest: "bg-forest-900 text-beige-50 border-y border-forest-800",
      forestDeep: "bg-forest-950 text-beige-50 border-y border-forest-900",
      charcoal: "bg-charcoal-900 text-beige-50 border-y border-charcoal-800",
    },
  },
  defaultVariants: {
    spacing: "md",
    background: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  ambientGlow?: boolean;
  gridPattern?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing,
      background,
      as: Component = "section",
      ambientGlow = false,
      gridPattern = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ spacing, background, className }))}
        {...props}
      >
        {gridPattern && (
          <div
            className="pointer-events-none absolute inset-0 solar-grid-bg opacity-40 -z-10"
            aria-hidden="true"
          />
        )}
        {ambientGlow && (
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-solar-400/10 blur-3xl rounded-full -z-10"
            aria-hidden="true"
          />
        )}
        {children}
      </Component>
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };
