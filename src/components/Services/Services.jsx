import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);  
    }
  return (
    <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services-container container grid">



        <div className="services-content">
            <div>
                <i className="uil uil-arrow services-icon"></i>
                <h3 className="services-title">Web <br /> Developer</h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(1)}>View More <i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className={toggleState === 1 ? "services-model active-model" : "services-model"}>
                <div className="services-model-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services-model-close"></i>

                    <h3 className="services-model-title">Web Developer</h3>
                    <p className="services-model-description">Service with more than 1 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services-model-services grid">
                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Develop the user interface.</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Web page development.</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Create ux element interactions.</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Modern responsive web development</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Squrespace, Webflow.. Build</p>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services-content">
            <div>
                <i className="uil uil-mobile-android-alt services-icon"></i>
                <h3 className="services-title">App <br /> Developer</h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(2)}>View More <i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className={toggleState === 2 ? "services-model active-model" : "services-model"}>
                <div className="services-model-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services-model-close"></i>

                    <h3 className="services-model-title">App Developer</h3>
                    <p className="services-model-description">Service with more than 1 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services-model-services grid">
                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Native app development</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Web-based app development</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Develop the user interface.</p>

                        </li>

                        {/* <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">I position your company brand.</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Design and mockups of products for companies.</p>

                        </li> */}
                    </ul>
                </div>
            </div>
        </div>

        <div className="services-content">
            <div>
                <i className="uil uil-edit services-icon"></i>
                <h3 className="services-title">Ui/Ux <br /> Designer</h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(3)}>View More <i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className={toggleState === 3 ? "services-model active-model" : "services-model"}>
                <div className="services-model-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services-model-close"></i>

                    <h3 className="services-model-title">Ui/Ux Designer</h3>
                    <p className="services-model-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services-model-services grid">
                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Wireframing</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Custom web design</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Mobile app design</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">create ux element interactions.</p>

                        </li>

                        <li className="services-model-service">
                            <i className="uil uil-check-circle services-model-icon"></i>
                            <p className="services-model-info">Design the user interface</p>

                        </li>

                    </ul>
                </div>
            </div>
        </div>

        
    </div>
</section>
  )
}

export default Services
