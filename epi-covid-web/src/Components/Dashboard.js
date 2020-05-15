import React from "react";
import Card from 'react-bootstrap/Card';

import Map from "./Map";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flexin">
          <div className="title bg-dark text-light">Coronavirus COVID19-19 Global Cases Dashboard by Epitech Nancy students</div>
        <Card bg={"dark"} text={"white"}>
            <Card.Body>
                <Card.Title> Number of cases per country</Card.Title>
                <Card.Text> lorem ipsum : 227</Card.Text>
            </Card.Body>
        </Card>
        <Map></Map>
        <Card bg={"dark"} text={"white"}>
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
