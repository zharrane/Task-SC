import axios from "axios"
import clsx from "clsx"
import { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import CONST from "../helpers/constants"
import { AuthContext } from "../helpers/UserContext"

const login = async (username: string, password: string) => {
  const postData = {
    username,
    password,
  }
  const url = `${CONST.BASE_URL}${CONST.SIGN_IN}`
  try {
    const { data } = await axios.post(url, postData, CONST.HEADERS)
    return { data, isAuthError: false }
  } catch (error) {
    return { error, isAuthError: true }
  }
}

const Login = () => {
  const history = useHistory()
  const [password, setPassword] = useState("")
  const [username, setUserName] = useState("")
  const [unvalidUser, setUnvalidUser] = useState(false)
  const [unvalidPassword, setUnvalidPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [onError, setonError] = useState(false)
  const disabled = password === "" || username === "" ? true : false
  const pattern = {
    username: /^\w{5,12}$/, // accept only letters and numbers 5 to 12 chars
    password: /^[\w@-]{6,20}$/, // write your RegEx
  }

  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext)
  useEffect(() => {
    const app = localStorage.getItem("user")
    if (app || isAuthenticated) history.push("/")
  }, [history, isAuthenticated])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const res = await login(username, password)
    if (res.isAuthError) {
      setonError(true)
      setLoading(false)
    } else {
      setLoading(false)
      setonError(false)
      localStorage.setItem("user", JSON.stringify(res.data))
      setIsAuthenticated({ auth: true, uid: res.data.uid })
      history.push("/")
    }
  }
  return (
    <div className="justify-center w-screen min-h-screen bg-gray-700 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 to-blue-500">
      <div className="w-full max-w-md p-6 mx-auto space-y-8 bg-gray-100 rounded-lg shadow-2xl mt-14 md:mt-36">
        <h1 className="text-6xl text-center capitalize text-primary-200">
          Log in
        </h1>
        <form className="flex flex-col w-full gap-2 text-lg ">
          <label htmlFor="username" className="capitalize ">
            username
          </label>
          <input
            type="text"
            id="username"
            required
            placeholder="username"
            className="p-3 border-2 rounded-lg"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            onBlur={(e) =>
              setUnvalidUser(!pattern.username.test(e.target.value))
            }
          />
          {unvalidUser && (
            <span className="text-red-600">Invalid Username</span>
          )}
          <label htmlFor="password" className="mt-5 capitalize">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="p-3 border-2 rounded-lg"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            onBlur={(e) =>
              setUnvalidPassword(!pattern.password.test(e.target.value))
            }
          />
          {unvalidPassword && (
            <span className="text-red-600">Invalid Password</span>
          )}

          <span className="text-right">
            forget password ?{" "}
            <Link to="#" className="underline text-primary-200">
              click here
            </Link>
          </span>

          <button
            value=""
            placeholder="password"
            disabled={disabled}
            onClick={handleSubmit}
            className={clsx(
              " relative p-3 mt-5 text-lg text-white capitalize border-2 rounded-lg bg-primary-200 cursor-pointer overflow-hidden",
              disabled ? "bg-secondary-600" : ""
            )}
          >
            <span
              className={clsx(
                loading &&
                  "absolute inline-flex w-full h-full bg-black rounded-full opacity-75 animate-ping"
              )}
            ></span>

            <span className="px-5">Log in</span>
          </button>
          <span
            className={clsx(
              onError ? "text-red-500 text-center  inline-block" : "hidden"
            )}
          >
            The username or password is incorrect try using zharrane/zaki0123 :)
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
