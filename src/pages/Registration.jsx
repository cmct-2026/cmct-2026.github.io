const Registration = () => {
    return (
        <div style={{ padding: '40px 20px', fontFamily: 'sans-serif' }}>
            <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                textAlign: 'left' 
            }}>
                <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '10px' }}>Registration</h2>
                
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '40px', 
                    padding: '20px', 
                    backgroundColor: '#f0f4f8',
                    borderLeft: '5px solid #003366',
                    borderRadius: '4px',
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#003366', fontWeight: 'bold' }}>
                        Registration Period: March 16 – April 10, 23:59
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '1rem', color: '#003366', fontWeight: 'bold' }}>
                        報名時間：3月16日至4月10日 23:59
                    </p>
                </div>

                <div style={{ marginBottom: '50px' }}>
                    <div style={{
                        borderBottom: '1px solid #eee',
                        paddingBottom: '25px',
                        marginBottom: '25px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.25rem' }}>
                                Full Registration <span style={{ fontWeight: 'normal', color: '#666', fontSize: '1rem', marginLeft: '5px' }}>/ 一般註冊</span>
                            </h3>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>NT$ 1,000</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
                            <p style={{ margin: '5px 0' }}>• Includes banquet. / 含晚宴。</p>
                            <p style={{ margin: '5px 0' }}>• Required for all Professors/PIs and anyone wishing to attend the banquet. <br /><span style={{ color: '#888' }}>所有老師/PI 及欲參加晚宴者請選此項。</span></p>
                            <p style={{ margin: '5px 0' }}>• Each paper must have at least one person registered under this plan. <br /><span style={{ color: '#888' }}>每篇論文須至少有一人以此方案完成註冊。</span></p>
                        </div>
                    </div>

                    <div style={{ paddingBottom: '25px', marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.25rem' }}>
                                Student Registration <span style={{ fontWeight: 'normal', color: '#666', fontSize: '1rem', marginLeft: '5px' }}>/ 學生註冊</span>
                            </h3>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>Free</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
                            <p style={{ margin: '5px 0' }}>• Does not include banquet. / 不含晚宴。</p>
                            <p style={{ margin: '5px 0' }}>• Limited to students who are not attending the banquet. <br /><span style={{ color: '#888' }}>僅限學生身分，且不參加晚宴者。</span></p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                    <p style={{ marginBottom: '20px', color: '#444', fontWeight: '500' }}>
                        Please click the button below to register. <span style={{ color: '#777', fontWeight: 'normal' }}>/ 註冊請點擊下方按鈕</span>
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScvzMnD4cdjetbq1j-mFBUNKotCarY8_DlwYiULtoJEmTongA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#003366',
                            color: 'white',
                            padding: '12px 30px',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            borderRadius: '30px',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            boxShadow: '0 4px 6px rgba(0, 51, 102, 0.2)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#002244';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 51, 102, 0.3)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 51, 102, 0.2)';
                        }}
                    >
                        Go to Registration Form
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Registration;