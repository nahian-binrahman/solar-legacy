import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("w-full mx-auto transition-all", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      "2xl": "max-w-[1440px]",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      compact: "px-4 sm:px-6",
      normal: "px-4 sm:px-6 md:px-8 lg:px-10",
      wide: "px-6 sm:px-10 lg:px-16",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "normal",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
