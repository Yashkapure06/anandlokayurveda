import React from 'react';

const Gallery = () => {
    return (
        <div>
            <section className="portfolio">
                <div className="container" >

                    <div className="section-title">
                    <h2>Gallery</h2>
                    <p>View Our Gallery</p>
                    </div>

                    <div className="row"  data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">Doctors</li>
                        <li data-filter=".filter-card">Hospital</li>
                        <li data-filter=".filter-web">Treatments</li>
                        </ul>
                    </div>
                    </div>

                    <div className="row portfolio-container"  data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c2.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Inauguration</h4>
                            <p>Doctors</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Inauguration"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/cosmatology.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Cosmatology</h4>
                            <p>Treatment</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/cosmatology.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Cosmatology"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c10.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Worship</h4>
                            <p>Doctor</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c10.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Worship"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c3.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Hospital</h4>
                            <p>Hospital</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Hospital"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/digestive-diseases.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Digestive Diseases</h4>
                            <p>Treatment</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/digestive-diseases.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Digestive Diseases"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c16.jpeg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Team</h4>
                            <p>Doctor</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c16.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Team"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c7.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Hospital</h4>
                            <p>Hospital</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Hospital"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/c9.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Hospital</h4>
                            <p>Hospital</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/c9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Hospital"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/eye-treatments.jpg" className="img-fluid" alt="iMAGES"/>
                        <div className="portfolio-info">
                            <h4>Eye Treatment</h4>
                            <p>Treatment</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/eye-treatments.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Eye Treatment"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
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

export default Gallery;
