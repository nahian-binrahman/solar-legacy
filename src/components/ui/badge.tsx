import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit select-none",
  {
    variants: {
      variant: {
        default:
          "bg-forest-900 text-white shadow-xs border border-forest-800",
        forest:
          "bg-forest-800/10 text-forest-800 border border-forest-800/20 dark:bg-forest-900/60 dark:text-forest-100 dark:border-forest-700/50",
        solar:
          "bg-solar-400/20 text-charcoal-900 dark:text-solar-300 border border-solar-400/40 font-semibold",
        solarSolid:
          "bg-solar-400 text-forest-950 font-bold shadow-xs",
        beige:
          "bg-beige-200 text-charcoal-800 border border-beige-300",
        charcoal:
          "bg-charcoal-900 text-beige-100 border border-charcoal-700",
        outline:
          "border border-border text-foreground bg-transparent",
        glass:
          "bg-white/40 dark:bg-forest-950/60 backdrop-blur-md border border-white/60 dark:border-white/10 text-foreground",
        gold:
          "bg-solar-400/20 text-solar-300 border border-solar-400/40 font-semibold",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        default: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: "solar" | "forest" | "green" | "emerald";
  pulse?: boolean;
}

function Badge({
  className,
  variant,
  size,
  dot = false,
  dotColor = "solar",
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const dotColorClasses = {
    solar: "bg-solar-400",
    forest: "bg-forest-600",
    green: "bg-emerald-500",
    emerald: "bg-emerald-500",
  }[dotColor];

  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                dotColorClasses
              )}
            />
          )}
          <span
            className={cn("relative inline-flex rounded-full h-2 w-2", dotColorClasses)}
          />
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
