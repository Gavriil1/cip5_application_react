import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

/*
  Displays a 404 page when customer enters incorrect link
*/

function NotFoundPage() {
  return (
      <div className="page-wrap d-flex flex-row align-items-center">
          <Container>
              <Row className="justify-content-center">
                  <Col md={12} className="text-center">
                      <h1><span className="display-1 d-block">404</span></h1>
                      <div className="mb-4 lead">The page you are looking for was not found.</div>
                      <Button style={{ color: '#ffffff', backgroundColor: '#004085' }} href="/">Back to Notes</Button>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default NotFoundPage;