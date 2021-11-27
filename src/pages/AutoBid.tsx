import { useState } from "react"
import StyledButton from "../components/Common/StyledButton"
import useApiFetch, { fetcher } from "../helpers/useApiFetch"

const AutoBid = () => {
  const [alert, setAlert] = useState(false)
  const [calculation, setCalculation] = useState(0)
  const [balance, setBalance] = useState(0)
  const [notification, setNotification] = useState(0)
  const { isLoading, isSuccess, data } = useApiFetch(
    ["settings"],
    "/users/settings/get",
    "get",
    {},
    (data: any) => {
      setBalance(data.remainingBidAmount)
      setNotification(data.notification)
      let res = data
      let perc = (res.amountSpent * 100) / res.autoBidAmount
      if (perc >= res.notification) {
        setCalculation(perc)
        setAlert(true)
      } else {
        setAlert(false)
      }
    }
  )

  const handleChangeSettings = async () => {
    fetcher(`/users/settings/update`, "put", {
      autoBidAmount: balance,
      notification: notification,
    })
  }
  return (
    <main className="container py-24 mx-auto overflow-hidden">
      {isLoading && <h1>Loading ....</h1>}
      {isSuccess && (
        <div className=" px-9">
          <div className="flex flex-col gap-20 sm:gap-16 md:gap-14 lg:gap-12 ">
            <div className="flex flex-col gap-6">
              <p className="text-gray-400 uppercase">settings</p>
              <h1> configure the auto-biding</h1>
            </div>
            <div className="flex flex-col gap-10 lg:gap-6">
              <h2>maximum bid amount</h2>
              <p className="leading-10">
                this maximum amount will be split between all items where we
                have activated auto-biding be mindful of the concurrency issue
                with auto-biding!
              </p>
            </div>
            <div>
              <div className="flex items-center gap-10">
                <div className="flex max-w-sm gap-5 p-6 bg-blue-100 rounded-md shadow-sm filter ">
                  <span className="text-3xl font-bold">$</span>
                  <input
                    type="number"
                    placeholder="100"
                    value={balance}
                    onChange={(e: any) => setBalance(e.target.value)}
                    className="text-2xl text-center bg-transparent text-bold focus:outline-none"
                    min="0"
                  />
                </div>
                <p>{`Spent from last update : ${data.amountSpent}`}</p>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:gap-6">
              <h2>maximum bid amount</h2>
              <p>get the notification about your reserved bids</p>
              <div className="flex items-center gap-10">
                <div className="flex max-w-sm gap-5 p-6 bg-blue-100 rounded-md shadow-sm filter ">
                  <input
                    type="number"
                    placeholder="90"
                    onChange={(e: any) => setNotification(e.target.value)}
                    className="text-2xl text-center bg-transparent text-bold focus:outline-none"
                    value={notification}
                    min="0"
                  />
                  <span className="text-3xl font-bold">%</span>
                </div>
                {alert && (
                  <p className="text-red-400">
                    {`The bot spent ${calculation}% of money dedicated to it : ${data.amountSpent} of total amount ${data.autoBidAmount} `}
                  </p>
                )}
              </div>
              <StyledButton
                onClick={handleChangeSettings}
                text="save"
                className="max-w-lg mt-6"
                disabled={false}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AutoBid
