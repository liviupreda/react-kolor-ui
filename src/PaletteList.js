import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "cornflowerblue"
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>kolor-ui</h1>
          </nav>
          <div className={classes.paletteList}>
            {palettes.map(p => (
              <MiniPalette {...p} key={p.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
