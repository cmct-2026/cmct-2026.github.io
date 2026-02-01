import Banner from '../components/Banner';
import NewsTimeline from '../components/NewsTimeline';
import organizer1 from '../assets/organizer_1.png';
import organizer2 from '../assets/organizer_2.png';
import coOrganizerEtpc from '../assets/co_organizer_etpc.png';
import coOrganizerIis from '../assets/co_organizer_iis.png';

const Home = () => {
    return (
        <div>
            <Banner />
            <div style={{ padding: '2rem' }}>
                <h2 style={{ color: '#003366' }}>Welcome to CMCT 2026</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'justify' }}>
                    <p>
                        The Combinatorial Mathematics and Computational Theory Symposium is an annual event, hosted in rotation by universities or Academia Sinica, and now entering its 43rd iteration as the foremost academic gathering in Taiwan’s “Algorithms and Computational Theory” community. Offering a platform for the presentation of cutting-edge fundamental and applied research, the symposium draws upon diverse fields including combinatorial mathematics, discrete mathematics, computational theory, algorithms, bioinformatics, and network computing, thereby fostering vibrant scholarly exchange and collaboration. Over its 42 previous sessions—spanning two-fifths of a century—the symposium has significantly advanced academic standards and contributed to the sustained development of algorithms and computational theory in Taiwan. This year’s conference, organized by National Yang Ming Chiao Tung University, will extend invitations to experts and researchers from industry, government, academia, and public and private research institutions to join in high-quality research presentations, keynote speeches, and panel discussions. Through these activities, the event aims to further elevate the research prowess and international standing of Taiwan in the realm of algorithms and computational theory.
                    </p>
                    <hr style={{ border: '0', borderTop: '1px solid #eee', width: '100%' }} />
                    <p>
                        組合數學與計算理論研討會，每年定期舉行一次，輪流由各大學或中研院主辦，今年將邁入第四十三屆，是我國「演算法與計算理論學門」每年最重要的學術活動。本學術研討會提供與會者發表最新組合數學、演算法與計算理論等方面的基礎與應用的研究成果，讓組合數學、離散數學、計算理論、演算法、生物資訊、網路計算等相關領域的專家學者能齊聚一堂，相互討論學習，增進組合數學與計算理論領域之研究發展。
                        <br></br>
                        <br></br>
                        會議之目的在於促進學術交流，藉以提升學術水準。本學術會議迄今已舉辦四十二屆，歷經五分之二世紀，為我國演算法與計算理論學門作出重大及長久之貢獻。今年為「第四十三屆組合數學與計算理論研討會」，會議由國立陽明交通大學負責主辦，將廣邀產官學界、公私立研究機構研究人員及其他相關之專家學者參與，提供高品質研究論文發表，並舉辦專題演講及相關座談會，希冀提升國內在演算法與計算理論領域之研究水準。
                    </p>
                </div>

                <NewsTimeline />



                <h3 style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'center' }}>Organizers</h3>
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <img src={organizer1} alt="Organizer 1" style={{ height: '100px', objectFit: 'contain' }} />
                    <img src={organizer2} alt="Organizer 2" style={{ height: '100px', objectFit: 'contain' }} />
                </div>

                <h3 style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'center' }}>Co-Organizers</h3>
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <img src={coOrganizerEtpc} alt="Co-Organizer ETPC" style={{ height: '80px', objectFit: 'contain' }} />
                    <img src={coOrganizerIis} alt="Co-Organizer IIS" style={{ height: '80px', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;
