import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import StyledButton from "../Common/StyledButton"
export type ImageType = { _id: string; url: string }

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<ImageType>()
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([])
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      )

      setSelectedImageIndex(0)
      setSelectedImage(images[0])
    }
  }, [images])
  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx])
      setSelectedImageIndex(newIdx)
    }
  }

  const handleClick = (e: string) => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex
      switch (e) {
        case "right":
          newIdx++
          if (newIdx >= images.length) {
            newIdx = 0
          }
          handleSelectedImageChange(newIdx)
          break

        case "left":
          newIdx--
          if (newIdx < 0) {
            newIdx = images.length - 1
          }
          handleSelectedImageChange(newIdx)
          break

        default:
          handleSelectedImageChange(newIdx)
          break
      }
    }
  }

  return (
    <div className="container mx-auto ">
      <div
        className="w-full mb-8 shadow-lg md:selected-image-big selected-image filter"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className="relative">
        <div className="flex max-w-full overflow-x-hidden">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image._id}
                className={clsx(
                  `carousel-image  mr-3 h-[150px]  min-w-[150px] px-2 border-1 border-primary-500 shadow-sm filter`,
                  selectedImageIndex === idx && "border-1 border-primary-500"
                )}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
        <div onClick={() => handleClick("left")}>
          <StyledButton
            text=""
            className="absolute floating-button-left bg-opacity-40 hover:scale-110 hover:bg-opacity-80"
          >
            <img
              alt=""
              src="/assets/icons/arrow.svg"
              className="w-8 h-8 text-gray-100 "
            />
          </StyledButton>
        </div>
        <div onClick={() => handleClick("right")}>
          <StyledButton
            text=""
            className="absolute floating-button-right bg-opacity-40 hover:scale-110 hover:bg-opacity-80"
          >
            <img
              alt=""
              src="/assets/icons/arrow.svg"
              className="w-8 h-8 text-gray-100 rotated-arrow "
            />
          </StyledButton>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
