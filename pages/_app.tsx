import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [siteViews, setSiteViews] = useState(0)
  useEffect(() => {
    const fetchPageViews = async () => {
      const res = await fetch(
        'https://api.countapi.xyz/hit/herifdeenadebayo.com'
      )
      const json = await res.json()
      setSiteViews(json.value)
    }
    fetchPageViews()
  }, [])
  return <Component siteViews={siteViews} {...pageProps} />
}

export default MyApp
