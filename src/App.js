import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  // Parse the Palette array in seedPalettes.js and return the pallete with id === x
  const findPalette = id => seedPalettes.find(palette => palette.id === id);

  const savePalette = newPalette => console.log(newPalette);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={() => <NewPaletteForm savePalette={savePalette} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
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
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
export default App;
