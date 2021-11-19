import Card from "../components/Card"
import Filter from "../components/Filter"

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:overflow-y-hidden ">
      <Filter title="filters" />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full gap-8 p-36 overflow-y-scroll max-h-screen custom-scroll">
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
        <Card
          title="Product 0 "
          description="this is a quit good product to buy from our store"
          imageUrl="/assets/images/no_image.jpg"
        />
      </div>
    </div>
  )
}

export default HomePage
