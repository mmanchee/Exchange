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
  $("#results").val("");
  $("#error").text("");
  $("#result-card").hide();
}

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
    clearForm();

    let checkData = convert.errorCheck(inputFrom, inputFrom2, inputTo, inputTo2, inputCurr);
    
    if (!checkData[0]) {
      console.log(checkData);
      const infoArray = [checkData[1], checkData[2], checkData[3]];
      let promise = exchange.currencyCall(infoArray);
      promise.then(function(response) {
        const data = JSON.parse(response);
        let textToHTML = convert.convertCurrency(data, infoArray);
        $("#results").html(textToHTML);
        $("#result-card").toggle();
      }, function(err) {
        console.log(err);       // error for console
        $("#error").text(err);  // error for user
      });
    } else {
      $("#error").text(checkData[0]);
    }
  });
});