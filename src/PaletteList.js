import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>kolor-ui</h1>
        {palettes.map(p => (
          <MiniPalette {...p} key={p.id} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
