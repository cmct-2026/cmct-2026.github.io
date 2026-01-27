import Banner from '../components/Banner';
import organizer1 from '../assets/organizer_1.png';
import organizer2 from '../assets/organizer_2.png';

const Home = () => {
    return (
        <div>
            <Banner />
            <div style={{ padding: '2rem' }}>
                <h2>Welcome to CMCT 2026</h2>
                <p>
                    The 43rd Workshop on Combinatorial Mathematics and Computation Theory (CMCT 2026) will be held at National Yang Ming Chiao Tung University (NYCU), Taiwan.
                    The symposium draws upon diverse fields including combinatorial mathematics, discrete mathematics, computational theory, algorithms, bioinformatics, and network computing.
                </p>
                <p>
                    This annual event has fostered vibrant scholarly exchange and collaboration for decades, contributing significantly to academic standards and research development in Taiwan.
                </p>

                <h3 style={{ marginTop: '2rem' }}>Important Dates</h3>
                <ul>
                    <li><strong>Abstract Submission:</strong> TBD</li>
                    <li><strong>Full Paper Submission:</strong> TBD</li>
                    <li><strong>Notification of Acceptance:</strong> TBD</li>
                    <li><strong>Conference Date:</strong> April 2026</li>
                </ul>

                <h3 style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'center' }}>Organizers & Co-Organizers</h3>
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <img src={organizer1} alt="Organizer 1" style={{ height: '100px', objectFit: 'contain' }} />
                    <img src={organizer2} alt="Organizer 2" style={{ height: '100px', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;
