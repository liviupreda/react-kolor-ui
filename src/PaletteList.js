import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
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
            <Link to="/palette/new">
              <Button variant="contained" color="primary">
                Create Custom Palette
              </Button>
            </Link>
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
