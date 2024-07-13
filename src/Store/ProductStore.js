import { create } from "zustand";
import axios from 'axios';
import { useState } from "react";

const setCart = () => {
  const cart = JSON.parse(localStorage.getItem("carts")) || [];
  return cart;
}

const useProductStore = create((set , get) => ({
  products: [],
  error: null,
  cart: setCart(),
  currentPage: 1,

  fetchProducts: async (page = 1) => {
    try {
      const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
        params: {
          organization_id: '914a1ea0a41f41538a1a489f628d27de',
          reverse_sort: false,
          page: page,
          size: 10,
          Appid: '0P3W7TBADIH3K9R',
          Apikey: '616ca87d3edb4e54bc48ed444168c15f20240712185722233413',
        },
      });

      set({
        products: response.data.items,
        currentPage: page,
        error: null,
      });

    } catch (error) {
      console.error('Error fetching products:', error.message, error);
      set({ error: error.message });
    }
  },
  fetchNextPage: async () => {
    const { currentPage } = get();
    if (currentPage === 1) {
      await get().fetchProducts(currentPage + 1);
    }
  },

  fetchPreviousPage: async () => {
    const { currentPage } = get();
    if (currentPage > 1) {
      await get().fetchProducts(currentPage - 1);
    }
  },


  addProductToCart: (id) => {
   const product = get().products.find((product) => product.unique_id === id);

    const itemInCart = {
      id: product.unique_id,
      name: product.name,
      price: product.current_price[0].NGN[0], 
      image: product.image,
      quantity: 1,
      subTotal: product.current_price[0].NGN[0] * 1, 
    };
    
    const cart = get().cart;
    cart.push(itemInCart);
    localStorage.setItem("carts", JSON.stringify(cart));
    
    set({ cart });
  },

  removeProductFromCart: (id) => {
    const cart = get().cart;
    const productToRemove = cart.find((product) => product.id === id);
    if(productToRemove){
        cart.splice(productToRemove , 1);
        console.log(cart)
    }
    localStorage.setItem("carts", JSON.stringify(cart));
    set({ cart });
  },

  controlQuantity: (id , operation) => {
     const cart = get().cart;
     const productToUpdate = cart.find((product) => product.id === id);

     if (productToUpdate) {
      if (operation === "inc") {
        productToUpdate.quantity += 1;
      } else if (operation === "dsc" && productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
      }
        productToUpdate.subTotal = productToUpdate.price * productToUpdate.quantity;
     }

     localStorage.setItem("carts", JSON.stringify(cart));
     set({ cart });
},

clearCart : () => {
     const cart = get().cart;
     cart.splice(0, cart.length);
     localStorage.setItem("carts", JSON.stringify(cart));
     set({ cart });
},

getSubTotal: () => {
    const cart = get().cart;
    let total = 0;
    cart.forEach(item => {
       total += item.subTotal;
    });
    return total;
  },

findProduct: (slugname) => {
    const product = get().products.find((product) => product.url_slug === slugname);
    return product;
  },
}));

export default useProductStore;
