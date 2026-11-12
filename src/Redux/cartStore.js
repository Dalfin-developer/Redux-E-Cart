import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/productSlice'
import wishListSlice from './Slices/wishListSlice'
import cartSlice from './Slices/cartSlice'

const cartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer : wishListSlice,
        cartReducer : cartSlice
    }
})
export default cartStore