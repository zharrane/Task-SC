import { useState } from "react"
import ImageCarousel from "./ImageCarousel"

interface ImageGalProps {
  images: string[]
}
const ImageGal: React.FC<ImageGalProps> = ({ images = [] }) => {
  const [imagess, setImages] = useState<any[]>(images)

  return (
    <div className="App">
      <ImageCarousel images={imagess} />
    </div>
  )
}

export default ImageGal
