import { configureStore } from "@reduxjs/toolkit";
import productReducer from"./productslice";
import cartslice from'./cartslice'
export const store=configureStore(
{
    reducer:{
        product:productReducer,
        cartData:cartslice
    }


})