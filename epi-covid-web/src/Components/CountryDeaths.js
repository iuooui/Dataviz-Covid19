import React from "react";
import Card from "react-bootstrap/Card";

class CountryDeaths extends React.Component {
  render() {
    return (
      <Card bg={"dark"} text={"white"} className="country">
        <Card.Body>
          <Card.Title className="country-title"> Number of <span className="red">deaths</span> per country</Card.Title>
          <Card.Text className="scrollable card-text"> France : XYZ <br></br> Germany : ZYX </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryDeaths;
