import { useState } from "react"
import Card from "../components/Card"
import Filter from "../components/Filter"
import CONST from "../helpers/constants"
import useApiFetch from "../helpers/useApiFetch"

const HomePage = () => {
  const [categoryList, setCategoryList] = useState<[]>([])
  const [searchBid, setSearchBid] = useState(100000)

  const { isLoading, isError, isSuccess, data } = useApiFetch(
    ["Products", searchBid, categoryList],
    `${CONST.ALL_PRODUCTS}`,
    "post",
    { minimumPrice: searchBid, categories: categoryList },
    () => {}
  )
  return (
    <>
      <div className="w-12/12 lg:w-3/12 xl:w-2/12">
        <Filter
          title="filter"
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          minBid={0}
          maxBid={1000}
          searchBid={searchBid}
          setSearchBid={setSearchBid}
        />
      </div>
      <main className="p-12 overflow-auto w-12/12 lg:w-9/12 xl:w-10/12 ">
        {/* <div className="grid gap-8 justify-items-center lg:justify-start custom-grid"> */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center md:justify-start">
          {isLoading && (
            <div className="min-w-screen">
              <h1>Loading ....</h1>
            </div>
          )}
          {isError && <h1 className="text-red-400">{`Error .... ${data}`}</h1>}
          {isSuccess &&
            data.Items.length > 0 &&
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
          {isSuccess && data.Items.length === 0 && (
            <div className="min-w-screen">
              <h1>No Products</h1>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default HomePage
