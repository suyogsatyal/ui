import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarState = {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
    hydrated: boolean; // tells UI when state is restored
};

export const useSidebar = create<SidebarState>()(
    persist(
        (set) => ({
            // temporary SSR-safe value; will be replaced after hydration
            isOpen: false,
            hydrated: false,

            toggle: () =>
                set((state) => ({ isOpen: !state.isOpen })),
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
        }),
        {
            name: "sidebar-state",
            onRehydrateStorage: () => (state) => {
                if (!state) return;

                // After hydration, decide whether to use stored value or responsive default
                const defaultIsOpen =
                    typeof window !== "undefined"
                        ? window.innerWidth >= 786
                        : true;

                // If no stored state, set responsive default
                if (state.isOpen === undefined) {
                    state.isOpen = defaultIsOpen;
                }

                // Mark store as hydrated
                state.hydrated = true;
            },
        }
    )
);
