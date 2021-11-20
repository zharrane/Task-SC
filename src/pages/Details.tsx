import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CheckBox from "../components/CheckBox"
import ImageGal from "../components/ImageGallery"
import StyledButton from "../components/StyledButton"

const Details = () => {
  const { id } = useParams()
  useEffect(() => {}, [id])
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto md:flex-row ">
      <div className="md:w-7/12 ">
        <ImageGal />
      </div>

      <section className="container flex flex-col gap-12 px-10 py-20 mx-auto md:w-5/12 md:py-40">
        <div className="flex flex-col gap-6">
          <h1 className="">{"product 0"} </h1>
          <p> minimum bid $ {"10"}</p>
        </div>
        <div className="flex flex-col gap-4 overflow-hidden ">
          <h1>details</h1>
          <div className="overflow-y-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet
              autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              amet autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              amet autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              amet autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              amet autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              amet autem accusantium velit quidem! Nisi sit consectetur culpa
              accusantium at sint error, doloribus dolorem possimus laudantium
              explicabo odit rerum porro! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex amet autem accusantium velit quidem! Nisi sit
              consectetur culpa accusantium at sint error, doloribus dolorem
              possimus laudantium explicabo odit rerum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex amet autem accusantium
              velit quidem! Nisi sit consectetur culpa accusantium at sint
              error, doloribus dolorem possimus laudantium explicabo odit rerum
              porro!
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3>last bid made</h3>
            <h2>$ {"15"}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h3>available until</h3>
            <h2>$ {"2:30:15"}</h2>
          </div>
        </div>

        <StyledButton text="Place a bid" />

        <div className="flex gap-2">
          <CheckBox name="activate the" />
          <Link to="/auto-bid">
            <p className="text-gray-900 underline hover:text-black ">
              auto-biding
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Details
