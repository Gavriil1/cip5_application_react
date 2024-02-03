import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function NotFoundPage() {
  return (
      <div className="page-wrap d-flex flex-row align-items-center">
          <Container>
              <Row className="justify-content-center">
                  <Col md={12} className="text-center">
                      <span className="display-1 d-block">404</span>
                      <div className="mb-4 lead">The page you are looking for was not found.</div>
                      <Button variant="link" href="/">Back to Notes</Button>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default NotFoundPage;