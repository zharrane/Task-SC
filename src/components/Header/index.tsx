import { useContext, useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { AuthContext } from "../../helpers/UserContext"
import setAuthToken from "../../helpers/setAuthToken"
import axios from "axios"
import CONST from "../../helpers/constants"
import clsx from "clsx"
import DropDownMenu from "../Common/DropDownMenu"
const getDatas = async () => {
  try {
    let local: any = localStorage.getItem("user")
    let parsedLocal = JSON.parse(local)
    if (local) setAuthToken(parsedLocal.accessToken)

    const result = await axios.get(`${CONST.BASE_URL}${CONST.USER}`)

    return result.data
  } catch (error: any) {
    error.response.status === 401 && localStorage.clear()
  }
}
const Header = () => {
  const [isAuthenticated] = useContext(AuthContext)
  const [alert, setAlert] = useState(false)
  const [picture, setPicture] = useState("")
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["user-data-settings", isAuthenticated],
    getDatas,
    {
      onSuccess: async (data) => {
        if (data) {
          setPicture(data.picture)
          try {
            const result = await axios({
              method: "get",
              url: `${CONST.BASE_URL}/users/settings/get`,
            })
            if (result) {
              let res = result.data
              let perc = (res.amountSpent * 100) / res.autoBidAmount
              if (perc >= res.notification) {
                setAlert(true)
              } else {
                setAlert(false)
              }
            }
          } catch (error: any) {
            error.response.status === 401 && localStorage.clear()
          }
        }
      },
    }
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
        {data && isSuccess && (
          <div
            className={clsx(
              isLoading ? "animate-pulse" : "",
              "flex gap-6 right-1 items-center"
            )}
          >
            <div className="relative items-center">
              <div>
                <div className={`relative py-1 px-2`}>
                  {alert && (
                    <Link to="/settings">
                      <div
                        className={` absolute w-4 h-4 bg-red-500 -mt-2 right-0 rounded-full items-center z-50 `}
                      >
                        <img
                          className="text-center text-red-50"
                          src="/assets/icons/bell.svg"
                          alt=""
                        />
                      </div>
                    </Link>
                  )}
                  <DropDownMenu user={data.username} balance={data.balance} />
                  {/* <h6>{data.username}</h6> */}
                </div>
                {/* <p className="text-center text-yellow-200">${data.balance}</p> */}
              </div>
              <div className={`absolute hidden hover:block w-full`}>
                <Link to="/settings">
                  <p className={`uppercase text-white `}>Settings</p>
                </Link>
              </div>
            </div>
            <img
              alt={data}
              src={picture}
              className={clsx(
                "rounded-full  w-12 h-12 gravatar filter shadow-2xl"
              )}
            />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
