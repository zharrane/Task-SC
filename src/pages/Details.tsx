import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
  const { id } = useParams()
  useEffect(() => {
    console.log(id)
  }, [id])
  return <div>Details</div>
}

export default Details
