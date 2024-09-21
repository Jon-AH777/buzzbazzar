import { create } from "zustand";
import { persist } from "zustand/middleware";
// Create a Zustand store
/* const useStore = create((set) => ({
    userInfo: [],
    products: [],
    checkedBrands: [],
    checkedCategorys: [],
    checkedColors: [],
    addToCart: (item) => 
        set((state) => {
            const existingItem = state.products.find((p) => p._id === item._id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.products.push(item);
            }
            // Dispatch a success toast
            // You can use a toast library or handle this differently in your app
        }),
    
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
})); */

export const useStore = create(
  persist(
    (set) => ({
      userInfo: [],
      products: [],
      checkedBrands: [],
      checkedCategorys: [],
      checkedColors: [],
      addToCart: (item) =>
        set((state) => {
          console.log({ state });
          const updatingProduct = state.products.findIndex(
            (p) => p.id === item.id
          );
          console.log({ updatingProduct });

          if (updatingProduct > -1) {
            return {
              products: state.products.map((each, index) =>
                index === updatingProduct
                  ? { ...each, quantity: each.quantity + item.quantity }
                  : each
              ),
            };
          } else {
            return {
              products: [...state.products, item],
            };
          }
        }),
      increaseQuantity: (itemId) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === itemId ? { ...p, quantity: p.quantity + 1 } : p
          ),
        })),
      decreaseQuantity: (itemId) =>
        set((state) => ({
          products: state.products
            .map((p) =>
              p.id === itemId
                ? p.quantity > 1
                  ? { ...p, quantity: p.quantity - 1 }
                  : null
                : p
            )
            .filter(Boolean),
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId
          ),
        })),
      resetCart: () => set({ products: [] }),
      toggleBrand: (brand) =>
        set((state) => {
          const isChecked = state.checkedBrands.some(
            (b) => b._id === brand._id
          );
          return {
            checkedBrands: isChecked
              ? state.checkedBrands.filter((b) => b._id !== brand._id)
              : [...state.checkedBrands, brand],
          };
        }),
      toggleCategory: (category) =>
        set((state) => {
          const isCategoryChecked = state.checkedCategorys.some(
            (c) => c._id === category._id
          );
          return {
            checkedCategorys: isCategoryChecked
              ? state.checkedCategorys.filter((c) => c._id !== category._id)
              : [...state.checkedCategorys, category],
          };
        }),
      toggleColor: (color) =>
        set((state) => {
          const isColorChecked = state.checkedColors.some(
            (c) => c._id === color._id
          );
          return {
            checkedColors: isColorChecked
              ? state.checkedColors.filter((c) => c._id !== color._id)
              : [...state.checkedColors, color],
          };
        }),
    }),
    { name: "cart-storage" }
  )
);
