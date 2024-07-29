// src/components/SchemePage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemePage.css';

const schemeData = [
  {
    id: 1,
    title: 'Reimbursement of Stamp Duty and Registration Charges',
    description: 'The scheme is introduced with the objective of reducing the stamp duty and registration charges incurred by MSEs investing in backward blocks.',
    details: 'The scheme "Reimbursement of Stamp Duty and Registration Charges" by the Micro Small and Medium Enterprises Department, Government of Tamil Nadu, is introduced with the objective of reducing the stamp duty and registration charges incurred by MSEs investing in backward blocks, i.e. the charges paid to the Registration department on the purchase of land meant for industrial use.',
    benefits: '50% reimbursement of stamp duty and Registration charges paid to the Registration department on the purchase of land meant for industrial use.',
    eligibility: '• The applicant should be a manufacturing enterprise (micro or small scale), set up in the declared backward blocks of the state of Tamil Nadu.\n• This incentive is admissible to eligible enterprises on the land area up to five times the plinth area of the factory building constructed.\n• However, in respect of enterprises where the open land requirements would be large, due to the peculiar nature of the industry, the sanctioning Authority may consider allowing land in excess of five times the plinth area on a case-to-case basis.',
    procedure: 'To apply for the scheme, MSMEs need to submit the application form along with necessary documents such as proof of land purchase, payment receipts of stamp duty and registration charges, and other relevant documents to the Micro Small and Medium Enterprises Department.',
    documents: 'Required documents include:\n- Copy of UDYAM Registration Certificate.\n- Copy of Registered Land Sale deed documents with receipt from Registrar regarding the payment of Stamp Duty/Registration Charges.\n- Identity proof of the applicant\n- Copy of plan Approvals from the local body / Industrial Estate Authorities along with site plan.\n- Other relevant documents as specified by the department\n*The file type should be PDF (.pdf). The file size should be less than 200 kb.',
    contact: 'For more information, contact the Micro Small and Medium Enterprises Department, Government of Tamil Nadu.'
  },
  // Add other schemes here
];

function SchemePage() {
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

export default SchemePage;
