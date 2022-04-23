import Head from 'next/head'
import React from 'react'
import ContactInfo from '../components/Contact/ContactInfo'
import MessageMe from '../components/Contact/MessageMe'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  siteViews: number
}

const contact = ({ siteViews }: Props) => {
  return (
    <div className="relative h-screen w-full overflow-y-scroll bg-creamy font-sans scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
      <Head>
        <title>Contact Me &mdash; Sherifdeen Adebayo || @herdeybayor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex min-h-screen flex-col items-center bg-creamy pt-32">
        {/* Top Texts */}
        <div className="lg-px-20 flex flex-col space-y-2 px-10 text-center">
          <h1 className="text-4xl font-semibold">
            Contact <span className="text-purple-500">Me</span>
          </h1>
          <h2 className="text-xl font-semibold">
            <span className="text-purple-500">Get</span> In Touch
          </h2>
        </div>

        <div className="mt-5 flex w-full grid-cols-10 flex-col gap-24 p-10 lg:grid">
          <MessageMe />
          <ContactInfo />
        </div>
      </div>

      <Footer siteViews={siteViews} />
    </div>
  )
}

export default contact
