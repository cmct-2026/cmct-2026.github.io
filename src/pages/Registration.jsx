
const Registration = () => {
    return (
        <div>
            <h2 style={{ color: '#003366' }}>Registration</h2>
            <p>
                <strong>General Registration (NT$ 1,000) / 一般註冊 (NT$ 1,000)</strong><br />
                Includes banquet. / 含晚宴。<br />
                Required for all Professors/PIs and anyone wishing to attend the banquet. / 所有老師/PI 及欲參加晚宴者請選此項。<br />
                Each paper must have at least one person registered under this plan. / 每篇論文須至少有一人以此方案完成註冊。
            </p>

            <p style={{ marginTop: '20px' }}>
                <strong>Student Free Registration / 學生免費註冊</strong><br />
                Does not include banquet. / 不含晚宴。<br />
                Limited to students who are not attending the banquet. / 僅限學生身分，且不參加晚宴者。
            </p>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <p style={{ marginBottom: '15px' }}>Please click the button below to register. / 註冊請點擊下方按鈕</p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScvzMnD4cdjetbq1j-mFBUNKotCarY8_DlwYiULtoJEmTongA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: '#003366',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s',
                        display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#002244'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#003366'}
                >
                    Register
                </a>
            </div>
        </div>
    );
};

export default Registration;
