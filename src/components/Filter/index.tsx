import clsx from "clsx"
import { useEffect, useState } from "react"
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
        id: "3",
        name: "Art",
      },
      {
        id: "3",
        name: "books",
      },
      {
        id: "3",
        name: "craft",
      },
    ])
  }, [])
  const handleOnChange = (e: any) => {
    console.log(e.target.value)
    console.log(e)
    setRangeValue(e.target.value)
  }

  return (
    <div className={clsx(className, `bg-gray-200 p-9 `)}>
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
          `container mt-8  lg:h-full lg:block  `,
          expandFilter ? " " : "hidden "
        )}
      >
        <div
          className={`flex justify-between container mx-auto overflow-hidden lg:flex-col lg:gap-8  lg:justify-start`}
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
            <div className="flex gap-2 mr-5 items-end">
              <span>{minRangeValue}</span>
              <div className="flex flex-col">
                <input
                  type="range"
                  id="price-range"
                  name="Price"
                  min={minRangeValue}
                  max={maxRangeValue}
                  value={rangeValue}
                  step="1"
                  className={`rounded-lg  appearance-none bg-secondary-500 h-4 w-128`}
                  onChange={handleOnChange}
                />
              </div>
              <span className="w-8">{rangeValue}$</span>
            </div>
          </div>
        </div>
        <div className="   mt-8">
          <div>
            <span>Category</span>
            <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-1 mt-4">
              {categories.map((category) => {
                return (
                  <div key={category.id} className="flex gap-4 ">
                    <input
                      type="checkbox"
                      id={category.name}
                      value={category.name}
                    />
                    <label htmlFor={category.name} className={"capitalize"}>
                      {category.name}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
