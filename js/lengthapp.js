const inchInput = document.querySelector('#inch > input');
const feetInput = document.querySelector('#feet > input');
const yardsInput = document.querySelector('#yards > input');
const milesInput = document.querySelector('#miles > input');
const millimetersInput = document.querySelector('#millimeters > input');
const centimetersInput = document.querySelector('#centimeters > input');
const metersInput = document.querySelector('#meters > input');
const kilometersInput = document.querySelector('#kilometers > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

/* Inch Conversion */

function inchToFeetToYardsToMilesToMillimetersToCentimetersToMetersToKilometers() {
    const inchLength = parseFloat(inchInput.value);
    const feetLength = inchLength / 12;
    const yardsLength = inchLength / 36;
    const milesLength = inchLength / 5280;
    const millimetersLength = inchLength * 25.4;
    const centimetersLength = inchLength * 2.54;
    const metersLength = inchLength * .0254;
    const kilometersLength = inchLength * 2.54e-5;
    feetInput.value = roundNum(feetLength);
    yardsInput.value = roundNum(yardsLength);
    milesInput.value = roundNum(milesLength);
    millimetersInput.value = roundNum(millimetersLength);
    centimetersInput.value = roundNum(centimetersLength);
    metersInput.value = roundNum(metersLength);
    kilometersInput.value = roundNum(kilometersLength);
}

/* Feet Conversion */

function feetToInchToYardsToMilesToMillimetersToCentimetersToMetersToKilometers() {
    const feetLength = parseFloat(feetInput.value);
    const inchLength = (feetLength * 12);
    const yardsLength = feetLength / 3;
    const milesLength = feetLength / 5280;
    const millimetersLength = feetLength * 304.8;
    const centimetersLength = feetLength * 30.48;
    const metersLength = feetLength / 3.281;
    const kilometersLength = feetLength / 3280.84;
    inchInput.value = roundNum(inchLength);
    yardsInput.value = roundNum(yardsLength);
    milesInput.value = roundNum(milesLength);
    millimetersInput.value = roundNum(millimetersLength);
    centimetersInput.value = roundNum(centimetersLength);
    metersInput.value = roundNum(metersLength);
    kilometersInput.value = roundNum(kilometersLength);
}

/* Yard Conversion */

function yardsToInchToFeetToMilesToMillimetersToCentimetersToMetersToKilometers() {
  const yardsLength = parseFloat(yardsInput.value);
  const inchLength = yardsLength * 36;
  const feetLength = yardsLength * 3;
  const milesLength = yardsLength / 1760;
  const millimetersLength = yardsLength * 914.4;
  const centimetersLength = yardsLength * 91.44;
  const metersLength = yardsLength / 1.094;
  const kilometersLength = yardsLength / 1093.613;
  inchInput.value = roundNum(inchLength);
  feetInput.value = roundNum(feetLength);
  milesInput.value = roundNum(milesLength);
  millimetersInput.value = roundNum(millimetersLength);
  centimetersInput.value = roundNum(centimetersLength);
  metersInput.value = roundNum(metersLength);
  kilometersInput.value = roundNum(kilometersLength);
}

/* Mile Conversion */

function milesToInchToFeetToYardsToMillimetersToCentimetersToMetersToKilometers() {
  const milesLength = parseFloat(milesInput.value);
  const inchLength = milesLength * 63360;
  const feetLength = milesLength * 5280;
  const yardsLength = milesLength * 1760;
  const millimetersLength = milesLength * 1.609e+6;
  const centimetersLength = milesLength * 160934.4;
  const metersLength = milesLength * 1609.344;
  const kilometersLength = milesLength * 1.609;
  inchInput.value = roundNum(inchLength);
  feetInput.value = roundNum(feetLength);
  yardsInput.value = roundNum(yardsLength);
  millimetersInput.value = roundNum(millimetersLength);
  centimetersInput.value = roundNum(centimetersLength);
  metersInput.value = roundNum(metersLength);
  kilometersInput.value = roundNum(kilometersLength);
}

/* Millimeter Conversion */
//Where I currently at
//Miles not working
function millimetersToInchToFeetToYardsToMilesToCentimetersToMetersToKilometers() {
  const millimetersLength = parseFloat(millimetersInput.value);
  const inchLength = millimetersLength / 25.4;
  const feetLength = millimetersLength / 304.8;
  const yardsLength = millimetersLength / 914.4;
  const milesLength = millimetersLength / 1.609e+6;
  const centimetersLength = millimetersLength / 10;
  const metersLength = millimetersLength / 1000;
  const kilometersLength = millimetersLength / 1e+6;
  inchInput.value = roundNum(inchLength);
  feetInput.value = roundNum(feetLength);
  yardsInput.value = roundNum(yardsLength);
  milesLength.value = roundNum(milesLength);
  centimetersInput.value = roundNum(centimetersLength);
  metersInput.value = roundNum(metersLength);
  kilometersInput.value = roundNum(kilometersLength);
}




function main() {
    inchInput.addEventListener('input', inchToFeetToYardsToMilesToMillimetersToCentimetersToMetersToKilometers);
    feetInput.addEventListener('input', feetToInchToYardsToMilesToMillimetersToCentimetersToMetersToKilometers);
    yardsInput.addEventListener('input', yardsToInchToFeetToMilesToMillimetersToCentimetersToMetersToKilometers)
    milesInput.addEventListener('input', milesToInchToFeetToYardsToMillimetersToCentimetersToMetersToKilometers);
    millimetersInput.addEventListener('input', millimetersToInchToFeetToYardsToMilesToCentimetersToMetersToKilometers);
    centimetersInput.addEventListener('input', centimetersToInchToFeetToYardsToMilesToMillimetersToMetersToKilometers);
    metersInput.addEventListener('input', metersToInchToFeetToYardsToMilesToMillimetersToCentimetersToKilometers);
    kilometersInput.addEventListener('input', kilometersToInchToFeetToYardsToMilesToMillimetersToCentimetersToMeters);
}

main();
