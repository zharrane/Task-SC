import StyledLink from "../StyledLink"

const Header = () => {
  return (
    <header
      className={`flex bg-primary-500 text-gray-300 absolute top-0 left-0 right-0  z-50`}
    >
      <nav
        className={`flex justify-between container mx-auto p-9 items-center `}
      >
        <h1 className={`uppercase text-blue-100 `}>scopic</h1>
        <ul className="flex gap-6">
          <li>
            <StyledLink
              path="/"
              text="sign in"
              className={`capitalize tracking-wider `}
            />
          </li>
          <li>
            <StyledLink
              path="/"
              text="sign up"
              className={`border-2 border-secondary-500 uppercase font-bold tracking-wide hover:border-secondary-400 hover:text-gray-200`}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
