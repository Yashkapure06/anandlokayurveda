import React from 'react';
import { NextSeo } from "next-seo";
import Team from '../components/team';
import Tagscript from '../components/tagscript';


const About = () => {
    return (
        <>
        <NextSeo
            charSet="utf-8"
            viewport="width=device-width, initial-scale=1.0"
            robots="index, follow"
            title="About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital"
            description="Why Choose Anandlok Ayurveda?  The Reason is very Simple. Here We have highly Trained Doctors for all kinds of Ayurvedic &amp; Panchakarma Services. The Service provided By Our Doctors is Very low cost of Rs.150 which is consultancy fees which is affordable for all humans."
            canonical="https://www.anandlokayurved.com/about"
            googlebot={true}
            openGraph={{
            url: "https://www.anandlokayurved.com/about",
            title: "About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital",
            type: "HealthCare Website",
            description: "Why Choose Anandlok Ayurveda?  The Reason is very Simple. Here We have highly Trained Doctors for all kinds of Ayurvedic &amp; Panchakarma Services. The Service provided By Our Doctors is Very low cost of Rs.150 which is consultancy fees which is affordable for all humans.",
            copyright: "Anandlok Ayurveda",
            author: 'Best Ayurvedic &amp; Panchakarma Hospital in Nagpur',
            keywords: "Best Ayurvedic &amp; Panchakarma Hospital in Nagpur | Anandlok  Ayurveda, Anandlok Heath Foundation, Dr. Namrata Kapure, Dr. Prashant Kuchankar,Dr. Viraj Gite,by anandlok ayurveda,Best Ayurvedic &amp; Panchakarma Doctors in Nagpur,आनंदलोक आयुर्वेद.",
            images: [
                {
                url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                alt:"About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital",
                type:"image/png",
                }
            ],
            site_name: "About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital",
            type: 'profile',
                profile: {
                  firstName: 'Dr. Prashant ',
                  lastName: 'Kuchankar',
                  username: 'drprashant.kuchankar',
                  gender: 'male',
                },
                images: [
                  {
                    url: 'https://www.anandlokayurved.com/assets/img/team/DrPrashant1.png',
                    width: 850,
                    height: 650,
                    alt: 'Dr. Prashant Kuchankar',
                  },
                ],
            type: 'profile',
                profile: {
                    firstName: 'Dr. Viraj  ',
                    lastName: 'Gite',
                    username: 'viraj.gite',
                    gender: 'male',
                },
                images: [{
                    url: 'https://www.anandlokayurved.com/assets/img/team/DrViraj1.png',
                    width: 850,
                    height: 650,
                    alt: 'Dr. Viraj Gite',
                }],
            type: 'profile',
                profile: {
                    firstName: 'Dr. Namrata   ',
                    lastName: 'Kapure',
                    username: 'namrata.kapure',
                    gender: 'female',
                }, 
                images: [{
                    url: 'https://www.anandlokayurved.com/assets/img/team/DrNamrata1.png',
                    width: 850,
                    height: 650,
                    alt: 'Dr. Namrata Kapure',
                }],
            }}
            twitter={{
            handle: "@AnandlokH",
            site: "@AnandlokH",
            title: "About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital",
            url: "https://www.anandlokayurved.com/about",
            images:[{
                url:"https://www.anandlokayurved.com/assets/img/Main-Ayurveda.png",
                alt:"About Anandlok Ayurveda | Best Ayurvedic &amp; Panchakaram Hospital",
                type:"image/png",
            }],
            description: "Why Choose Anandlok Ayurveda?  The Reason is very Simple. Here We have highly Trained Doctors for all kinds of Ayurvedic &amp; Panchakarma Services. The Service provided By Our Doctors is Very low cost of Rs.150 which is consultancy fees which is affordable for all humans.",
            cardType: "summary_large_image",
            }}
            // Profile 
            // openGraph={{
            //     title: 'Open Graph Profile Title',
            //     description: 'Description of open graph profile',
            //     url: 'https://www.example.com/@firstlast123',
            //     type: 'profile',
            //     profile: {
            //       firstName: 'First',
            //       lastName: 'Last',
            //       username: 'firstlast123',
            //       gender: 'female',
            //     },
            //     images: [
            //       {
            //         url: 'https://www.test.ie/images/profile.jpg',
            //         width: 850,
            //         height: 650,
            //         alt: 'Profile Photo',
            //       },
            //     ],
            //   }}
        />
            <Tagscript/>
            <section className="tretsec ptreat"> <br/>
                            <h1 style={{"text-align":"center"}}><strong>Anandlok Health Foundation</strong></h1>
                    <p><strong >The foundation of happiness is health—and that’s more than the absence of illness.</strong>
                    Anandlok helps you discover true health by taking a cohesive approach of balancing the body, mind and
                    consciousness to its natural state through Holistic Approach Our main goal is to provide relief to patient
                    suffering from all kinds of ailments and illnesses physical,emotional,mental at the most affordable prices. The
                    Highest qualities Ayurveda medicines along with Authentic Panchakarma therapies, Alternative healing
                    Methods. Anandlok uses high tech,state of art scientific measures to prove the power of this low tech lifestyle
                    medicine intervention. The concept of Anandlok science may motivates you to get started, the extraordinary
                    benefits of Natural medicines, lifestyle changes, diet, Exercises, Mental health, you are likely to quickly
                    experience are what we make it sustainable all therapies works towards ones wellness and cure . . .<br/><br/>
                    <strong >Anandlok mainly included only what’s most essential for holistic health.</strong> 
                    We offers different lifestyle medicine programs
                    and packages often works to reverse and help prevent many of most chronic diseases for most peoples. 
                    We consistently achieved bigger changes in lifestyle,better clinical outcomes,larger cost savings and greater
                    adherence than have ever been reported.<br/><br/></p>
                    <p><strong >Our different programs contents are : </strong></p>
                    <br/><br/>
                    
                        <ul style={{"text-align":"justify"}}>
                            <li><i className="ri-star-half-line"></i> Chronic Diseases Reversal programs.</li>
                            <li><i className="ri-star-half-line"></i> Life Style Diseases Reversal Programs.</li>
                            <li><i className="ri-star-half-line"></i> Reversing emotional stress,depression,anxiety,stress programs.</li>
                            <li><i className="ri-star-half-line"></i> Reversing autoimmune conditions.</li>
                            <li><i className="ri-star-half-line"></i> Our science basted services includes Art of Parenting,NeuroScientific
                                Prenatal cares courses, Mental Health programs.</li>
                            <li><i className="ri-star-half-line"></i> Retreats programs.</li>
                        </ul> 
                    
                    <br/>
                    <p>
                    <strong >Awareness is the first step in healing and
                    science is a powerful tool for raising awareness</strong> and it works because it is based on a deep understanding of
                    what is most important and what really matters in Health of Whole Human being We are helping to create a new
                    paradigm of healthcare at a time when is so badly needed by providing better care to more people at authentic
                    cost.So Anandlok works on life process whats going on in their lives with respect to there diet
                    ,exercise,sources of stress, there marriges,their kids ,their work,their homes and their spiritual life’s and
                    pushes them one step a head towards journey of Happiness, Harmony, peace in a meaning ful was by using a
                    multidisciplinary team approach.
                    </p>
                </section>
            <Team />

        </>
    );
};

export default About;
