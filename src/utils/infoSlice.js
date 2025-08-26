import { createSlice } from "@reduxjs/toolkit";

const infoSlice =createSlice({
    name:'info',
    initialState:{
        info:[],
        dataBase:[]
    }
    ,reducers:{
        addInfo:(state,action)=>{
            state.info.push(action.payload);
        }
        ,addDataInfo:(state,action)=>{
            state.dataBase.push(action.payload);
        }
        ,editDataInfo:(state,action)=>{
            const {id,name,age,email} = action.payload;
            const existingItem = state.dataBase.find(item => item.id === id);
            if(existingItem){
                existingItem.name=name;
                existingItem.age=age;
                existingItem.email=email;
            }
        }
        ,deleteDataFromInfo:(state,action)=>{
            state.dataBase= state.dataBase.filter(item => action.payload != item.id)
        }
    }
})
export const {addInfo  ,addDataInfo,editDataInfo,deleteDataFromInfo} = infoSlice.actions
export  default infoSlice.reducer