import React from 'react'

interface Props {
  name: string
  description: string
}

const Service: React.FC<Props> = ({ name, description, children }) => {
  return (
    <div className="service__card group relative flex h-96 w-72 scale-75 flex-col items-center justify-start space-y-3 overflow-hidden rounded-2xl bg-yellow-400 p-5 text-center transition-all duration-300 sm:scale-100 lg:hover:scale-105">
      <div className="absolute top-10 h-16 w-16 rounded-xl bg-purple-500 transition-all duration-300 ease-out group-hover:scale-[1000%] "></div>
      <div className="z-10 rounded-xl bg-purple-500 p-3">{children}</div>
      <h1 className="z-10 text-2xl font-bold">{name}</h1>
      <p className="text-md z-10">{description}</p>
    </div>
  )
}

export default Service
