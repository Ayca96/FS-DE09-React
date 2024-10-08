import React, { useState } from "react";
import uuid from "react-uuid";

const HastaEkle = ({ hastalar, setHastalar,doktorlar }) => {
  const [hastaName, setHastaName] = useState("");
  const [hastaTarih, setTarih] = useState("");
console.log(doktorlar);
  const handleSubmitt = (e) => {
    e.preventDefault(); // direkt submit olayini yapmamasi, önce alttaki kodlara bakmasi icin yapiyoruz.

    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        text: hastaName,
        day: hastaTarih,
        isDone: false,
        myDoctor: doktorlar[0].doctorName,
      },
    ]);

    setHastaName("");
    setTarih("");
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
  };

  // console.log(hastalar);// setHastalar a gidildiğinde hemen altta console.log varsa çalışıverir ve biz useState nin yaptığı işi göremeyiz. bunun için log bu submit fonksiyonunun dışında olmalı.

  return (
    <div>
      <form onSubmit={handleSubmitt}>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setHastaName(e.target.value)}
            value={hastaName}
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e) => setTarih(e.target.value)}
            value={hastaTarih}
          />
        </div>

        <button type="submit" className="kayit btn-submit">
          <span style={{ color: "#6a0707" }}>{doktorlar[0].doctorName}</span> icin kayit
          olustur.
        </button>
      </form>
    </div>
  );
};

export default HastaEkle;
