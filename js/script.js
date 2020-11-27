function init(){
//add your javascript between these two lines of code
 
 var button = document.getElementById('entrybutton');
 var textInner = document.getElementById('entryinput');
 var output = document.getElementById('textoutput');
 
 function someCode() {
   alert('Rana F Soylu: ' + textInner.value);
 }
 
 function someOtherCode(){
    output.innerHTML = textInner.value;
 }
 
 button.addEventListener('click', someCode);
 button.addEventListener('click', someOtherCode);
 
}

window.addEventListener('load', init);


