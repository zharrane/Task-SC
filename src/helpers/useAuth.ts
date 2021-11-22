import { useEffect, useState } from "react"

const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  useEffect(() => {
    const userString = localStorage.getItem("user")

    if (!userString) {
      setIsLogged(true)
    } else {
      setIsLogged(true)
    }
  }, [])
  return { isLogged }
}

export default useAuth
