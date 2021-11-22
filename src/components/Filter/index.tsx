import clsx from "clsx"
import { useEffect, useState } from "react"
import CheckBox from "../CheckBox"
import DropDown from "./DropDown"

interface FilterProps {
  title: string
  className?: string
}
interface CategoryType {
  id: string
  name: string
}
const Filter: React.FC<FilterProps> = ({ title, className }) => {
  const [expandFilter, setExpandFiler] = useState<boolean>(false)
  const [rangeValue, setRangeValue] = useState<number>(10)
  const [minRangeValue, setMinValue] = useState<number>(0)
  const [maxRangeValue, setMaxRangeValue] = useState<number>(0)
  const [categories, setCategory] = useState<CategoryType[]>([])

  useEffect(() => {
    setMinValue(10)
    setMaxRangeValue(100)
    setCategory([
      {
        id: "1",
        name: "Electronics",
      },
      {
        id: "2",
        name: "Toys",
      },
      {
        id: "3",
        name: "Tools",
      },
      {
        id: "4",
        name: "Art",
      },
      {
        id: "5",
        name: "books",
      },
      {
        id: "6",
        name: "craft",
      },
    ])
  }, [])
  const handleOnChange = (e: any) => {
    setRangeValue(e.target.value)
  }

  return (
    <div
      className={clsx(
        className,
        `bg-gray-50 py-9 px-8  overflow-hidden w-full h-full shadow-lg lg:px-5  `
      )}
    >
      <div className="container mx-auto ">
        <div>
          <div className={`flex justify-between items-center pr-10`}>
            <h1 className={`capitalize text-gray-700`}>{title}</h1>
            <DropDown
              expanded={expandFilter}
              handleExpand={setExpandFiler}
              className="lg:hidden"
            />
          </div>

          <div
            className={clsx(
              `container pt-8 lg:h-full lg:block overflow-hidden  `,
              expandFilter ? " " : "hidden "
            )}
          >
            <div
              className={`flex justify-between   container mx-auto overflow-hidden lg:flex-col lg:gap-16  lg:justify-start`}
            >
              <div className={`  flex flex-col  gap-4 `}>
                <span>Arrange</span>
                <select className={`bg-secondary-500 text-gray-600`}>
                  <option>Popular</option>
                  <option>Latest</option>
                  <option>Hot bids</option>
                </select>
              </div>
              <div className={`flex flex-col gap-4 `}>
                <span>Minimum Bid</span>
                <div className="flex items-center gap-2 ">
                  <span>{minRangeValue}</span>
                  <div className="flex flex-col h-full">
                    <input
                      type="range"
                      id="price-range"
                      name="Price"
                      min={minRangeValue}
                      max={maxRangeValue}
                      value={rangeValue}
                      step="1"
                      className={`rounded-lg  appearance-none bg-secondary-500 h-4 w-128 cursor-pointer`}
                      onChange={handleOnChange}
                    />
                  </div>
                  <span className="w-16 lg:w-full">{rangeValue}$</span>
                </div>
              </div>
            </div>
            <div className="mt-16 ">
              <div>
                <span>Category</span>
                <div className="grid grid-cols-3 gap-2 px-2 mt-4 md:grid-cols-4 lg:grid-cols-1">
                  {categories.map((category) => {
                    return <CheckBox name={category.name} key={category.id} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
