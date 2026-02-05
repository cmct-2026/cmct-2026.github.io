import React from 'react';

const HelpDesk = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            {/* 標題居中 */}
            <h2 style={{ color: '#003366', textAlign: 'center', fontSize: '2rem', marginBottom: '2.5rem' }}>Help Desk</h2>

            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center' 
            }}>
                
                {/* 主要聯絡 Email 區塊 */}
                <div style={{ 
                    marginBottom: '3rem', 
                    padding: '1.5rem', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: '8px',
                    width: '100%',
                    maxWidth: '600px'
                }}>
                    <p style={{ marginBottom: '0.5rem', fontSize: '1.05rem', color: '#555' }}>
                        All questions about CMCT 2026 should be emailed to:
                    </p>
                    <a href="mailto:cmct2026.workshop@gmail.com" style={{ 
                        color: '#0056b3', 
                        textDecoration: 'underline', 
                        fontSize: '1.2rem', 
                        fontWeight: '600' 
                    }}>
                        cmct2026.workshop@gmail.com
                    </a>
                </div>

                {/* 聯絡人名單 - 整體置中但字由左對齊 */}
                <div style={{ width: 'fit-content', textAlign: 'left' }}>
                    <h3 style={{ 
                        fontSize: '1.4rem', 
                        color: '#333', 
                        marginBottom: '1.5rem', 
                        borderBottom: '2px solid #eee', 
                        paddingBottom: '0.5rem' 
                    }}>
                        Contact Persons
                    </h3>
                    
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <li>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem', color: '#003366' }}>
                                Professor Mong-Jen Kao
                            </div>
                            <div style={{ color: '#666', marginBottom: '0.3rem', lineHeight: '1.5' }}>
                                Department of Computer Science,<br />
                                National Yang Ming Chiao Tung University
                            </div>
                            <div style={{ fontSize: '0.95rem' }}>
                                Email: <a href="mailto:mjkao@cs.nycu.edu.tw" style={{ color: '#0056b3', textDecoration: 'none' }}>mjkao@cs.nycu.edu.tw</a>
                            </div>
                        </li>

                        <li>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem', color: '#003366' }}>
                                Professor Po-An Chen
                            </div>
                            <div style={{ color: '#666', marginBottom: '0.3rem', lineHeight: '1.5' }}>
                                Institute of Information Management,<br />
                                National Yang Ming Chiao Tung University
                            </div>
                            <div style={{ fontSize: '0.95rem' }}>
                                Email: <a href="mailto:poanchen@nycu.edu.tw" style={{ color: '#0056b3', textDecoration: 'none' }}>poanchen@nycu.edu.tw</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;