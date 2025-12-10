import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean; // for search input
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon, type = "text", ...props }, ref) => {
        return (
            <div className="relative">
                {icon && (
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                )}
                <input
                    type={type}
                    className={cn(
                        "w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition",
                        icon && "pl-10",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = "Input";
export default Input;