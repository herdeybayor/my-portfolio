import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { CgArrowTopRight } from 'react-icons/cg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#fbf8f1] font-sans">
      <Head>
        <title>Sherifdeen Adebayo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}

      <div className="mx-auto flex h-[80vh] max-w-6xl items-center justify-center space-x-20 px-10 text-center lg:justify-between lg:text-left">
        {/* Left Side */}
        <div className="space-y-10 lg:basis-1/2">
          <div className="space-y-5">
            <h1 className="font-heading text-6xl lg:text-5xl">
              creative designer <br /> & developer
            </h1>
            <p className="text-2xl leading-relaxed">
              Hi, I'm{' '}
              <span className="font-bold text-purple-500">
                Sherifdeen Adebayo.
              </span>{' '}
              A passionate FullStack Web Developer
            </p>
          </div>

          <div className="flex justify-center space-x-10 lg:justify-start">
            <div className="group inline-flex cursor-pointer items-end justify-center space-x-3 rounded-lg bg-purple-500 px-4 py-2 text-white transition duration-300 hover:bg-purple-600">
              <span>Let's Talk</span>
              <HiOutlinePaperAirplane className="rotate-45 text-3xl transition duration-300 group-hover:-translate-y-1" />
            </div>
            <div className="group inline-flex cursor-pointer items-center justify-center space-x-3 px-4 py-2">
              <span className="font-bold">SEE MY WORKS</span>
              <CgArrowTopRight className="text-3xl transition duration-300 group-hover:-translate-y-1" />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-10 lg:justify-start">
            <p className="font-bold">Check Out My</p>
            <FaGithub className="animate-bounce cursor-pointer text-3xl transition duration-300 hover:animate-none" />
            <FaLinkedin className="animate-bounce cursor-pointer text-3xl transition duration-300 hover:animate-none" />
            <FaInstagramSquare className="animate-bounce cursor-pointer text-3xl transition duration-300 hover:animate-none" />
            <FaTwitterSquare className="animate-bounce cursor-pointer text-3xl transition duration-300 hover:animate-none" />
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden basis-1/2 items-center justify-center lg:flex">
          <div className="w-full">
            <Image
              src="/assets/images/avatar.png"
              width={16}
              height={16}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
