const tempCard = document.querySelector(".temp-card");
const tempBtn = document.querySelector(".temp-convort-btn");
const tempOutput = document.querySelector(".temp-output");
const massCard = document.querySelector(".mass-card");
const massBtn = document.querySelector(".mass-convort-btn");
const massOutput = document.querySelector(".mass-output");
const lengthCard = document.querySelector(".length-card");
const lengthBtn = document.querySelector(".length-convort-btn");
const lengthOutput = document.querySelector(".length-output");

tempBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let fromTempOpt = document.querySelector("#from-temp-option").value;
  let tempInput = document.querySelector(".temp-input").value;
  let toTempOpt = document.querySelector("#to-temp-option").value;

  if (fromTempOpt === toTempOpt && toTempOpt == "celcius") {
    tempOutput.innerHTML = `${tempInput}<span>&#8451;</span>`;
  } else if (fromTempOpt == "celcius" && toTempOpt == "farenhim") {
    tempOutput.innerHTML = `${
      (Math.round(tempInput * 1.8 + 32) * 100) / 100
    }<span>&#8457;</span>`;
  } else if (fromTempOpt == "celcius" && toTempOpt == "kelvin") {
    tempOutput.innerHTML = `${
      Math.round((tempInput + 273.15) * 100) / 100
    }<span>&#8490;</span>`;
  } else if (fromTempOpt === toTempOpt && toTempOpt == "farenhim") {
    tempOutput.innerHTML = `${tempInput}<span>&#8457;</span>`;
  } else if (fromTempOpt == "farenhim" && toTempOpt == "celcius") {
    tempOutput.innerHTML = `${
      Math.round(((tempInput - 32) / 1.8) * 100) / 100
    }<span>&#8451;</span>`;
  } else if (fromTempOpt == "farenhim" && toTempOpt == "kelvin") {
    tempOutput.innerHTML = `${
      Math.round((tempInput + 459.67) * (5 / 9) * 100) / 100
    }<span>&#8490;</span>`;
  } else if (fromTempOpt === toTempOpt && toTempOpt == "kelvin") {
    tempOutput.innerHTML = `${tempInput}<span>&#8490;</span>`;
  } else if (fromTempOpt == "kelvin" && toTempOpt == "celcius") {
    tempOutput.innerHTML = `${
      Math.round((tempInput - 273.15) * 100) / 100
    } <span>&#8451;</span>`;
  } else if (fromTempOpt == "kelvin" && toTempOpt == "farenhim") {
    tempOutput.innerHTML = `${
      Math.round((tempInput * 1.8 - 459.67) * 100) / 100
    }<span>&#8457;</span>`;
  }
});

massBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let fromMassOpt = document.querySelector("#from-mass-option").value;
  let massInput = document.querySelector(".mass-input").value;
  let toMassOpt = document.querySelector("#to-mass-option").value;

  if (fromMassOpt === toMassOpt && toMassOpt == "kilograms") {
    massOutput.innerHTML = `${massInput}<span>kg</span>`;
  } else if (fromMassOpt == "kilograms" && toMassOpt == "grams") {
    massOutput.innerHTML = `${massInput * 1000}<span>gr</span>`;
  } else if (fromMassOpt == "kilograms" && toMassOpt == "ounces") {
    massOutput.innerHTML = `${
      Math.round((massInput / 0.02834952) * 100) / 100
    }<span>oz</span>`;
  } else if (fromMassOpt == "kilograms" && toMassOpt == "pounds") {
    massOutput.innerHTML = `${
      Math.round((massInput / 0.45359237) * 100) / 100
    }<span>lbs</span>`;
  } else if (fromMassOpt === toMassOpt && toMassOpt == "grams") {
    massOutput.innerHTML = `${massInput}<span>gr</span>`;
  } else if (fromMassOpt == "grams" && toMassOpt == "kilograms") {
    massOutput.innerHTML = `${massInput / 1000}<span>kg</span>`;
  } else if (fromMassOpt == "grams" && toMassOpt == "ounces") {
    massOutput.innerHTML = `${
      Math.round((massInput / 28.34952) * 100) / 100
    }<span>oz</span>`;
  } else if (fromMassOpt == "grams" && toMassOpt == "pounds") {
    massOutput.innerHTML = `${
      Math.round((massInput / 453.59237) * 100) / 100
    }<span>lbs</span>`;
  } else if (fromMassOpt === toMassOpt && toMassOpt == "ounces") {
    massOutput.innerHTML = `${massInput}<span>oz</span>`;
  } else if (fromMassOpt == "ounces" && toMassOpt == "kilograms") {
    massOutput.innerHTML = `${
      Math.round(massInput * 0.02834952 * 100) / 100
    }<span>kg</span>`;
  } else if (fromMassOpt == "ounces" && toMassOpt == "grams") {
    massOutput.innerHTML = `${
      Math.round(massInput * 28.34952 * 100) / 100
    }<span>gr</span>`;
  } else if (fromMassOpt == "ounces" && toMassOpt == "pounds") {
    massOutput.innerHTML = `${
      Math.round((massInput / 16) * 100) / 100
    }<span>lbs</span>`;
  } else if (fromMassOpt === toMassOpt && toMassOpt == "pounds") {
    massOutput.innerHTML = `${massInput}<span>lbs</span>`;
  } else if (fromMassOpt == "pounds" && toMassOpt == "kilograms") {
    massOutput.innerHTML = `${
      Math.round(massInput * 0.45359237 * 100) / 100
    }<span>kg</span>`;
  } else if (fromMassOpt == "pounds" && toMassOpt == "grams") {
    massOutput.innerHTML = `${
      Math.round(massInput * 453.59237 * 100) / 100
    }<span>gr</span>`;
  } else if (fromMassOpt == "pounds" && toMassOpt == "ounces") {
    massOutput.innerHTML = `${
      Math.round(massInput * 16 * 100) / 100
    }<span>oz</span>`;
  }
});

lengthBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let fromLengthOpt = document.querySelector("#from-length-option").value;
  let lengthInput = document.querySelector(".length-input").value;
  let toLengthOpt = document.querySelector("#to-length-option").value;

  if (fromLengthOpt === toLengthOpt && toLengthOpt == "meters") {
    lengthOutput.innerHTML = `${lengthInput}<span>m</span>`;
  } else if (fromLengthOpt == "meters" && toLengthOpt == "centimeters") {
    lengthOutput.innerHTML = `${lengthInput * 100}<span>cm</span>`;
  } else if (fromLengthOpt == "meters" && toLengthOpt == "inches") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 0.0254) * 100) / 100
    }<span>"</span>`;
  } else if (fromLengthOpt == "meters" && toLengthOpt == "miles") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 1609.344) * 100) / 100
    }<span>mi</span>`;
  } else if (fromLengthOpt == "meters" && toLengthOpt == "feet") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 0.3048) * 100) / 100
    }<span>ft</span>`;
  } else if (fromLengthOpt === toLengthOpt && toLengthOpt == "centimeters") {
    lengthOutput.innerHTML = `${lengthInput}<span>cm</span>`;
  } else if (fromLengthOpt == "centimeters" && toLengthOpt == "meters") {
    lengthOutput.innerHTML = `${lengthInput / 100}<span>m</span>`;
  } else if (fromLengthOpt == "centimeters" && toLengthOpt == "inches") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 2.54) * 100) / 100
    }<span>"</span>`;
  } else if (fromLengthOpt == "centimeters" && toLengthOpt == "miles") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 160934.4) * 100) / 100
    }<span>mi</span>`;
  } else if (fromLengthOpt == "centimeters" && toLengthOpt == "feet") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 30.48) * 100) / 100
    }<span>ft</span>`;
  } else if (fromLengthOpt === toLengthOpt && toLengthOpt == "inches") {
    lengthOutput.innerHTML = `${lengthInput}<span>"</span>`;
  } else if (fromLengthOpt == "inches" && toLengthOpt == "meters") {
    lengthOutput.innerHTML = `${lengthInput * 0.0254}<span>m</span>`;
  } else if (fromLengthOpt == "inches" && toLengthOpt == "centimeters") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 2.54 * 100) / 100
    }<span>cm</span>`;
  } else if (fromLengthOpt == "inches" && toLengthOpt == "miles") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 63360) * 100) / 100
    }<span>mi</span>`;
  } else if (fromLengthOpt == "inches" && toLengthOpt == "feet") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 12) * 100) / 100
    }<span>ft</span>`;
  } else if (fromLengthOpt === toLengthOpt && toLengthOpt == "miles") {
    lengthOutput.innerHTML = `${lengthInput}<span>mi</span>`;
  } else if (fromLengthOpt == "miles" && toLengthOpt == "meters") {
    lengthOutput.innerHTML = `${lengthInput * 1609.344}<span>m</span>`;
  } else if (fromLengthOpt == "miles" && toLengthOpt == "centimeters") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 160934.4 * 100) / 100
    }<span>cm</span>`;
  } else if (fromLengthOpt == "miles" && toLengthOpt == "inches") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 63360 * 100) / 100
    }<span>"</span>`;
  } else if (fromLengthOpt == "miles" && toLengthOpt == "feet") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 5280 * 100) / 100
    }<span>ft</span>`;
  } else if (fromLengthOpt === toLengthOpt && toLengthOpt == "feet") {
    lengthOutput.innerHTML = `${lengthInput}<span>ft</span>`;
  } else if (fromLengthOpt == "feet" && toLengthOpt == "meters") {
    lengthOutput.innerHTML = `${lengthInput * 0.3048}<span>m</span>`;
  } else if (fromLengthOpt == "feet" && toLengthOpt == "centimeters") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 30.48 * 100) / 100
    }<span>cm</span>`;
  } else if (fromLengthOpt == "feet" && toLengthOpt == "inches") {
    lengthOutput.innerHTML = `${
      Math.round(lengthInput * 12 * 100) / 100
    }<span>"</span>`;
  } else if (fromLengthOpt == "feet" && toLengthOpt == "miles") {
    lengthOutput.innerHTML = `${
      Math.round((lengthInput / 5280) * 100) / 100
    }<span>mi</span>`;
  }
});
