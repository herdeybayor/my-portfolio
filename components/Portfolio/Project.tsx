import Image from 'next/image'
import React from 'react'

import { HiArrowNarrowRight } from 'react-icons/hi'

interface Project {
  title: string
  subtitle: string
  frameworks: string
  image: string
  url: string
}

const Work = ({ title, subtitle, frameworks, image, url }: Project) => {
  return (
    <div className="group relative flex w-full flex-col items-center justify-between space-y-5 overflow-hidden border-t-2 px-10 py-10 md:flex-row lg:h-72 lg:flex-row lg:space-y-0 lg:px-20 lg:py-0">
      <div className="flex items-center text-black lg:space-x-5 lg:text-gray-400">
        <div className="hidden h-[2px] w-32 bg-gray-400 lg:inline-flex"></div>
        <div className="hidden text-3xl font-light lg:inline-flex">01</div>
        <div className="flex flex-col items-center justify-center space-y-1 md:items-start lg:items-start lg:space-y-0">
          <h1 className="text-2xl font-bold lg:group-hover:text-black">
            {title}
          </h1>
          <p className="text-xl font-semibold">{subtitle}</p>
          <p className="text-center text-xs lg:text-lg">{frameworks}</p>
          <a
            href={url}
            target="_blank"
            className="relative z-10 hidden cursor-pointer rounded-full bg-gray-400 px-3 py-4 hover:bg-gray-400 md:flex lg:hidden lg:bg-transparent lg:p-0"
          >
            <div className="full absolute -left-5 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-gray-400 transition-all duration-500 hover:bg-gray-500 lg:inline-flex lg:group-hover:w-[calc(100%+40px)]"></div>
            <div className="z-10 flex items-center space-x-3">
              <span className="font-semibold text-white lg:text-xl lg:text-black lg:group-hover:text-white">
                View Project
              </span>{' '}
              <HiArrowNarrowRight className="-rotate-45 text-2xl text-white transition-all duration-500 group-hover:-rotate-45 lg:-rotate-0 lg:text-black lg:group-hover:text-white" />
            </div>
          </a>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        className="relative z-10 flex cursor-pointer rounded-full bg-gray-400 px-3 py-4 hover:bg-gray-400 md:hidden lg:flex lg:bg-transparent lg:p-0"
      >
        <div className="full absolute -left-5 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-gray-400 transition-all duration-500 hover:bg-gray-500 lg:inline-flex lg:group-hover:w-[calc(100%+40px)]"></div>
        <div className="z-10 flex items-center space-x-3">
          <span className="font-semibold text-white lg:text-xl lg:text-black lg:group-hover:text-white">
            View Project
          </span>{' '}
          <HiArrowNarrowRight className="-rotate-45 text-2xl text-white transition-all duration-500 group-hover:-rotate-45 lg:-rotate-0 lg:text-black lg:group-hover:text-white" />
        </div>
      </a>
      <div className="relative aspect-video w-full md:w-1/2 lg:hidden">
        <Image src={image} layout="fill" />
      </div>
      <div className="absolute top-1/2 -right-[50rem] hidden aspect-video h-4/5 -translate-y-1/2 bg-gray-400 transition-all duration-500 lg:inline-flex lg:group-hover:right-12"></div>
      <div className="absolute top-[48%] -right-[50rem] hidden aspect-video h-4/5 -translate-y-1/2 transition-all duration-500 lg:inline-flex lg:group-hover:right-10">
        <Image src={image} layout="fill" />
      </div>
    </div>
  )
}

export default Work
