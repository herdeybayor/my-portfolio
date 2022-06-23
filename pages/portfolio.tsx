import { url } from 'inspector'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Project from '../components/Portfolio/Project'
import { sanityClient, urlFor } from '../sanity'

interface Project {
  _id: string
  _createdAt: string
  title: string
  subtitle: string
  frameworks: string
  image: {
    asset: {
      url: string
    }
  }
  url: string
}
interface Props {
  siteViews: number
  projects: [Project]
}

const portfolio = ({ siteViews, projects }: Props) => {
  return (
    <div className="relative h-screen w-full overflow-y-scroll bg-creamy font-sans scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
      <Head>
        <title>Portfolio &mdash; Sherifdeen Adebayo || @herdeybayor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex min-h-screen flex-col items-center bg-creamy pt-32">
        {/* Top Texts */}
        <div className="lg-px-10 flex flex-col space-y-2 px-10 text-center">
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
          {projects.map((project, index) => (
            <Project
              key={project._id}
              index={index + 1}
              title={project.title}
              subtitle={project.subtitle}
              frameworks={project.frameworks}
              image={urlFor(project.image).url()}
              url={project.url}
            />
          ))}
        </div>
      </div>
      {/* Banner */}
      <div className="flex w-full flex-col items-center space-y-5 bg-yellow-400 px-10 py-10 text-white lg:px-20">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold lg:text-5xl">
            Let's work <span className="text-purple-500">Together</span>
          </h1>
          <p className="text-lg lg:text-2xl">
            I’m available for freelance work.
          </p>
        </div>

        <Link href="/contact">
          <button className="service__card rounded-full bg-yellow-400 py-4 px-8 font-semibold transition-all duration-300 hover:scale-110">
            SAY HELLO
          </button>
        </Link>
      </div>
      {/* Footer */}
      <Footer siteViews={siteViews} />
    </div>
  )
}

export default portfolio

export const getStaticProps = async () => {
  const query = `*[_type=="project"]{
  _id,
  _createdAt,
  title,
  subtitle,
  frameworks,
  url,
  image,
} | order(_createdAt desc)`

  const projects = await sanityClient.fetch(query)

  return {
    props: {
      projects,
    },
  }
}
