import { Link } from "react-router-dom"
import clsx from "clsx"

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
    // <Link to={linkTo} className={clsx(className, ``)}>
    //   {text}
    // </Link>
    <div></div>
  )
}

export default StyledLink
