import React from "react";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFkb3JtYXplciIsImEiOiJja2E1NGlwamEwMDR1M2ZwZjMwOTB1Z2dsIn0.KYTElRjTe1JS258lGWj4dw";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/vadormazer/cka54kblx00nd1il7mygs5jvr",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
      map.on("load", function () {
        map.resize();
      });
    });
  }

  render() {
    return (
      <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
    );
  }
}

export default Map;
