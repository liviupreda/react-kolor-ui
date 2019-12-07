import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        // Replace any spaces in color name with a dash; will use in routes
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        // Use Chroma to generate RGB color from Hex value
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}

function generateRange(hexColor) {
  // Generate an array of ranges for hexColor shade scale:
  // [hexColor.darken(1.4), hexColor, #fff]
  const end = "#fff";
  return [chroma(hexColor).darken(1.4), hexColor, end];
}

function generateScale(hexColor, numberOfColors) {
  // Generate scale from the range generated in generateRange()
  // Spits out a number of *numberofColors* colors
  return chroma
    .scale(generateRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };
