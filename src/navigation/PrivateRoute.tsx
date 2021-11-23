import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, auth, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      !auth ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
)

export default PrivateRoute
