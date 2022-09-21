import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { productType } from "../types/product";
//import type { productInCartType } from "../types/product";

export const useCounterStore = defineStore('cart', () => {
    const cartItems = reactive<productType[]>([]);

    function addToCart(item:productType) {
        cartItems.push(item);
    }
    /*function removeFromCart(item.id) {
        cartItems = cartItems.filter((e)=>e.id !== id )
    }*/
    return{cartItems, addToCart};
});
