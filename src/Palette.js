import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, colorFormat } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[colorFormat]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        // show MORE link and change ColorBox height to 25% when displaying the entire color Palette
        showingFullPalette
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
          // Show the Navbar shade slider
          showSlider
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
