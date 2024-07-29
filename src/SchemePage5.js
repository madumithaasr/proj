// src/components/SchemePage5.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 5,
    title: 'Low Tension Power Tariff (LTPT) Subsidy',
    description: 'Subsidy on low tension power tariff for MSMEs to reduce power costs and enhance competitiveness.',
    details: 'The "Low Tension Power Tariff (LTPT) Subsidy" scheme provides a subsidy on low tension power tariffs for Micro, Small, and Medium Enterprises (MSMEs) to reduce power costs and enhance their competitiveness.',
    benefits: 'Subsidy on low tension power tariffs, leading to reduced electricity bills for MSMEs.',
    eligibility: '• The applicant should be a registered MSME in Tamil Nadu.\n• The enterprise should have a valid electricity connection under the low tension category.',
    procedure: 'To apply for the LTPT subsidy, eligible MSMEs need to submit the application form along with necessary documents such as proof of electricity connection, electricity bills, and other relevant documents to the concerned department.',
    documents: 'Required documents include:\n- Proof of electricity connection (Electricity Bill)\n- MSME registration certificate\n- Identity proof of the applicant\n- Other relevant documents as specified by the department',
    contact: 'For more information, contact the Energy Department, Government of Tamil Nadu.'
  },
  // Add other schemes here
];

function SchemePage5() {
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

export default SchemePage5;
