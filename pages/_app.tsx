import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [siteViews, setSiteViews] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const removeLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    removeLoading()
    Router.events.on('routeChangeStart', () => setIsLoading(true))
    Router.events.on('routeChangeComplete', () => removeLoading())
    Router.events.on('routeChangeError', () => removeLoading())

    //Fetch Page View
    const fetchPageViews = async () => {
      const res = await fetch(
        'https://api.countapi.xyz/hit/sherifdeenadebayo.com'
      )
      const json = await res.json()
      setSiteViews(json.value)
    }
    fetchPageViews()
  }, [])

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Sherifdeen Adebayo || @herdeybayor</title>
        <meta name="title" content="Sherifdeen Adebayo || @herdeybayor" />
        <meta
          name="description"
          content="A passionate FullStack Dev, 17yrs Old Fullstack dev, A professional UI/UX designer"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sherifdeenadebayo.com/" />
        <meta
          property="og:title"
          content="Sherifdeen Adebayo || @herdeybayor"
        />
        <meta
          property="og:description"
          content="A passionate FullStack Dev, 17yrs Old Fullstack dev, A professional UI/UX designer"
        />
        <meta
          property="og:image"
          content="https://www.sherifdeenadebayo.com/assets/site-preview.png"
        />
        <meta property="og:updated_time" content="2021-12-06T09:23:21.056Z" />
        {/* <meta property="og:updated_time" content={new Date().toISOString()} /> */}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.sherifdeenadebayo.com/"
        />
        <meta
          property="twitter:title"
          content="Sherifdeen Adebayo || @herdeybayor"
        />
        <meta
          property="twitter:description"
          content="A passionate FullStack Dev, 17yrs Old Fullstack dev, A professional UI/UX designer"
        />
        <meta
          property="twitter:image"
          content="https://www.sherifdeenadebayo.com/assets/site-preview.png"
        />
      </Head>

      <>
        {isLoading ? (
          <div className="page-switch-animation" />
        ) : (
          <Component siteViews={siteViews} {...pageProps} />
        )}
      </>
    </>
  )
}

export default MyApp
