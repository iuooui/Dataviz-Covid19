import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GridLayout from 'react-grid-layout';


import Map from "./Map";
import CountryCases from "./CountryCases";
import CountryDeaths from "./CountryDeaths";
import TotalCases from "./TotalCases"
import TotalDeaths from "./TotalDeaths";
import TotalRecovered from "./TotalRecovered";
import Navigationbar from "./NavigationBar";
import Header from "./Header";
import Title from "./Title";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const layout = [
      {i: 'header', x: 0, y: 0, w: 10, h: 1, static: true},
      {i: 'title', x:0, y: 1, w: 10, h: 1},
      {i: 'tcases', x: 0, y: 2, w: 1, h:2},
      {i: 'map', x: 1, y: 2, w: 8, h: 9},
      {i: 'tdeaths', x: 9, y: 2, w: 1, h:2}
    ];

    return (
      <div>
      <GridLayout className="layout" layout={layout} width={this.state.width} cols={10} autoSize={true} rowHeight={60}>
        <div key="header">
          <Navigationbar ></Navigationbar>
        </div>
        <div key="title">
          <Title></Title>
        </div>
        <div key="tcases">
          <TotalCases></TotalCases>
        </div>
        <div className="map" key="map">
          <Map></Map>
        </div>
        <div key="tdeaths">
          <TotalDeaths></TotalDeaths>
        </div>
      </GridLayout>
      </div>

      /*
      <Container fluid className="flexin ">
        <Row>
          <Col><div className="one bg-dark text-light">Coronavirus COVID19-19 Global Cases Dashboard by Epitech Nancy students</div></Col>
        </Row>
        <Row>
          <Col className="two row-space"><TotalCases></TotalCases></Col>
          <Col xs={6} className="three row-space"><Map classname="six"></Map></Col>
          <Col className="four row-space"><TotalDeaths ></TotalDeaths></Col>
          <Col className="five row-space"><TotalRecovered ></TotalRecovered></Col>
        </Row>
        <Row>
        <Col className="five row-space"><CountryCases classname="five"></CountryCases></Col>
        <Col><CountryDeaths className="seven"></CountryDeaths></Col>
        </Row>
          <CountryDeaths classname="eight"></CountryDeaths>
      </Container>*/
    );
  }
}

export default Dashboard;
