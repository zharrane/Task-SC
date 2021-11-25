import { Route, Redirect } from "react-router-dom"
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = localStorage.getItem("user")

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/login" />
        )
      }
    />
  )
}
export default PrivateRoute
