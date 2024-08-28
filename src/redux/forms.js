import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:'forms',
    initialState:{
        forms:[]
    },
    reducers:{
        addForm:(state, action)=>{
            const item = state.forms.find((item)=>item.id === action.payload.id);
            if(item){
                item.fields = action.payload.fields;
            }else{
                state.forms.push(action.payload)
            }
        }
    }
})


export const {addForm} = formSlice.actions;
export default formSlice.reducer;