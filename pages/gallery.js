import React from 'react';
import Head from 'next/head';
import Hospital from '../components/hospital';
import Inagouration from '../components/inagouration';
import Treatmentimg from '../components/treatmentimg';
import Testimonials from '../components/testimonials';
import { NextSeo } from 'next-seo';

const Gallery = () => {
    return (
        <div>
            <NextSeo
                
                charSet="utf-8"
                viewport="width=device-width, initial-scale=1.0"
                robots="index, follow"
                title="Gallery of Ayurveda and Panchakarma | Anandlok Ayurveda"
                description="Here are some of the best Treatments provided by Anandlok Ayurveda in INDIA as well as all over the world. The Treatments includes 1.ARTHRITIS /JOINT DISEASE, 2.SPINAL DISEASES, 3.DIGESTIVE DISORDERS, 4.LIVER DISEASES, 5.RESPIRATORY DISEASES and so on.."
                canonical="https://www.anandlokayurved.com/gallery"
                googlebot={true}
                rating={5}
                openGraph={{
                url: "https://www.anandlokayurved.com/gallery",
                title: "Gallery of Ayurveda and Panchakarma | Anandlok Ayurveda",
                type: "HealthCare Website",
                description: "Best Treatments of Ayurveda &amp; Panchakarma  provided by Anandlok Ayurveda in INDIA as well as all over the world. The Treatments includes 1.ARTHRITIS /JOINT DISEASE, 2.SPINAL DISEASES, 3.DIGESTIVE DISORDERS, 4.LIVER DISEASES, 5.RESPIRATORY DISEASES and so on..",
                copyright: "Anandlok Ayurveda",
                author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
                keywords: "Images of Ayurveda and Panchakarma,Which Treatments are provided by Anandlok Ayurveda ?,आनंदलोक आयुर्वेद.,Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Best Ayurvedic &amp; Panchakarma Doctors in Nagpur, Best Treatments of Ayurveda and Panchakarma in nagpur, arthritis treatment in ayurveda, ayurvedic hospital, best ayurvedic treatments in Nagpur, best ayurvedic treatment in Maharashtra, Best ayurvedic treatment in India, SPINAL DISEASES, DIGESTIVE DISORDERS, LIVER DISEASES, RESPIRATORY DISEASE, ARTHRITIS, JOINT DISEASE,",
                images: [
                    {
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Gallery of Ayurveda and Panchakarma | Anandlok Ayurveda",
                    type:"image/png",
                    }
                ],
                site_name: "Images of Ayurveda and Panchakarma | Anandlok Ayurveda",
                }}
                twitter={{
                handle: "@AnandlokH",
                site: "@AnandlokH",
                title: "Gallery of Ayurveda and Panchakarma | Anandlok Ayurveda",
                url: "https://www.anandlokayurved.com/gallery",
                images:[{
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Gallery of Ayurveda and Panchakarma | Anandlok Ayurveda",
                    type:"image/png",
                }],
                description: "Here are some of the best Treatments provided by Anandlok Ayurveda in INDIA as well as all over the world. The Treatments includes 1.ARTHRITIS /JOINT DISEASE, 2.SPINAL DISEASES, 3.DIGESTIVE DISORDERS, 4.LIVER DISEASES, 5.RESPIRATORY DISEASES and so on..",
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
                        
                     <Testimonials/>
                    <h2>Gallery</h2>
                    <p>View Our Gallery</p>
                    </div>
                    
                    <Inagouration/>
                    <Hospital/>
                    <Treatmentimg/>
                    
                    {/* ***************************************** */}
                    
                    

                </div>
                </section>
        </div>
    );
}

export default Gallery;
