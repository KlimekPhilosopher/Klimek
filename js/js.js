
function Disable_Control_C() {
var keystroke = String.fromCharCode(event.keyCode).toLowerCase();

if ((event.ctrlKey && (keystroke == 'c' || keystroke == 'v'|| keystroke == 'u')) || event.ctrlKey && event.shiftKey && keystroke == 'i') {
alert("Chciałbyś Bambiku nie kopiuj naszej ciężkiej pracy, wiem że nie masz Vdolców, ale skil iśju");
event.returnValue = false; // disable Ctrl+C
}
}
