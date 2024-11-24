import { create } from "zustand";
<<<<<<< HEAD
import { CATEGORIES } from "../category-data";

export const useCategoryStore = create((set) => ({
  category: CATEGORIES[0].id,
=======

export const useCategoryStore = create((set) => ({
  category: null,
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
  setCategory: (newCategory) => {
    set({ category: newCategory });
  },
}));
