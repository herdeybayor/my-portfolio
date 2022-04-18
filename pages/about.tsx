import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutPage'
import MyServices from '../components/AboutPage/MyServices'

const about = () => {
  return (
    <div className="relative h-screen w-full overflow-y-scroll bg-creamy font-sans scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
      <Head>
        <title>Sherifdeen Adebayo | About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AboutMe />
      <MyServices />
    </div>
  )
}

export default about
