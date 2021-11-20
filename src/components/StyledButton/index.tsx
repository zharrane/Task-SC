import clsx from "clsx"

interface StyledButtonProps {
  text: string
  className?: string
  // onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  className = "",
}) => {
  return (
    <button
      className={clsx(
        className,
        " filter shadow-sm py-4 px-2  rounded-md bg-gray-700 text-secondary-400"
      )}
    >
      {text}
    </button>
  )
}

export default StyledButton
