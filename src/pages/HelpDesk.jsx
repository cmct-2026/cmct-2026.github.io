const HelpDesk = () => {
    return (
        <div>
            <h2 style={{ color: '#003366' }}>Help Desk</h2>
            <div style={{ padding: '0 0.5rem' }}>

                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '0rem', fontSize: '1.05rem', color: '#555' }}>
                        All questions about CMCT 2026 should be emailed to:
                    </p>
                    <a href="mailto:cmct2026.workshop@gmail.com" style={{ color: '#0056b3', textDecoration: 'none', fontSize: '1.1rem' }}>
                        cmct2026.workshop@gmail.com
                    </a>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem' }}>Contact Persons</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li>
                            <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.3rem' }}>Professor Mong-Jen Kao</div>
                            <div style={{ color: '#666', marginBottom: '0.3rem' }}>Department of Computer Science, National Yang Ming Chiao Tung University</div>
                            <div>Email: <a href="mailto:mjkao@cs.nycu.edu.tw" style={{ color: '#0056b3' }}>mjkao@cs.nycu.edu.tw</a></div>
                        </li>
                        <li>
                            <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.3rem' }}>Po-An Chen</div>
                            <div style={{ color: '#666', marginBottom: '0.3rem' }}>Institute of Information Management, National Yang Ming Chiao Tung University</div>
                            <div>Email: <a href="mailto:poanchen@nycu.edu.tw" style={{ color: '#0056b3' }}>poanchen@nycu.edu.tw</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;
