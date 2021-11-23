import React from "react"
import AutoBid from "../pages/AutoBid"
import Details from "../pages/Details"
import HomePage from "../pages/Home"
import Login from "../pages/Login"

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
]
const nonProtedtedRoutes: AppRoute[] = [
  {
    path: "/login",
    name: "sign in",
    component: Login,
  },
]

export { protectedRoutes, nonProtedtedRoutes }
