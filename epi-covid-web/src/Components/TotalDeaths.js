import React from "react";
import Card from "react-bootstrap/Card";

class TotalDeaths extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="total">
        <Card.Body>
          <Card.Title className="text-center">
            Total <span className="red">Deaths</span>
          </Card.Title>
          <Card.Text className="xl text-center red">12 203 180</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TotalDeaths;
