import React from 'react';
import './USPDisplayer.css';
import VanillaTilt from 'vanilla-tilt';

const TiltedCard = ({ title, content, img }) => {
    const tiltRef = React.useRef(null);

    React.useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.5,
                scale: 1.1,
                startX: -25,
                startY: 0,
            });
        }
    }, []);

    return (
        <div ref={tiltRef} className="tilted-card" style={{ '--bg-image': `url(${img})` }}>
            <div className="card-content">
                <div className="title-usp">
                    {title}
                </div>
                <div className="usp-contant my-auto">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default TiltedCard;
