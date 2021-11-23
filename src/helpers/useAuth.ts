import { useEffect, useState } from "react"

const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean>()
  useEffect(() => {
    const item: any = localStorage.getItem("user")
    console.log(item)
    const userString = JSON.parse(item)

    if (!userString) {
      setIsLogged(false)
    } else {
      setIsLogged(true)
    }
  }, [])
  return { isLogged, setIsLogged }
}

export default useAuth
