import StyledLink from "../components/Common/StyledLink"

const NotFound = () => {
  return (
    <div className="justify-center w-screen min-h-screen bg-blue-50 sm:px-6 lg:px-8 bg-gradient-to-br ">
      <div className="w-full max-w-xl p-6 mx-auto mt-16 space-y-8 bg-gray-100 rounded-lg shadow-2xl md:mt-36">
        <div className="flex flex-col gap-36">
          <div>
            <h1 className="text-center text-9xl text-primary-700">404</h1>
            <h1 className="text-6xl text-center capitalize text-primary-200">
              Not Found
            </h1>
          </div>
          <p className="mx-auto uppercase">
            sincere apologies We do not know how you end up here
          </p>
          <StyledLink
            text="Back to home"
            path="/"
            className="max-w-sm mx-auto text-center rounded-lg text- bg-secondary-600 "
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
