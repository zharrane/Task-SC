import { useContext } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { AuthContext } from "../../helpers/UserContext"
import setAuthToken from "../../helpers/setAuthToken"
import axios from "axios"
import CONST from "../../helpers/constants"
import clsx from "clsx"

const getDatas = async () => {
  let local: any = localStorage.getItem("user")
  let parsedLocal = JSON.parse(local)
  if (local) setAuthToken(parsedLocal.accessToken)

  const result = await axios.get(`${CONST.BASE_URL}${CONST.USER}`)

  return result.data
}
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext)
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["user-data-settings", isAuthenticated],
    getDatas
  )

  return (
    <header
      className={`flex bg-primary-500 text-gray-300 absolute px-9 top-0 left-0 right-0  z-50`}
    >
      <nav
        className={`flex justify-between container mx-auto py-9 items-center `}
      >
        <Link to="/">
          <h1 className={`uppercase text-white`}>AUCTION</h1>
        </Link>
        {isError && (
          <Link to="/login">
            <p className={`uppercase text-white`}>AUCTION</p>
          </Link>
        )}
        {isSuccess && (
          <div
            className={clsx(
              isLoading ? "animate-pulse" : "",
              "flex gap-6 right-1"
            )}
          >
            <div>
              <div>
                <h6>{data.username}</h6>
                <p className="text-center text-yellow-200">${data.balance}</p>
              </div>
            </div>
            <img
              alt={data}
              src={data.picture}
              className={clsx("rounded-full w-14 h-14 gravatar")}
            />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
