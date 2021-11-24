import "./App.css"
import Header from "./components/Header"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./navigation/PrivateRoute"
import Login from "./pages/Login"
import Details from "./pages/Details"
import AutoBid from "./pages/AutoBid"
import HomePage from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="flex flex-col h-screen ">
      <div>
        <Header />
      </div>
      <div className="flex flex-col mt-32 overflow-hidden lg:flex-row">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/products/:id" component={Details} />
          <PrivateRoute exact path="/settings" component={AutoBid} />
          <PrivateRoute Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

export default App
