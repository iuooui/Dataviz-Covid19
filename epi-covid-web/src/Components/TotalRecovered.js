import React from "react";
import Card from "react-bootstrap/Card";

class TotalRecovered extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="total">
        <Card.Body>
          <Card.Title className="text-center">Total Healed</Card.Title>
          <Card.Text className="text-center green xl"> 2 605 060</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TotalRecovered;
