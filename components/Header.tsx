import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const Header = ({ buggerLight }: { buggerLight?: boolean }) => {
  const bigTextRef = useRef(null)
  const navigationRef = useRef(null)
  const [currentHoverText, setCurrentHoverText] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuClick = () => {
    if (isMenuOpen) {
      gsap.to(navigationRef.current, { y: '-100%', duration: 0.6 })
    } else {
      gsap.to(navigationRef.current, { y: '0', duration: 0.6 })
    }
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      {/* Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between py-5 px-10">
        <Image
          src="/assets/images/my-logo.png"
          width={60}
          height={60}
          alt="logo"
        />
        <div
          onClick={() => {
            handleMenuClick()
          }}
          className="bugger group flex cursor-pointer flex-col items-end space-y-2 transition"
        >
          <div
            className={`h-1 w-12 ${buggerLight ? 'bg-white' : 'bg-black'}`}
          ></div>
          <div
            style={{ transition: '300ms linear' }}
            className={`h-1 w-9 ${
              buggerLight ? 'bg-white' : 'bg-black'
            } group-hover:w-full`}
          ></div>
          <div
            style={{ transition: '300ms linear' }}
            className={`h-1 w-6 ${
              buggerLight ? 'bg-white' : 'bg-black'
            } group-hover:w-full`}
          ></div>
        </div>
      </div>

      {/* Big Navigation bar */}
      <div
        ref={navigationRef}
        className="fixed top-0 left-0 z-10 flex h-screen w-full -translate-y-full items-center justify-center bg-yellow-400"
      >
        <div className="absolute top-0 mx-auto flex w-full max-w-6xl items-center justify-between py-5 px-10">
          <Image
            src="/assets/images/my-logo.png"
            width={60}
            height={60}
            alt="logo"
          />
          <div
            onClick={() => {
              handleMenuClick()
            }}
            className="bugger flex h-14 w-14 cursor-pointer flex-col items-center justify-center space-y-2 transition duration-300 hover:rotate-90"
          >
            <div className="h-1 w-12 rotate-[40deg] bg-white"></div>
            <div className="h-1 w-12 -rotate-[40deg] bg-white"></div>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col items-center justify-center space-y-6 px-10 text-5xl font-medium text-white">
          <Link href="/">
            <p
              onMouseOver={() => {
                setCurrentHoverText('HOME')
                gsap.fromTo(
                  bigTextRef.current,
                  { letterSpacing: '500px' },
                  { letterSpacing: '10px', duration: 0.6 }
                )
              }}
              onMouseOut={() => {
                setCurrentHoverText('')
              }}
              className="cursor-pointer bg-yellow-400"
            >
              HOME
            </p>
          </Link>
          <Link href="/about">
            <p
              onMouseOver={() => {
                setCurrentHoverText('ABOUT')
                gsap.fromTo(
                  bigTextRef.current,
                  { letterSpacing: '500px' },
                  { letterSpacing: '10px', duration: 0.6 }
                )
              }}
              onMouseOut={() => {
                setCurrentHoverText('')
              }}
              className="cursor-pointer bg-yellow-400"
            >
              ABOUT
            </p>
          </Link>
          <Link href="/portfolio">
            <p
              onMouseOver={() => {
                setCurrentHoverText('PORTFOLIO')
                gsap.fromTo(
                  bigTextRef.current,
                  { letterSpacing: '500px' },
                  { letterSpacing: '10px', duration: 0.6 }
                )
              }}
              onMouseOut={() => {
                setCurrentHoverText('')
              }}
              className="cursor-pointer bg-yellow-400"
            >
              PORTFOLIO
            </p>
          </Link>
          <Link href="/contact">
            <p
              onMouseOver={() => {
                setCurrentHoverText('CONTACT')
                gsap.fromTo(
                  bigTextRef.current,
                  { letterSpacing: '500px' },
                  { letterSpacing: '10px', duration: 0.6 }
                )
              }}
              onMouseOut={() => {
                setCurrentHoverText('')
              }}
              className="cursor-pointer bg-yellow-400"
            >
              CONTACT
            </p>
          </Link>
        </div>

        {/* Big text */}
        <p
          ref={bigTextRef}
          className="pointer-events-none absolute font-monoton text-9xl text-white opacity-50 transition-all duration-300"
        >
          {currentHoverText}
        </p>
      </div>
    </div>
  )
}

export default Header
