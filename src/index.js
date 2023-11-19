import { colord, random } from "colord";
console.log(colord);

// function createPalette() creates a color palette as an object of colord objects and returns it in an object

const createPalette = () => {
  const palette = {};
  palette.accentA = colord({
    h: Math.random() * 360,
    s: 255,
    l: Math.random() * 10 + 45,
  });
  palette.accentB = palette.accentA.rotate(Math.random() * 60 + 150);

  return palette;
};

const renderPalette = (palette) => {
  Object.entries(palette).forEach((entry) => {
    const squareDiv = document.createElement("div");
    console.log(entry[1]);
    squareDiv.style.width = "100px";
    squareDiv.style.height = "50px";
    squareDiv.style.backgroundColor = entry[1].toHslString();
    squareDiv.textContent = entry[0];
    document.querySelector("body").appendChild(squareDiv);
  });
};

// PREVIEW CODE:

const newPalette = createPalette();
renderPalette(newPalette);

// console.log(x);
