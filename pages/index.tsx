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
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import HomePageAnimation from '../components/HomePageAnimation'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-creamy font-sans">
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
            <h1 className="header-text font-heading text-5xl md:text-6xl lg:text-5xl">
              creative designer <br /> & developer
            </h1>
            <div className="relative h-max text-2xl leading-relaxed">
              {/* Dummy text to stop movement */}
              <div className="invisible">
                Lorem ipsum dolor sit from, construction admiring lets. Aquatic
                at From vertebrate.
              </div>
              <div className="absolute top-0 w-full">
                Hi, I'm{' '}
                <span className="text-purple-500 font-bold">
                  Sherifdeen Adebayo.
                </span>{' '}
                <span className="inline-flex">
                  <Typewriter
                    options={{
                      strings: [
                        ' A passionate FullStack Dev.',
                        " I'm 17yrs Old.",
                        ' A professional UI/UX designer.',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-5 lg:justify-start">
            <a href="mailto:herdeybayor4real@gmail.com">
              <div className="bg-purple-500 text-white hover:bg-purple-600 group inline-flex cursor-pointer items-end justify-center space-x-3 rounded-lg px-4 py-2 transition duration-300">
                <span>Let's Talk</span>
                <HiOutlinePaperAirplane className="rotate-45 text-3xl transition duration-300 group-hover:-translate-y-1" />
              </div>
            </a>
            <Link href="/portfolio">
              <div className="group inline-flex cursor-pointer items-center justify-center space-x-3">
                <span className="font-bold">SEE MY WORKS</span>
                <CgArrowTopRight className="text-3xl transition duration-300 group-hover:-translate-y-1" />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-10 lg:justify-start">
            <p className="font-bold">Check Out My</p>

            <a href="https://github.com/herdeybayor" target="_blank">
              <FaGithub className="social__icons" />
            </a>

            <a href="https://www.linkedin.com/in/herdeybayor" target="_blank">
              <FaLinkedin className="social__icons" />
            </a>

            <a
              href="https://www.instagram.com/dprince_graphics"
              target="_blank"
            >
              <FaInstagramSquare className="social__icons" />
            </a>

            <a href="https://twitter.com/S_herdeybayor" target="_blank">
              <FaTwitterSquare className="social__icons" />
            </a>
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
