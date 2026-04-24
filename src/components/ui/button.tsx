import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-heading uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(180_100%_50%/0.5)] hover:shadow-[0_0_60px_hsl(180_100%_50%/0.3)] hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "text-foreground hover:bg-muted hover:text-primary",
        link: 
          "text-primary underline-offset-4 hover:underline",
        neon:
          "relative border border-[hsl(180_100%_50%)] bg-transparent text-[hsl(180_100%_50%)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[hsl(180_100%_50%/0.2)] before:to-[hsl(280_100%_60%/0.2)] before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)]",
        cyber:
          "relative bg-gradient-to-r from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_55%)] text-[hsl(240_20%_3%)] font-bold hover:scale-105 hover:shadow-[0_0_60px_hsl(180_100%_50%/0.3)]",
        hologram:
          "relative border border-[hsl(280_100%_60%/0.5)] bg-[hsl(240_20%_6%/0.3)] backdrop-blur-md text-foreground hover:border-[hsl(280_100%_60%)] hover:shadow-[0_0_20px_hsl(280_100%_60%/0.5)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[hsl(280_100%_60%/0.1)] before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
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
