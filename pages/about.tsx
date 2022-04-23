import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutPage'
import MyServices from '../components/AboutPage/MyServices'
import MySkills from '../components/AboutPage/MySkills'
import Footer from '../components/Footer'

interface Props {
  siteViews: number
}

const about = ({ siteViews }: Props) => {
  return (
    <div className="relative h-screen w-full overflow-y-scroll bg-creamy font-sans scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
      <Head>
        <title>About &mdash; Sherifdeen Adebayo || @herdeybayor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AboutMe />
      <MyServices />
      <MySkills />
      <Footer siteViews={siteViews} />
    </div>
  )
}

export default about
