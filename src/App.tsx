import "./App.css"
import Header from "./components/Header"
import { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./navigation/PrivateRoute"
import useAuth from "./helpers/useAuth"
import Login from "./pages/Login"
import Details from "./pages/Details"
import AutoBid from "./pages/AutoBid"
import HomePage from "./pages/Home"

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
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>

        <Switch>
          <PrivateRoute
            auth={isLogged}
            exact
            path="/products/:id"
            component={Details}
          />
          <PrivateRoute
            auth={isLogged}
            exact
            path="/settings"
            component={AutoBid}
          />
          <PrivateRoute
            auth={isLogged}
            Route
            exact
            path="/"
            component={HomePage}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
