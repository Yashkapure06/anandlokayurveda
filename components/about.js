import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <section className="about section-bg">
                <div className="container" >

                    <div className="row no-gutters">
                    <div className="content col-xl-5 d-flex align-items-stretch">
                        <div className="content">
                        <h3>Anandlok Health Foundation</h3>
                        <p>
                        <strong>The foundation of happiness is health</strong> — and that’s more than the absence of illness. Anandlok helps you discover true health by taking a cohesive approach of balancing the body, mind and consciousness to its natural state through Holistic Approach Our main goal is to provide relief to patient suffering from all kinds of ailments and illnesses physical,emotional,mental at the most affordable prices.
                        </p>
                        <Link href="/about"><a className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a></Link>
                        </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-md-6 icon-box"  data-aos-delay="100">
                            <i className="bx bx-receipt"></i>
                            <h4>Chronic Diseases Reversal programs.</h4>
                            <p>At Reverse Factor, we empower people with the right information and handhold them to reverse their diseases and create good health. </p>
                            </div>
                            <div className="col-md-6 icon-box"  data-aos-delay="200">
                            <i className="bx bx-cube-alt"></i>
                            <h4>Life Style Diseases Reversal Programs.</h4>
                            <p>Lifestyle Medicine is the first program scientifically proven to “undo” (reverse) heart disease and other chronic conditions.</p>
                            </div>
                            <div className="col-md-6 icon-box"  data-aos-delay="300">
                            <i className="bx bx-images"></i>
                            <h4> Reversing autoimmune conditions.</h4>
                            <p>A functional medicine approach to autoimmune disorders has the possibility of reversing the disease process by enabling your body to heal itself.</p>
                            </div>
                            <div className="col-md-6 icon-box"  data-aos-delay="400">
                            <i className="bx bx-shield"></i>
                            <h4>Retreats programs.</h4>
                            <p>These wellness retreats, all-inclusives, and great solo escapes for singles, offer an array of programs to improve your mental health.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>
        </div>
    );
}

export default About;
