var radios = document.querySelectorAll('input[type=radio][data-option="Color"]');

function changeHandler(event) {
   var limitedColors = this.getAttribute('limited-colors')
   if (limitedColors){
    document.getElementById('OptionName-Color').classList.add('hidden')
    document.getElementById('OptionName-LimitedColors').classList.remove('hidden')
   } else {
       document.getElementById('OptionName-Color').classList.remove('hidden')
       document.getElementById('OptionName-LimitedColors').classList.add('hidden')
   }
}

Array.prototype.forEach.call(radios, function(radio) {
   if(radio.checked){
    if(radio.getAttribute('limited-colors')){
      document.getElementById('OptionName-Color').classList.add('hidden')
      document.getElementById('OptionName-LimitedColors').classList.remove('hidden')
    } else {
      document.getElementById('OptionName-Color').classList.remove('hidden')
      document.getElementById('OptionName-LimitedColors').classList.add('hidden')
    }
   }
   radio.addEventListener('change', changeHandler);
});