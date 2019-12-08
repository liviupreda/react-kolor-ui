import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem } from "@material-ui/core";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="Navbar-logo">
          <a href="/">kolor-ui</a>
        </div>
        <div className="Navbar-slider-container">
          <span>Level: {level}</span>
          <div className="Navbar-slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="Navbar-select-container">
          <Select>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
