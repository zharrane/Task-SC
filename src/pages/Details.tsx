import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CheckBox from "../components/Common/CheckBox"
import ImageGal from "../components/ImageGallery"
import StyledButton from "../components/Common/StyledButton"

const Details = () => {
  const id = useParams()
  console.log(id)
  useEffect(() => {}, [id])
  return (
    <main className="flex flex-col py-10 overflow-x-hidden overflow-y-auto md:flex-row ">
      <div className="md:w-7/12 ">
        <ImageGal images={[]} />
      </div>

      <section className="container flex flex-col gap-6 px-10 mx-auto md:w-5/12">
        <div className="flex flex-col gap-6">
          <h1 className="">{"product 0"} </h1>
          <p> minimum bid $ {"10"}</p>
        </div>
        <div className="flex flex-col gap-4 overflow-hidden ">
          <h1>details</h1>
          <div className="overflow-y-auto h-60 ">
            <p className="leading-relaxed">
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
            <h2 className="text-center">$ {"15"}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h3>available until</h3>
            <h2 className="text-center"> {"00:00:00"}</h2>
          </div>
        </div>

        <StyledButton text="Place a bid" />

        <div className="flex items-center gap-2">
          <CheckBox name="activate the" />
          <Link to="/settings">
            <p className="text-gray-900 underline hover:text-black ">
              auto-biding
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Details
