import React from "react";
import Card from "react-bootstrap/Card";

class CountryDeaths extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="card">
        <Card.Body>
          <Card.Title> Number of deaths per country</Card.Title>
          <Card.Text > lorem ipsum : 133</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryDeaths;
