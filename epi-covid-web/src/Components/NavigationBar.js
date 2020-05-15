import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Dataviz-Covid19
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigationbar;
