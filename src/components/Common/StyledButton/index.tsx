import clsx from "clsx"
import { ReactElement } from "react"

interface StyledButtonProps {
  text: string | ReactElement
  children?: any
  className?: string
  disabled: boolean

  onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  className = "",
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        className,
        " filter shadow-sm py-4 px-2  rounded-md bg-gray-700 text-secondary-400",
        !disabled ? "" : "bg-gray-400"
      )}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  )
}

export default StyledButton
