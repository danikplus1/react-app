import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useUserStore;
