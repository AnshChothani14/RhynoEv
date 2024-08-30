import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './hoverImg.css'; 

const HoverImageEffect = ({word, img}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            // Calculate the relative position of the cursor within the container
            const xPercent = (x / width) * 100;
            const yPercent = (y / height) * 100;

            // Adjust the image position based on cursor movement
            gsap.to(image, {
                x: `${xPercent - 50}%`,
                y: `${yPercent - 50}%`,
                duration: 0.5,
                ease: 'power1.out'
            });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="text-container" ref={containerRef}>
            <h2 className="hover-text">{word}</h2>
            <div className="background-image" style={{ backgroundImage: `url(${img})` }}  ref={imageRef}></div>
        </div>
    );
};

export default HoverImageEffect;
