import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "cornflowerblue",
    height: "100vh",
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
  // Method routing to individual Palette by clicking on MiniPalette
  // We use props.history instead of Link bc of best practices and styling reasons
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
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
              <MiniPalette
                {...p}
                key={p.id}
                handleClick={() => this.goToPalette(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
