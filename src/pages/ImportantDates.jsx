const ImportantDates = () => {
    // 每一行的對齊樣式 (項目名稱、日期)
    const rowStyle = {
        display: 'grid',
        // 第一欄固定寬度，確保後面的日期垂直對齊
        gridTemplateColumns: '250px auto', 
        columnGap: '1rem', 
        marginBottom: '0.6rem',
        textAlign: 'left',
    };

    const sectionStyle = {
        marginBottom: '2.5rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    };

    const titleStyle = {
        color: '#003366',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '0.5rem',
        width: '100%',
        maxWidth: '900px',
        textAlign: 'center', // 標題置中
    };

    // 讓內部列表區塊整體置中的包裹容器
    const listWrapperStyle = {
        width: 'fit-content',
        margin: '0 auto',
    };

    return (
        <div style={{ padding: '0 1rem' }}>
            <div style={sectionStyle}>
                <h2 style={titleStyle}>Important Dates</h2>
                
                <div style={listWrapperStyle}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={rowStyle}>
                            <strong>Abstract/Full paper submission:</strong>
                            <span>March 15, 2026</span>
                        </li>
                        <li style={rowStyle}>
                            <strong>Paper notification:</strong>
                            <span>April 2, 2026</span>
                        </li>
                        <li style={rowStyle}>
                            <strong>Camera-ready paper due date:</strong>
                            <span>April 10, 2026</span>
                        </li>
                        <li style={rowStyle}>
                            <strong>Conference Date:</strong>
                            <span>April 24-25, 2026</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;