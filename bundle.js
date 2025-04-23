// var QRCode = require('qrcode');
var canvas = document.getElementById("canvas");
const number = Math.floor(Math.random(9) * 6);

console.log(number);
console.log(number.toString());

//For browser environment
QRCode.toCanvas(canvas, number.toString(), function(error){
    if(error) {
        console.error(error);
    } else console.log('success!');  
})