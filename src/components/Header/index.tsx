import { Link } from "react-router-dom"
import StyledLink from "../StyledLink"

const Header = () => {
  return (
    <header
      className={`flex bg-primary-500 text-gray-300 absolute px-9 top-0 left-0 right-0  z-50`}
    >
      <nav
        className={`flex justify-between container mx-auto py-9 items-center `}
      >
        <Link to="/">
          <h1 className={`uppercase text-white`}>scopic</h1>
        </Link>
        <ul className="flex gap-6">
          <li>
            <StyledLink
              path="/"
              text="sign in"
              className={`capitalize tracking-wider`}
            />
          </li>
          <li>
            <StyledLink
              path="/"
              text="sign up"
              className={`border-2  border-secondary-500 uppercase font-bold tracking-wide hover:border-secondary-400 hover:bg-secondary-400 duration-100 hover:text-blue-800`}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
