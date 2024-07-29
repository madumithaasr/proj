// src/components/SchemePage7.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 7,
    title: "E.V.R. Maniammaiyar Ninaivu Marriage Assistance Scheme for Daughter’s of Poor Widows: Scheme-II",
    description: "Financial assistance to support the marriage expenses of daughters of poor widows.",
    details: "The 'E.V.R. Maniammaiyar Ninaivu Marriage Assistance Scheme for Daughter’s of Poor Widows: Scheme-II' provides financial assistance to support the marriage expenses of daughters of poor widows in Tamil Nadu.",
    benefits: "Financial assistance of a specified amount to cover marriage expenses.",
    eligibility: "• The applicant should be the daughter of a poor widow.\n• The family should be residents of Tamil Nadu.\n• The applicant should meet the income criteria as specified by the government.",
    procedure: "To apply for the scheme, eligible individuals need to submit the application form along with necessary documents such as proof of widowhood, income certificate, identity proof, and other relevant documents to the respective department.",
    documents: "Required documents include:\n- Proof of widowhood\n- Income certificate\n- Identity proof of the applicant\n- Proof of residence in Tamil Nadu\n- Other relevant documents as specified by the department",
    contact: "For more information, contact the respective department, Government of Tamil Nadu."
  },
  // Add other schemes here
];

function SchemePage7() {
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

export default SchemePage7;
