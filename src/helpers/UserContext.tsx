import { useState, createContext } from "react"

// interface AuthContextInterface {
//   isAuthenticated: boolean
//   setIsAuthenticated: any
// }

export const AuthContext = createContext<any | null>(null)

const UserContext = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserContext
