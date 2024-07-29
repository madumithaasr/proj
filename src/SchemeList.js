import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SchemeList = ({ schemes }) => {
  return (
    <div>
      {schemes.map(scheme => (
        <Card key={scheme.id} className="mb-3">
          <Card.Body>
            <Card.Title>
              {scheme.id === 2 ? (
                <Link to={`/scheme2/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 3 ? (
                <Link to={`/scheme3/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 4 ? (
                <Link to={`/scheme4/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 5 ? (
                <Link to={`/scheme5/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 6 ? (
                <Link to={`/scheme6/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 7 ? (
                <Link to={`/scheme7/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 8 ? (
                <Link to={`/scheme8/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : scheme.id === 9 ? (
                <Link to={`/scheme9/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              ) : (
                <Link to={`/scheme/${scheme.id}`} style={{ textDecoration: 'none', color: '#6a1b9a' }}>
                  {scheme.title}
                </Link>
              )}
            </Card.Title>
            <Card.Text>{scheme.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SchemeList;
