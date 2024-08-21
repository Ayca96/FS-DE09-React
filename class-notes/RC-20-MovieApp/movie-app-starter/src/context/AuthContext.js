import React, { createContext } from 'react'

//! Context alani actik.

export const AuthContextt = createContext()





const AuthContext = ({children}) => {
  return (
    <AuthContextt.Provider value={{}}>
      {children}
    </AuthContextt.Provider>
  )
}

export default AuthContext