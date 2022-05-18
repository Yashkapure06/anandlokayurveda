import React from 'react';
import Head from 'next/head';
import Achievementpart1 from '../components/achievementpart1';
import Achievementspart2 from '../components/achievementspart2';
import Achievementspart3 from '../components/achievementspart3';
import { NextSeo } from 'next-seo';

const Achievements = () => {
    return (
        <div>
            <NextSeo
                
                charSet="utf-8"
                viewport="width=device-width, initial-scale=1.0"
                robots="index, follow"
                title="Achievements| Trophies| Awards of Ayurvedic &amp; Panchakarma Hospital  | Anandlok Ayurveda"
                description="Anandlok Ayurveda is reaching heights with by gaining achievements not only in India but also all over the world. Here you can see all the photos of their achievement."
                canonical="https://www.anandlokayurved.com/achievements"
                googlebot={true}
                rating={5}
                openGraph={{
                url: "https://www.anandlokayurved.com/achievements",
                title: "Achievements| Trophies| Awards of Ayurvedic &amp; Panchakarma Hospital  | Anandlok Ayurveda",
                type: "HealthCare Website",
                description: "Anandlok Ayurveda is reaching heights with by gaining achievements not only in India but also all over the world. Here you can see all the photos of their achievement.",
                copyright: "Anandlok Ayurveda",
                author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
                keywords: "Images of Ayurveda and Panchakarma,Which Treatments are provided by Anandlok Ayurveda ?,आनंदलोक आयुर्वेद.,Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Best Ayurvedic &amp; Panchakarma Doctors in Nagpur, Best Treatments of Ayurveda and Panchakarma in nagpur, arthritis treatment in ayurveda, ayurvedic hospital, best ayurvedic treatments in Nagpur, best ayurvedic treatment in Maharashtra, Best ayurvedic treatment in India, SPINAL DISEASES, DIGESTIVE DISORDERS, LIVER DISEASES, RESPIRATORY DISEASE, ARTHRITIS, JOINT DISEASE,",
                images: [
                    {
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Achievements| Trophies| Awards of Ayurvedic &amp; Panchakarma Hospital  | Anandlok Ayurveda",
                    type:"image/png",
                    }
                ],
                site_name: "Images of Ayurveda and Panchakarma | Anandlok Ayurveda",
                }}
                twitter={{
                handle: "@AnandlokH",
                site: "@AnandlokH",
                title: "Achievements| Trophies| Awards of Ayurvedic &amp; Panchakarma Hospital  | Anandlok Ayurveda",
                url: "https://www.anandlokayurved.com/achievements",
                images:[{
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Achievements| Trophies| Awards of Ayurvedic &amp; Panchakarma Hospital  | Anandlok Ayurveda",
                    type:"image/png",
                }],
                description: "Anandlok Ayurveda is reaching heights with by gaining achievements not only in India but also all over the world. Here you can see all the photos of their achievement.",
                cardType: "summary_large_image",
                }}
            />
            <Head>
                
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}></script>

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script data-ad-client="ca-pub-5126308192729168" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
                <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
                    />
            </Head>
            <section className="portfolio">
                <div className="container" >

                    <div className="section-title">
                        
                        <h2>Achievements</h2>
                        {/* <p>View Our Gallery</p> */}
                    </div>
                    
                    
                    {/* ***************************************** */}
                    <Achievementpart1/>
                    <Achievementspart2/>
                    <Achievementspart3/>
                    

                </div>
                </section>
        </div>
    );
}

export default Achievements;
