import Filter from "../components/Filter"

const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-5 lg:min-h-screen lg:overflow-hidden ">
      <Filter title="filters" className={`lg:col-span-1 lg:pt-28`} />
      <div className="grid grid-cols-1 lg:col-span-4 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-scroll overflow-x-hidden lg:min-h-screen">
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
        <h1 className="bg-gray-400">Test Test Test</h1>
      </div>
    </div>
  )
}

export default HomePage
