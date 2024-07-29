// src/components/SchemePage9.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 9,
    title: "Education Assistance - Folk Artist",
    description: "Providing educational assistance to children of folk artists in Tamil Nadu.",
    details: "The 'Education Assistance - Folk Artist' scheme aims to support the children of folk artists in Tamil Nadu by providing them with financial assistance for their education.",
    benefits: "Financial assistance to cover educational expenses for the children of folk artists.",
    eligibility: "• The applicant should be a child of a registered folk artist.\n• The applicant should be a resident of Tamil Nadu.\n• Required documentation must be provided to prove the relationship with the folk artist and the educational enrollment.",
    procedure: "To apply for the scheme, the applicant needs to submit the application form along with necessary documents such as proof of relationship with the folk artist, educational enrollment certificate, identity proof, and other relevant documents to the respective department.",
    documents: "Required documents include:\n- Proof of relationship with the folk artist\n- Educational enrollment certificate\n- Identity proof of the applicant\n- Proof of residence in Tamil Nadu\n- Other relevant documents as specified by the department",
    contact: "For more information, contact the respective department, Government of Tamil Nadu."
  },
  // Add other schemes here
];

function SchemePage9() {
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

export default SchemePage9;
