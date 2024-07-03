

const Message = ({isim,telefon}) => { // burda destructuring yaptik.


  return (
    <div style={{color:"red"}}>
      <h1>Merhaba benim adim {isim}</h1>
      <h2>Telefon Numaram {telefon}</h2>
    </div>
  )
}

export default Message