import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-solar-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-forest-900 text-white hover:bg-forest-800 shadow-sm hover:shadow-md hover:shadow-forest-900/15",
        forest:
          "bg-forest-900 text-white hover:bg-forest-800 border border-forest-700/40 shadow-sm hover:shadow-md hover:shadow-forest-900/20",
        solar:
          "bg-solar-400 text-forest-950 font-semibold hover:bg-solar-300 shadow-sm hover:shadow-lg hover:shadow-solar-400/25 border border-solar-300/60",
        solarOutline:
          "border border-solar-400/80 text-solar-500 hover:bg-solar-400 hover:text-forest-950 dark:text-solar-300 transition-colors",
        forestOutline:
          "border border-forest-800/40 text-forest-900 hover:bg-forest-900 hover:text-white dark:text-forest-100 dark:border-forest-600 transition-colors",
        secondary:
          "bg-beige-200 text-charcoal-900 hover:bg-beige-300 transition-colors",
        ghost:
          "text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
        charcoal:
          "bg-charcoal-900 text-white hover:bg-charcoal-800 border border-charcoal-700/50 shadow-sm",
        link:
          "text-forest-800 underline-offset-4 hover:underline dark:text-solar-400 p-0 h-auto font-normal",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-9 rounded-md px-3.5 text-xs font-medium",
        lg: "h-13 rounded-xl px-7 text-base font-medium",
        xl: "h-15 rounded-xl px-8 text-lg font-semibold",
        icon: "h-10 w-10 p-0 rounded-lg",
        "icon-sm": "h-8 w-8 p-0 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
