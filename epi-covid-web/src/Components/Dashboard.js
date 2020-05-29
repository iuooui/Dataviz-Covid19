import React from "react";
import GridLayout from "react-grid-layout";

import Map from "./Map";
import CountryCases from "./CountryCases";
import CountryDeaths from "./CountryDeaths";
import CountryRecovered from "./CountryRecovered";
import TotalCases from "./TotalCases";
import TotalDeaths from "./TotalDeaths";
import TotalRecovered from "./TotalRecovered";
import Navigationbar from "./NavigationBar";
import Title from "./Title";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      totalCases: [],
      countryCases: [],
      totalDeaths: [],
      countryDeaths: [],
      totalRecovered: [],
      countryRecovered: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.TotalCasesClick = this.TotalCasesClick.bind(this);
    this.CountryCasesClick = this.CountryCasesClick.bind(this);
    this.TotalDeathsClick = this.TotalDeathsClick.bind(this);
    this.CountryDeathsClick = this.CountryDeathsClick.bind(this);
    this.TotalRecoveredClick = this.TotalRecoveredClick.bind(this);
    this.CountryRecoveredClick = this.CountryRecoveredClick.bind(this);
    this.clearClick = this.clearClick.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  TotalCasesClick(e) {
    this.setState({
      totalCases: [
        <div key={Math.random()} data-grid={{ x: 0, y: 1, w: 1, h: 2 }}>
          <TotalCases></TotalCases>
        </div>,
        ...this.state.totalCases,
      ],
    });
  }

  CountryCasesClick() {
    this.setState({
      countryCases: [
        <div key={Math.random()} data-grid={{ x: 0, y: 1, w: 1, h: 7 }}>
          <CountryCases></CountryCases>
        </div>,
        ...this.state.countryCases,
      ],
    });
  }

  TotalDeathsClick() {
    this.setState({
      totalDeaths: [
        <div key={Math.random()} data-grid={{ x: 9, y: 1, w: 1, h: 2 }}>
          <TotalDeaths></TotalDeaths>
        </div>,
        ...this.state.totalDeaths,
      ],
    });
  }

  CountryDeathsClick() {
    this.setState({
      countryDeaths: [
        <div key={Math.random()} data-grid={{ x: 9, y: 1, w: 1, h: 7 }}>
          <CountryDeaths></CountryDeaths>
        </div>,
        ...this.state.countryDeaths,
      ],
    });
  }

  TotalRecoveredClick() {
    this.setState({
      totalRecovered: [
        <div key={Math.random()} data-grid={{ x: 0, y: 1, w: 1, h: 2 }}>
          <TotalRecovered></TotalRecovered>
        </div>,
        ...this.state.totalRecovered,
      ],
    });
  }

  CountryRecoveredClick() {
    this.setState({
      countryRecovered: [
        <div key={Math.random()} data-grid={{ x: 0, y: 1, w: 1, h: 7 }}>
          <CountryRecovered></CountryRecovered>
        </div>,
        ...this.state.countryRecovered,
      ],
    });
  }

  clearClick() {
    this.setState({
      totalCases: [],
      countryCases: [],
      totalDeaths: [],
      countryDeaths: [],
      totalRecovered: [],
      countryRecovered: [],
    });
  }

  render() {
    return (
      <div>
        <Navigationbar
          tdClick={this.TotalDeathsClick}
          cdClick={this.CountryDeathsClick}
          tcClick={this.TotalCasesClick}
          ccClick={this.CountryCasesClick}
          trClick={this.TotalRecoveredClick}
          crClick={this.CountryRecoveredClick}
          cClick={this.clearClick}
        ></Navigationbar>
        <GridLayout
          className="layout"
          width={this.state.width}
          cols={10}
          autoSize={true}
          rowHeight={60}
        >
          <div key="title" data-grid={{ x: 0, y: 0, w: 10, h: 1 }}>
            <Title></Title>
          </div>
          <div className="map" key="map" data-grid={{ x: 1, y: 1, w: 8, h: 9 }}>
            <Map></Map>
          </div>
          {this.state.totalCases}
          {this.state.countryCases}
          {this.state.totalDeaths}
          {this.state.countryDeaths}
          {this.state.totalRecovered}
          {this.state.countryRecovered}
        </GridLayout>
      </div>
    );
  }
}

export default Dashboard;
