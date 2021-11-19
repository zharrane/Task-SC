import StyledButton from "../StyledButton"

interface CardProps {
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
}) => {
  return (
    <div className="filter drop-shadow-lg bg-gray-100   rounded-xl ">
      <img src={imageUrl} alt={title} className="object-cover w-full h-96 " />
      <div
        className={`flex p-4 items-center  mx-auto container justify-between`}
      >
        <div>
          <h2>{title}</h2>
          <p className={`truncate w-56`}>{description}</p>
        </div>

        <div>
          <StyledButton text="Bid Now" />
        </div>
      </div>
    </div>
  )
}

export default Card
