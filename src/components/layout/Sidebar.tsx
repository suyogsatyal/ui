// components/layout/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart, Users, Settings, User, Menu } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";

const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BarChart, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: User, label: "Profile", path: "/profile" },
];

export default function Sidebar() {
    const { isOpen, toggle } = useSidebar();
    const location = useLocation();

    return (
        <aside className={`hidden lg:block bg-gray-900 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}
>
            <div className="p-4 flex justify-between items-center">
                <h2 className={`font-bold text-xl ${!isOpen && "hidden"}`}>MyApp</h2>
                <button onClick={toggle} className="p-2 hover:bg-gray-800 rounded">
                    <Menu size={24} />
                </button>
            </div>

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
                        >
                            <Icon size={20} />
                            {isOpen && <span className="ml-4">{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}