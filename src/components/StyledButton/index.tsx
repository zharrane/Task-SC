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
    <button className=" filter shadow-sm py-4 px-6 xl:px-8 rounded-md bg-gray-700 text-secondary-400">
      {text}
    </button>
  )
}

export default StyledButton
