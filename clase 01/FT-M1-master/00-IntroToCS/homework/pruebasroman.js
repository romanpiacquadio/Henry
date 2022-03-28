function BinarioADecimal(num) {
  let array = num.toString.split("");

  let suma = 0;
  for(let i=0; i<array.length; i++){
    suma += array[i]*2**(array.length-1-i) 
  }
  
  return suma
}


console.log(BinarioADecimal(111))