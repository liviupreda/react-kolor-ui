import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.footer}>
      {paletteName}
      <span className={classes.footerEmoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
