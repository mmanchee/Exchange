import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';


$(document).ready(function() {
  $("#").on("click", function(event) {
    event.preventDefault();
    const inputFrom = $("input#input-from").val();
    const inputTo = $("input#input-to").val();
    const inputCurr = parseInt($("input#input-curr").val());

    const infoArray = [inputFrom, inputTo, inputCurr]

    let textToHTML = currentCall(infoArray);

    $("#result").html(textToHTML);
  })
})