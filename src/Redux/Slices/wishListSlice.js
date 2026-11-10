import { createSlice } from "@reduxjs/toolkit";

const wishListSlice =  createSlice({
    name:"WishList",
    initialState:[],
    reducers:{
        //add to wishlist : view component  : product
        //remove from wishlist : view wishlist ; product id
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist :(state,action)=>{
            return state.filter(product=>product.id!==action.payload)
        }
    }
})
export const  {addToWishList,removeFromWishlist} = wishListSlice.actions
export default wishListSlice.reducer
