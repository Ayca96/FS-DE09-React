
import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  const{name,password}=useContext(RecipeContext)

  return name==="ayca" && password==="1234" ?  <Outlet/>  : <Navigate to="/"/>
    
  
}

export default PrivateRouter;