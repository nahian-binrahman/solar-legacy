import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading tracking-tight font-bold", {
  variants: {
    size: {
      display:
        "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]",
      h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]",
      h2: "text-2xl sm:text-3xl md:text-4xl leading-[1.2]",
      h3: "text-xl sm:text-2xl md:text-3xl leading-[1.25]",
      h4: "text-lg sm:text-xl md:text-2xl leading-[1.3]",
      h5: "text-base sm:text-lg font-semibold",
      h6: "text-sm sm:text-base font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right ml-auto",
    },
    theme: {
      default: "text-foreground",
      forest: "text-forest-900",
      solar: "solar-gradient-text",
      white: "text-white",
      charcoal: "text-charcoal-900",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "h2",
    align: "left",
    theme: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  descriptionClassName?: string;
  solarAccent?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      as,
      size,
      align = "left",
      theme,
      eyebrow,
      description,
      descriptionClassName,
      solarAccent,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = as || (`h${level}` as const);
    const resolvedSize = size || (`h${level}` as const);

    const alignmentContainerClasses = {
      left: "text-left items-start",
      center: "text-center items-center mx-auto",
      right: "text-right items-end ml-auto",
    }[align || "left"];

    return (
      <div className={cn("flex flex-col gap-2 max-w-4xl", alignmentContainerClasses)}>
        {eyebrow && (
          <div className="mb-1">
            {typeof eyebrow === "string" ? (
              <span className="text-xs uppercase tracking-widest font-bold text-solar-500 font-sans">
                {eyebrow}
              </span>
            ) : (
              eyebrow
            )}
          </div>
        )}

        <Tag
          ref={ref}
          className={cn(
            headingVariants({ size: resolvedSize, align, theme }),
            className
          )}
          {...props}
        >
          {children}
          {solarAccent && (
            <span className="solar-gradient-text block sm:inline sm:ml-2">
              {solarAccent}
            </span>
          )}
        </Tag>

        {description && (
          <p
            className={cn(
              "text-base sm:text-lg text-muted-foreground leading-relaxed mt-1 max-w-2xl font-normal font-sans",
              align === "center" && "mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
