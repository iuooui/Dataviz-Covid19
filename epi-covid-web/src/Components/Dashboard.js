import React from "react";
import Card from 'react-bootstrap/Card';

import Map from "./Map";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flexin">
        <Card className="tables">
            <Card.Body>
                <Card.Title> Number of cases per country</Card.Title>
                <Card.Text> lorem ipsum : 227</Card.Text>
            </Card.Body>
        </Card>
        <Map></Map>
        <Card className="tables">
            <Card.Body>
                <Card.Title> Number of deaths per country</Card.Title>
                <Card.Text> lorem ipsum : 133</Card.Text>
            </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
