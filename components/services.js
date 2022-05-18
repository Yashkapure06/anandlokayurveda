import React from 'react';


const Services = () => {
    return (
        <div>
            <section id="tabs" className="tabs">
            <div className="section-title">
                <h2>Services</h2>
                <div><strong>Anandlok Ayurvedic &amp; Panchakarma Hospital</strong> provides best services related to all the disorders with natural therapies. </div>
                </div>
                <div className="container" >

                    <ul className="nav nav-tabs row d-flex">
                        <li className="nav-item col-3"> 
                        <a className="nav-link active show" data-bs-toggle="tab"
                            data-bs-target="#tab-1"> 
                            <i className="ri-gps-line"></i>
                            <h4 className="d-none d-lg-block">Panchakarma Therapy </h4>
                        </a> 
                        </li>
                        <li className="nav-item col-3"> 
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2"> 
                        <i className="ri-user-heart-line"></i>
                            <h4 className="d-none d-lg-block">Ayurveda Diagnosis and treatment</h4>
                        </a> 
                        </li>
                        <li className="nav-item col-3"> 
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3"> 
                        <i className="ri-heart-pulse-line"></i>
                            <h4 className="d-none d-lg-block">Marma Therapy </h4>
                        </a> 
                        </li>
                        <li className="nav-item col-3">
                             <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                <i className="ri-fire-line"></i>
                            <h4 className="d-none d-lg-block">Yoga </h4>
                        </a> 
                        </li>
                    </ul>

                    <div className="tab-content">
                        {/* 1st Tab */}
                    <div className="tab-pane active show" id="tab-1">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"  data-aos-delay="100">
                        <h3>What is panchakarma?</h3>
                            <p className="font-italic"><strong> Panchakarma is the purification and detoxification measure of
									Vata, Pitta, Kapha ie. aggravated doshas(toxins) comprising five cleansing
									procedures in the body. The five eliment are space,air, fire, water and earth,
									strengthens Agni (digestive fire), detoxifies ama (toxins) and rejuvenates the
									entire body—the result—a sense of good health that promotes happiness.Balanced
									doshas, strong agni, balanced dhatus, detoxified body, is the eternal secret of
									health &amp; happiness.<br/><br/></strong> </p>
                                    <ul > 
										<li><i className="ri-star-s-line"></i> Shirodhara</li>
									 
										<li><i className="ri-star-s-line"></i>Shiropichu</li>
									 
										<li><i className="ri-star-s-line"></i>Pralepnam</li>
									
										<li><i className="ri-star-s-line"></i>Raktamokshan (Jalaukavcharnan)</li>
									
										<li><i className="ri-star-s-line"></i> Uttar Basti</li>
									 
										<li><i className="ri-star-s-line"></i>Mukhalepa</li>
									 </ul>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center"  data-aos-delay="200">
                            <img src="assets/img/panchakarma-treatment.jpg" alt="Images" className="img-fluid"/>
                        </div>
                        </div>
                    </div>

                    {/* 2nd Tab */}
                    <div className="tab-pane" id="tab-2">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3> Ayurveda Diagnosis and treatment </h3>
                        <p className="font-italic"> <b>Ayurveda Diagnosis Ways</b> <br /> No two individuals are alike.
								Anandlok Ayurveda examines the patient and disease with an aim to diagnose the root
								cause and offer completely personalized treatment to not only just treat disease but to
								improve Quality of life, life expectancy, Happiness index of Individual. At Anandlok
								ample time is given to diagnosis to find root cause. </p>
                                <h3>All Panchakarma Therapies</h3>
							<ul > 
									<li><i className="ri-star-s-line"></i>Nadi Nadi Pariksha</li>
								
									<li><i className="ri-star-s-line"></i> Prakruti Analysis </li>
								</ul> 
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="assets/img/ayurveda diagnosis.jfif" alt="Images" className="img-fluid"/>
                        </div>
                        </div>
                    </div>

                    {/* 3rd Tab */}
                    <div className="tab-pane" id="tab-3">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Marma Therapy</h3>
                            <p className="font-italic"> <b>Anandlok Ayurveda</b> offers MARMA
								THERAPY a 5,000-year-old Indian Ayurvedic practice and the main focus of marma therapy
								is the opening of energy channels for healing the body, mind, and spirit. </p>
							
                            <div className="font-italic" style={{"textAlign":"justify"}}>
								<h2>Anandlok Service</h2>
								    <p className="font-italic"> <b> The Sanskrit</b> word
									<b>“marma”</b> actually means vulnerable point. Marma therapy harnesses the energies
									in the marma points for healing. Simply, Marma Therapy has an effect on the subtle
									energy of Marma points to relieve stiff muscles and boost blood circulation. The
									focus of marma point massage is primarily to manipulate subtle energy or prana, but
									physically they’re also very effective for relieving stiff muscles and boosting
									circulation.
                                    </p>
							</div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="assets/img/marma-therapy-500x500.jpg" alt="Images" className="img-fluid"/>
                        </div>
                        </div>
                    </div>
                    {/* 4th Tab */}
                    <div className="tab-pane" id="tab-4">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3> Yoga </h3>
                            
							<p className="font-italic"> <b>“Yoga is not a work-out it is a work-in, and this is the point of
									spiritual practice to make us teachable to open up our hearts and focus our
									awareness so that we can know what we already know and be who we already are.” </b>
							</p>
                            <h4>Best Benifits of Yoga:</h4>
							<div className="shiroitems">
								<ul>
								<li><i className="ri-arrow-right-s-line"></i>Yoga improves strength, balance and
									flexibility.</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga helps with back pain relief.</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga can ease arthritis symptoms.</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga benefits heart health. </li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga relaxes you, to help you sleep better.
								</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga can mean more energy and brighter moods.
								</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga helps you manage stress.</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga connects you with a supportive community.
								</li>
								<li><i className="ri-arrow-right-s-line"></i>Yoga promotes better self-care.</li>
							</ul>
							</div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="assets/img/yogamain.png" alt="Images" className="img-fluid"/>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>
        </div>
    );
}

export default Services;
