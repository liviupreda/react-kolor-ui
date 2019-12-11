import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "cornflowerblue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  paletteList: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
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
