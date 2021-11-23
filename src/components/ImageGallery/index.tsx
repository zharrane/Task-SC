import { useEffect, useState } from "react"
import ImageCarousel, { ImageType } from "./ImageCarousel"

interface ImageGalProps {
  images: string[]
}
const ImageGal: React.FC<ImageGalProps> = ({ images = [] }) => {
  const [imagess, setImages] = useState<ImageType[]>()

  useEffect(() => {
    setImages(
      [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
      ]
      // Array.from(Array(3).keys()).map((id) => ({
      //   id,
      //   url: `https://picsum.photos/1000?random=${id}`,
      // }))
    )
  }, [])

  return (
    <div className="App">
      <ImageCarousel images={imagess} />
    </div>
  )
}

export default ImageGal
