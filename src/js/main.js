import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { currencyCall } from './requests';


$(document).ready(function() {
  $("#form-input").on("click", function(event) {
    event.preventDefault();
    const inputFrom = $("input#input-from").val();
    const inputTo = $("input#input-to").val();
    const inputCurr = parseFloat($("input#input-curr").val());

    const infoArray = [inputFrom, inputTo, inputCurr]

    let textToHTML = currencyCall(infoArray);

    $("#result").html(textToHTML);
  })
})