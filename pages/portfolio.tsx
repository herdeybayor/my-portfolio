import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Project from '../components/Portfolio/Project'

const portfolio = () => {
  return (
    <div className="relative h-screen w-full overflow-y-scroll bg-creamy font-sans scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
      <Head>
        <title>Sherifdeen Adebayo | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex min-h-screen flex-col items-center bg-creamy pt-32 pb-10">
        {/* Top Texts */}
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-semibold">
            <span className="text-purple-500">My</span> Portfolio
          </h1>
          <h2 className="text-xl font-semibold">
            Some of the <span className="text-purple-500">Works/Projects</span>{' '}
            I've done
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-10 w-full">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  )
}

export default portfolio
