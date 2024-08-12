import React, { createContext, useEffect, useState } from 'react'

//! Create Context

export const KullaniciContext= createContext();


const KullaniciProvider = ({children}) => {

  const [users, setUsers]= useState([]);

  useEffect(()=>{

    fetch("https://api.github.com/users").then((res)=>res.json()).then((data)=>setUsers(data));

  },[])

  // useEffect(()=>{

  //  const res= axios.get("https://api.github.com/users");
  //  const data = setUsers(res.data)
  // },[])  axios yüklenmedi örnek olsun diye yazdik.

  const changeWidth = (id, size)=>{

    setUsers(users.map((a)=>a.id===id ? {...a, width:size} : a

    ))

  }


  
console.log(users);


  return (

    <KullaniciContext.Provider  value={{users, changeWidth}}>

    {children}

    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider