import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { AiFillApi } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'
import { DiReact } from 'react-icons/di'
import Service from './Service'

const MyServices = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-400 px-10 py-20 text-white lg:px-20">
      <h1 className="text-4xl font-semibold">
        <span className="text-purple-500">My</span> Services
      </h1>
      <div className="mt-10 flex w-full overflow-x-scroll scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-purple-900">
        <div className="flex space-x-0 p-0 sm:space-x-10 sm:p-10">
          <Service
            name="Web Development"
            description="Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser."
          >
            <FaLaptopCode className="text-[5rem]" />
          </Service>
          <Service
            name="API Development"
            description="API (Application Programming Interface software) is a set of instructions, standards or requirements that enables a software or app to employ features/services of another app."
          >
            <AiFillApi className="text-[5rem]" />
          </Service>
          <Service
            name="Product Design"
            description="The UI (user interface) is the graphical layout of an application. UX (User experience) is determined by how easy or difficult it is to interact with the user interface elements that the UI designers have created."
          >
            <FiFigma className="text-[5rem]" />
          </Service>
          <Service
            name="Mobile Development"
            description="Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones."
          >
            <DiReact className="text-[5rem]" />
          </Service>
        </div>
      </div>
    </div>
  )
}

export default MyServices
