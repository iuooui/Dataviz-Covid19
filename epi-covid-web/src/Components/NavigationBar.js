import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.tCasesClick = this.tCasesClick.bind(this);
    this.cCasesClick = this.cCasesClick.bind(this);
    this.tDeathsClick = this.tDeathsClick.bind(this);
    this.cDeathsClick = this.cDeathsClick.bind(this);
    this.tRecoveredClick = this.tRecoveredClick.bind(this);
    this.cRecoveredClick = this.cRecoveredClick.bind(this);
    this.nClearClick = this.nClearClick.bind(this);
  }
  tCasesClick() {
    this.props.tcClick();
  }
  cCasesClick() {
    this.props.ccClick();
  }
  tDeathsClick() {
    this.props.tdClick();
  }
  cDeathsClick() {
    this.props.cdClick();
  }
  tRecoveredClick() {
    this.props.trClick();
  }
  cRecoveredClick() {
    this.props.crClick();
  }
  nClearClick() {
    this.props.cClick();
  }
  render() {
    return (
      <Navbar bg="danger" variant="dark">
        <Navbar.Brand>Dataviz-Covid19</Navbar.Brand>
        <Nav className="mr-auto">
          <Button className={"btn-primary-outline"} onClick={this.tCasesClick}>
            Total Cases
          </Button>
          <Button className={"btn-primary-outline"} onClick={this.cCasesClick}>
            Country Cases
          </Button>
          <Button className={"btn-primary-outline"} onClick={this.tDeathsClick}>
            Total Deaths
          </Button>
          <Button className={"btn-primary-outline"} onClick={this.cDeathsClick}>
            Country Deaths
          </Button>
          <Button
            className={"btn-primary-outline"}
            onClick={this.tRecoveredClick}
          >
            Total Recovered
          </Button>
          <Button
            className={"btn-primary-outline"}
            onClick={this.cRecoveredClick}
          >
            Country Recovered
          </Button>
        </Nav>
        <Button className={"btn-primary-outline"} onClick={this.nClearClick}>
          Clear Dashboard
        </Button>
      </Navbar>
    );
  }
}
export default Navigationbar;
