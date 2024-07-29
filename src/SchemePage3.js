// src/components/SchemePage3.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 3,
    title: 'Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls-II',
    description: '"Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls-I" was launched by the Social Welfare and Women Empowerment Dept, Govt of Tamil Nadu. The scheme provides financial assistance to the orphan girls for their marriage. The bride should be 18 years or older during her marriage.',
    details: 'The "Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls-I" was launched by the Social Welfare and Women Empowerment Department, Government of Tamil Nadu. The scheme provides financial assistance to orphan girls for their marriage. The bride should be 18 years or older during her marriage.',
    benefits: 'Financial assistance for the marriage of orphan girls.',
    eligibility: '• The applicant should be an orphan girl.\n• The applicant must be 18 years or older at the time of marriage.',
    procedure: 'To apply for the scheme, eligible orphan girls need to submit the application form along with necessary documents such as proof of orphan status, age proof, and other relevant documents to the Social Welfare and Women Empowerment Department.',
    documents: 'Required documents include:\n- Proof of orphan status\n- Age proof (birth certificate or school certificate)\n- Marriage certificate\n- Other relevant documents as specified by the department',
    contact: 'For more information, contact the Social Welfare and Women Empowerment Department, Government of Tamil Nadu.'
  },
  // Add other schemes here
];

function SchemePage3() {
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

export default SchemePage3;
