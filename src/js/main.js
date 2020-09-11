import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { ExchangeRate } from './exchangerate.js';
import { Converter } from './converter.js';


$(document).ready(function() {
  $("#form-input").on("click", function(event) {
    event.preventDefault();
    let exchange = new ExchangeRate();
    let convert = new Converter();
    
    const inputFrom = $("#input-from").val();
    const inputFrom2 = $("input#input-from2").val();
    const inputTo = $("#input-to").val();
    const inputTo2 = $("input#input-to2").val();
    const inputCurr = $("input#input-curr").val();
    let message = "";

    if (inputCurr > 0 && !isNaN(inputCurr)) {
      parseFloat(inputCurr);

      if (inputFrom2) {
        if (convert.check(inputFrom2)) {
          inputFrom = inputForm2;
        } else {
          message = "Alternate Currency Code is invalid,"
        }
      }
      if (inputTo2) {
        if (convert.check(inputTo2)) {
          inputTo = inputTo2;
        } else {
          message = "Alternate Currency Code is invalid,"
        }
      }
      if (message !== "") {
        const infoArray = [inputFrom, inputTo, inputCurr];
        
        let promise = exchange.currencyCall(infoArray);
        promise.then(function(response) {
          const data = JSON.parse(response);
          let textToHTML = convert.convertCurrency(data, infoArray);
          $("#result").html(textToHTML);
        }, function(err) {
          console.log(err);
          $("#result").text(err);
        });
      } 
    } else {
      message = "Currency is not a valid entry, Please try again."
    }
      
    
  });
});