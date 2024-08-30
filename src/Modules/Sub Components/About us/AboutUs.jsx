import React from 'react';
import './AboutUs.css'; // Create a corresponding CSS file for styling
import { au1, au2, au3, auSvg } from '../../../Assats/photos';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className=" au-title">
                <h1>About Rhyno EV</h1>
            </div>
            <div className="sec">
                <div className="row h-100">
                    <div className="col-6 sec1">
                        <h6>
                            <strong>Established in 2019</strong> by an automotive engineer with a vision for
                            sustainable and robust mobility solutions, Rhyno EV is not just a company;
                            it's a collective effort of a dynamic team of young individuals passionately
                            driving innovation in the electric vehicle industry. We believe in engineering
                            solutions that solve problems.Perfectly suited for fleet operators, especially in tourist-centric locations
                            like Goa, our rugged yet aesthetically appealing scooters are engineered
                            for longevity and reliability.
                        </h6>
                    </div>
                    <div className="col-5">
                        <img src={auSvg} alt="" />
                    </div>
                </div>
                <div className="row mt h-100">
                    <div className="col-8">
                        <div className="grid-view h-100 w-100 ">
                            <img src={au1} alt="" className="item1" />
                            <img src={au2} alt="" className="item2" />
                            <img src={au3} alt="" className="item1" />
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className='h6au'>
                        <strong> With our first product</strong>, we've taken a bold step to create something more
                        than just a vehicle; it's a unique experience of elegance, comfort, and style,
                        addressing the pitfalls of conventional electric scooters. Our design prioritizes
                        safety, eliminating concerns of fires and ensuring a longer battery lifespan
                        with our battery technologyJoin us as we pioneer a new era in sustainable
                        and dependable electric transportation.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;




