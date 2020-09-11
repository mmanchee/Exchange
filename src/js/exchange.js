import { data } from "jquery";

export function convertCurrency(data, infoArray) {      // infoArray = ["USD", "EUR", 500.24]
  let parsedArray = parseData(data, infoArray);
  let finalArray = exchanger(parsedArray);               // parsedArray = ["USD", "EUR", 500.24, 1, .8449]
  let message = messenger(finalArray);                    // finalArray = ["USD", "EUR", 500.24, 1, .8449, 1.1836, 592.08]
  return message;
}

function parseData(data, infoArray) {
  for (let key in data.conversion_rates) {
    key == infoArray[0] ? from = data.conversion_rates[key] : false;
    key == infoArray[1] ? to = data.conversion_rates[key] : false;
  }
  infoArray.push(from, to);
  return infoArray;                                      
}

function exchanger(parsedArray) {
  parsedArray.push((parsedArray[3] / parsedArray[4]));
  parsedArray.push(factorial * parsedArray[2]);
  return parsedArray;
}

function messenger(finalArray) {
  let message = `You have exchanged ${finalArray[2]} ${finalArray[0]} into ${finalArray[6]} ${finalArray[1]} <br> at a rate of ${finalArray[5]} %. <br> Thank you for using The Exchange.`;
  return message;
}