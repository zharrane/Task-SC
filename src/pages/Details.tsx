import { Link, useParams } from "react-router-dom"
import CheckBox from "../components/Common/CheckBox"
import ImageGal from "../components/ImageGallery"
import StyledButton from "../components/Common/StyledButton"
import axios from "axios"
import CONST from "../helpers/constants"
import { useQuery } from "react-query"

const fetchSingleProduct = async (key: any) => {
  const id = key.queryKey[1]

  const result = await axios.get(`${CONST.BASE_URL}${CONST.ALL_PRODUCTS}/${id}`)
  console.log(result.data)
  return result.data
}
const Details = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["single-product", id],
    fetchSingleProduct
  )
  return (
    <main className="flex flex-col py-10 overflow-x-hidden overflow-y-auto md:flex-row ">
      {isLoading && <h1>Loading ....</h1>}
      {isError && <h1>{`Error ... ${data}`}</h1>}
      {isSuccess && (
        <>
          <div className="md:w-7/12 ">
            <ImageGal images={data.pictures} />
          </div>

          <section className="container flex flex-col gap-6 px-10 mx-auto md:w-5/12">
            <div className="flex flex-col gap-6">
              <h1 className="">{data.title} </h1>
              <p> minimum bid $ {data.bidStartPrice}</p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden ">
              <h1>details</h1>
              <div className="overflow-y-auto h-60 ">
                <p className="leading-relaxed">{data.description}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h3>last bid made</h3>
                <h2 className="text-center">$ {data.productPrice}</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h3>available until</h3>
                <h2 className="text-center"> {"00:00:00"}</h2>
              </div>
            </div>

            <StyledButton text="Place a bid" />

            <div className="flex items-center gap-2">
              <CheckBox
                name="activate the"
                _id={"1"}
                onChange={() => {
                  return
                }}
              />
              <Link to="/settings">
                <p className="text-gray-900 underline hover:text-black ">
                  auto-biding
                </p>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default Details
