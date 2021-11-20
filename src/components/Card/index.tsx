import StyledLink from "../StyledLink"

interface CardProps {
  productId: string
  title: string
  description: string
  className?: string
  imageUrl: string
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  className = "",
  imageUrl = "/assets/images/no_image.jpg",
  productId,
}) => {
  return (
    <div className="h-full max-w-lg overflow-hidden rounded shadow-lg bg-blue-50">
      <img className="object-cover w-full h-72" src={imageUrl} alt={title} />
      <div className="container flex items-center justify-between px-0 py-3">
        <div className="px-2 w-52 lg:w-44">
          <div className="text-xl font-bold ">{title}</div>
          <p className="text-base text-gray-700 truncate ">{description}</p>
        </div>
        {/* <StyledButton text="Bid now" className="xl:px-4"> */}
        <StyledLink
          path={`details/${productId}`}
          text="Bid now"
          className="px-2 py-4 bg-gray-700 rounded-md shadow-sm xl:px-4 filter text-secondary-400"
        />
        {/* </StyledButton> */}
      </div>
    </div>
  )
}

export default Card
