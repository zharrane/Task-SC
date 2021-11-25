import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Card from "../components/Card"
import Filter from "../components/Filter"
import CONST from "../helpers/constants"

const fetchPorducts = async (key: any) => {
  const searchBid = key.queryKey[1]
  const categoryList = key.queryKey[2]
  const data = JSON.stringify({
    minimumPrice: searchBid,
    categories: categoryList,
  })
  console.log(data)
  const result = await axios.get(`${CONST.BASE_URL}${CONST.ALL_PRODUCTS}`, {
    data,
  })
  return result.data
}

const HomePage = () => {
  const [categoryList, setCategoryList] = useState<[]>([])
  const [searchBid, setSearchBid] = useState(10)
  const [smallBid, setSmallBid] = useState(0)
  const [maxBid, setMaxBid] = useState(0)
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["Products", searchBid, categoryList],
    fetchPorducts
  )

  useEffect(() => {
    if (isSuccess) {
      let availablePrice = data.Items.map((item: any) => item.productPrice)
      availablePrice.sort()
      setMaxBid(availablePrice[0])
      setSmallBid(availablePrice.pop())
    }
  })
  return (
    <>
      <div className="w-12/12 lg:w-3/12 xl:w-2/12">
        <Filter
          title="filter"
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          minBid={smallBid}
          maxBid={maxBid}
          searchBid={searchBid}
          setSearchBid={setSearchBid}
        />
      </div>
      <main className="p-12 overflow-auto w-12/12 lg:w-9/12 xl:w-10/12 ">
        {/* <div className="grid gap-8 justify-items-center lg:justify-start custom-grid"> */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center md:justify-start">
          {isLoading && <h1>Loading ....</h1>}
          {isError && <h1>{`Error .... ${data}`}</h1>}
          {isSuccess &&
            data.Items.map((item: any) => {
              return (
                <Card
                  key={item._id}
                  productId={item._id}
                  pathTo={"products"}
                  title={item.title}
                  description={item.description}
                  imageUrl={
                    item.pictures[0].url
                      ? item.pictures[0].url
                      : " /assets/images/no_image.jpg"
                  }
                />
              )
            })}
        </div>
      </main>
    </>
  )
}

export default HomePage
