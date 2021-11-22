import React from "react"
import AutoBid from "../pages/AutoBid"
import Details from "../pages/Details"
import HomePage from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

interface AppRoute {
  path: string
  name: string
  component: React.FC
}

const protectedRoutes: AppRoute[] = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products/:id", name: "Product details", component: Details },
  {
    path: "/auto-bid",
    name: "Auto bidding",
    component: AutoBid,
  },

  {
    path: "*",
    name: "Not found",
    component: NotFound,
  },
]
const nonProtedtedRoutes: AppRoute[] = [
  {
    path: "/login",
    name: "sign in",
    component: Login,
  },
  {
    path: "*",
    name: "Not found",
    component: NotFound,
  },
]

export { protectedRoutes, nonProtedtedRoutes }
