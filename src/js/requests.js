import { convertCurrency } from './exchange.js';

export function currencyCall(infoArray) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
  promise.then(function(response) {
    let exchangeData = JSON.parse(response);
    let textToHTML = convertCurrency(exchangeData, infoArray);
    return textToHTML;
  });
}