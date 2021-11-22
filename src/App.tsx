import "./App.css"
import Header from "./components/Header"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { protectedRoutes, nonProtedtedRoutes } from "./navigation/AppRouter"
import useAuth from "./helpers/useAuth"

function App() {
  const { isLogged } = useAuth()

  useEffect(() => {
    console.log("App loading")
  }, [])
  return (
    <div className="flex flex-col h-screen ">
      <div>
        <Header />
      </div>
      <div className="flex flex-col mt-32 overflow-hidden lg:flex-row">
        <Routes>
          {isLogged
            ? protectedRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })
            : nonProtedtedRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })}
        </Routes>
      </div>
    </div>
  )
}

export default App
