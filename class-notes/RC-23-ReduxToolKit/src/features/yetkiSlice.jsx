import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice=createSlice({
name:"yetkiSlice",

initialState:{
  email:"",
  password:""
},
reducers:{
olusturKullanici:(state,action)=>{


state.email=action.payload.email
state.password=action.payload.pasword


},

kullaniciSil:(state)=>{

state.email=""
state.password=""


}

}

})

export const {olusturKullanici,kullaniciSil}=yetkiSlice.actions

export default yetkiSlice.reducer;