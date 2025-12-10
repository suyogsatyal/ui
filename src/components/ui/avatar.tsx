import { User } from "lucide-react";
import { cn } from "../../lib/utils";

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Avatar({ src, alt = "User", size = "md", className }: AvatarProps) {
    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
    };

    return (
        <div
            className={cn(
                "relative inline-flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 font-semibold text-white overflow-hidden",
                sizeClasses[size],
                className
            )}
        >
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <User className="w-1/2 h-1/2" />
            )}
        </div>
    );
}