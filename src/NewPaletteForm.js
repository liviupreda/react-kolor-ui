import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";

import DraggableColorBox from "./DraggableColorBox";
// import { getThemeProps } from "@material-ui/styles";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function NewPaletteForm(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const { savePalette } = props;
  const [open, setOpen] = useState(true);
  const [curColor, setCurColor] = useState("cornflowerblue");
  const [colorBox, setColorBox] = useState([{ name: "blue", color: "blue" }]);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", val => {
      if (
        colorBox.every(({ name }) => name.toLowerCase() !== val.toLowerCase())
      )
        return true;
      else return false;
    });

    ValidatorForm.addValidationRule("isColorUnique", val => {
      if (colorBox.every(({ color }) => color !== curColor)) return true;
      else return false;
    });
  }, [colorBox, curColor]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurColor = newColor => {
    setCurColor(newColor.hex);
  };

  const addNewColorBox = () => {
    const newColorBox = {
      name: newColorName,
      color: curColor
    };
    setColorBox([...colorBox, newColorBox]);
    setNewColorName("");
  };

  const handleColorFormChange = e => {
    setNewColorName(e.target.value);
  };

  const handlePaletteFormChange = e => {
    setNewPaletteName(e.target.value);
  };

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "🎨",
      colors: colorBox
    };
    savePalette(newPalette);
    // Redirect to homepage on click
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create New Palette
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handlePaletteFormChange}
              validators={["required"]}
              errorMessages={["Please enter a palette name"]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4" noWrap>
          Design Your Palette
        </Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker color={curColor} onChangeComplete={updateCurColor} />
        <ValidatorForm onSubmit={addNewColorBox}>
          <TextValidator
            label="Color Name"
            value={newColorName}
            name="newColorName"
            onChange={handleColorFormChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Please enter a color name",
              "Color name must be unique",
              "Color already used!"
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ backgroundColor: curColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {colorBox.map((c, i) => (
          <DraggableColorBox color={c.color} name={c.name} key={i} />
        ))}
      </main>
    </div>
  );
}

export default NewPaletteForm;
