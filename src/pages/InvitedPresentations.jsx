import { useState } from 'react';

import sunYuanHsiehImg from '../assets/speakers/sun-yuan-hsieh.jpg';
import haoTsungYangImg from '../assets/speakers/hao-tsung-yang.jpg';
import yaChunLiangImg from '../assets/speakers/ya-chun-liang.jpg';

const InvitedPresentations = () => {
    const allSpeakers = [
        {
            id: 'hsieh',
            name: "謝孫源 Sun-Yuan Hsieh",
            tabTitle: "謝孫源 講座教授",
            title: "講座教授 兼 國際長 / Chair Professor & Dean of International Affairs",
            affiliation: "國立成功大學 資訊工程學系\nDepartment of Computer Science and Information Engineering, NCKU",
            email: "hsiehsy@mail.ncku.edu.tw",
            photo: sunYuanHsiehImg,
            type: "Keynote Speaker",
            abstract: ""
        },
        {
            id: 'yang',
            name: "楊皓琮 Hao-Tsung Yang",
            tabTitle: "楊皓琮 助理教授",
            title: "助理教授 / Assistant Professor",
            affiliation: "國立中央大學 資訊工程學系\nDepartment of Computer Science and Information Engineering, NCU",
            email: "htyang@ncu.edu.tw",
            photo: haoTsungYangImg,
            type: "Invited Speaker",
            abstract: ""
        },
        {
            id: 'liang',
            name: "梁雅鈞 Ya-Chun Liang",
            tabTitle: "梁雅鈞 助理教授",
            title: "助理教授 / Assistant Professor",
            affiliation: "國立清華大學 資訊工程學系\nDepartment of Computer Science and Information Engineering, NTHU",
            email: "ycliang@cs.nthu.edu.tw",
            photo: yaChunLiangImg,
            type: "Invited Speaker",
            abstract: ""
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={{ marginTop: '0px', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333' }}>
            
            <div style={{ maxWidth: '950px', margin: '0 auto' }}>
                
                {/* Tabs 導覽列 */}
                <div style={{ 
                    display: 'flex', 
                    borderBottom: '1px solid #eee', 
                    marginBottom: '40px',
                    overflowX: 'auto',
                    gap: '10px'
                }}>
                    {allSpeakers.map((speaker, index) => (
                        <button
                            key={speaker.id}
                            onClick={() => setActiveTab(index)}
                            style={{
                                padding: '15px 25px',
                                border: 'none',
                                background: activeTab === index ? '#f8fafc' : 'none',
                                cursor: 'pointer',
                                textAlign: 'center',
                                minWidth: '180px',
                                borderBottom: activeTab === index ? '4px solid #003366' : '4px solid transparent',
                                transition: 'all 0.2s ease',
                                borderRadius: '8px 8px 0 0',
                                fontSize: '1rem',
                                fontWeight: activeTab === index ? '700' : '500',
                                color: activeTab === index ? '#003366' : '#666',
                                outline: 'none'
                            }}
                        >
                            {speaker.tabTitle}
                        </button>
                    ))}
                </div>

                {/* 內容展示區 */}
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '40px',
                    alignItems: 'flex-start'
                }}>
                    
                    {/* 左側照片區 */}
                    <div style={{ flex: '0 0 220px' }}>
                        <img
                            src={allSpeakers[activeTab].photo}
                            alt={allSpeakers[activeTab].name}
                            style={{
                                width: '100%',
                                height: 'auto',
                                aspectRatio: '3/4',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                backgroundColor: '#f5f5f5',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
                            }}
                        />
                    </div>

                    {/* 右側文字區 */}
                    <div style={{ flex: '1 1 450px', textAlign: 'left' }}>
                        <div style={{ 
                            color: '#003366', 
                            fontSize: '0.9rem', 
                            fontWeight: '700', 
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{ width: '20px', height: '2px', backgroundColor: '#003366' }}></span>
                            {allSpeakers[activeTab].type}
                        </div>

                        <h3 style={{ 
                            margin: '0 0 15px 0', 
                            color: '#1a1a1a', 
                            fontSize: '1.8rem',
                            fontWeight: '800'
                        }}>
                            {allSpeakers[activeTab].name}
                        </h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <p style={{ margin: '0 0 8px 0', fontWeight: '600', fontSize: '1.1rem', color: '#003366' }}>
                                {allSpeakers[activeTab].title}
                            </p>
                            <div style={{ margin: '0 0 12px 0', color: '#555', lineHeight: '1.5', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                                {allSpeakers[activeTab].affiliation}
                            </div>
                            <a 
                                href={`mailto:${allSpeakers[activeTab].email}`} 
                                style={{ 
                                    color: '#003366', 
                                    textDecoration: 'none', 
                                    fontSize: '0.95rem', 
                                    fontWeight: '500',
                                    borderBottom: '1px solid rgba(0,51,102,0.2)'
                                }}
                            >
                                ✉ {allSpeakers[activeTab].email}
                            </a>
                        </div>

                        <div style={{ 
                            backgroundColor: '#f9f9f9', 
                            padding: '25px', 
                            borderRadius: '12px',
                            borderLeft: '4px solid #003366'
                        }}>
                            <h4 style={{ 
                                margin: '0 0 12px 0', 
                                color: '#003366', 
                                fontSize: '0.9rem', 
                                fontWeight: '700',
                                letterSpacing: '0.5px' 
                            }}>
                                Biography / Title / Abstract
                            </h4>
                            <p style={{ 
                                margin: 0, 
                                lineHeight: '1.75', 
                                color: '#444', 
                                textAlign: 'justify' 
                            }}>
                                {allSpeakers[activeTab].abstract}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitedPresentations;