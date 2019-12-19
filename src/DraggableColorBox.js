import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

function DraggableColorBox(props) {
  return <div style={{ backgroundColor: props.color }}>{props.color}</div>;
}

export default withStyles(styles)(DraggableColorBox);
