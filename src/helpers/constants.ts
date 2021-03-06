// const BASE_URL = "https://task-sc-back-end.herokuapp.com/api"
const BASE_URL = "http://194.62.1.252:5000/api"
const SIGN_IN = "/auth/signin"
const USER = "/user"
const ALL_PRODUCTS = "/products"

const ALL_CATEGORIES = "/products/categories/"
const SUBSCRIBE = "products/subscribe/"
const UNSUBSCRIBE = "products/unsubscribe/"
const HEADERS = {
  headers: { "Content-Type": "application/json" },
}

const CONST = {
  BASE_URL,
  SIGN_IN,
  ALL_PRODUCTS,
  ALL_CATEGORIES,
  SUBSCRIBE,
  UNSUBSCRIBE,
  HEADERS,
  USER,
}
export default CONST
