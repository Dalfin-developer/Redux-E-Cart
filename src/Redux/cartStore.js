import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/productSlice'
import wishListSlice from './Slices/wishListSlice'
const cartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer : wishListSlice,
        cartReducer : {}

    }
})
export default cartStore