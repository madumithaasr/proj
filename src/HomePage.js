import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SchemeFilter from './SchemeFilter';
import SchemeList from './SchemeList';
import './HomePage.css';

const HomePage = () => {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [schemes, setSchemes] = useState([
    {
      id: 1,
      title: 'Reimbursement of Stamp Duty and Registration Charges',
      description: 'The scheme is introduced with the objective of reducing the stamp duty and registration charges incurred by MSEs investing in backward blocks.',
      gender: '',
      category: 'business',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 2,
      title: 'Dr. Muthulakshmi Reddy Ninaivu Inter-caste Marriage Assistance Scheme-II',
      description: 'The "Dr. Muthulakshmi Reddy Ninaivu Inter-caste Marriage Assistance Scheme" was launched by the Social Welfare & Women Empowerment Dept. Tamil Nadu. The aim is to abolish caste & community discrimination by encouraging inter-caste marriage by giving financial assistance to newly married couples.',
      gender: 'female',
      category: '',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 3,
      title: 'Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls-II',
      description: '"Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls-I" was launched by the Social Welfare and Women Empowerment Dept, Govt of Tamil Nadu. The scheme provides financial assistance to the orphan girls for their marriage. The bride should be 18 years or older during her marriage.',
      gender: 'female',
      category: '',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 4,
      title: 'Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons',
      description: 'The "Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons" scheme was launched by the Department for the Welfare of Differently Abled Persons, Tamil Nadu. The scheme aims to provide scholarships to purchase notebooks for differently-abled students studying in government school.',
      gender: '',
      category: 'education',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'yes',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 5,
      title: 'Low Tension Power Tariff (LTPT) Subsidy',
      description: 'The scheme "Low Tension Power Tariff (LTPT) Subsidy" is introduced to assist MSME enterprises in reducing their electricity costs. A subsidy of 20% is given for 36 months from the date of commencement of production or from the date of obtaining power connection, whichever is later.',
      gender: '',
      category: 'business',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 6,
      title: 'Braille Watches by Welfare of Differently Abled Persons Department',
      description: 'The "Braille Watches by Welfare of Differently Abled Persons Department" scheme was launched by the Department for the Welfare of Differently Abled Persons, Government of Tamil Nadu. Under this scheme, braille watches are distributed to working visually impaired persons.',
      gender: '',
      category: 'business',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 7,
      title: 'E.V.R. Maniammaiyar Ninaivu Marriage Assistance Scheme for Daughter’s of Poor Widows: Scheme-II',
      description: 'The "E.V.R. Maniammaiyar Ninaivu Marriage Assistance Scheme for Daughters of Poor Widows: Scheme-II" was launched by the Social Welfare and Women Empowerment Department, Tamil Nadu. The scheme aims to help poor widow mothers by providing financial assistance for the marriage of their daughters.',
      gender: 'female',
      category: 'finance',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'no',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 8,
      title: 'Financial Assistance on the Natural Death of Differently Abled Person',
      description: '"Financial Assistance on the Natural Death of Differently Abled Person" was launched by the Dept for the Welfare of Differently Abled Persons, Tamil Nadu. A financial assistance of ₹15,000/- is provided to the legal heir in the event of the natural death of the differently-abled person.',
      gender: 'female',
      category: 'finance',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'yes',
      bpl: '',
      employmentStatus: ''
    },
    {
      id: 9,
      title: 'Education Assistance - Folk Artist',
      description: 'The "Education Assistance - Folk Artist" scheme was launched by the Art and Culture Department, Government of Tamil Nadu. The scheme provides financial assistance for the education of children of registered folk artistes.',
      gender: '',
      category: 'education',
      age: '',
      caste: '',
      residence: '',
      differentlyAbled: 'yes',
      bpl: '',
      employmentStatus: ''
    },
  ]);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform any necessary actions on search (if any)
  };

  const filteredSchemes = schemes.filter(scheme => {
    let matches = true;
    if (filters.gender && scheme.gender !== filters.gender) {
      matches = false;
    }
    if (filters.category && scheme.category !== filters.category) {
      matches = false;
    }
    if (filters.age && scheme.age !== filters.age) {
      matches = false;
    }
    if (filters.caste && scheme.caste !== filters.caste) {
      matches = false;
    }
    if (filters.residence && scheme.residence !== filters.residence) {
      matches = false;
    }
    if (filters.differentlyAbled && scheme.differentlyAbled !== filters.differentlyAbled) {
      matches = false;
    }
    if (filters.bpl && scheme.bpl !== filters.bpl) {
      matches = false;
    }
    if (filters.employmentStatus && scheme.employmentStatus !== filters.employmentStatus) {
      matches = false;
    }
    if (searchTerm && !scheme.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      matches = false;
    }
    return matches;
  });

  return (
    <Container className="container">
      <header className="header">
        <h1>Tamil Nadu</h1>
      </header>
      <Row>
        <Col md={3}>
          <div className="scheme-filter">
            <SchemeFilter onFilterChange={handleFilterChange} />
          </div>
        </Col>
        <Col md={9}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for schemes..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="scheme-list">
            <SchemeList schemes={filteredSchemes} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
