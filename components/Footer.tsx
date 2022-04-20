import React from 'react'

interface Props {
  siteViews: number
}

const Footer = ({ siteViews }: Props) => {
  return (
    <div className="flex w-full flex-col items-center bg-yellow-400 px-10 py-5 text-white lg:px-20">
      <h1 className="text-xl">
        &copy; {new Date().getFullYear()} Sherifdeen Adebayo
      </h1>
      <p className="underline">Site stats - {siteViews} views</p>
    </div>
  )
}

export default Footer
