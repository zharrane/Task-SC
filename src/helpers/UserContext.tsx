import { useState, createContext } from "react"

export const AuthContext = createContext<any | null>(null)

const UserContext = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState()

  return (
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserContext
