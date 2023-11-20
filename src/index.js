import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin, a11yPlugin]);

import "./main.scss";
console.log(colord);

// function createPalette() creates a color palette as an object of colord objects and returns it in an object

const createPalette = () => {
  const palette = {};

  const accentHueSign = Math.random() > 0.5 ? 1 : -1;
  const accentHueOffset = (Math.random() * 60 + 100) * accentHueSign;
  palette.accentA = colord({
    h: Math.random() * 360,
    s: Math.random() * 20 + 80,
    l: Math.random() * 20 + 40,
  });
  palette.accentB = palette.accentA.rotate(accentHueOffset);
  palette.bgLight = colord({
    h: palette.accentA.toHsl.h + Math.random() * accentHueOffset,
    s: Math.random() * 30,
    l: Math.random() * 10 + 90,
  });
  palette.bgLightAlt = palette.bgLight.darken(0.1);
  palette.fgLight = colord({
    h: palette.accentA.toHsl.h + Math.random() * accentHueOffset,
    s: Math.random() * 30,
    l: Math.random() * 10,
  });
  palette.bgDark = colord({
    h: palette.accentA.toHsl.h + Math.random() * accentHueOffset,
    s: Math.random() * 50,
    l: Math.random() * 10 + 10,
  });
  palette.bgDarkAlt = palette.bgDark.lighten(0.2);
  palette.fgDark = colord({
    h: palette.accentA.toHsl.h + Math.random() * accentHueOffset,
    s: Math.random() * 30,
    l: Math.random() * 5 + 95,
  });
  return palette;
};

const renderPalette = (palette) => {
  document.querySelector(".color-holder").innerHTML = "";
  Object.entries(palette).forEach((entry) => {
    const squareDiv = document.createElement("div");
    // console.log(entry[1]);
    squareDiv.style.backgroundColor = entry[1].toHslString();
    squareDiv.textContent = entry[0];
    document.querySelector(".color-holder").appendChild(squareDiv);
  });
};

// PREVIEW CODE:

const newPalette = createPalette();
renderPalette(newPalette);

document.querySelector("#btn-generate").addEventListener("click", () => {
  const newPalette = createPalette();
  renderPalette(newPalette);
});

// console.log(x);
