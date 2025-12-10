// src/components/layout/Navbar.tsx
import { useLocation } from "react-router-dom";
import { Search, Menu, Bell } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import { useSearchStore } from "../../stores/useSearchStore";
// import Avatar from "../common/Avatar";

const placeholderMap: Record<string, string> = {
    "/": "Search dashboard...",
    "/users": "Search users by name, email, or role...",
    "/analytics": "Search reports, metrics, charts...",
    "/settings": "Search settings, permissions...",
    "/profile": "Search activity, preferences...",
    "/orders": "Search orders by ID or customer...",
};

export default function Navbar() {
    const { toggle } = useSidebar();
    const location = useLocation();
    const { query, setQuery } = useSearchStore();

    const placeholder = placeholderMap[location.pathname] || "Search...";

    return (
        <header className="bg-white border-b border-gray-200 px-4 py-4 lg:px-6">
            <div className="flex items-center justify-between">
                {/* Mobile menu */}
                <button onClick={toggle} className="p-2 rounded-lg hover:bg-gray-100 lg:hidden">
                    <Menu size={24} />
                </button>

                {/* Search */}
                <div className="flex-1 max-w-xl mx-4 lg:mx-0">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={placeholder}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                        <Bell size={22} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    {/* <Avatar /> */}
                </div>
            </div>
        </header>
    );
}