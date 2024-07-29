import React from 'react';
import { Form, Col, Button, Accordion, Card } from 'react-bootstrap';

const SchemeFilter = ({ onFilterChange }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Filter By
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Group as={Col} controlId="formSchemeCategory">
                <Form.Label>Scheme Category</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('category', e.target.value)}>
                  <option value="">Select</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="education">Finance</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('gender', e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" onChange={e => onFilterChange('age', e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formCaste">
                <Form.Label>Caste</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('caste', e.target.value)}>
                  <option value="">Select</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formResidence">
                <Form.Label>Residence</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('residence', e.target.value)}>
                  <option value="">Select</option>
                  <option value="urban">Urban</option>
                  <option value="rural">Rural</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formDifferentlyAbled">
                <Form.Label>Differently Abled</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('differentlyAbled', e.target.value)}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formBPL">
                <Form.Label>BPL Status</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('bpl', e.target.value)}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formEmploymentStatus">
                <Form.Label>Employment Status</Form.Label>
                <Form.Control as="select" onChange={e => onFilterChange('employmentStatus', e.target.value)}>
                  <option value="">Select</option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="button" onClick={() => onFilterChange()}>
                Apply
              </Button>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default SchemeFilter;
