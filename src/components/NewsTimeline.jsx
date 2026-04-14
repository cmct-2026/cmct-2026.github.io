import React from 'react';

const newsData = [
    {
        date: '2026/04/14',
        title: 'Program Agenda Announced / 會議議程表已公布',
        content: 'Program agenda pdf file has been announced in program page. / 會議議程表已公布在 program 頁面。'
    },
    {
        date: '2026/04/10',
        title: 'Conference Registration Deadline Prolonged / 會議註冊截止日期延長',
        content: 'Registration deadline has been changed to 04/19. / 會議註冊截止日期已延長至 04/19。'
    },
    {
        date: '2026/04/08',
        title: 'Paper Acceptance Notification / 論文接受通知',
        content: 'Email notifications for accepted papers have been sent out. / 論文接受通知已透過電子郵件寄出。'
    },
    {
        date: '2026/03/29',
        title: 'Submission Deadline / 投稿截止',
        content: 'The submission deadline for papers has passed. Thank you for your submissions! / 論文投稿截止日期已過。感謝您的投稿！'
    },
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
