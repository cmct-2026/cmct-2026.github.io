import React from 'react';
import bannerImg from '../assets/banner_nycu_ilove.png'; // Updated to user provided NYCU banner

const Banner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
            <img
                src={bannerImg}
                alt="CMCT 2026 Banner"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default Banner;
