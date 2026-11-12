import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //add to cart : add to card when clicking the add to card in the product view page 
        //add to cart from  the wishlist component 
        addCart:(state,action)=>{
            const existingItem = state.find(item=>item.id == action.payload.id)
            if(existingItem){
                //if item already exists the quantity and price should be increase when add to cart again
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity*existingItem.price
                //in this we have to push the remaining items also to the state 
                const remainingItems = state?.filter(item=>item.id!==existingItem.id)
                state = [...remainingItems,existingItem]
            }else{
                //2 new keys quantity and totalPrice also added 
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //remove cart item
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        //decrement quantitty and price
        decrementQuantity:(state,action)=>{
        const decrementedProduct= state.find(item=>item.id==action.payload)
        const remainingProducts = state.filter(item=>item.id!==action.payload)
        decrementedProduct.quantity -= 1
        decrementedProduct.totalPrice = decrementedProduct.quantity*decrementedProduct.price
        state = [...remainingProducts,decrementedProduct]
        },
        //increment quantitty and price
        incrementQuantity:(state,action)=>{
            const incrementProduct = state.find(item=>item.id==action.payload)
            const remainingProducts = state.filter(item=>item.id!==action.payload)
            incrementProduct.quantity += 1
            incrementProduct.totalPrice = incrementProduct.quantity*incrementProduct.price
            state = [...remainingProducts,incrementProduct]
        },
        //Emptycart
        emptyCart:(state)=>{
            return []
        }
    }
})
export const {addCart,removeCartItem,decrementQuantity,incrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer