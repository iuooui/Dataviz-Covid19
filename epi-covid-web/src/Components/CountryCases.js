import React from "react";
import Card from "react-bootstrap/Card";

class CountryCases extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="card">
        <Card.Body>
          <Card.Title> Number of cases per country</Card.Title>
          <Card.Text className="scrollable"> lorem ipsum : 227</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryCases;
