import '../styles/globals.css'
import type { AppProps } from 'next/app'
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
        'https://api.countapi.xyz/hit/herifdeenadebayo.com'
      )
      const json = await res.json()
      setSiteViews(json.value)
    }
    fetchPageViews()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="page-switch-animation" />
      ) : (
        <Component siteViews={siteViews} {...pageProps} />
      )}
    </>
  )
}

export default MyApp
