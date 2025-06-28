import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartitem:[]
}
 const cartSlice=createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            addcart:(state,action)=>
            {
                if(!state.cartitem,include(action.payload))
                {
                    state.cartitem.push(action.payload)
                }
            },
            removeCart:(state,action)=>
            {
              state.cartitem=state.cartitem.filter((item)=>item!=action.payload);

            }
        }
    }
 )
 export const{addcart,removeCart}=cartSlice.actions;
 export default cartSlice.reducer;