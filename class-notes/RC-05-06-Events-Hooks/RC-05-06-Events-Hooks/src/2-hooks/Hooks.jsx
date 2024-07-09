//* ==================== HOOKS ===============================
//! Hook’lar fonksiyonel component’ler icerisinde state’leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler’in
//! kullanimini cok azaltmistir.
//? React’ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from “react”;
//* 2. Hook’lar ust seviyede tanimlanmalidir. Yani Hook’lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook’lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook’lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react";
import Events from "../1-events-hooksintro/Events";

const Hooks = () => {
  const [sayac, setSayac] = useState(0);
  const [kisi, setKisi] = useState({
    isim: "ayca",
    meslek: "developer",
    yas: 27,
    renk: "red",
  });

  const [toggle, setToggle] = useState(true);

  const arttir = () => {
    //sayac = sayac+1
    // setSayac(5); // sayac = 5
    setSayac(sayac + 1); // burda da tikladikca 1 artiyor.
  };

  //! 1.Yol
  // const changeAll = () => {

  //   if (kisi.isim === "ayca") {
  //     setKisi({
  //       isim: "ayse",
  //       meslek: "fullstack",
  //       yas: 33,
  //       renk: "green",
  //     });
  //   } else {
  //     setKisi({
  //       isim: "ayca",
  //       meslek: "developer",
  //       yas: 27,
  //       renk: "red",
  //     });
  //   }
  // };

  //!2.Yol

  const changeAll = () => {

    setToggle(!toggle)

    if (toggle) {
      setKisi({
        isim: "ayca",
        meslek: "developer",
        yas: 27,
        renk: "red",
      });
    } else {
      setKisi({
        isim: "ayse",
        meslek: "fullstack",
        yas: 33,
        renk: "green",
      });
    }
  };

  const changeName = () => {
    setKisi({
      ...kisi,
      isim: "osman",
      renk: "magenta",
    });
  };

  return (
    <div className="container text-center">
      <h1>*********************</h1>
      <h1>USE STATE</h1>
      <h2 className="text-danger">COUNT:{sayac}</h2>
      <button onClick={arttir} className="btn-primary">
        ARTTIR
      </button>
      <h1 className="mt-5">USESTATE OBJECT KULLANIMI</h1>
      <div style={{ color: kisi.renk }}>
        <h1>{kisi.isim}</h1>
        <h2>{kisi.meslek}</h2>
        <h3>{kisi.yas}</h3>
      </div>
      <button onClick={changeAll} className="btn btn-primary m-2">
        CHANGEall
      </button>
      <button onClick={changeName} className="btn btn-info">
        CHANGEname
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => setKisi({ ...kisi, yas: 30 })}
      >
        CHANGEyas
      </button>
      <button onClick={() => setToggle(!toggle)} className="btn btn-secondary">
        SHOW
      </button>

      {
        toggle && <Events /> // short circuit yaptik.
      }

      {/* {toggle? <Events/>  : ""}  Burasi Ternary yöntemi,Ternary yerine daha kisa oldu.*/}
    </div>
  );
};

export default Hooks;
