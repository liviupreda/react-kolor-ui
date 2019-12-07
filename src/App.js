import React from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedPalettes[6]));
  return <Palette {...seedPalettes[6]} />;
}

export default App;
