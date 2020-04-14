import React from "react";
import "./style.css";
import { rave } from "../../assets/images";

const CssVariables = () => {
  return (
    <div className="css-variable-container">
      <div class="controls">
        <label for="spacing">Spacing:</label>
        <input name="spacing" type="range" min="10" max="200" value="10" />
        <label for="blue">Blur:</label>
        <input name="blue" type="range" min="0" max="10" value="0" />
        <label for="base">Base Color:</label>
        <input name="base" type="color" value="#ffc600" />
      </div>
      <img src={rave} alt="rave" />
    </div>
  );
};

export default CssVariables;

// <div class="controls">
// <label for="spacing">Spacing:</label>
// <input name="spacing" id="spacing" type="range" min="10" max="200" value="10" data-sizing="px">

// <label for="blur">Blur:</label>
// <input type="range" name="blur" id="blur" min="0" max="10" data-sizing="px" value="0">

// <label for="base">Base Color</label>
// <input type="color" id="base" name="base" value="#ffc600">
// </div>
