import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer id="footer">

                <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>आनंदलोक आयुर्वेद<span>.</span></h3>
                        <p>
                        Anandlok Ayurveda And Panchakarma<br/> 
                        Multi specialty Hospital Nagpur<br/> 
                        5 Lanjewar Layout Tatya Tope<br/>
                        Nagar - 440015, IND<br/>
                        <strong>Phone:</strong><Link href="tel:+91 7420026989">+91 7420026989</Link><br/>
                        <strong>Email:</strong><Link href="mailto:anandlokhealthfoundation@gmail.com">anandlokhealthfoundation@gmail.com</Link><br/>
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/"><a>Home</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/about"><a>About us</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Services</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/gallery"><a>Gallery</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/policy"><a>Privacy policy</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Panchakarma Therapy</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Ayurveda Diagnosis and treatment</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Marma Therapy</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Yoga</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Meditation</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Suvarnaprashan</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Uturn lifestyle disease Reversal Program</a></Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Aakar Garbhasanskar and Parenting</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                    <Link href="/"><a><img src="assets/img/anandlok-logo.png" height="250px" width="250px" style={{"background":"#fff",borderRadius:"15%"}}alt="Logo"/></a></Link>
                    </div>

                    </div>
                </div>
                </div>

                <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                    &copy; Copyright <strong><span>Anandlok Ayurveda</span></strong>. All Rights Reserved
                    </div>
                </div>
                <div className="social-links text-center text-md-end pt-3 pt-md-0">
                    <Link href="https://www.youtube.com/channel/UCryNFpV0g3W4Na8feogOF7Q" target="_blank"><a className="youtube"><i className="bx bxl-youtube"></i></a></Link>
                    <Link href="https://www.facebook.com/ahhcnagpur" target="_blank"><a className="facebook"><i className="bx bxl-facebook"></i></a></Link>
                    <Link href="https://www.instagram.com/anandlokayurved/" target="_blank"><a className="instagram"><i className="bx bxl-instagram"></i></a></Link>
                    <Link href="https://wa.me/917420026989/?text=*Hello%20Anandlok%20Ayurveda%20and%20Panchakarma%20Hospital*&app_absent=0" target="_blank"><a className="whatsapp"><i className="bx bxl-whatsapp"></i></a></Link>
                    <Link href="https://www.linkedin.com/in/anandlok-ayurved-panchakarma-hospital-2b69191b6" target="_blank"><a className="linkedin"><i className="bx bxl-linkedin"></i></a></Link>
                </div>
                </div>
                </footer>
        </div>
    );
}

export default Footer;
