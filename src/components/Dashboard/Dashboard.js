import React, { useState, useEffect } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {
  const [assets, setAssets] = useState([
    { name: "Stock A", quantity: 10, pricePerUnit: 100, previousPricePerUnit: 98 },
    { name: "Bond B", quantity: 5, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond C", quantity: 8, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock D", quantity: 13, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock E", quantity: 20, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock F", quantity: 3, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock G", quantity: 1, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond H", quantity: 4, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock I", quantity: 76, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond J", quantity: 8, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond K", quantity: 60, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond L", quantity: 63, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Stock M", quantity: 9, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond N", quantity: 1, pricePerUnit: 200, previousPricePerUnit: 202 },
    { name: "Bond O", quantity: 12, pricePerUnit: 200, previousPricePerUnit: 202 }
  ]);

  const [totalValue, setTotalValue] = useState(0);
  const [daysGainLoss, setDaysGainLoss] = useState(0);

  useEffect(() => {
    let value = 0;
    let gainLoss = 0;

    assets.forEach(asset => {
      value += asset.quantity * asset.pricePerUnit;
      gainLoss += asset.quantity * (asset.pricePerUnit - asset.previousPricePerUnit);
    });

    setTotalValue(value);
    setDaysGainLoss(gainLoss);
  }, [assets]);

  return (
    <Container>
      <h2 className="my-4">Dashboard</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Total Portfolio Value</Card.Title>
          <Card.Text>${totalValue.toFixed(2)}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Day's Gain/Loss: ${daysGainLoss.toFixed(2)}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <h3 className="my-4">Key Assets</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.name}</td>
              <td>{asset.quantity}</td>
              <td>${asset.pricePerUnit.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Dashboard;
