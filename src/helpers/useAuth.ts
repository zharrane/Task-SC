import { useEffect, useState } from "react"

const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean>()
  const item = localStorage.getItem("user")
  useEffect(() => {
    console.log(item)

    if (!item) {
      setIsLogged(false)
    } else {
      setIsLogged(true)
    }
  }, [item])
  return { isLogged }
}

export default useAuth
