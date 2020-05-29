import React from "react";
import GridLayout from 'react-grid-layout';


import Map from "./Map";
import CountryCases from "./CountryCases";
import CountryDeaths from "./CountryDeaths";
import TotalCases from "./TotalCases"
import TotalDeaths from "./TotalDeaths";
import Navigationbar from "./NavigationBar";
import Title from "./Title";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, numChildren: [0, 0, 0, 0, 0, 0]};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.children =  [[], [], [], [], [], []];
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

  TotalCasesClick() {
    this.setState( {numChildren: [
      this.state.numChildren[0] + 1, this.state.numChildren[1], this.state.numChildren[2], this.state.numChildren[3],
      this.state.numChildren[4], this.state.numChildren[5]
    ]});
    for (let i= 0; i < this.state.numChildren; i++)
      this.children[0].push(
      <div key={"t" + this.state.numChildren[0]} data-grid={{x: 0, y: 0, w: 1, h: 2}}>
        <TotalCases></TotalCases>
        </div>)
  }

  render() {
    const layout = [
      {i: 'header', x: 0, y: 0, w: 10, h: 1, static: true},
      {i: 'title', x:0, y: 1, w: 10, h: 1},
      {i: 'tcases', x: 0, y: 2, w: 1, h:2},
      {i: 'map', x: 1, y: 2, w: 8, h: 9},
      {i: 'tdeaths', x: 9, y: 2, w: 1, h:2},
      {i: 'ccases', x: 0, y: 3, w: 1, h: 7},
      {i: 'cdeaths', x: 9, y: 3, w: 1, h: 7},
    ];

    return (
      <div>
      <GridLayout className="layout" layout={layout} width={this.state.width} cols={10} autoSize={true} rowHeight={60} addChild={this.onAddChild}>
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
        <div className="country" key="ccases">
          <CountryCases></CountryCases>
        </div>
        <div className="country" key="cdeaths">
          <CountryDeaths></CountryDeaths>
        </div>
      {this.children[0]}
      {this.children[1]}
      {this.children[2]}
      {this.children[3]}
      {this.children[4]}
      {this.children[5]} 
      </GridLayout>
      </div>
      );
  }
}

export default Dashboard;
