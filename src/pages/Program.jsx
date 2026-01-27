const Program = () => {
    return (
        <div>
            <h2>Program Schedule</h2>
            <p>The detailed program will be announced after paper acceptance notifications.</p>

            {/* Placeholder table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }} border="1">
                <thead>
                    <tr style={{ background: '#eee' }}>
                        <th style={{ padding: '0.5rem' }}>Time</th>
                        <th style={{ padding: '0.5rem' }}>Event</th>
                        <th style={{ padding: '0.5rem' }}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.5rem' }}>09:00 - 09:30</td>
                        <td style={{ padding: '0.5rem' }}>Registration</td>
                        <td style={{ padding: '0.5rem' }}>Main Hall</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0.5rem' }}>09:30 - 10:30</td>
                        <td style={{ padding: '0.5rem' }}>Keynote Speech</td>
                        <td style={{ padding: '0.5rem' }}>Auditorium</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Program;
