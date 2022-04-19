import React from 'react'

import { HiArrowNarrowRight } from 'react-icons/hi'

const Work = () => {
  return (
    <div className="flex h-72 w-full items-center justify-between border-2 px-20">
      <div className="flex items-center space-x-10 text-gray-400">
        <div className="h-[2px] w-32 bg-gray-400"></div>
        <div className="text-3xl font-light">01</div>
        <div className="">
          <h1 className="text-3xl font-bold">Medium Blob (Clone)</h1>
          <p className="text-xl font-semibold">WEB APP</p>
        </div>
      </div>
      <div className="flex">
        <div></div>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-semibold">View Project</span>{' '}
          <HiArrowNarrowRight className="text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Work
