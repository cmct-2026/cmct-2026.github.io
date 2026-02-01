import React from 'react';

const newsData = [
    {
        date: '2026/02/02',
        title: 'Website Launch / 網站上線',
        content: 'The CMCT 2026 website is officially online. / CMCT 2026 網站正式上線。'
    }
];

const NewsTimeline = () => {
    return (
        <div style={{ marginTop: '3rem' }}>
            <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>News</h2>
            <div style={{ position: 'relative', borderLeft: '3px solid #ddd', marginLeft: '8rem', paddingLeft: '2rem' }}>
                {newsData.map((item, index) => (
                    <div key={index} style={{ marginBottom: '2rem', position: 'relative' }}>
                        {/* Dot on the timeline */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.78rem',
                            top: '0.2rem',
                            width: '1rem',
                            height: '1rem',
                            backgroundColor: '#0056b3',
                            borderRadius: '50%',
                            border: '3px solid white'
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            left: '-10rem',
                            top: '0',
                            width: '7rem',
                            textAlign: 'right',
                            fontWeight: 'bold',
                            color: '#666'
                        }}>
                            {item.date}
                        </div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{item.title}</h4>
                        <div style={{ color: '#555', lineHeight: '1.6' }}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsTimeline;
