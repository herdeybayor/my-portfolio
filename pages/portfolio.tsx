import { url } from 'inspector'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Project from '../components/Portfolio/Project'
import { sanityClient, urlFor } from '../sanity'

interface Project {
  _id: string
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
        <title>Sherifdeen Adebayo | Portfolio</title>
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
          {projects.map((project) => (
            <Project
              key={project._id}
              title={project.title}
              subtitle={project.subtitle}
              frameworks={project.frameworks}
              image={urlFor(project.image).url()}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Footer siteViews={siteViews} />
    </div>
  )
}

export default portfolio

export const getServerSideProps = async () => {
  const query = `*[_type=="project"]{
  _id,
  title,
  subtitle,
  frameworks,
  url,
  image,
}`

  const projects = await sanityClient.fetch(query)

  return {
    props: {
      projects,
    },
  }
}
