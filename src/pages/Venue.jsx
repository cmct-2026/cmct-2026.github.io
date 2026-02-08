import React from 'react';

const Venue = () => {
    const sectionStyle = {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto 3.5rem auto'
    };

    const sectionTitleStyle = {
        color: '#003366',
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        borderBottom: '2px solid #eee',
        paddingBottom: '0.5rem'
    };

    const transportGroupStyle = {
        marginBottom: '2rem',
        textAlign: 'left'
    };

    const labelStyle = {
        fontSize: '1.1rem',
        color: '#333',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.8rem'
    };

    const contentBoxStyle = {
        lineHeight: '1.8',
        paddingLeft: '2rem'
    };

    return (
        <div style={{ padding: '0rem', fontFamily: 'sans-serif', color: '#444' }}>
            <h2 style={{ color: '#003366', marginBottom: '2.5rem' }}>Venue and Accommodation</h2>

            {/* 1. 地圖區塊 */}
            <section style={sectionStyle}>
                <p style={{ marginBottom: '1.2rem', fontSize: '1.1rem', textAlign: 'left' }}>
                    <strong>電子資訊研究大樓{' '}
                        <a href="https://goo.gl/maps/kVHCrKiHgN2m92Er8" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'underline' }}>
                            Google Map
                        </a>
                    </strong>
                </p>
                <div style={{ width: '100%', overflow: 'hidden', borderRadius: '4px', border: '1px solid #eee' }}>
                    <img src="/campus_map.png" alt="NYCU Campus Map" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
            </section>

            {/* 2. 交通資訊區塊 */}
            <section style={sectionStyle}>
                <h3 style={sectionTitleStyle}>交通資訊</h3>

                {/* 自行開車 */}
                <div style={transportGroupStyle}>
                    <h4 style={labelStyle}><span>🚘</span> 自行開車：</h4>
                    <div style={contentBoxStyle}>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>南下 :</strong> 中山高速公路新竹交流道(94.5K)下，新竹光復路方向第一個紅綠燈左轉進入大學路，即可抵達本校北大門。<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>（台北 ⟶ 中壢 ⟶ 新竹交流道（靠右）⟶ 大學路 ⟶ 交大光復校區）</span>
                        </div>
                        <div>
                            <strong>北上 :</strong><br />
                            1. 中山高速公路新竹交流道(94.5K)下，往新竹方向，行駛光復路，左轉大學路，即可抵達本校北大門。<br />
                            2. 中山高速公路新竹交流道(97K)下，左轉園區二路直駛約三分鐘，在園區二路盡頭左轉新安路，即可抵達本校南大門。<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>（台中 ⟶ 中山高北上 ⟶ 新竹交流道（左轉往新竹市區方向）⟶ 經光復路 ⟶ 大學路 ⟶ 交大光復校區）</span>
                        </div>
                    </div>
                </div>

                {/* 搭乘客運 */}
                <div style={transportGroupStyle}>
                    <h4 style={labelStyle}><span>🚍</span> 搭乘客運：</h4>
                    <div style={contentBoxStyle}>
                        <p style={{ margin: 0 }}>搭乘統聯「 板橋–北二高–新竹」線，即可直達本校。</p>
                    </div>
                </div>

                {/* 搭乘高鐵 */}
                <div style={transportGroupStyle}>
                    <h4 style={labelStyle}><span>🚆</span> 搭乘高鐵：</h4>
                    <div style={contentBoxStyle}>
                        <p style={{ margin: 0 }}>高鐵新竹站下車，轉乘接駁專車至「交通大學站」下車，或轉市區 2 路公車至本校。</p>
                    </div>
                </div>

                {/* 搭乘公車 */}
                <div style={transportGroupStyle}>
                    <h4 style={labelStyle}><span>🚌</span> 搭乘公車：</h4>
                    <div style={contentBoxStyle}>
                        <div style={{ marginBottom: '0.8rem' }}>
                            <strong>新竹客運 2 號（火車站 ⟶ 交通大學）：</strong> 約每小時一班<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>火車站 ⟶ 東門市場 ⟶ 東門國小 ⟶ 公園 ⟶ 學園商場 ⟶ 交大博愛校區 ⟶ 清華大學 ⟶ 交大光復校區</span>
                        </div>
                        <div>
                            <strong>新竹客運 1 號（火車站 ⟶ 過溝）：</strong> 約每 10~15 分鐘一班
                        </div>
                        <div style={{ marginTop: '0.8rem' }}>
                            <strong>先導公車(高鐵新竹站/生醫園區 ⟶ 北大橋)：</strong> 約10-40分鐘一班{' '}
                            <a href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=01850&rn=1735196042793&lan=C" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none', fontSize: '0.9em' }}>
                                (連結)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. 住宿資訊區塊 */}
            <section style={sectionStyle}>
                <h3 style={sectionTitleStyle}>住宿資訊</h3>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1rem',
                    textAlign: 'left'
                }}>
                    {[
                        { name: "新竹老爺酒店 (Hotel Royal Hsinchu)", link: "https://www.hotelroyal.com.tw/zh-tw/hsinchu/" },
                        { name: "EPISODE 新竹伊普索凱悅尚選酒店", link: "https://www.hyatt.com/jdv-by-hyatt/zh-HK/hsujd-episode-hsinchu" },
                        { name: "和選旅 THE HO HOTEL", link: "https://www.thehohotel.com.tw/" },
                        { name: "老爺商務旅館 (Royal Inn)", link: "https://www.booking-owlnest.com/royalhotel?adult=1&child=0&infant=0&lang=zh_TW" },
                        { name: "新竹元首經典旅館 (Chief Hotel)", link: "https://www.google.com/search?q=%E6%96%B0%E7%AB%B9%E5%85%83%E9%A6%96%E7%B6%93%E5%85%B8%E6%97%85%E9%A4%A8+(Chief+Hotel)&rlz=1C5CHFA_enTW985TW985&oq=%E6%96%B0%E7%AB%B9%E5%85%83%E9%A6%96%E7%B6%93%E5%85%B8%E6%97%85%E9%A4%A8+(Chief+Hotel)&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzUzNGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8" }
                    ].map((hotel, index) => (
                        <li key={index} style={{ padding: '0.5rem 0', borderBottom: '1px inset #f9f9f9', fontWeight: '500' }}>
                            • {hotel.name}
                            <a href={hotel.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', color: '#0056b3', textDecoration: 'none', fontSize: '0.9em' }}>
                                (連結)
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 4. 備註區塊 */}
            <section style={{ ...sectionStyle, marginBottom: '0' }}>
                <h3 style={sectionTitleStyle}>備註</h3>
                <ol style={{
                    paddingLeft: '1.5rem',
                    lineHeight: '2',
                    textAlign: 'left',
                    margin: 0
                }}>
                    <li style={{ marginBottom: '1rem' }}>於大學路的北大門進入交大校園後，通過大門警衛室後需<strong>「立即」左轉</strong>，沿著竹湖行約三百公尺，於左手邊的荷花池旁向左轉至電子與資訊研究大樓。</li>
                    <li style={{ marginBottom: '1rem' }}>因會場附近停車位有限，自行開車者可能需停於較遠處，再步行至會場。</li>
                    <li>於科學園區新安路的南大門進入交大校園後，到Ｔ型路口右轉，沿著主要道路行駛，過了奈米研究大樓（對面是活動中心），右轉向前沿著荷花池即可到達電子與資訊研究大樓。</li>
                </ol>
            </section>
        </div>
    );
};

export default Venue;