import React, { useState } from 'react';
import { Container, Card, Form, Row, Col, Table, Button } from 'react-bootstrap';

function AssetManagement() {
  const [assets, setAssets] = useState([]);
  const [formInput, setFormInput] = useState({
    name: '',
    type: '',
    value: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleAddAsset = (event) => {
    event.preventDefault();
    if (formInput.name && formInput.type && formInput.value) {
      setAssets([...assets, formInput]);
      setFormInput({
        name: '',
        type: '',
        value: '',
      });
    }
  };

  const handleRemoveAsset = (index) => {
    const newAssets = [...assets];
    newAssets.splice(index, 1);
    setAssets(newAssets);
  };

  return (
    <Container>
      <h2 className="my-4">Asset Management</h2>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleAddAsset}>
            <Row>
              <Col md>
                <Form.Group controlId="assetName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formInput.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="assetType">
                  <Form.Label>Type:</Form.Label>
                  <Form.Control
                    type="text"
                    name="type"
                    value={formInput.type}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="assetValue">
                  <Form.Label>Value:</Form.Label>
                  <Form.Control
                    type="number"
                    name="value"
                    value={formInput.value}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Add Asset
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{asset.value}</td>
              <td>
                <Button variant="info" onClick={() => console.log(asset)}>
                  View Details
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveAsset(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AssetManagement;
