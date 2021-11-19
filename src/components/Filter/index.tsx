import DropDown from "./DropDown"

interface FilterProps {
  title: string
}
const Filter: React.FC<FilterProps> = ({ title }) => {
  return (
    <div className={`bg-gray-200 p-9`}>
      <div className={`flex justify-between items-center`}>
        <h1 className={`capitalize `}>{title}</h1>
        <DropDown expanded={false} />
      </div>
    </div>
  )
}

export default Filter
