import clsx from "clsx"
import { Link } from "react-router-dom"
interface StyledLinkProps {
  text: string
  className?: string
  path: string
}

const StyledLink: React.FC<StyledLinkProps> = ({
  text,
  className = "",
  path = "/",
}) => {
  return (
    <Link to={path} className={clsx(` text-lg block py-3 px-5 `, className)}>
      {text}
    </Link>
  )
}

export default StyledLink
