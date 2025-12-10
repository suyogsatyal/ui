// src/components/layout/SidebarContent.tsx
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart, Users, Settings, User as UserIcon } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";

const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BarChart, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: UserIcon, label: "Profile", path: "/profile" },
];

export default function SidebarContent() {
    const { close } = useSidebar();
    const location = useLocation();

    return (
        <nav className="mt-8">
            {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-6 py-3 hover:bg-gray-800 transition ${isActive ? "bg-gray-800 border-l-4 border-blue-500" : ""
                            }`}
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                close();
                            }
                        }}
                    >
                        <Icon size={20} />
                        <span className="ml-4">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}