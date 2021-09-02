//input


// var isha = prompt("Hey isha? Is it working");

// var infotext = isha + " Congratulations on your first js";

// //output
// alert(infotext);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text");

console.log(textInput);
function clickHandler() {
    console.log("clicked!");
    console.log("input",textInput.value);
};
btnTranslate.addEventListener("click",clickHandler)

 
