import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const name ="ayca";
  const password = "1234";

  return name==="ayca" && password === "1234" ? (<Outlet/>) : (<Navigate to="/"/>)
  
  // kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Home) "/" kal ya da başka path veriledebilir.


  
}

export default PrivateRouter