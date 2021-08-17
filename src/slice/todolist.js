import { createSlice } from "@reduxjs/toolkit";

const initialState={

    value:[]
    

}


// Configure slice

const todoSlice=createSlice({
  name:"todos",
  initialState,
  reducers:{
    // action
    addItem:(state,action)=>{
   


      state.value.push(action.payload);


    },
    editItem:(state)=>{


    },

    removeItem:(state,action)=>{
    

      state.value=state.value.filter(ele=>ele.id!==action.payload);



    }





  }


});





export const {addItem,removeItem,editItem}=todoSlice.actions;  /// hitesh --->


export default todoSlice.reducer;