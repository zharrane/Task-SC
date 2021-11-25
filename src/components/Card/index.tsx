import StyledLink from "../Common/StyledLink"

interface CardProps {
  productId: string
  title: string
  description: string
  className?: string
  imageUrl: string
  pathTo: string
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  className = "",
  pathTo,
  imageUrl = "/assets/images/no_image.jpg",
  productId,
}) => {
  return (
    <div className="w-full h-full max-w-lg overflow-hidden rounded shadow-lg bg-blue-50">
      <img className="object-cover w-full h-72" src={imageUrl} alt={title} />
      <div className="flex items-center justify-between px-3 py-3">
        <div className="px-2 w-52 lg:w-44">
          <div className="text-xl font-bold ">{title}</div>
          <p className="text-base text-gray-700 truncate ">{description}</p>
        </div>
        <StyledLink
          path={`${pathTo}/${productId}`}
          text="Bid now"
          className="px-1 py-4 bg-gray-700 rounded-md shadow-sm xl:px-2 filter text-secondary-400"
        />
      </div>
    </div>
  )
}

export default Card
