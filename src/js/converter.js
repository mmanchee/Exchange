export class Converter {

  convertCurrency(data, infoArray) {                        // infoArray = ["USD", "EUR", 500.24]
    let parsedArray = this.parseData(data, infoArray);
    let finalArray = this.exchanger(parsedArray);           // parsedArray = ["USD", "EUR", 500.24, 1, .8449]
    let message = this.messenger(finalArray);               // finalArray = ["USD", "EUR", 500.24, 1, .8449, 1.1836, 592.08]
    return message;
  }

  
  parseData(data, infoArray) {
    let from = "";
    let to = "";
    for (let key in data.conversion_rates) {
      key == infoArray[0] ? from = data.conversion_rates[key] : false;
      key == infoArray[1] ? to = data.conversion_rates[key] : false;
    }
    infoArray.push(from, to);
    return infoArray;                                      
  }

  exchanger(parsedArray) {
    parsedArray.push((parsedArray[4] / parsedArray[3]));
    parsedArray.push(parsedArray[5] * parsedArray[2]);
    return parsedArray;
  }

  messenger(finalArray) {
    let percent = finalArray[5] * 100;
    let message = `<p>You have exchanged ${finalArray[2]} ${finalArray[0]} into ${finalArray[6]} ${finalArray[1]} <br> at a rate of ${percent} %. <br> Thank you for using The Exchange.</p>`;
    return message;
  }
}