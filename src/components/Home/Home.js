import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Container fluid className="banner p-5 mb-3">
        <Row>
          <Col>
            <div className="banner-text">
              <h1>Welcome to Financial Diary!</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="main-text">
        <Card>
          <Card.Body>
            <Card.Text>
              Manage and track your financial assets in one place! Explore the latest market trends, manage your stock portfolio, and make informed investment decisions with our comprehensive financial tools.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
