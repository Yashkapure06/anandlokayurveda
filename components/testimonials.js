import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <div className="container" >
          <div className="section-title">
            <h2>Testimonials</h2>
            <div>
              Our Testimonials 
            </div>
          </div>

          <div className="testimonials-slider swiper-container" 
            data-aos-delay="100">
                <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/AOh14GjCJDPlN2_ZoOKmFysXuaL1Ofb01eI60kp1FXYY=s128-c0x00000000-cc-rp-mo"
                                        className="testimonial-img"
                                        alt="Uttara Univarsalenergy"
                                    />
                                    <h3>Uttara Univarsalenergy</h3>
                                    <h4>5 months ago</h4>
                                    <div>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Very happy with treatment, doctor is so intellect and caring, 
                                        anandlok cares you as a human so cost effective my hyperacidity was gone thanks anandlok 
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                </div>

                
            </div>

            


            {/* <div className="swiper-pagination"></div> */}
          </div>
        
      </section>
    </div>
  );
};

export default Testimonials;
