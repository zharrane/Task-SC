import StyledLink from "../StyledLink"

const Header = () => {
  return (
    <header className={`flex bg-gray-900 text-gray-300`}>
      <nav className={`flex justify-between container mx-auto p-9`}>
        <h1>scopic</h1>
        <StyledLink path="/" text="sign in" />
      </nav>
    </header>
  )
}

export default Header
