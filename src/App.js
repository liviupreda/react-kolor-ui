import React from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[6])} />;
    </div>
  );
}

export default App;
