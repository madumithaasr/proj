// src/components/SchemePage4.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 4,
    title: 'Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons',
    description: 'Scholarship scheme for students from I to VIII Standard by the Welfare of Differently Abled Persons Department, Government of Tamil Nadu.',
    details: 'The "Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons" scheme provides financial assistance to differently-abled students studying from I to VIII Standard. The objective is to support their education and reduce financial burdens on their families.',
    benefits: 'Financial assistance for education expenses.',
    eligibility: '• The student must be differently-abled.\n• The student must be studying in a recognized school from I to VIII Standard.',
    procedure: 'To apply for the scheme, eligible students need to submit the application form along with necessary documents such as proof of disability, school enrollment certificate, and other relevant documents to the Welfare of Differently Abled Persons Department.',
    documents: 'Required documents include:\n- Proof of disability\n- School enrollment certificate\n- Birth certificate\n- Other relevant documents as specified by the department',
    contact: 'For more information, contact the Welfare of Differently Abled Persons Department, Government of Tamil Nadu.'
  },
  // Add other schemes here
];

function SchemePage4() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('Details');
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    const fetchedScheme = schemeData.find(s => s.id === parseInt(id));
    setScheme(fetchedScheme);
  }, [id]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  if (!scheme) {
    return <div>Loading...</div>;
  }

  const tabContent = {
    Details: <p>{scheme.details}</p>,
    Benefits: <p>{scheme.benefits}</p>,
    Eligibility: renderTextWithNewlines(scheme.eligibility),
    Procedure: renderTextWithNewlines(scheme.procedure),
    Documents: renderTextWithNewlines(scheme.documents),
    Contact: <p>{scheme.contact}</p>
  };

  return (
    <div className="scheme-page">
      <div className="content-wrapper">
        <div className="left-panel">
          <button className="back-button" onClick={() => navigate('/')}>Back</button>
          <ul>
            <li onClick={() => handleTabClick('Details')}>Details</li>
            <li onClick={() => handleTabClick('Benefits')}>Benefits</li>
            <li onClick={() => handleTabClick('Eligibility')}>Eligibility</li>
            <li onClick={() => handleTabClick('Procedure')}>Procedure</li>
            <li onClick={() => handleTabClick('Documents')}>Documents</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="title-container">
            <h1>Tamil Nadu</h1>
            <h2>{scheme.title}</h2>
          </div>
          {tabContent[selectedTab]}
        </div>
      </div>
    </div>
  );
}

export default SchemePage4;
