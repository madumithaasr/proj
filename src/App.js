// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage';  // Import the LandingPage
import HomePage from './HomePage';
import SchemePage from './SchemePage';
import SchemePage2 from './SchemePage2';
import SchemePage3 from './SchemePage3';
import SchemePage4 from './SchemePage4';
import SchemePage5 from './SchemePage5';
import SchemePage6 from './SchemePage6';
import SchemePage7 from './SchemePage7';
import SchemePage8 from './SchemePage8';
import SchemePage9 from './SchemePage9';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* NavBar is always visible */}
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />  {/* LandingPage is the default route */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/scheme/:id" element={<SchemePage />} />
            <Route path="/scheme2/:id" element={<SchemePage2 />} />
            <Route path="/scheme3/:id" element={<SchemePage3 />} />
            <Route path="/scheme4/:id" element={<SchemePage4 />} />
            <Route path="/scheme5/:id" element={<SchemePage5 />} />
            <Route path="/scheme6/:id" element={<SchemePage6 />} />
            <Route path="/scheme7/:id" element={<SchemePage7 />} />
            <Route path="/scheme8/:id" element={<SchemePage8 />} />
            <Route path="/scheme9/:id" element={<SchemePage9 />} />
          </Routes>
        </div>
        <Footer /> {/* Footer is always visible */}
      </div>
    </Router>
  );
}

export default App;
