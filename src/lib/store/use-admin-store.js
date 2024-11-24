import React from "react";
import { create } from "zustand";

const useAdminStore = create((set) => ({
  adminEnabled: false,
  toggleAdminEnable: () => {
    set((state) => ({ adminEnabled: !state.adminEnabled }));
  },
}));

export default useAdminStore;
