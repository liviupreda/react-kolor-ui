import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  // Parse the Palette array in seedPalettes.js and return the pallete with id === x
  findPalette(id) {
    return seedPalettes.find(palette => palette.id === id);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              // Pass routeProps down to PaletteList: [App] props.history -->
              // --> [PaletteList] goToPalette() --> [MiniPalette] onClick
              <PaletteList palettes={seedPalettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:palId/:colorId"
            render={() => <h1>Color Shades Page</h1>}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
