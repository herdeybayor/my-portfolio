import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-10 pb-10">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-4xl font-semibold">
          About <span className="text-purple-500">Me</span>
        </h1>
        <h2 className="text-xl font-semibold">
          Get to know <span className="text-purple-500">me</span>
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-10 gap-20">
        <div className="col-span-6 flex flex-col space-y-5">
          <h3 className="text-4xl font-semibold leading-tight">
            I am a passionate Fullstack{' '}
            <span className="text-purple-500">(FE-Heavy)</span> with a keen eye
            for details.
          </h3>
          <p className="text-xl leading-normal">
            Hi! I’m Sherifdeen Adebayo. I have a strong passion for design and
            technology. I specialized in Fullstack Development and UI/UX Design
            and my passion is all about building elegant and professional user
            interfaces and websites. I also do branding and identity design such
            as logo design, letterhead and business card, along with photo
            editing, image cropping and other graphic design services.
          </p>
          <button className="download__shadow group mx-auto flex items-center space-x-3 rounded-lg bg-creamy py-3 px-5 text-xl font-semibold text-purple-500">
            <a href="https://google.com" target="_blank">
              Download CV
            </a>{' '}
            <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
        <div className="relative col-span-4">
          <Image
            src={'/assets/images/memoji.png'}
            objectFit="contain"
            layout="fill"
          />
          {/* <h1>Image</h1> */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
