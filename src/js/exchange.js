import { data } from "jquery";

export function convertCurrency(data, infoArray) {
  let parsedArray = parseData(data, infoArray);
  let exchanged = exchanger(parsedArray);
  return exchanged;
}

parseData(data, infoArray) {
  for (let key in data.conversion_rates) {
    key == infoArray[0] ? from = data.conversion_rates[key] : false;
    key == infoArray[1] ? to = data.conversion_rates[key] : false;
  }
  infoArray.push(from, to);
  return infoArray;
}

function exchanger(parsedArray) {
  let 
}