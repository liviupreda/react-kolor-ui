import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, colorFormat: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeColorFormat(val) {
    this.setState({ colorFormat: val });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, colorFormat } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[colorFormat]}
        name={color.name}
        key={color.name}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer goes here*/}
      </div>
    );
  }
}

export default Palette;
