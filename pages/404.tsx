import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

const Custom404 = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-yellow-400 px-10 text-center font-sans">
      <Head>
        <title>404 &mdash; Sherifdeen Adebayo || @herdeybayor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header buggerLight={true} /> */}
      {/* 404 Design */}
      {/* Oops */}
      <div className="relative -mt-24 scale-75 overflow-hidden p-20 pt-0 md:scale-100">
        <svg
          width="500"
          height="100"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="rect__1 absolute left-0 top-44 md:top-52"
        >
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#facc15" />
        </svg>
        <div className="rect__2 absolute left-0 top-[265px]"></div>
        <h1 className="font-barlowCondensed text-[12rem] text-purple-500 lg:text-[14rem]">
          404
        </h1>
      </div>
      <div className="z-50 -mt-32 space-y-5 text-white">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-xl">
          This page doesn't exist or was removed! <br /> We suggest you go back
          home
        </p>
        <Link href="/">
          <button className="rounded-full bg-purple-500 py-3 px-5 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-400">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Custom404
