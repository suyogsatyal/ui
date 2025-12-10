import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils"; // we'll add this helper at the end

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "font-medium rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
                {
                    // Variants
                    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300": variant === "primary",
                    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300": variant === "secondary",
                    "text-gray-700 hover:bg-gray-100 focus:ring-gray-300": variant === "ghost",
                    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300": variant === "danger",
                    // Sizes
                    "px-3 py-1.5 text-sm": size === "sm",
                    "px-4 py-2 text-sm": size === "md",
                    "px-6 py-3 text-base": size === "lg",
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}