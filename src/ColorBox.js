import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";

import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s"
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.5)"
        : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.06 ? "white" : "black"
  },
  btnMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  btnCopy: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0"
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      paletteId,
      colorId,
      showingFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;
    // Use chroma to dinamically change text brightness, based on ColorBox background color
    // const isDarkColor = chroma(background).luminance() <= 0.06;
    // const isLightColor = chroma(background).luminance() >= 0.6;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            // Add show class to display overlay if copied is true
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.btnCopy}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.btnMore}>More</span>
            </Link>
          )}
          {/* stopPropagation() stops event bubbling to parent elements.
          We need this as otherwise, once we click on the More button,
          it would also fire the color Copy & animation  */}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
