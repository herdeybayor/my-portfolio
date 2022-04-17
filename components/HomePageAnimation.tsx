import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HomePageAnimation = () => {
  const firstDivRef = useRef(null)
  const secondDivRef = useRef(null)
  const myNameRef = useRef(null)
  const animationContainerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(myNameRef.current, { scale: 2, duration: 1 })
    tl.to(firstDivRef.current, { y: '-100%', duration: 2 })
    tl.to(secondDivRef.current, { y: '100%', duration: 2, delay: -2 })
    tl.to(myNameRef.current, { opacity: 0, duration: 1, delay: -1.5 })
    tl.to(animationContainerRef.current, { opacity: 0, duration: 2, delay: -1 })
    tl.to(animationContainerRef.current, { zIndex: -5, duration: 0 })
  }, [])

  return (
    <div
      ref={animationContainerRef}
      className="absolute z-30 h-screen w-full bg-[#fbf8f1]"
    >
      <div className="relative">
        <h1
          ref={myNameRef}
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-[45%] text-xl tracking-widest text-white md:text-2xl"
        >
          SHERIFDEEN ADEBAYO
        </h1>
        <div ref={firstDivRef} className="h-[50vh] bg-yellow-400"></div>
        <div ref={secondDivRef} className="h-[50vh] bg-yellow-400"></div>
      </div>
    </div>
  )
}

export default HomePageAnimation
