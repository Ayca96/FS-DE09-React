import React from 'react'

const Events = () => {
//! javascript alani
let baslik = "MERHABA ARKADASLAR";
let count = 0;

const arttir = () =>{
  count+=1;
  console.log(count);

  document.querySelector("span").textContent=count
}

//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor.

const butonTitle = (title) =>{
console.log(title);
document.querySelector(".btn-danger").textContent=title;

}

const baslikChange= (yeni)=>{

  baslik=yeni;
  console.log(baslik);
  document.querySelector("h1").textContent=yeni;

}


  return (
//! jsx react alani

    <div className='text-center container'>

    <h1>INFO : {baslik}</h1>
    <h2>
    COUNT :  <span className='text-danger'>{count}</span>  
    </h2>

    <button onClick={arttir} className='btn btn-primary'>ARTTIR</button> 

    <button onClick={() => butonTitle("ayca")} className='btn btn-danger m-2'>DEGISTIR</button> 

    <button onClick={ () => baslikChange ("Hallo Freunde")} className='btn btn-info m-2'>TIKLANDI</button> 
    </div>
  )
}

export default Events