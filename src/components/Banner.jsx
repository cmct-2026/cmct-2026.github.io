import { useState, useEffect } from 'react';
import bannerImgOriginal from '../assets/banner_nycu_ilove.png';
import bannerImg1 from '../assets/banner_carousel_1.jpg';
import bannerImg2 from '../assets/banner_carousel_2.jpg';
import bannerImg3 from '../assets/banner_carousel_3.png';

const images = [bannerImgOriginal, bannerImg1, bannerImg2, bannerImg3];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
            {images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === currentIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            ))}

            {/* Dots Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px',
                zIndex: 10
            }}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                    />
                ))}
            </div>

            {/* Optional Overlay Text if needed later */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                textAlign: 'center',
                zIndex: 5,
                width: '100%'
            }}>
                {/* <h1 style={{ fontSize: '3rem', margin: 0 }}>CMCT 2026</h1> */}
                {/* <p style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Combinatorial Mathematics and Computational Theory</p> */}
            </div>
        </div>
    );
};

export default Banner;
