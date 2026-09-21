import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl transition-all duration-300 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground border border-border shadow-xs hover:border-beige-300",
        elevated:
          "bg-card text-card-foreground border border-border/80 shadow-md hover:shadow-xl hover:shadow-forest-950/5",
        forest:
          "bg-forest-900 text-beige-50 border border-forest-700/60 shadow-xl",
        charcoal:
          "bg-charcoal-900 text-beige-50 border border-charcoal-700/80 shadow-xl",
        beige:
          "bg-beige-100 text-charcoal-900 border border-beige-200 shadow-xs",
        glass:
          "bg-white/70 dark:bg-forest-950/70 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg text-foreground",
        solarHighlight:
          "bg-white text-card-foreground border-2 border-solar-400 shadow-lg shadow-solar-400/10",
      },
      hoverEffect: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-xl transition-transform duration-300",
        glow: "hover:border-solar-400/80 hover:shadow-lg hover:shadow-solar-400/20 transition-all duration-300",
        forestGlow: "hover:border-forest-600 hover:shadow-xl hover:shadow-forest-900/15 transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverEffect: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverEffect, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hoverEffect, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 sm:p-8", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading text-xl sm:text-2xl font-bold tracking-tight leading-snug",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm sm:text-base text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 sm:p-8 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 sm:p-8 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
