var radios = document.querySelectorAll('input[type=radio][data-option="Color"]');

function changeHandler(event) {
   var limitedColors = this.getAttribute('limited-colors')
   if (limitedColors){
    document.getElementById('OptionName-Color').classList.add('hidden')
    if (document.getElementById('OptionName-LimitedColors') != null){
      document.getElementById('OptionName-LimitedColors').classList.remove('hidden')
    }
   } else {
    document.getElementById('OptionName-Color').classList.remove('hidden')
    if (document.getElementById('OptionName-LimitedColors') != null){
      document.getElementById('OptionName-LimitedColors').classList.add('hidden')
    }
   }
}

Array.prototype.forEach.call(radios, function(radio) {
  if(document.querySelectorAll('.variant-picker__option-values [data-option="Color"]:not([limited-colors="true"])').length == 0){
    document.getElementById('variantOption-Color').classList.add('hidden')
  }
   if(radio.checked){
    if(radio.getAttribute('limited-colors')){
      document.getElementById('OptionName-Color').classList.add('hidden')
      if (document.getElementById('OptionName-LimitedColors') != null){
      document.getElementById('OptionName-LimitedColors').classList.remove('hidden')
      }
    } else {
      document.getElementById('OptionName-Color').classList.remove('hidden')
      if (document.getElementById('OptionName-LimitedColors') != null){
      document.getElementById('OptionName-LimitedColors').classList.add('hidden')
      }
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


 /* Bold Update Sold Out button */

 var allRadios = document.querySelectorAll('variant-picker input[type=radio]');

 Array.prototype.forEach.call(allRadios, function(radioSelected) {
    radioSelected.addEventListener('change', changeBoldButton);
});


function changeBoldButton(event){
  event.preventDefault()
  setTimeout(() => {    
    if (document.querySelector('buy-buttons .button.bold_hidden') != null){
      if (document.querySelector('buy-buttons .button.bold_hidden').hasAttribute('disabled')){
        document.querySelector('buy-buttons .button.bold_clone').setAttribute('disabled',true)
        document.querySelector('buy-buttons .button.bold_clone div div').innerHTML = 'Sold out'
      } else {
        document.querySelector('buy-buttons .button.bold_clone').removeAttribute('disabled')
        document.querySelector('buy-buttons .button.bold_clone div div').innerHTML = 'Add to cart'
      }
    }
  }, 10);
}


setTimeout(() => {
  if (document.querySelector('.bold_clone') != null){
    document.querySelector('product-quick-add').style.display = 'none'
  }
}, 100);