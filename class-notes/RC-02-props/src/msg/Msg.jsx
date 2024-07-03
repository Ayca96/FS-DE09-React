import React from 'react'


//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.



// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.



import resim from "../assets2/tree.webp"
import "./Msg.css"


const Msg = () => {

  //js alani
  //! internal css
  //! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.

  const styleA = {
    color:"green", 
    fontFamily:"Tahoma",
    border:"1px solid red",

  }

  return (
    //jsx react alani
    <div>

      <h2 style = {styleA}>burasi Msg alani </h2>

       {/* Inline CSS (Cift suslu ile key-value yapisi ile stil(2. süslü object) verilebilir) */}

      <p style ={{color:"red", fontSize:"30px"}}> hosgeldin react</p>

      <img src={resim} alt="" />
      <img className="msg-img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="" />
      {/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}
      <img src="./assets/resim.jpg" alt="" />

    </div>
  )
}

export default Msg