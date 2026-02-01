const CallForPapers = () => {
    return (
        <div>
            <h2 style={{ color: '#003366' }}>
                Call for Papers <span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}></span>
            </h2>

            <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
                <p style={{ margin: '0.5rem 0', fontWeight: 'bold', fontSize: '1.1rem' }}>CMCT 2026: The 43rd Symposium on Combinatorial Mathematics and Computational Theory</p>
                <p style={{ margin: '0.5rem 0', color: '#003366', fontWeight: '500' }}>National Yang Ming Chiao Tung University, Hsinchu, Taiwan, April 24-25, 2026</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', textAlign: 'center' }}>


                <div style={{ width: '100%', maxWidth: '800px' }}>
                    <h3 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>Topics of Interest</h3>
                    <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#555' }}>Topics of interest include, but are not limited to:</p>
                    <ul style={{
                        lineHeight: '1.6',
                        paddingLeft: '0',
                        color: '#333',
                        listStyleType: 'none',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.5rem',
                        textAlign: 'left',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        {[
                            'Combinatorial mathematics',
                            'Combinatorial optimization',
                            'Computability and complexity',
                            'Computational biology',
                            'Computational geometry',
                            'Data structures and algorithms',
                            'Graph and network problems',
                            'Interconnection networks',
                            'Networks parallel and cloud algorithms',
                            'Number theory and cryptography',
                            'On-line algorithms',
                            'Pattern matching and data compression',
                            'Quantum computing',
                            'Randomized and probabilistic techniques',
                            'Symbolic computation'
                        ].map((topic, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <span style={{ marginRight: '0.5rem' }}>•</span>
                                <div>{topic}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <h3 style={{ color: '#003366', marginBottom: '2rem', textAlign: 'center' }}>Submission Guidelines</h3>

                    <div style={{ marginBottom: '0', color: '#333', lineHeight: '1.8', textAlign: 'center' }}>
                        <p style={{ margin: '0.5rem 0' }}>
                            本研討會接受論文摘要(1頁)或全文(含文獻至多6頁)投稿，論文格式請依研討會網站提供的樣版撰寫 (link)，最佳論文於全文投稿論文中選出。論文投稿請於 <strong>3/15</strong> 前，mail至 <a href="mailto:cmct2026.workshop@gmail.com" style={{ color: '#0056b3' }}>cmct2026.workshop@gmail.com</a>。
                        </p>
                        <p style={{ margin: '1.5rem 0 0.5rem 0' }}>
                            We accept 1-page abstracts or full papers (max. 6 pages including references). Please adhere to the template available on the official website (link). Only full papers are eligible for the Best Paper Award selection. Please email your files to <a href="mailto:cmct2026.workshop@gmail.com" style={{ color: '#0056b3' }}>cmct2026.workshop@gmail.com</a> before <strong>March 15</strong>, with the subject line: <code style={{ backgroundColor: '#f8f9fa', padding: '0.2rem 0.4rem', borderRadius: '4px', color: '#d63384', border: '1px solid #e9ecef' }}>[Paper-Name_Your-Name]</code>.
                        </p>
                        <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                            <strong>Templates & Sample Files:</strong> Download Templates (Google Drive: Latex, Word)
                        </p>
                    </div>
                </div>
                <div style={{ width: '100%', maxWidth: '800px' }}>
                    <h3 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>Important Dates</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8', color: '#333', textAlign: 'center' }}>
                        <li><strong>Abstract/Full paper submission:</strong> March 15, 2026</li>
                        <li><strong>Paper notification:</strong> April 1, 2026</li>
                        <li><strong>Camera-ready paper due date:</strong> April 10, 2026</li>
                        <li><strong>Conference Date:</strong> April 24-25, 2026</li>
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <h3 style={{ color: '#003366', marginBottom: '1rem' }}>Venue & Contact</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Venue:</strong> National Yang Ming Chiao Tung University, Hsinchu, Taiwan
                </p>
                <p>
                    <strong>Contact:</strong> All questions about CMCT 2026 should be emailed to <a href="mailto:cmct2026.workshop@gmail.com" style={{ color: '#0056b3' }}>cmct2026.workshop@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default CallForPapers;
