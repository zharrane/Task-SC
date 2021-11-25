import { Link, useParams } from "react-router-dom"
import CheckBox from "../components/Common/CheckBox"
import ImageGal from "../components/ImageGallery"
import StyledButton from "../components/Common/StyledButton"
import axios from "axios"
import CONST from "../helpers/constants"
import { useQuery } from "react-query"
import { useState } from "react"

import Countdown from "react-countdown"
import clsx from "clsx"

const fetchSingleProduct = async (key: any) => {
  const id = key.queryKey[1]
  try {
    const result = await axios.get(
      `${CONST.BASE_URL}${CONST.ALL_PRODUCTS}/${id}`
    )
    return result.data
  } catch (error: any) {
    error.response.status === 401 && localStorage.clear()
    return []
  }
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <h1>00:00:00:00</h1>
  } else {
    // Render a countdown
    return (
      <div className="flex gap-1">
        <h1>{`${days}:`}</h1>
        <h1>{`${hours}:`}</h1>
        <h1>{`${minutes}:`}</h1>
        <h1>{`${seconds}`}</h1>
      </div>
    )
  }
}

const checkDuration = (date: any, duration: any) => {
  const MyDate = new Date(date).getTime()
  const Now = new Date()
  const newDuration = new Date(MyDate + duration).getTime()
  const DeadLine = Now.getTime() - newDuration
  const itemLife = 24 * 3600 * 1000
  const res = Now.getTime() + itemLife - DeadLine > 0 ? true : false

  return { res, DeadLine, itemLife }
}

const Details = () => {
  const user: any = localStorage.getItem("user")
  const parsedUser = JSON.parse(user)
  const userid = parsedUser.uid
  const { id } = useParams<{ id: string }>()
  const [canBid, setCanBid] = useState(true)
  const [text, setText] = useState("Place a bid")
  const [time, setTime] = useState("")
  const [ended, setEnded] = useState(false)
  const [canSubscribe, setCanSubscribe] = useState(true)
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["single-product", id],
    fetchSingleProduct,
    {
      onSuccess: (data) => {
        let isSubscriber = data.subscribers.filter(
          (item: any) => item.userId === userid
        )
        let isLastBidder = data.winner
        if (isSubscriber.length > 0) {
          setCanSubscribe(true)
          setCanBid(true)
          setText("You are subscribed")
        } else {
          setCanSubscribe(false)
          setCanBid(false)
          setText("Place a bid")
        }
        if (isLastBidder && isLastBidder === userid) {
          setCanBid(false)
        } else {
          setCanBid(true)
          setText("Place a bid")
        }

        const duration = checkDuration(data.createdOn, data.duration)
        !duration.res ? setEnded(true) : setEnded(false)
        let durationToVisible = duration.DeadLine.toString()
        duration.res && setTime(durationToVisible)
      },
    }
  )

  const onPlaceBid = async () => {
    try {
      const result = await axios({
        method: "patch",
        url: `${CONST.BASE_URL}${CONST.ALL_PRODUCTS}/bid/${id}`,
        data: { lastBidPrice: data.productPrice + 1 },
      })

      result && setCanBid(true)
    } catch (error: any) {
      error.response.status === 401 && localStorage.clear()
    }
  }

  const onSubscribe = async (e: any) => {
    try {
      if (e.target.checked) {
        const result = await axios({
          method: "patch",
          url: `${CONST.BASE_URL}${CONST.ALL_PRODUCTS}/subscribe/${id}`,
        })
        result && setCanSubscribe(false)
      } else {
        const result = await axios({
          method: "patch",
          url: `${CONST.BASE_URL}${CONST.ALL_PRODUCTS}/unsubscribe/${id}`,
        })
        result && setCanSubscribe(true)
      }
    } catch (error: any) {
      error.response.status === 401 && localStorage.clear()
    }
  }

  return (
    <main className="flex flex-col py-10 overflow-x-hidden overflow-y-auto md:flex-row ">
      {isLoading && <h1>Loading ....</h1>}
      {isError && <h1>{`Error ... ${data}`}</h1>}
      {isSuccess && (
        <>
          <div className="md:w-7/12 ">
            <ImageGal images={data.pictures} />
          </div>

          <section className="container flex flex-col gap-6 px-10 pt-10 mx-auto md:w-5/12">
            <div className="flex flex-col gap-6">
              <h1 className="">{data.title} </h1>
              <p> Starting bid $ {data.bidStartPrice}</p>
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
                <div className="text-center">
                  <Countdown
                    date={Date.now() + 24 * 60 * 60 * 1000 - +time}
                    renderer={renderer}
                  />
                </div>
              </div>
            </div>

            <button
              disabled={canBid || ended || canSubscribe}
              className={clsx(
                " filter shadow-sm py-4 px-2  rounded-md  text-secondary-400",
                canBid || ended || canSubscribe ? "bg-gray-400" : " bg-gray-700"
              )}
              onClick={onPlaceBid}
            >
              {text}
            </button>

            <div className="flex items-center gap-2">
              <CheckBox
                defaultChecked={canSubscribe}
                name="activate the"
                _id={"1"}
                onChange={onSubscribe}
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
