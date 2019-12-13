import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // The shades 100- 900 always stay the same, so no need to update state with all colors each time
    // Instead, call helper gatherShades() to get the shades only one time
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    // Return all shades for a single color id; we will display shades 100 - 900
    // Use slice to remove shade 50 which is plain white and only used to generate other shades
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color.hex}
        // hide MORE link when displaying SingleColorPalette
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
