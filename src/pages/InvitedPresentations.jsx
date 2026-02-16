
import { useState } from 'react';

const SpeakerItem = ({ speaker }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            marginBottom: '40px',
            borderBottom: '1px solid #eee',
            paddingBottom: '30px'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'start',
                gap: '30px',
                flexWrap: 'wrap' // Allow wrapping on small screens
            }}>
                <div style={{ flexShrink: 0 }}>
                    <img
                        src={speaker.photo}
                        alt={speaker.name}
                        style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '4px' // Subtle rounding
                        }}
                    />
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3 style={{ color: '#003366', marginBottom: '8px', marginTop: '0', fontSize: '1.4rem', fontWeight: '600' }}>{speaker.name}</h3>
                    <p style={{ fontWeight: '500', color: '#555', marginBottom: '4px', fontSize: '1rem' }}>{speaker.title}</p>
                    <p style={{ marginBottom: '8px', color: '#666', fontSize: '0.95rem' }}>{speaker.affiliation}</p>
                    <p style={{ marginBottom: '15px' }}><a href={`mailto:${speaker.email}`} style={{ color: '#003366', textDecoration: 'none', borderBottom: '1px dotted #003366' }}>{speaker.email}</a></p>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'transparent',
                            border: '1px solid #003366',
                            color: '#003366',
                            cursor: 'pointer',
                            padding: '8px 16px',
                            fontSize: '0.85rem',
                            borderRadius: '20px', // Pill shape
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            outline: 'none',
                            fontWeight: '500',
                            letterSpacing: '0.5px'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#003366';
                        }}
                    >
                        {isOpen ? 'Close Bio' : 'Read Bio'}
                        <span style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            fontSize: '0.8rem'
                        }}>▼</span>
                    </button>
                </div>
            </div>

            <div style={{
                maxHeight: isOpen ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? '20px' : '0'
            }}>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderLeft: '4px solid #003366',
                    marginLeft: '180px', // Maintain alignment with text
                    borderRadius: '0 4px 4px 0',
                    color: '#444',
                    lineHeight: '1.7',
                    fontSize: '0.95rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h4 style={{
                        marginTop: '0',
                        marginBottom: '15px',
                        color: '#003366',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '600'
                    }}>
                        Speaker Bio / Abstract
                    </h4>
                    <p style={{ margin: 0 }}>
                        {speaker.abstract || "Detailed introduction and abstract to be announced soon."}
                    </p>
                </div>
            </div>
        </div>
    );
};

const InvitedPresentations = () => {
    // Speaker data
    const speakers = {
        keynote: [
            {
                name: "謝孫源 教授 / Prof. Sun-Yuan Hsieh",
                title: "Chair Professor & Dean of International Affairs",
                affiliation: "National Cheng Kung University, Department of Computer Science and Information Engineering (國立成功大學資訊工程學系)",
                email: "hsiehsy@mail.ncku.edu.tw",
                photo: "/speakers/sun-yuan-hsieh.jpg",
                type: "Keynote Speaker",
                abstract: "To be announced."
            }
        ],
        invited: [
            {
                name: "楊皓琮 教授 / Prof. Hao-Tsung Yang",
                title: "Assistant Professor",
                affiliation: "National Central University, Department of Computer Science and Information Engineering (國立中央大學資訊工程學系)",
                email: "htyang@ncu.edu.tw",
                photo: "/speakers/hao-tsung-yang.jpg", // Placeholder until user provides file
                type: "Invited Speaker",
                abstract: "To be announced."
            },
            {
                name: "梁雅鈞 教授 / Prof. Ya-Chun Liang",
                title: "Assistant Professor",
                affiliation: "National Tsing Hua University, Department of Computer Science and Information Engineering (國立清華大學資訊工程學系)",
                email: "ycliang@cs.nthu.edu.tw",
                photo: "/speakers/ya-chun-liang.jpg", // Placeholder until user provides file
                type: "Invited Speaker",
                abstract: "To be announced."
            }
        ]
    };

    return (
        <div>
            <h2 style={{ color: '#003366' }}>Invited Talks & Presentations</h2>

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
                <section style={{ marginBottom: '80px' }}>
                    <h3 style={{
                        color: '#003366',
                        borderBottom: '2px solid #e0e0e0',
                        paddingBottom: '15px',
                        marginBottom: '40px',
                        fontSize: '1.6rem',
                        textAlign: 'left',
                        fontWeight: '300',
                        letterSpacing: '1px'
                    }}>
                        <span style={{ fontWeight: '600' }}>Keynote</span> Speaker
                    </h3>
                    {speakers.keynote.map((speaker, index) => (
                        <SpeakerItem key={index} speaker={speaker} />
                    ))}
                </section>

                <section>
                    <h3 style={{
                        color: '#003366',
                        borderBottom: '2px solid #e0e0e0',
                        paddingBottom: '15px',
                        marginBottom: '40px',
                        fontSize: '1.6rem',
                        textAlign: 'left',
                        fontWeight: '300',
                        letterSpacing: '1px'
                    }}>
                        <span style={{ fontWeight: '600' }}>Invited</span> Speakers
                    </h3>
                    {speakers.invited.map((speaker, index) => (
                        <SpeakerItem key={index} speaker={speaker} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default InvitedPresentations;

