import React from 'react';

const PastConferences = () => {
    return (
        <div style={{ padding: '0rem', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#003366', marginBottom: '2.5rem' }}>Past Conferences</h2>

            <div style={{ textAlign: 'center', color: '#555' }}>
                <p>Information about past conferences will be available here.</p>
                {/* 
                Example structure for list:
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="link-to-2025">CMCT 2025</a></li>
                    <li><a href="link-to-2024">CMCT 2024</a></li>
                </ul> 
                */}
            </div>
        </div>
    );
};

export default PastConferences;
