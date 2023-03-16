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
  if(document.querySelectorAll('.variant-picker__option-values [data-option="Color"]:not([limited-colors="true"])').length == 0){
    document.getElementById('variantOption-Color').classList.add('hidden')
  }
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


if (document.getElementById('noUnlimitedColors') != null){
  titleMergedProduct.classList.add('hidden')
} 
if (document.getElementById('colorMergedProduct') != undefined && document.getElementById('isLimitedColor') != undefined){
    colorMergedProduct.classList.add('hidden')
}