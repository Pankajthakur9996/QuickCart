import { createSlice } from "@reduxjs/toolkit";
const initialState=
{
data:[]
}
const createSlice1=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            console.log(action.payload)
            state.data.push(...action.payload)
        }

    }
})
export const{addProduct}=createSlice1.actions;
export default createSlice1.reducer;