import StyledButton from "../components/StyledButton"

const AutoBid = () => {
  return (
    <main className="container py-24 mx-auto overflow-hidden">
      <div className=" px-9">
        <div className="flex flex-col gap-20 sm:gap-16 md:gap-14 lg:gap-12 ">
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 uppercase">settings</p>
            <h1> configure the auto-biding</h1>
          </div>
          <div className="flex flex-col gap-10 lg:gap-6">
            <h2>maximum bid amount</h2>
            <p className="leading-10">
              this maximum amount will be split between all items where we have
              activated auto-biding be mindful of the concurrency issue with
              auto-biding!
            </p>
          </div>
          <div>
            <div className="flex max-w-sm gap-5 p-6 bg-blue-100 rounded-md shadow-sm filter ">
              <span className="text-3xl font-bold">$</span>
              <input
                type="number"
                placeholder="100"
                className="text-2xl text-center bg-transparent text-bold focus:outline-none"
                min="0"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-6">
            <h2>maximum bid amount</h2>
            <p>get the notification about your reserved bids</p>
            <div className="flex max-w-sm gap-5 p-6 bg-blue-100 rounded-md shadow-sm filter ">
              <input
                type="number"
                placeholder="90"
                className="text-2xl text-center bg-transparent text-bold focus:outline-none"
                min="0"
              />
              <span className="text-3xl font-bold">%</span>
            </div>
            <StyledButton text="save" className="max-w-lg mt-6" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AutoBid
