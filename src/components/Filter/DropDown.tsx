import clsx from "clsx"

interface DropDownProps {
  className?: string
  expanded: boolean
  handleExpand: (x: boolean) => void
}
const DropDown: React.FC<DropDownProps> = ({
  className = "",
  expanded = false,
  handleExpand,
}) => {
  return (
    <div>
      <button
        className={clsx(` w-10 h-10 p-2`, className)}
        onClick={() => handleExpand(!expanded)}
      >
        <span
          className={clsx(
            " block absolute border-1 border-primary h-0.5 w-6 bg-primary-500 transform transition duration-500 ease-in-out",
            expanded
              ? "rotate-45"
              : " rotate-45 -translate-y-full  -translate-x-1/3"
          )}
        ></span>

        <span
          className={clsx(
            "block absolute border-1 border-primary-500 h-0.5 w-6  bg-primary-500 transform  transition duration-500 ease-in-out",
            expanded
              ? "-rotate-45"
              : " -rotate-45 -translate-y-full translate-x-1/3"
          )}
        ></span>
      </button>
    </div>
  )
}

export default DropDown
