import React from 'react';

const PastConferences = () => {
    const conferences = [
        { id: 1, date: '1989/4/15~16', host: '中央研究院資訊科學研究所', organizers: '許聞廉、李國偉' },
        { id: 2, date: '1989/12/16', host: '清華大學資訊科學研究所', organizers: '李家同' },
        { id: 3, date: '1990/11/12', host: '中央研究院資訊科學研究所', organizers: '許聞廉、高明達' },
        { id: 4, date: '1991/5/4', host: '中正大學資訊工程學系', organizers: '張貿翔' },
        { id: 5, date: '1992/5/2', host: '中正大學資訊工程學系', organizers: '李新林' },
        { id: 6, date: '1992/11/27~28', host: '中山大學應用數學系', organizers: '官大智' },
        { id: 7, date: '1993/4/30~/5/1', host: '交通大學資資訊科學系', organizers: '徐力行' },
        { id: 8, date: '1993/12/11', host: '清華大學資訊科學系', organizers: '唐傳義' },
        { id: 9, date: '1994/5/7', host: '中央大學資訊工程學系', organizers: '何錦文' },
        { id: 10, date: '1994/12/9', host: '中興大學應用數學系', organizers: '余明興' },
        { id: 11, date: '1995/5/6', host: '中央研究院資訊科學研究所、台灣工業技術學院資訊管理技術系', organizers: '高明達' },
        { id: 12, date: '1995/11/24~25', host: '中山大學應用數學系', organizers: '楊昌彪' },
        { id: 13, date: '1996/6/29', host: '靜宜大學資訊管理系', organizers: '林耀鈴、蔡英德' },
        { id: 14, date: '1997/6/6', host: '東海大學資訊科學系', organizers: '呂芳懌' },
        { id: 15, date: '1998/4/25', host: '台灣科技大學資訊管理學系', organizers: '王有禮、張瑞雄' },
        { id: 16, date: '1999/4/24', host: '暨南大學資訊工程學系', organizers: '蔡錫鈞' },
        { id: 17, date: '2000/4/29', host: '台灣大學資訊工程學系、中央研究院資訊科學研究所', organizers: '呂育道、徐讚昇' },
        { id: 18, date: '2001/3/31', host: '東華大學資訊工程學系', organizers: '彭勝龍' },
        { id: 19, date: '2002/3/29~30', host: '中山大學資訊工程學系', organizers: '楊昌彪', link: 'http://par.cse.nsysu.edu.tw/~algo2002/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list02.htm' },
        { id: 20, date: '2003/8/28~29', host: '中正大學資訊工程學系', organizers: '張貿翔' },
        { id: 21, date: '2004/5/21~22', host: '臺中健康暨管理學院資訊科技學系', organizers: '許芳榮', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list04.htm' },
        { id: 22, date: '2005/5/20~21', host: '成功大學資訊工程學系', organizers: '謝孫源' },
        { id: 23, date: '2006/4/28~29', host: '大葉大學資訊工程系', organizers: '洪春男、陳文儉', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list06.htm' },
        { id: 24, date: '2007/4/27~28', host: '暨南大學資訊工程學系', organizers: '王有禮、杜迪榕', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list07.htm' },
        { id: 25, date: '2008/4/25~26', host: '中華大學資訊工程學系', organizers: '梁秋國', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list08.htm' },
        { id: 26, date: '2009/4/24~25', host: '嘉義大學資訊工程學系', organizers: '賴泳伶', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list09.htm' },
        { id: 27, date: '2010/4/30~/5/1', host: '靜宜大學資訊工程學系', organizers: '林耀鈴、蔡英德', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list10.htm' },
        { id: 28, date: '2011/5/27~5/28', host: '澎湖科技大學資工系、資管系', organizers: '胡武志、黃志文', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list11.htm' },
        { id: 29, date: '2012/4/27~4/28', host: '台北商業技術學院資訊與決策科學研究所', organizers: '張肇明', link: 'http://algo2012.ntub.edu.tw/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list12.htm' },
        { id: 30, date: '2013/4/26~4/27', host: '東華大學資訊工程學系', organizers: '彭勝龍', link: 'http://algo2013.ndhu.edu.tw/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list13.htm' },
        { id: 31, date: '2014/4/25~4/26', host: '臺北市立大學資訊科學系', organizers: '陳彥宏', link: 'http://algo2014.utaipei.edu.tw/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list14.htm' },
        { id: 32, date: '2015/5/1~5/2', host: '國立中興大學', organizers: '林添進', link: 'http://algo2015.nchu.edu.tw/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list15.htm' },
        { id: 33, date: '2016/5/13~5/14', host: '國立臺灣大學數學系、國立清華大學工業工程與工程管理學系', organizers: '林瑩英、張鎮華、廖崇碩', link: 'http://algo2016.ie.nthu.edu.tw/', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list16.htm' },
        { id: 34, date: '2017/5/19~5/20', host: '逢甲大學資訊工程系、應用數學系', organizers: '許芳榮、林英志', link: 'http://algo2017.iecs.fcu.edu.tw', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list17.htm' },
        { id: 35, date: '2018/5/11~5/12', host: '靜宜大學資訊傳播工程系', organizers: '林耀鈴、蔡英德', proceedings: 'http://par.cse.nsysu.edu.tw/~algo/paper/paper_list18.pdf' },
        { id: 36, date: '2019/5/24~5/25', host: '交通大學資訊工程學系、工業工程與管理學系', organizers: '蔡錫鈞、林春成' },
        { id: 37, date: '2020/7/29~7/30', host: '高雄科技大學商務資訊應用系、航運管理系', organizers: '黃國璽、曾國尊' },
        { id: 38, date: '2021/5/14~5/15', host: '臺灣師範大學資訊工程學系', organizers: '王弘倫、陳彥宏、張家銘' },
        { id: 39, date: '2022/6/24~6/25', host: '政治大學資訊科學系', organizers: '張家銘、陳彥宏、王弘倫', link: 'https://cmct2022.weebly.com/', proceedings: 'https://www.dropbox.com/s/c5115hmhz1id8b6/CMCT2022_proceeding_v11_resize.pdf?dl=0' },
        { id: 40, date: '2023/5/19~20', host: '臺北商業技術學院創意科技與產品設計系', organizers: '彭勝龍、洪綾珠、李佳衛', link: 'https://cmct2023.ntub.edu.tw' },
        { id: 41, date: '2024/5/17~18', host: '臺北市立大學資訊科學系', organizers: '李佳衛、陳彥宏', link: 'https://cmct2023.ntub.edu.tw' },
        { id: 42, date: '2025/5/9~10', host: '臺北科技大學資訊工程學系', organizers: '劉傳銘', link: 'https://cmct-2025.github.io/' }
    ];

    const thStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '2px solid #ddd',
        backgroundColor: '#f8f9fa',
        color: '#003366',
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    };

    const tdStyle = {
        padding: '12px 15px',
        borderBottom: '1px solid #eee',
        textAlign: 'left',
        color: '#444'
    };

    return (
        <div style={{ padding: '0rem', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#003366', marginBottom: '2.5rem' }}>Past Conferences</h2>

            <div style={{ padding: '0 1rem 2rem 1rem', overflowX: 'auto' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.95rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>屆別</th>
                            <th style={thStyle}>日期</th>
                            <th style={thStyle}>主辦單位</th>
                            <th style={thStyle}>主辦者</th>
                            <th style={thStyle}>論文集</th>
                            <th style={thStyle}>網站</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conferences.map((conf) => (
                            <tr key={conf.id} style={{ backgroundColor: conf.id % 2 === 0 ? '#fcfcfc' : 'white' }}>
                                <td style={tdStyle}>{conf.id}</td>
                                <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{conf.date}</td>
                                <td style={tdStyle}>{conf.host}</td>
                                <td style={tdStyle}>{conf.organizers}</td>
                                <td style={tdStyle}>
                                    {conf.proceedings ? (
                                        <a href={conf.proceedings} target="_blank" rel="noopener noreferrer"
                                            style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>
                                            Link
                                        </a>
                                    ) : (
                                        <span style={{ color: '#ccc' }}>-</span>
                                    )}
                                </td>
                                <td style={tdStyle}>
                                    {conf.link ? (
                                        <a href={conf.link} target="_blank" rel="noopener noreferrer"
                                            style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>
                                            Link
                                        </a>
                                    ) : (
                                        <span style={{ color: '#ccc' }}>-</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                Credit: <a href="https://par.cse.nsysu.edu.tw/~algo/index.htm" target="_blank" rel="noopener noreferrer"
                    style={{ color: '#0056b3', textDecoration: 'none' }}>
                    Workshop on Combinatorial Mathematics and Computation Theory Website (楊昌彪教授)
                </a>
            </div>
        </div>
    );
};

export default PastConferences;
