"use client";

import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yd-metallic disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-yd-off-white text-yd-black hover:bg-yd-cream border border-yd-off-white",
      secondary:
        "bg-transparent text-yd-off-white border border-yd-graphite-border hover:border-yd-gray-mid",
      ghost:
        "bg-transparent text-yd-gray-muted hover:text-yd-off-white border-0",
      outline:
        "bg-transparent text-yd-metallic border border-yd-metallic hover:bg-yd-metallic hover:text-yd-black",
    };

    const sizes = {
      sm: "text-[0.7rem] px-5 py-2.5 h-9",
      md: "text-[0.7rem] px-7 py-3 h-11",
      lg: "text-[0.75rem] px-9 py-4 h-13",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
