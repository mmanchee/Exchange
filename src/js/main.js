import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { ExchangeRate } from './exchangerate.js';
import { Converter } from './converter.js';

function clearForm() {
  $("input#input-from2").val("");
  $("input#input-to2").val("");
  $("input#input-curr").val("");
  $("#result").val("");
}
$(document).ready(function() {
  $("#form-input").on("click", function(event) {
    event.preventDefault();
    let exchange = new ExchangeRate();
    let convert = new Converter();
    
    const inputFrom = $("#input-from").val();
    const inputFrom2 = $("input#input-from2").val();
    let inputTo = $("#input-to").val();
    const inputTo2 = $("input#input-to2").val();
    let inputCurr = $("input#input-curr").val();
    clearForm();
    let message = "";

    //let checkedData = errorCheck(inputFrom, inputFrom2, inputTo, inputTo2, inputCurr)
    if (inputCurr > 0 && !isNaN(inputCurr)) {
      inputCurr = parseFloat(inputCurr);
      if (inputFrom2) {
        if (convert.check(inputFrom2)) {
          inputFrom = inputFrom2;
        } else {
          message = "Alternate Currency Code is invalid,";
        }
      }
      if (inputTo2) {
        if (convert.check(inputTo2)) {
          inputTo = inputTo2;
        } else {
          message = "Alternate Currency Code is invalid,";
        }
      }
      if (!message) {
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
      message = "Currency is not a valid entry, Please try again.";
    }
    if (message !== "") {
      $("#result").text(message);
    }
    
  });
});