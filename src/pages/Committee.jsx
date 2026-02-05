const Committee = () => {
  // 每一行的對齊樣式 (名字、職稱、單位)
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '70px 70px auto', 
    columnGap: '0.5rem', 
    marginBottom: '0.3rem', // 縮小行與行之間的間距
    alignItems: 'center',
    textAlign: 'left',
  };

  // 每一組委員的容器樣式
  const sectionStyle = {
    marginBottom: '1.5rem', // 縮小組與組之間的間距
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  };

  // 標題樣式
  const titleStyle = {
    color: '#003366',
    marginBottom: '0.6rem', // 縮小標題與名單的間距
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '0.4rem',
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center', // 標題改為置中
  };

  // 讓內部列表區塊整體置中的包裹容器
  const listWrapperStyle = {
    width: 'fit-content',
    margin: '0 auto',
  };

  return (
    <div style={{ padding: '0 1rem' }}>
      <h2 style={{ color: '#003366', marginBottom: '2rem', textAlign: 'center' }}>
        Committees
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>

          {/* 1. 榮譽主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>榮譽主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}>
                  <span>林奇宏 校長</span>
                  <span></span>
                  <span>(陽明交通大學)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. 諮詢委員 */}
            <div style={sectionStyle}>
            <h3 style={titleStyle}>諮詢委員</h3>
            <div style={listWrapperStyle}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ ...rowStyle, gridTemplateColumns: '80px 100px auto' }}>
                    <span>李家同 榮譽講座教授</span>
                    <span></span>
                    <span>(清華大學、靜宜大學、暨南大學)</span>
                </li>
                <li style={{ ...rowStyle, gridTemplateColumns: '80px 100px auto' }}>
                    <span>李德財 院士</span>
                    <span></span>
                    <span>(中央研究院)</span>
                </li>
                <li style={{ ...rowStyle, gridTemplateColumns: '80px 100px auto' }}>
                    <span>唐傳義 校長</span>
                    <span></span>
                    <span>(靜宜大學)</span>
                </li>
                </ul>
            </div>
            </div>

          {/* 3. 指導委員 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>指導委員</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>徐讚昇</span><span>研究員</span><span>(中央研究院)</span></li>
                <li style={rowStyle}><span>陳健輝</span><span>教授</span><span>(臺灣大學)</span></li>
                <li style={rowStyle}><span>廖崇碩</span><span>教授</span><span>(臺灣大學)</span></li>
                <li style={rowStyle}><span>林耀鈴</span><span>教授</span><span>(靜宜大學)</span></li>
                <li style={rowStyle}><span>張肇明</span><span>教授</span><span>(臺北商業大學)</span></li>
                <li style={rowStyle}><span>彭勝龍</span><span>教授</span><span>(臺北商業大學)</span></li>
                <li style={rowStyle}><span>楊昌彪</span><span>教授</span><span>(中山大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 4. 大會主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>大會主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>蔡錫鈞</span><span>教授</span><span>(陽明交通大學)</span></li>
                <li style={rowStyle}><span>林春成</span><span>院長</span><span>(陽明交通大學)</span></li>
                <li style={rowStyle}><span>林妙聰</span><span>教授</span><span>(陽明交通大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 5. 議程主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>議程主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>高孟駿</span><span>教授</span><span>(陽明交通大學)</span></li>
                <li style={rowStyle}><span>陳柏安</span><span>教授</span><span>(陽明交通大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 6. 宣傳主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>宣傳主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>李奇育</span><span>教授</span><span>(陽明交通大學)</span></li>
                <li style={rowStyle}><span>蔡詩妤</span><span>助理教授</span><span>(陽明交通大學)</span></li>
                <li style={rowStyle}><span>林政寬</span><span>副教授</span><span>(陽明交通大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 7. 議程委員 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>
              議程委員{' '}
              <span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: '#666' }}>
                按姓名筆畫順序排列
              </span>
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '0.5rem',
                textAlign: 'left',
                width: '100%',
                marginTop: '0.5rem'
              }}
            >
              {[
                ['王弘倫','臺灣師範大學'],['王釧茹','中央研究院'],['白恭瑞','明志科技大學'],
                ['呂及人','中央研究院'],['呂育道','臺灣大學'],['呂學一','臺灣大學'],
                ['李佳衛','臺北市立大學'],['李彥寰','臺灣大學'],['李權明','銘傳大學'],
                ['林莊傑','臺灣海洋大學'],['林清池','臺灣海洋大學'],['林濬璈','臺北科技大學'],
                ['林瀚俞','清華大學'],['官振傑','臺灣師範大學'],['洪士涵','臺灣大學'],
                ['洪智鐸','政治大學'],['洪綾珠','臺北商業大學'],['梁雅鈞','成功大學'],
                ['陳立軒','中正大學'],['陳和麟','臺灣大學'],['陳彥宏','臺北市立大學'],
                ['張家銘','政治大學'],['張陽郎','臺北科技大學'],['張經略','元智大學'],
                ['黃上恩','臺灣大學'],['黃光璿','暨南國際大學'],['楊進雄','臺北商業大學'],
                ['劉智弘','臺灣大學'],['劉建宏','臺北科技大學'],['劉傳銘','臺北科技大學'],
                ['謝孫源','成功大學'],['鍾文鈺','高雄科技大學'],['鐘楷閔','中央研究院'],
                ['韓永楷','清華大學'],['蔡孟宗','中央研究院'],['蘇家玉','臺北醫學大學'],
              ].map(([name, school]) => (
                <div
                  key={name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px auto',
                    columnGap: '0.4rem',
                    marginBottom: '0.2rem'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{name}</span>
                  <span style={{ color: '#555' }}>({school})</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Committee;