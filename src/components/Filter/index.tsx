import axios from "axios"
import clsx from "clsx"
import { useState } from "react"
import { useQuery } from "react-query"
import CONST from "../../helpers/constants"
import CheckBox from "../Common/CheckBox"
import DropDown from "./DropDown"

interface FilterProps {
  title: string
  className?: string
  categoryList: any
  minBid: number
  maxBid: number
  searchBid: number
  setSearchBid: any
  setCategoryList: any
}

const fetchCategories = async () => {
  try {
    const result = await axios.get(`${CONST.BASE_URL}${CONST.ALL_CATEGORIES}`)

    return result.data
  } catch (error: any) {
    error.response.status === 401 && localStorage.clear()
  }
}
const Filter: React.FC<FilterProps> = ({
  title,
  className,
  categoryList,
  minBid,
  maxBid,
  searchBid,
  setSearchBid,
  setCategoryList,
}) => {
  const [expandFilter, setExpandFiler] = useState<boolean>(false)

  const { isLoading, isError, isSuccess, data } = useQuery(
    "category",
    fetchCategories
  )
  const handleOnChange = (e: any) => {
    setSearchBid(e.target.value)
  }
  const onCheckBoxChange = (e: any) => {
    if (e.target.checked) {
      setCategoryList([...categoryList, e.target.value])
    } else {
      // remove from list
      setCategoryList(
        categoryList.filter((category: any) => category !== e.target.value)
      )
    }
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
                <select className={`bg-secondary-500 text-secondary-400`}>
                  <option>Popular</option>
                  <option>Latest</option>
                  <option>Hot bids</option>
                </select>
              </div>
              <div className={`flex flex-col gap-4 `}>
                <span>Available Budget</span>
                <div className="flex items-center gap-2 ">
                  <span>{minBid}</span>
                  <div className="flex flex-col h-full">
                    <input
                      type="range"
                      id="price-range"
                      name="Price"
                      min={minBid}
                      max={maxBid}
                      value={searchBid}
                      step="1"
                      className={`rounded-lg  appearance-none bg-secondary-500 h-4 w-128 cursor-pointer`}
                      onChange={handleOnChange}
                    />
                  </div>
                  <span className="w-16 lg:w-full">{maxBid}$</span>
                </div>
              </div>
            </div>
            <div className="mt-16 ">
              <div>
                <span>Category</span>
                <div className="grid grid-cols-3 gap-2 px-2 mt-4 md:grid-cols-4 lg:grid-cols-1">
                  {isLoading && <p>...</p>}
                  {isError && <p> Categories not found</p>}
                  {isSuccess &&
                    data.Items.map((category: any) => {
                      return (
                        <CheckBox
                          defaultChecked={false}
                          name={category.categoryTitle}
                          key={category._id}
                          _id={category._id}
                          onChange={onCheckBoxChange}
                        />
                      )
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
