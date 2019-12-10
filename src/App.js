import React, { Component } from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  // Parse the Palette array in seedPalettes.js and return the pallete with id === x
  findPalette(id) {
    return seedPalettes.find(palette => palette.id === id);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <h1>Palette List</h1>} />
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
        </Switch>
      </Router>
    );
  }
}

export default App;
