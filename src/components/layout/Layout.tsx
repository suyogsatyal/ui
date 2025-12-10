import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSidebar } from "../../hooks/useSidebar";
import { X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import { useEffect } from "react";
import { useSearchStore } from "../../stores/useSearchStore";
import { useLocation } from "react-router-dom";

function useClearSearchOnRouteChange() {
    const clearQuery = useSearchStore((s:any) => s.clearQuery);
    const location = useLocation();

    useEffect(() => {
        clearQuery();
    }, [location.pathname, clearQuery]);
}

export default function Layout() {
    useClearSearchOnRouteChange();
    const { isOpen, close } = useSidebar();

    return (
        <>
            <div className="h-screen flex flex-col bg-gray-50">
                <Navbar />

                <div className="flex flex-1 overflow-hidden">
                    {/* Desktop Sidebar */}
                    <Sidebar />

                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto">
                        <div className="p-6">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>

            {/* Mobile Overlay Sidebar + Backdrop */}
            <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "visible" : "invisible"}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"
                        }`}
                    onClick={close}
                />

                {/* Mobile Sidebar Panel */}
                <aside
                    className={`
      absolute left-0 top-0 h-full w-72 bg-gray-900 text-white shadow-2xl
      transition-transform duration-300 ease-in-out flex flex-col
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
                >
                    <div className="flex justify-between items-center p-4 border-b border-gray-800">
                        <h2 className="text-xl font-bold">MyApp</h2>
                        <button onClick={close} className="p-2 hover:bg-gray-800 rounded-lg">
                            <X size={24} />
                        </button>
                    </div>

                    <SidebarContent />   {/* ← Same menu! Now it works */}
                </aside>
            </div>
        </>
    );
}