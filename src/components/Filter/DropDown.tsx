interface DropDownProps {
  className?: string
  expanded: boolean
}
const DropDown: React.FC<DropDownProps> = ({
  className = "",
  expanded = false,
}) => {
  return (
    <div>
      <button className={` w-8 p-2 `}>
        <span
          aria-hidden="true"
          className={`  h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
            expanded ? "rotate-45    " : " rotate-45 "
          }`}
        ></span>

        <span
          aria-hidden="true"
          className={`absolute  h-0.5 w-6  bg-current transform  transition duration-500 ease-in-out ${
            expanded ? "-rotate-45   " : " -rotate-45 "
          }`}
        ></span>
      </button>
    </div>
  )
}

export default DropDown
