import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // The shades 100- 900 always stay the same, so no need to update state with all colors each time
    // Instead, call helper gatherShades() to get the shades only one time
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { colorFormat: "hex" };
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeColorFormat(val) {
    this.setState({ colorFormat: val });
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
    const { colorFormat } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;

    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color[colorFormat]}
        // hide MORE link & change ColorBox height to 50% when displaying SingleColorPalette;
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          handleChange={this.changeColorFormat}
          // Hide Navbar shade slider
          showSlider={false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
