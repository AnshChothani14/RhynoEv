import React from 'react';
import Tilt from 'react-parallax-tilt';
import './ParallaxEffectImg.demozap.css';

const ParallaxEffectImg = ({ bgImage, productImage }) => (
    <Tilt
        className="parallax-effect-img"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={800}
        transitionSpeed={3000}
        scale={1.1}
        gyroscope={true}
        style={{
            backgroundImage: `url(${bgImage})`,
            width: '400px',
            height: '500px',
        }}
    >
        <img src={productImage} className="inner-element " alt="Product" />
    </Tilt>
);

export default ParallaxEffectImg;
