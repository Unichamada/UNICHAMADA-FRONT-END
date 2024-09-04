import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface useSidebarToggleStore {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useSidebarToggle = create(
  persist<useSidebarToggleStore>(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get() });
      }
    }),
    {
      name: 'sidebarOpen',
      storage: createJSONStorage(() => localStorage)
    }
  )

)