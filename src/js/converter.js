export class Converter {

  check(input) {
    let checkArray = ["AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "KZT", "MVR", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "UYU", "ZAR"];
    let message = false;
    for (let i = 0; i < checkArray.length; i++) {
      if(input === checkArray[i]) {
        message = true;
      }
    }
    return message;
  }

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
    let moneyIn = this.fixNum(finalArray[2]);
    let moneyOut = this.fixNum(finalArray[6]);
    let percent = finalArray[5] * 100;
    percent = this.fixNum(percent);
    let message = `<p>You have exchanged ${moneyIn} ${finalArray[0]} into ${moneyOut} ${finalArray[1]} <br> at a rate of ${percent} %. <br> Thank you for using The Exchange.</p>`;
    return message;
  }
  
  fixNum(num) {
    let num = num.toFixed(2);
    num = num.toString();
    return num;
  }

  errorCheck(inputFrom, inputFrom2, inputTo, inputTo2, inputCurr) {
    let checkArray = [false, inputFrom, inputTo, inputCurr];
    if (inputCurr > 0 && !isNaN(inputCurr)) {
      checkArray[3] = parseFloat(inputCurr);
      if (inputFrom2) {
        if (this.check(inputFrom2)) {
          checkArray[1] = inputFrom2;
        } else {
          checkArray[0] = "Alternate Currency Code is invalid, Please try again";
        }
      }
      if (inputTo2) {
        if (this.check(inputTo2)) {
          checkArray[2] = inputTo2;
        } else {
          checkArray[0] = "Alternate Currency Code is invalid, Please try again";
        }
      }
    } else {
      checkArray[0] = "Currency is not a valid input, Please try again";
    }
    return checkArray;
  }
}