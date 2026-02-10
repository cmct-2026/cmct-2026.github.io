const Header = () => {
    return (
        <header style={{
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
        }}>
            {/* Logo Area - You can replace the src with a real logo */}
            <div style={{ flexShrink: 0 }}>
                {/* Using a text placeholder if no image, or an img tag */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--primary-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}>
                    CMCT
                </div>
            </div>

            <div style={{ textAlign: 'left' }}>
                <h1 style={{
                    margin: 0,
                    fontSize: '1.8rem',
                    color: '#333',
                    lineHeight: '1.2'
                }}>
                    The 43rd Workshop on Combinatorial Mathematics <br />
                    and Computation Theory
                </h1>
                <h2 style={{
                    margin: '0.5rem 0 0 0',
                    fontSize: '1.1rem',
                    color: '#666',
                    fontWeight: 'normal'
                }}>
                    April 24-25, 2026 @ National Yang Ming Chiao Tung University (NYCU), Hsinchu, Taiwan
                </h2>
            </div>
        </header>
    );
};

export default Header;
