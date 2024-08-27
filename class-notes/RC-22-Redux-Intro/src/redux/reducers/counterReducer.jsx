import React from 'react'


//!action sayfasını buraya aldık

export const arttir=()=>({type:"ARTTIR", payload1:"ARTTIRILDI"})

export const azalt=() =>({type:"AZALT", payload1:"AZALTILDI"})
export const sifirla=() =>({type:"SIFIRLA", payload1:"SIFIRLANDI"})




// const counterReducer = (state={sayac:0,text1:""},action1) => {
  // console.log(action1);
  
const counterReducer = (state={sayac:0,text1:""},{type,payload1}) => {
  

switch (type) {
  case "ARTTIR":
    return { sayac: state.sayac + 1, text1: payload1 };
  case "AZALT":
    if (state.sayac > 0) {
      return { sayac: state.sayac - 1, text1: payload1 };
    }
    return state
  case "SIFIRLA":
    return { sayac: 0, text1: payload1 };

  default:
   return state
}





}

export default counterReducer


// ben buraya ekstra if blogu ekledim. 