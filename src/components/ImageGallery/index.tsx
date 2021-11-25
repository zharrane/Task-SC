import ImageCarousel from "./ImageCarousel"

interface ImageGalProps {
  images: string[]
}
const ImageGal: React.FC<ImageGalProps> = ({ images = [] }: any) => {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  )
}

export default ImageGal
