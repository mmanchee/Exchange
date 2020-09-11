import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { ExchangeRate } from './exchangerate.js';
import { Converter } from './converter.js';


$(document).ready(function() {
  $("#form-input").on("click", function(event) {
    let exchange = new ExchangeRate();
    let convert = new Converter();
    event.preventDefault();
    const inputFrom = $("#input-from").val();
    const inputTo = $("#input-to").val();
    const inputCurr = parseFloat($("input#input-curr").val());

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
  });
});