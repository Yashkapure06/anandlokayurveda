/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function contact() {
    return (
        <div>
            <NextSeo
                charSet="utf-8"
                viewport="width=device-width, initial-scale=1.0"
                robots="index, follow"
                title="Contact Anandlok Ayurveda &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda"
                description="Contact Anandlok Ayurveda and Panchakarma Hospital by filling the Application form or You can click on the phone number present here. Check our location on google maps....."
                canonical="https://www.anandlokayurved.com/contact"
                googlebot={true}
                rating={5}
                openGraph={{
                    url: "https://www.anandlokayurved.com/contact",
                    title: "Contact Anandlok Ayurveda &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                    type: "HealthCare Website",
                    description: "Contact Anandlok Ayurveda and Panchakarma Hospital by filling the Application form or You can click on the phone number present here. Check our location on google maps.....",
                    copyright: "Anandlok Ayurveda",
                    author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
                    keywords: "Images of Ayurveda and Panchakarma,Which Treatments are provided by Anandlok Ayurveda ?,आनंदलोक आयुर्वेद.,Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Best Ayurvedic &amp; Panchakarma Doctors in Nagpur, Best Treatments of Ayurveda and Panchakarma in nagpur, arthritis treatment in ayurveda, ayurvedic hospital, best ayurvedic treatments in Nagpur, best ayurvedic treatment in Maharashtra, Best ayurvedic treatment in India, SPINAL DISEASES, DIGESTIVE DISORDERS, LIVER DISEASES, RESPIRATORY DISEASE, ARTHRITIS, JOINT DISEASE,",
                    images: [
                        {
                        url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                        alt:"Contact Anandlok Ayurveda &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                        type:"image/png",
                        }
                    ],
                    site_name: "Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                }}
                twitter={{
                handle: "@AnandlokH",
                site: "@AnandlokH",
                title: "Contact Anandlok Ayurveda &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                url: "https://www.anandlokayurved.com/contact",
                images:[{
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Contact Anandlok Ayurveda &amp; Panchakarma Hospital in Nagpur | Anandlok Ayurveda",
                    type:"image/png",
                }],
                description: "Contact Anandlok Ayurveda and Panchakarma Hospital by filling the Application form or You can click on the phone number present here. Check our location on google maps.....",
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
            <section id="contact" className="contact">
                    <div className="container" >

                        <div className="section-title">
                        <h2>Contact</h2>
                        <p>We would love to hear your problems! Please fill this Form.</p>
                        </div>

                        <div className="row"  data-aos-delay="100">

                            
                            <div className="contain">

                                <div className="wrapper">

                                    <div className="form">
                                        <h4>GET IN TOUCH</h4>
                                        <h2 className="form-headline">Send us a message</h2>
                                        <form id="submit-form" action="mailto:contactanandlok@gmail.com">
                                            <p>
                                            <input id="name" className="form-input" type="text" placeholder="Your Name*" required/>
                                            <small className="name-error"></small>
                                            </p>
                                            <p>
                                            <input id="email" className="form-input" type="email" placeholder="Your Email*"/>
                                            <small className="name-error"></small>
                                            </p>
                                            <p className="full-width">
                                            <input id="company-name" className="form-input" type="text" placeholder="Subject*" required/>
                                            <small></small>
                                            </p>
                                            <p className="full-width">
                                            <textarea  minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                                            <small></small>
                                            </p>
                                            
                                            <p className="full-width">
                                            {/* <input type="submit" className="submit-btn" value="Submit Form" onClick="checkValidations()"/> */}
                                            <button className="submit-btn" type="submit">Submit Form</button>
                                            <button className="reset-btn" type="reset">Reset Form</button>
                                            </p>
                                        </form>
                                    </div>

                                    <div className=" contact-wrapper">

                                        <div className="col-lg-12">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="info-box">
                                                    <i className="bx bx-map"></i>
                                                    <h3>Our Address</h3>
                                                    <p style={{"text-align":"center"}}>Anandlok Ayurveda And Panchakarma<br/> Multi specialty Hospital Nagpur<br/> 5 Lanjewar Layout Tatya Tope<br/> Nagar - 440015, IND</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="info-box mt-4">
                                                    <i className="bx bx-envelope"></i>
                                                    <h3>Email Us</h3>
                                                    <p style={{"text-align":"center"}}><Link href="mailto:anandlokhealthfoundation@gmail.com">anandlokhealthfoundation@gmail.com</Link><br/><Link href="mailto:contactanandlok@gmail.com">contactanandlok@gmail.com</Link></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="info-box mt-4">
                                                    <i className="bx bx-phone-call"></i>
                                                    <h3>Call Us</h3>
                                                    <p style={{"text-align":"center"}}><Link href="tel:+91 7420026989">+91 7420026989</Link></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </section>
            
                
        </div>
    )
}
