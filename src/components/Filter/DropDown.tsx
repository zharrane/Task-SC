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
    <button
      className={clsx(
        ` w-12 h-12 px-3.5 py-4 rounded-full filter  bg-secondary-500 transform duration-500`,
        className,
        expanded ? "scale-110 shadow-2xl " : " shadow-lg "
      )}
      onClick={() => handleExpand(!expanded)}
    >
      <span
        className={clsx(
          " block absolute border-1 border-primary h-0.5 w-5 bg-primary-500 transform transition duration-500 ease-in-out",
          expanded
            ? "rotate-45"
            : " rotate-45 -translate-y-full  -translate-x-1/3 w-4"
        )}
      ></span>

      <span
        className={clsx(
          "block absolute border-1 border-primary-500 h-0.5 w-5  bg-primary-500 transform  transition duration-500 ease-in-out",
          expanded
            ? "-rotate-45"
            : " -rotate-45 -translate-y-full translate-x-1/3 w-4"
        )}
      ></span>
    </button>
  )
}

export default DropDown
