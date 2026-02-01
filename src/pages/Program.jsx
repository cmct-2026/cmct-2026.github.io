const Program = () => {
    return (
        <div>
            <h2 style={{ color: '#003366' }}>Program Schedule</h2>
            <p>The detailed program will be announced soon.</p>

            <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#003366', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>April 25, 2026</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                    <thead>
                        <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                            <th style={{ padding: '0.75rem', textAlign: 'center', width: '30%', color: '#495057' }}>Time</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', width: '70%', color: '#495057' }}>Event / Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2" style={{ padding: '2rem', textAlign: 'center', color: '#6c757d', borderBottom: '1px solid #dee2e6' }}>To be announced</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#003366', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>April 26, 2026</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                            <th style={{ padding: '0.75rem', textAlign: 'center', width: '30%', color: '#495057' }}>Time</th>
                            <th style={{ padding: '0.75rem', textAlign: 'center', width: '70%', color: '#495057' }}>Event / Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2" style={{ padding: '2rem', textAlign: 'center', color: '#6c757d', borderBottom: '1px solid #dee2e6' }}>To be announced</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Program;
