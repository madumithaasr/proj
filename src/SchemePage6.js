// src/components/SchemePage6.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 6,
    title: 'Braille Watches by Welfare of Differently Abled Persons Department',
    description: 'Provision of Braille watches to visually impaired individuals to help them keep track of time independently.',
    details: 'The "Braille Watches by Welfare of Differently Abled Persons Department" scheme provides Braille watches to visually impaired individuals, enabling them to keep track of time independently and enhancing their daily living skills.',
    benefits: 'Provision of Braille watches to visually impaired individuals to improve their independence and quality of life.',
    eligibility: '• The applicant should be a visually impaired individual.\n• The applicant should be a resident of Tamil Nadu.\n• The applicant should provide a certificate of visual impairment issued by a recognized medical authority.',
    procedure: 'To apply for the Braille watch, eligible individuals need to submit the application form along with necessary documents such as proof of visual impairment, identity proof, and other relevant documents to the Welfare of Differently Abled Persons Department.',
    documents: 'Required documents include:\n- Certificate of visual impairment\n- Identity proof of the applicant\n- Proof of residence in Tamil Nadu\n- Other relevant documents as specified by the department',
    contact: 'For more information, contact the Welfare of Differently Abled Persons Department, Government of Tamil Nadu.'
  },
  // Add other schemes here
];

function SchemePage6() {
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

export default SchemePage6;
