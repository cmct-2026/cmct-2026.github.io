const Venue = () => {
    return (
        <div>
            <h2 style={{ color: '#003366' }}>Venue and Accommodation</h2>

            <section style={{ marginBottom: '2rem' }}>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <strong>電子資訊研究大樓 Google Map:</strong> <a href="https://goo.gl/maps/kVHCrKiHgN2m92Er8" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3' }}>https://goo.gl/maps/kVHCrKiHgN2m92Er8</a>
                </p>
                <div style={{ maxWidth: '80%', margin: '0 auto', overflow: 'hidden', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <img src="/campus_map.png" alt="NYCU Campus Map" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
            </section>

            <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: '#003366', marginBottom: '2rem', fontWeight: 'bold' }}>交通資訊</h3>

                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🚘</span> 自行開車：
                    </h4>
                    <div style={{ lineHeight: '1.8', color: '#444', maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>南下 :</strong> 中山高速公路新竹交流道(94.5K)下，新竹光復路方向第一個紅綠燈左轉進入大學路，即可抵達本校北大門。<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>（台北⟶中壢⟶新竹交流道（靠右）⟶（左轉入）大學路（加油站旁）⟶交大光復區）</span>
                        </div>
                        <div>
                            <strong>北上 :</strong>
                            中山高速公路新竹交流道(94.5K)下，往新竹方向，行駛光復路，左轉大學路，即可抵達本校北大門。<br />
                            中山高速公路新竹交流道(97K)下，左轉園區二路直駛約三分鐘，在園區二路盡頭左轉新安路，即可抵達本校南大門。<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>（台中⟶中山高北上（往台北方向）⟶新竹交流道（左轉往新竹市區方向）⟶經光復路（高速公路下）⟶（左轉入）大學路（加油站旁）⟶交大光復校區）</span>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🚍</span> 搭乘客運：
                    </h4>
                    <p style={{ margin: 0, color: '#444' }}>搭乘統聯「 板橋–北二高–新竹」線，即可直達本校。</p>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🚆</span> 搭乘高鐵：
                    </h4>
                    <p style={{ margin: 0, color: '#444' }}>高鐵（接駁專車）。高鐵新竹站–交通大學站下車，轉市區2路公車或步行至本校。</p>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🚍</span> 搭乘公車：
                    </h4>
                    <div style={{ lineHeight: '1.8', color: '#444', maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>新竹客運2號公車（火車站⟶交通大學）</strong> 約每小時一班<br />
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>火車站⟶東門市場⟶東門國小⟶公園⟶學園商場⟶交大博愛校區⟶學府路口⟶光復中學⟶清華大學⟶神學院⟶清華山莊⟶交大光復校區</span>
                        </div>
                        <div>
                            <strong>新竹客運1號公車（火車站⟶過溝）</strong> 約每 10~15 分鐘一班
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: '#003366', marginBottom: '2rem', fontWeight: 'bold' }}>住宿資訊</h3>
                <div style={{ lineHeight: '1.8', color: '#444', maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'inline-block' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                        <li style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                            新竹老爺酒店 (Hotel Royal Hsinchu)
                        </li>
                        <li style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                            EPISODE 新竹伊普索凱悅尚選酒店 (EPISODE Hsinchu)
                        </li>
                        <li style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                            和選旅 THE HO HOTEL
                        </li>
                        <li style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                            老爺商務旅館 (Royal Inn)
                        </li>
                        <li style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                            新竹元首經典旅館 (Chief Hotel)
                        </li>
                    </ul>
                </div>
            </section>

            <section style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#003366', marginBottom: '1.5rem', fontWeight: 'bold' }}>備註：</h3>
                <ol style={{ paddingLeft: '0', listStylePosition: 'inside', lineHeight: '2', color: '#444', maxWidth: '900px', margin: '0 auto', textAlign: 'left', display: 'inline-block' }}>
                    <li style={{ marginBottom: '0.5rem' }}>於大學路的北大門進入交大校園後，通過大門警衛室後需「立即」左轉，沿著竹湖行約三百公尺，於左手邊的荷花池旁向左轉至電子與資訊研究大樓。</li>
                    <li style={{ marginBottom: '0.5rem' }}>因會場附近停車位有限，自行開車者可能需停於較遠處，再步行至會場。</li>
                    <li>於科學園區新安路的南大門進入交大校園後，到Ｔ型路口右轉，沿著主要道路行駛，過了奈米研究大樓（對面是活動中心），右轉向前沿著荷花池即可到達電子與資訊研究大樓。</li>
                </ol>
            </section>
        </div>
    );
};

export default Venue;
