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
                        Registration Due: April 19, 23:59
                    </p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '1rem', color: '#003366', fontWeight: 'bold' }}>
                        報名截止日期：4月19日 23:59
                    </p>
                </div>

                親愛的與會者您好，為確保活動順利進行，敬請所有參與者完成註冊。<br />
                感謝您的配合，期待在研討會中與您相見！

                <br /><br />

                {/* 註冊方案區塊 */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ borderBottom: '2px solid #003366', paddingBottom: '10px', color: '#003366' }}>Registration Fees / 註冊費用</h3>
                    
                    <div style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h4 style={{ margin: 0, color: '#333', fontSize: '1.15rem' }}>Full Registration / 一般註冊</h4>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>NT$ 1,000</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.9rem', marginTop: '10px' }}>
                            <p style={{ margin: '3px 0' }}>• Includes 1 banquet ticket / 含晚宴餐卷一份</p>
                            <p style={{ margin: '3px 0' }}>• Each paper must have at least one full registration / 每篇論文至少須有一份一般註冊</p>
                        </div>
                    </div>

                    <div style={{ padding: '20px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                            <h4 style={{ margin: 0, color: '#333', fontSize: '1.15rem' }}>Student Registration / 學生註冊</h4>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#003366' }}>Free</span>
                        </div>
                        <div style={{ color: '#555', lineHeight: '1.6', fontSize: '0.9rem', marginTop: '10px' }}>
                            <p style={{ margin: '3px 0' }}>• Students only / 僅限學生身分</p>
                            <p style={{ margin: '3px 0' }}>• Does not include banquet tickets / 不含晚宴餐卷</p>
                        </div>
                    </div>
                </div>

                {/* 付款資訊區塊 */}
                {/*
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
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '6px', backgroundColor: '#fafafa' }}>
                            <strong style={{ display: 'block', marginBottom: '10px' }}>Option A: Bank Transfer / 銀行匯款</strong>
                            <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#444' }}>
                                銀行名稱：兆豐銀行 (017)<br />
                                分行代號：2037<br />
                                戶名：演算法與計算理論學會<br />
                                帳號：<code style={{ backgroundColor: '#fff', padding: '2px 5px', border: '1px solid #ccc', borderRadius: '3px', fontWeight: 'bold' }}>203-09-05326-0</code>
                            </div>

                            <br />

                            <strong>提醒：</strong> <br />
                            銀行匯款者，請提供「匯款日期時間」與「帳號末五碼」，以供核對款項。
                        </div>

                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '6px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '10px' }}>Option B: Credit Card / 線上刷卡</strong>
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

                            <br />

                            <strong>提醒：</strong>刷卡付款者，請提供完成頁面顯示之流水號，以供核對款項。
                        </div>
                    </div>

                </div>
                */}

                {/* 報名表單按鈕 */}
                {/*
                <div style={{ textAlign: 'center', marginTop: '10px', padding: '0px' }}>
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
                        Go to Registration Form / 前往註冊
                    </a>
                </div>
                */}
                <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '8px', border: '1px solid #f5c6cb' }}>
                    <h3 style={{ margin: 0 }}>註冊時間已過 / Registration has closed.</h3>
                </div>
            </div>
        </div>
    );
};

export default Registration;
