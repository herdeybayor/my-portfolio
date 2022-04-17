import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutPage'

const about = () => {
  return (
    <div className="relative w-full overflow-hidden bg-creamy font-sans">
      <Head>
        <title>Sherifdeen Adebayo | About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AboutMe />
    </div>
  )
}

export default about
