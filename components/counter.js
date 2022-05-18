import React from 'react';

const Counter = () => {
    return (
        <div>
            <section id="counts" className="counts">
                <div className="container" >

                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="2" className="purecounter"></span>
                            <p>Years of Experience</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>
                            <span data-purecounter-start="0" data-purecounter-end="320000" data-purecounter-duration="2" className="purecounter"></span>
                            <p>Consulted</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                            <i className="bi bi-headset"></i>
                            <span data-purecounter-start="0" data-purecounter-end="340000" data-purecounter-duration="2" className="purecounter"></span>
                            <p>Hours Of Consultation</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                            <i className="bi bi-people"></i>
                            <span data-purecounter-start="0" data-purecounter-end="80000" data-purecounter-duration="2" className="purecounter"></span>
                            <p>Consulted for uTurn lifestyle disease reversal program</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default Counter;
