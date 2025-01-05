import { NecklaceStore } from "@/app/types/necklaceState";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Initial state
const initialState: NecklaceStore = {
  necklaceSize: 0,
  updateNecklaceSize: () => {},
};

const useNecklaceStore = create<NecklaceStore>()(
  persist(
    (set) => ({
      ...initialState,
      updateNecklaceSize: (size: number) => set({ necklaceSize: size }),
    }),
    {
      name: "necklace",
    }
  )
);

export default useNecklaceStore;
