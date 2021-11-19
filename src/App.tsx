import "./App.css"
import Header from "./components/Header"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "./navigation/AppRouter"

function App() {
  useEffect(() => {
    console.log("App loading")
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
