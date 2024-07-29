// src/components/SchemePage8.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 8,
    title: "Financial Assistance on the Natural Death of Differently Abled Person",
    description: "Providing financial assistance to the family of a differently abled person upon their natural death.",
    details: "The 'Financial Assistance on the Natural Death of Differently Abled Person' scheme provides monetary support to the family of a differently abled person upon their natural death, aimed at helping the family with immediate financial needs.",
    benefits: "A lump sum financial assistance to the family of the deceased differently abled person.",
    eligibility: "• The deceased should have been a registered differently abled person.\n• The family should be residents of Tamil Nadu.\n• Required documentation must be provided to prove the natural death and the differently abled status.",
    procedure: "To apply for the scheme, the family needs to submit the application form along with necessary documents such as death certificate, proof of disability, identity proof, and other relevant documents to the respective department.",
    documents: "Required documents include:\n- Death certificate\n- Proof of disability\n- Identity proof of the deceased and family\n- Proof of residence in Tamil Nadu\n- Other relevant documents as specified by the department",
    contact: "For more information, contact the respective department, Government of Tamil Nadu."
  },
  // Add other schemes here
];

function SchemePage8() {
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

export default SchemePage8;
