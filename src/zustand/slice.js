import { create } from 'zustand';

// Create a Zustand store
const useStore = create((set) => ({
    userInfo: [],
    products: [],
    checkedBrands: [],
    checkedCategorys: [],
    checkedColors: [],
    addToCart: (item) => {
        set((state) => {
            const existingItem = state.products.find((p) => p._id === item._id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.products.push(item);
            }
            // Dispatch a success toast
            // You can use a toast library or handle this differently in your app
        });
    },
    increaseQuantity: (itemId) => {
        set((state) => {
            const item = state.products.find((p) => p._id === itemId);
            if (item) {
                item.quantity++;
                // Dispatch a success toast
            }
        });
    },
    decreaseQuantity: (itemId) => {
        set((state) => {
            const item = state.products.find((p) => p._id === itemId);
            if (item && item.quantity > 1) {
                item.quantity--;
                // Dispatch a success toast
            }
        });
    },
    deleteItem: (itemId) => {
        set((state) => {
            state.products = state.products.filter((p) => p._id !== itemId);
            // Dispatch a success toast
        });
    },
    resetCart: () => {
        set((state) => {
            state.products = [];
            // Dispatch a success toast
        });
    },
    toggleBrand: (brand) =>
    set((state) => {
      const isChecked = state.checkedBrands.some((b) => b._id === brand._id);
      return {
        checkedBrands: isChecked
          ? state.checkedBrands.filter((b) => b._id !== brand._id)
          : [...state.checkedBrands, brand],
      };
    }), 
    toggleCategory: (category) =>
    set((state) => {
      const isCategoryChecked= state.checkedCategorys.some((c) => c._id === category._id);
      return {
        checkedCategorys: isCategoryChecked
        ? state.checkedCategorys.filter((c) => c._id !== category._id)
        : [...state.checkedCategorys, category]
      };
    }),
    toggleColor: (color) => 
    set((state) => {
      const isColorChecked = state.checkedColors.some((c) => c._id === color._id);
      return {
        checkedColors: isColorChecked 
        ? state.checkedColors.filter((c) => c._id !== color._id)
        : [...state.checkedColors, color]
      };
    }),
}));

export default useStore;
