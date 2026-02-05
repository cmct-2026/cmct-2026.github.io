const Committee = () => {
  // 每一行的對齊樣式 (名字、職稱、單位)
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto', 
    columnGap: '0.5rem', 
    marginBottom: '0.3rem', // 縮小行與行之間的間距
    alignItems: 'center',
    textAlign: 'left',
  };

  // 每一組委員的容器樣式
  const sectionStyle = {
    marginBottom: '2.5rem', // 縮小組與組之間的間距
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
      <h2 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>
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
                  <span>林奇宏 校長 (陽明交通大學)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. 諮詢委員 */}
            <div style={sectionStyle}>
            <h3 style={titleStyle}>諮詢委員</h3>
            <div style={listWrapperStyle}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}>
                    <span>李家同 榮譽講座教授 (清華大學)</span>
                </li>
                <li style={rowStyle}>
                    <span>李德財 院士 (中央研究院)</span>
                </li>
                <li style={rowStyle}>
                    <span>唐傳義 校長 (靜宜大學)</span>
                </li>
                </ul>
            </div>
            </div>

          {/* 3. 指導委員 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>指導委員</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>徐讚愇 研究員 (中央研究院)</span></li>
                <li style={rowStyle}><span>陳健輝 教授 (臺灣大學)</span></li>
                <li style={rowStyle}><span>廖崇碩 教授 (臺灣大學)</span></li>
                <li style={rowStyle}><span>林耀鈴 教授 (靜宜大學)</span></li>
                <li style={rowStyle}><span>張肇明 教授 (臺北商業大學)</span></li>
                <li style={rowStyle}><span>彭勝龍 教授 (臺北商業大學)</span></li>
                <li style={rowStyle}><span>楊昌彪 教授 (中山大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 4. 大會主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>大會主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>蔡錫鈞 教授 (陽明交通大學)</span></li>
                <li style={rowStyle}><span>林春成 院長 (陽明交通大學)</span></li>
                <li style={rowStyle}><span>林妙聰 教授 (陽明交通大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 5. 議程主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>議程主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>高孟駿 教授 (陽明交通大學)</span></li>
                <li style={rowStyle}><span>陳柏安 教授 (陽明交通大學)</span></li>
              </ul>
            </div>
          </div>

          {/* 6. 宣傳主席 */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>宣傳主席</h3>
            <div style={listWrapperStyle}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={rowStyle}><span>李奇育 教授 (陽明交通大學)</span></li>
                <li style={rowStyle}><span>林政寬 副教授 (陽明交通大學)</span></li>
                <li style={rowStyle}><span>蔡詩妤 助理教授 (陽明交通大學)</span></li>
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
                gridTemplateColumns: 'auto',
                gap: '0.5rem',
                textAlign: 'left',
                alignItems: 'center',
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
                    gridTemplateColumns: 'auto',
                    columnGap: '0.4rem',
                    marginBottom: '0.2rem'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{name} ({school})</span>
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