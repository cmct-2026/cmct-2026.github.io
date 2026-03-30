import { useState } from 'react';

import sunYuanHsiehImg from '../assets/speakers/sun-yuan-hsieh.jpg';
import haoTsungYangImg from '../assets/speakers/hao-tsung-yang.jpg';
import yaChunLiangImg from '../assets/speakers/ya-chun-liang.jpg';
import shihYuTsaiImg from '../assets/speakers/shih-yu-tsai.jpg';
import bmtLinImg from '../assets/speakers/bmt-lin.jpg';

const InvitedPresentations = () => {
    const allSpeakers = [
        {
            id: 'lin',
            name: "林妙聰 Lin, Bertrand M.T.",
            tabTitle: "林妙聰 教授",
            title: "教授 / Professor",
            affiliation: "國立陽明交通大學 資訊管理研究所\nInstitute of Information Management, NYCU",
            email: "bmtlin@nycu.edu.tw",
            photo: bmtLinImg,
            type: "Keynote Speaker",
            topic: "To be announced",
            abstract_text: "To be announced."
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
            topic: "Algorithmic Recourse and The Endogenous Data Drift Problem with Recourse-Seeking Users",
            abstract_text: `Deep learning models are widely used in decision-making and recommendation systems, where they typically rely on the assumption of a static data distribution between training and deployment. However, real-world deployment environments often violate this assumption. Users who receive negative outcomes may adapt their features to meet model criteria, ie, recourse action. These adaptive behaviors create shifts in the data distribution and when models are retrained on this shifted data, a feedback loop emerges: user behavior influences the model, and the updated model in turn reshapes future user behavior.

In this talk, I first introduce the core principles of recourse and its standard applications. I then explore the systemic consequences of models adapting to recourse-seeking users. We demonstrate, through both theoretical and empirical lenses, that this interaction pushes Logistic and MLP models toward higher decision standards. Over time, this leads to escalating recourse costs and diminished reliability of "optimal" actions. These findings draw critical parallels to economic theories of endogenous barriers to entry, highlighting how algorithmic retraining can unintentionally reinforce higher standards and gatekeep opportunities. Finally, I present algorithmic methods designed to mitigate these challenges and stabilize the long-term interaction between models and users.`,
            bio: `Hao-Tsung Yang is an assistant professor at National Central University. Before that, he was a research associate at the School of Informatics in University of Edinburgh, U.K., supervised by Prof. Rik Sarkar. He receives his Ph.D. degree in Computer Science, Stony Brook University, U.S., in 2020, advised by Prof. Jie Gao and Prof. Shan Lin. Hao-Tsung Yang’s research sits at the intersection of autonomous systems, motion planning, and explainable AI (XAI). His work addresses the emerging challenges of integrating AI into human-centric environments, focusing on seamless human-AI interaction, cooperative systems, and defense against human-like adversaries. He aims to develop solutions that are not only computationally efficient but also transparent, tractable, and reliable.`
        },
        {
            id: 'liang',
            name: "梁雅鈞 Ya-Chun Liang",
            tabTitle: "梁雅鈞 助理教授",
            title: "助理教授 / Assistant Professor",
            affiliation: "國立清華大學 資訊工程學系\nDepartment of Computer Science, NTHU",
            email: "ycliang@cs.nthu.edu.tw",
            photo: yaChunLiangImg,
            type: "Invited Speaker",
            topic: "Scheduling under Uncertainty: Algorithms with Testing",
            abstract_text: `In many real-world operational settings, such as medical emergency departments or aircraft maintenance, the exact time required to complete a task is initially unknown. However, this uncertainty can often be resolved by first performing a mandatory diagnostic test. This talk explores the algorithmic challenges of scheduling under this specific type of "explorable uncertainty." We will examine the problem of scheduling jobs with obligatory tests on a single machine, where each job consists of a known testing phase and a processing phase that only becomes known upon the test's completion. Focusing on the objective of minimizing the sum of completion times, we will evaluate the performance of online algorithms using competitive analysis. Key highlights of the talk include an introduction to natural priority-based scheduling for arbitrary test times, highlighting a novel graph-based analysis technique used to bound its performance. Furthermore, we will discuss the design of streamlined, threshold-based algorithms tailored for environments with uniform test times, and explore the fundamental limits and theoretical lower bounds for deterministic algorithms in these mandatory-testing settings. Overall, this talk provides new insights into the design and analysis of competitive scheduling policies under explorable uncertainty.
            This is joint work with Konstantinos Dogeas and Thomas Erlebach.
            `,
            bio: `Ya-Chun Liang is currently an Assistant Professor with the Department of Computer Science at National Tsing Hua University. Prior to this, she served as an Assistant Professor in the Department of Computer Science and Information Engineering at National Cheng Kung University. She obtained her dual PhD degrees from the University of Liverpool (Electrical Engineering and Electronics) and National Tsing Hua University (Industrial Engineering and Engineering Management) in 2023, and subsequently served as a Postdoctoral Research Fellow at Columbia University. Her research focuses on dynamic and online algorithms for combinatorial optimization under uncertainty, with applications in scheduling, networking, resource allocation, and adaptive systems.`
        },
        {
            id: 'tsai',
            name: "蔡詩妤 Shih-Yu Tsai",
            tabTitle: "蔡詩妤 助理教授",
            title: "助理教授 / Assistant Professor",
            affiliation: "國立陽明交通大學 資訊管理與財務金融學系\nDepartment of Information Management and Finance, NYCU",
            email: "shih-yu.tsai@nycu.edu.tw",
            photo: shihYuTsaiImg,
            type: "Invited Speaker",
            topic: "To be announced",
            abstract_text: "To be announced."
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const activeSpeaker = allSpeakers[activeTab];

    const renderSpeakerAbstract = (speaker) => {
        if (speaker.bio && speaker.bio.trim() !== "") {
            return (
                <>
                    <p style={{ marginTop: 0, marginBottom: '1em' }}>
                        <strong>Topic:</strong> {speaker.topic}
                    </p>
                    <p style={{ marginTop: 0, marginBottom: '1em', whiteSpace: 'pre-line' }}>
                        <strong>Abstract:</strong> {speaker.abstract_text}
                    </p>
                    <p style={{ margin: 0, whiteSpace: 'pre-line' }}>
                        <strong>Bio:</strong> {speaker.bio}
                    </p>
                </>
            );
        }
        return <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{speaker.abstract}</p>;
    };

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
                            src={activeSpeaker.photo}
                            alt={activeSpeaker.name}
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
                            {activeSpeaker.type}
                        </div>

                        <h3 style={{ 
                            margin: '0 0 15px 0', 
                            color: '#1a1a1a', 
                            fontSize: '1.8rem',
                            fontWeight: '800'
                        }}>
                            {activeSpeaker.name}
                        </h3>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <p style={{ margin: '0 0 8px 0', fontWeight: '600', fontSize: '1.1rem', color: '#003366' }}>
                                {activeSpeaker.title}
                            </p>
                            <div style={{ margin: '0 0 12px 0', color: '#555', lineHeight: '1.5', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                                {activeSpeaker.affiliation}
                            </div>
                            <a 
                                href={`mailto:${activeSpeaker.email}`} 
                                style={{ 
                                    color: '#003366', 
                                    textDecoration: 'none', 
                                    fontSize: '0.95rem', 
                                    fontWeight: '500',
                                    borderBottom: '1px solid rgba(0,51,102,0.2)'
                                }}
                            >
                                ✉ {activeSpeaker.email}
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
                            <div style={{ 
                                margin: 0, 
                                lineHeight: '1.75', 
                                color: '#444', 
                                textAlign: 'justify'
                            }}>
                                {renderSpeakerAbstract(activeSpeaker)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitedPresentations;
