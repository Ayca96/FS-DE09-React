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


//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------


export default Events;

