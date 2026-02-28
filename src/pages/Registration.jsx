const Registration = () => {
    return (
        <div style={{ padding: '40px 20px', fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
            <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                textAlign: 'left' 
            }}>
                <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '10px' }}>Registration</h2>
                
                {/* 報名時間區塊 */}
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

                {/* 註冊方案區塊 */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ borderBottom: '2px solid #003366', paddingBottom: '10px', color: '#003366' }}>Registration Fees / 註冊費用</h3>
                    
                    <div style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h4 style={{ margin: 0, color: '#333', fontSize: '1.15rem' }}>Full Registration / 一般註冊</h4>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>NT$ 1,000</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.9rem', marginTop: '10px' }}>
                            <p style={{ margin: '3px 0' }}>• Includes banquet. / 含晚宴。</p>
                            <p style={{ margin: '3px 0' }}>• For Professors, PIs, and those attending the banquet. / 老師、PI 及欲參加晚宴者。</p>
                            <p style={{ margin: '3px 0' }}>• Each paper must have at least one person registered under this plan. / 每篇論文須至少有一人以此方案完成註冊。</p>
                        </div>
                    </div>

                    <div style={{ padding: '20px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h4 style={{ margin: 0, color: '#333', fontSize: '1.15rem' }}>Student Registration / 學生註冊</h4>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>Free</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.9rem', marginTop: '10px' }}>
                            <p style={{ margin: '3px 0' }}>• Does not include banquet. / 不含晚宴。</p>
                            <p style={{ margin: '3px 0' }}>• Limited to students who are not attending the banquet. / 僅限學生身分，且不參加晚宴者。</p>
                        </div>
                    </div>
                </div>

                {/* 付款資訊區塊 */}
                <div style={{ 
                    marginBottom: '50px', 
                    padding: '30px', 
                    backgroundColor: '#fff', 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#003366', fontSize: '1.25rem' }}>
                        Payment Methods / 付款方式
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flexWrap: 'wrap' }}>
                        {/* 方案 A */}
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '6px', backgroundColor: '#fafafa' }}>
                            <strong style={{ color: '#d32f2f', display: 'block', marginBottom: '10px' }}>Option A: Bank Transfer / 銀行匯款</strong>
                            <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#444' }}>
                                銀行名稱：兆豐銀行 (017)<br />
                                分行代號：2037<br />
                                戶名：演算法與計算理論學會<br />
                                帳號：<code style={{ backgroundColor: '#fff', padding: '2px 5px', border: '1px solid #ccc', borderRadius: '3px', fontWeight: 'bold' }}>203-09-05326-0</code>
                            </div>
                        </div>

                        {/* 方案 B */}
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '6px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <strong style={{ color: '#d32f2f', display: 'block', marginBottom: '10px' }}>Option B: Credit Card / 線上刷卡</strong>
                                <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '20px' }}>
                                    透過線上支付系統進行付款。
                                </p>
                            </div>
                            <a 
                                href="https://algo.utaipei.edu.tw/CMCT/payment_interface.html" 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ 
                                    display: 'inline-block', 
                                    padding: '10px 16px', 
                                    backgroundColor: '#4caf50', 
                                    color: 'white', 
                                    textDecoration: 'none', 
                                    borderRadius: '4px',
                                    fontSize: '0.95rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                點我刷卡 / Pay via Card
                            </a>
                        </div>
                    </div>

                    <div style={{ 
                        marginTop: '25px', 
                        padding: '15px', 
                        backgroundColor: '#fff9c4', 
                        borderRadius: '6px', 
                        fontSize: '0.9rem', 
                        color: '#6d4c41',
                        lineHeight: '1.6',
                        borderLeft: '5px solid #fbc02d'
                    }}>
                        <strong>Notice:</strong> Please provide the <strong>transfer date/time and the last 4 digits of your account</strong> (or cardholder's name for credit card payments) in the registration form for verification.<br />
                        <strong>提醒：</strong> 請於報名表單中填寫<strong>「匯款日期時間」與「帳號末四碼」</strong>（或線上刷卡之持卡者姓名），以供核對款項。
                    </div>
                </div>

                {/* 報名表單按鈕 */}
                <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px' }}>
                    <p style={{ marginBottom: '25px', color: '#444', fontWeight: '500' }}>
                        Please click the button below to register: / 註冊請點擊下方按鈕：
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScvzMnD4cdjetbq1j-mFBUNKotCarY8_DlwYiULtoJEmTongA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#003366',
                            color: 'white',
                            padding: '18px 45px',
                            fontSize: '1.15rem',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            boxShadow: '0 4px 15px rgba(0, 51, 102, 0.3)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#002244';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Go to Registration Form / 前往報名表
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Registration;