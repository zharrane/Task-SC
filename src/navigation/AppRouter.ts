import AutoBid from "../pages/AutoBid"
import Details from "../pages/Details"
import HomePage from "../pages/Home"
import NotFound from "../pages/NotFound"

interface AppRoute {
  path: string
  name: string
  component: any
}

const routes: AppRoute[] = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/details/:id", name: "Product details", component: Details },
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

export default routes
