import { create } from 'zustand';

interface useStoreSidebarStore {
   isOpen: boolean;
   toogle: () => void;
   close: () => void;
}

export const useStoreSidebar = create<useStoreSidebarStore>((set) => ({
   isOpen: false,
   toogle: () => set((state) => ({ isOpen: !state.isOpen })),
   close: () => set({ isOpen: false }),
}));
