import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import CallForPapers from './pages/CallForPapers';
import Committee from './pages/Committee';
import Program from './pages/Program';
import Registration from './pages/Registration';
import Venue from './pages/Venue';
import ImportantDates from './pages/ImportantDates';
import AcceptedPapers from './pages/AcceptedPapers';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import InvitedPresentations from './pages/InvitedPresentations';
import TheoryDay from './pages/TheoryDay.jsx';
import PastConferences from './pages/PastConferences';
import HelpDesk from './pages/HelpDesk';
import './App.css';

import { useLocation } from 'react-router-dom';

/* Extract MainContent to use useLocation hook inside Router context */
const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`content-section ${isHome ? 'no-padding' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/accepted-papers" element={<AcceptedPapers />} />
        <Route path="/program" element={<Program />} />
        <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
        <Route path="/invited-presentations" element={<InvitedPresentations />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/theory-day" element={<TheoryDay />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/past-conferences" element={<PastConferences />} />
        <Route path="/help-desk" element={<HelpDesk />} />
        {/* Fallback for old routes or 404 */}
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar
          isMenuOpen={isMobileMenuOpen}
          toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
        <MainContent />
        <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #eee', color: '#666', fontSize: '0.9rem' }}>
          &copy; 2026 CMCT Conference. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
