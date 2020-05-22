import React from "react";
import Card from "react-bootstrap/Card";

class TotalCases extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="total">
        <Card.Body>
          <Card.Title className="text-center">Total <span className="yellow">Cases</span></Card.Title>
          <Card.Text className="text-center yellow xl"> 931 203 180</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TotalCases;