// src/components/SchemePage2.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 2,
    title: 'Dr. Muthulakshmi Reddy Ninaivu Inter-caste Marriage Assistance Scheme-II',
    details: 'This scheme aims to abolish caste and community discrimination by encouraging inter-caste marriage by giving financial assistance to newly married couples.',
    benefits: 'Financial assistance for newly married inter-caste couples.',
    eligibility: '• The bride should be 18 years or older during her marriage.\n• The marriage should be registered.',
    procedure: 'To apply for the scheme, couples need to submit the application form along with necessary documents such as proof of marriage, age proof, and other relevant documents to the Social Welfare & Women Empowerment Department.',
    documents: 'Required documents include:\n- Proof of Marriage.\n- Age Proof of both partners.\n- Caste certificates.\n- Other relevant documents as specified by the department.',
    contact: 'For more information, contact the Social Welfare & Women Empowerment Department, Government of Tamil Nadu.'
  }
];

function SchemePage2() {
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

  if (!scheme) {
    return <div>Loading...</div>;
  }

  const renderTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

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

export default SchemePage2;
