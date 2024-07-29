// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');  // Navigate to HomePage
  };

  return (
    <div className="landing-page">
      <div className="landing-header">
        <div className="header-content">
          <h1>Welcome to Namma Scheme</h1>
          <p>Your gateway to various Tamil Nadu Governmental schemes and benefits.</p>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
        <div className="header-image">
          <img alt="Namma Scheme" />
        </div>
      </div>
      <div className="landing-section" id="schemes">
        <h2>Schemes</h2>
        <p>
          Scheme refers to a government-initiated program or project aimed at achieving specific objectives for the state's residents. These schemes are designed to address various needs, improve public services, and enhance the overall well-being of the population. They involve planning, resource allocation, and implementation by government departments or agencies, and they often provide benefits or support to individuals, families, or communities in Tamil Nadu.
        </p>
      </div>
      <div className="landing-section" id="sectors">
        <h2>Sectors</h2>
        <ul>
          <li>Healthcare</li>
          <li>Education</li>
          <li>Agriculture</li>
          <li>Employment</li>
          <li>Social Welfare</li>
        </ul>
      </div>
      <div className="landing-section" id="about">
        <h2>About Us</h2>
        <p>
          Namma Scheme is a comprehensive web application dedicated to simplifying access to government schemes and programs in Tamil Nadu. Our platform aims to empower residents by providing a user-friendly interface to explore, apply for, and manage various schemes across sectors such as education, health, and social welfare. We strive to make crucial information easily accessible and transparent, helping individuals make the most of available opportunities. Committed to enhancing user experience, our team continuously updates and improves the platform based on feedback and technological advancements.
        </p>
      </div>
      <div className="landing-section" id="help-desk">
        <h2>Help Desk</h2>
        <p>
          If you need assistance or have questions regarding the schemes, application processes, or any other inquiries, our Help Desk is here to help. You can reach us through the following methods:
        </p>
        <ul>
          <li><i className="fas fa-envelope"></i> Email: helpdesk@nammascheme.com</li>
          <li><i className="fas fa-phone"></i> Phone: +91 3334445555</li>
          <li><i className="fas fa-comments"></i> Live Chat: Available on our website</li>
        </ul>
        <p>
          For immediate support, please use our <a href="/support">Support Portal</a>.
        </p>
      </div>
      <div className="landing-section" id="contact">
        <h2>Contact Us</h2>
        <p>
          For general inquiries and support, please contact us at: <br />
          <i className="fas fa-envelope"></i> Email: nammascheme@gmail.com <br />
          <i className="fas fa-phone"></i> Phone: +91 2223334440
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
