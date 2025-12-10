// src/hooks/useSidebar.ts
import { create } from "zustand";
import { persist } from "zustand/middleware"; // optional but recommended

type SidebarState = {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
};

// Option 1: Simple in-memory store (perfect for interview/take-home)
// export const useSidebar = create<SidebarState>((set) => ({
//     isOpen: true, // default open on desktop
//     toggle: () => set((state) => ({ isOpen: !state.isOpen })),
//     open: () => set({ isOpen: true }),
//     close: () => set({ isOpen: false }),
// }));

// Option 2: Persisted across refreshes (shows you think about UX)
// Uncomment this and comment out the one above if you want persistence

export const useSidebar = create<SidebarState>()(
    persist(
        (set) => ({
            isOpen: true,
            toggle: () => set((state) => ({ isOpen: !state.isOpen })),
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
        }),
        {
            name: "sidebar-state", // key in localStorage
        }
    )
);
