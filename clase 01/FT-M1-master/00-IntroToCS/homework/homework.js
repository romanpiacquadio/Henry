'use strict'

function BinarioADecimal(num) {
  let array = num.split("")

  let suma = 0
  for(let i=0; i<array.length; i++){
    suma += array[i]*2**(array.length-1-i) 
  }
  
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  let array = []
  
  while (num > 1) {
    array.unshift(num%2);
    num = Math.floor(num/2);
  }

  return array.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}