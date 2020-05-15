import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="danger" variant="dark">
        <Navbar.Brand>
          Dataviz-Covid19
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigationbar;
