import clsx from "clsx"
import { ReactElement } from "react"

interface StyledButtonProps {
  text: string | ReactElement
  children?: any
  className?: string
  // onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  className = "",
  children,
}) => {
  return (
    <button
      className={clsx(
        className,
        " filter shadow-sm py-4 px-2  rounded-md bg-gray-700 text-secondary-400"
      )}
    >
      {text}
      {children}
    </button>
  )
}

export default StyledButton
