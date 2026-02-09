import React from 'react';

const HelpDesk = () => {
    return (
        <div style={{ padding: '0rem', fontFamily: 'sans-serif' }}>
            {/* 標題居中 */}
            <h2 style={{ color: '#003366', marginBottom: '1.2rem' }}>Help Desk</h2>

            <div style={{
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <ul style={{ 
                    listStyleType: 'disc', 
                    paddingLeft: '1.5rem',
                    textAlign: 'left'
                }}>
                    {/* Email Contact */}
                    <li style={{ marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '1.05rem', color: '#333', marginBottom: '0.5rem' }}>
                            For matters regarding CMCT 2026, email us at: {' '}
                            <a href="mailto:cmct2026.workshop@gmail.com" style={{
                                color: '#0056b3',
                                textDecoration: 'underline',
                                fontWeight: '600'
                            }}>
                                cmct2026.workshop@gmail.com
                            </a>
                        </div>
                    </li>

                    {/* Contact Persons */}
                    <li>
                        <div style={{ fontSize: '1.05rem', color: '#333', marginBottom: '0.5rem' }}>
                            For general inquiries, contact: 
                            Mong-Jen Kao (<a href="mailto:mjkao@cs.nycu.edu.tw" style={{ color: '#0056b3', textDecoration: 'none' }}>mjkao@cs.nycu.edu.tw</a>)
                            and
                            Po-An Chen (<a href="mailto:poanchen@nycu.edu.tw" style={{ color: '#0056b3', textDecoration: 'none' }}>poanchen@nycu.edu.tw</a>)
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HelpDesk;