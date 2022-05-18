/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Ayurvedadiagnosis from '../components/ayurvedadiagnosis';
import Marma from '../components/marma';
import Panchakarma from '../components/panchakarma';
import Yoga from '../components/yoga';
import Meditation from '../components/meditation';
import Suvarnaprashan from '../components/suvarnaprashan';
import Uturn from '../components/uturn';
import Aakargarbhasanskar from '../components/aakargarbhasanskar';
import { FAQPageJsonLd, NextSeo } from 'next-seo';
import Tagscript from '../components/tagscript';

const Services = () => {
    return (
        <>
            <NextSeo
                charSet="utf-8"
                viewport="width=device-width, initial-scale=1.0"
                robots="index, follow"
                title="Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda"
                description="Anandlok Ayurveda provides Authentic services with highly trained Doctors , the treatments such as all the 1. Panchakarma therapies, 2.Ayurved Diagnosis, 3.Marma Therapy, 4.Yoga, 5.Meditation, 6.Suvarnaprashan, 7.Uturn lifestyle Reversal Program, 8.Aakar Garbh Sanskar and Parenting."
                canonical="https://www.anandlokayurved.com/services"
                googlebot={true}
                rating={5}
                openGraph={{
                url: "https://www.anandlokayurved.com/services",
                title: "Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda",
                type: "HealthCare Website",
                description: "Anandlok Ayurveda provides Authentic services with highly trained Doctors , the treatments such as all the 1. Panchakarma therapies, 2.Ayurved Diagnosis, 3.Marma Therapy, 4.Yoga, 5.Meditation, 6.Suvarnaprashan, 7.Uturn lifestyle Reversal Program, 8.Aakar Garbh Sanskar and Parenting.",
                copyright: "Anandlok Ayurveda",
                author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
                keywords: "आनंदलोक आयुर्वेद.,Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Best Ayurvedic &amp; Panchakarma Doctors in Nagpur,best services,Best Panchakarma Service in Nagpur, Best Ayurvedic Hospital in Nagpur,what are the services provided by anandlok ayurveda, anandlok ayurveda services ,panchakarma in Anandlok Ayurveda,panchakarma treatments in Anandlok Ayurveda, panchakarma therapy in Anandlok Ayurveda, ayurvedic therapy in Anandlok Ayurveda,panchakarma benefits ,ayurveda panchakarma in Anandlok Ayurveda,basti treatment in Anandlok Ayurveda,ayurvedic treatments in Anandlok Ayurveda, What is Panchakarma?, What are different types of Panchakarma treatments/Thereapies?",
                images: [
                    {
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda",
                    type:"image/png",
                    }
                ],
                site_name: "Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda",
                }}
                twitter={{
                handle: "@AnandlokH",
                site: "@AnandlokH",
                title: "Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda",
                url: "https://www.anandlokayurved.com/services",
                images:[{
                    url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                    alt:"Best Services of Ayurvedic &amp; Panchakarma in Nagpur | Anandlok Ayurveda",
                    type:"image/png",
                }],
                description: "Anandlok Ayurveda provides Authentic services with highly trained Doctors , the treatments such as all the 1. Panchakarma therapies, 2.Ayurved Diagnosis, 3.Marma Therapy, 4.Yoga, 5.Meditation, 6.Suvarnaprashan, 7.Uturn lifestyle Reversal Program, 8.Aakar Garbh Sanskar and Parenting.",
                cardType: "summary_large_image",
                }}
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                      questionName: 'What is panchakarma?',
                      acceptedAnswerText: 'Panchakarma is the purification and detoxification measure of Vata, Pitta, Kapha ie. aggravated doshas(toxins) comprising five cleansing procedures in the body. The five eliment are space,air, fire.....',
                    },
                    {
                      questionName: 'What are the types of All Panchakarma Therapies?',
                      acceptedAnswerText: '1. Shirodhara, 2. Shiropichu, 3. Tarpan, 4. Nasya, 5. Snehan, 6.Swedana, 7.Pindasewda, 8. Kati Basti, 9. Hriday Basti, 10. Janu Basti, ...Read More',
                    },
                    {
                        questionName: 'What is Ayurveda Diagnosis ?',
                        acceptedAnswerText: '<strong>Ayurveda Diagnosis Ways - </strong>No two individuals are alike. Anandlok Ayurveda examines the patient and disease with an aim to diagnose the root cause and offer completely personalized ......',
                    },
                    {
                        questionName: 'What is Marma Therapy?',
                        acceptedAnswerText: 'Anandlok Ayurveda offers MARMA THERAPY a 5,000-year-old Indian Ayurvedic practice and the main focus of marma therapy is the opening of energy channels for healing the body, mind, and spirit.',
                    },
                    {
                        questionName: 'What is Yoga?',
                        acceptedAnswerText: 'Yoga is not a work-out it is a work-in, and this is the point of spiritual practice to make us teachable to open up our hearts and focus our awareness so that we can know what we already know and be who we already are.',
                    },
                    {
                        questionName: 'What is Meditation?',
                        acceptedAnswerText: 'Meditation fuses your inner and outer selves, making you one with your body. It allows you to receive and experience the Divine Presence.',
                    },
                    {
                        questionName: 'What is the importance of Suvarnaprashan Sanskar?',
                        acceptedAnswerText: 'Spending time with your children is more important than spending money on them.One of the sixteen Samskaras (rituals) which were described in ancient scriptures is <strong>Suvarnaprashana</strong>. ',
                    },
                    {
                        questionName: 'What is Uturn Lifestyle Disease Reversal Program ?',
                        acceptedAnswerText: 'A disease associated with the way a person or group of people lives. Lifestyle diseases include atherosclerosis, heart disease, and stroke; obesity and type 2 diabetes;Thyroid,PCOD etc... ',
                    },
                    {
                        questionName: 'What is Aakar Garbhasanskar and Parenting ?',
                        acceptedAnswerText: 'The Human soul has sojourned in lower and higher forms, migrating from one to another according to the samskaas or impressions, but it is only in the highest form as a human beingthat it attains to freedom.',
                    },
                  ]}
            />
            <Head>
                <Tagscript/>
            </Head>
            <section id="tabs" className="tabs">
                <div className="container" >
                        <ul className="nav nav-tabs row d-flex">
                            <li className="nav-item col-3"> <a className="nav-link active show" data-bs-toggle="tab"
                                    data-bs-target="#tab-1"> <i className="ri-gps-line"></i>
                                    <h4 className="d-none d-lg-block">Panchakarma Therapy </h4>
                                </a> </li>


                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2"> <i
                                        className="ri-user-heart-line"></i>
                                    <h4 className="d-none d-lg-block">Ayurveda Diagnosis and treatment</h4>
                                </a> </li>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3"> <i
                                        className="ri-heart-pulse-line"></i>
                                    <h4 className="d-none d-lg-block">Marma Therapy </h4>
                                </a> </li>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4"> <i
                                        className="ri-fire-line"></i>
                                    <h4 className="d-none d-lg-block">Yoga </h4>
                                </a> </li>
                            <p style={{"padding": "10px"}}></p>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5"> <i
                                        className="ri-hand-heart-line"></i>
                                    <h4 className="d-none d-lg-block">Meditation</h4>
                                </a> </li>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6"> <i
                                        className="ri-sun-line"></i>
                                    <h4 className="d-none d-lg-block">Suvarnaprashan</h4>
                                </a> </li>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-7"> <i
                                        className="ri-clockwise-line"></i>
                                    <h4 className="d-none d-lg-block">Uturn lifestyle disease Reversal Program</h4>
                                </a> </li>
                            <li className="nav-item col-3"> <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-8"> <i
                                        className="ri-empathize-line"></i>
                                    <h4 className="d-none d-lg-block">Aakar Garbhasanskar and Parenting</h4>
                                </a> </li>
                        </ul>
                        <div className="tab-content">


                            <div className="tab-pane active show" id="tab-1">
                                <Panchakarma  id="tab1"/>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <Ayurvedadiagnosis className="tab-pane"  id="tab2"/>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <Marma className="tab-pane"  id="tab3"/>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <Yoga className="tab-pane"  id="tab4"/>
                            </div>
                            <div className="tab-pane" id="tab-5">
                                <Meditation className="tab-pane"  id="tab5"/>
                            </div>
                            <div className="tab-pane" id="tab-6">
                                <Suvarnaprashan className="tab-pane"  id="tab6"/>
                            </div>
                            <div className="tab-pane" id="tab-7">
                                <Uturn className="tab-pane"  id="tab7"/>
                            </div>
                            <div className="tab-pane" id="tab-8">
                                <Aakargarbhasanskar className="tab-pane"  id="tab8"/>
                            </div> 

                        </div> 
                    </div>
            </section>
        </>
    );
}

export default Services;
