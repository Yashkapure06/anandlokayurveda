/* eslint-disable react/no-unescaped-entities */
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import Head from "next/head";
import AboutMain from "../components/about";
import Counter from "../components/counter";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Services from "../components/services";
import Tagscript from "../components/tagscript";
import Team from "../components/team";


export default function Home() {
  
  return (
    <div>
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
        additionalMetaTags={[{
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        }]}
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
      <SocialProfileJsonLd

        type="Hospital"
        name="Anandlok Ayurveda"
        url="https://www.anandlokayurved.com"
        sameAs={[
          'https://www.facebook.com/ahhcnagpur',
          'https://www.instagram.com/anandlokayurved/',
          'https://www.linkedin.com/in/anandlok-ayurved-panchakarma-hospital-2b69191b6',
          'https://www.youtube.com/channel/UCryNFpV0g3W4Na8feogOF7Q',
        ]}

      />

      <Tagscript/>
      <Hero />
      <AboutMain />
      <Counter />
      <Services />
      <Gallery />
      <Team/>

    </div>
  )
}
