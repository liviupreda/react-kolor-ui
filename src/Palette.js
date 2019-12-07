import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[500].map(color => (
      <ColorBox background={color.hex} name={color.name} key={color.name} />
    ));
    return (
      <div className="Palette">
        <Slider />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer goes here*/}
      </div>
    );
  }
}

export default Palette;
