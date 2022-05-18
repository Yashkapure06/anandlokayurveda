import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Layout from '../components/Layout/layout'
import { NextSeo } from "next-seo"
import Tagscript from '../components/tagscript'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Layout>
      <Tagscript/>
        <NextSeo
          charSet="utf-8"
          viewport="width=device-width, initial-scale=1.0"
          robots="index, follow"
          title="Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda"
          description="Anandlok Ayurveda provides Authentic Health care innovating within Ayurveda and Panchakarma blending with ancient practices such as Marma Therapy , yoga and Meditation to improve quality of life ,life expectancy, Happiness Index."
          canonical="https://www.anandlokayurved.com/"
          googlebot={true}
          openGraph={{
            url: "https://www.anandlokayurved.com/",
            title: "Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
            type: "HealthCare Website",
            description: "Anandlok Ayurveda provides Authentic Health care innovating within Ayurveda and Panchakarma blending with ancient practices such as Marma Therapy , yoga and Meditation to improve quality of life ,life expectancy, Happiness Index.",
            copyright: "Anandlok Ayurveda",
            author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
            keywords:"आनंदलोक आयुर्वेद.,Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Best Ayurvedic &amp; Panchakarma Doctors in Nagpur,anandlok ayurveda twitter, best services, anandlok health foundation,what is panchakarma?, Ayurveda Diagnosis,What is Marma Therapy,",
            images: [
              {
                url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                alt:"Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                type:"image/png",
              }
            ],
            site_name: "Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
          }}
          twitter={{
            handle: "@AnandlokH",
            site: "@AnandlokH",
            title: "Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
            url: "https://www.anandlokayurved.com/",
            images:[{
              url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
              alt:"Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
              type:"image/png",
            }],
            description: "Anandlok Ayurveda provides Authentic Health care innovating within Ayurveda and Panchakarma blending with ancient practices such as Marma Therapy , yoga and Meditation to improve quality of life ,life expectancy, Happiness Index.",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App