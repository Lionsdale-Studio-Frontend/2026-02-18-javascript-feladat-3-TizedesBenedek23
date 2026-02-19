function add(a, b) {
  if(typeof(a) === "number" && typeof(b) === "number" && a !== null && b !== null){
    return a+b
  }
  else{
    return null
  }
}

function subtract(a, b) {
  if(typeof(a) === "number" && typeof(b) === "number" && a !== null && b !== null){
    return a-b
  }
  else{
    return null
  }
}

function multiply(a, b) {
  if(typeof(a) === "number" && typeof(b) === "number" && a !== null && b !== null){
    return a*b
  }
  else{
    return null
  }
}

function divide(a, b) {
  if (typeof a === "number" && typeof b === "number" && a !== null && b !== null && b !== 0) {
    return a / b;
  }
  return null;
}


function sumArray(numbers) {
  if (!Array.isArray(numbers)){
    return null
  }
  if (numbers.length === 0){
    return 0
  }
  for (let i =0; i < numbers.length; i++){
    if(typeof numbers[i] !== "number"){
        return null
    }
  }

  let sum = 0;
  for (let i =0; i < numbers.length; i++){
    sum+=numbers[i]
  }
  return sum
}

function average(numbers) {
  if (!numbers || !Array.isArray(numbers)) {
    return null
  }
  if (numbers.length === 0) {
    return null
  }
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return null
    }
  }
  return sumArray(numbers) / numbers.length
}



function max(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }
  if (numbers.length === 0) {
    return null
  }
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {  // ✅ Check the element, not the index
      return null
    }
  }
  let maximum = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i]
    }
  }
  return maximum
}

function min(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }
  if (numbers.length === 0) {
    return null
  }
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {  // ✅ Check the element, not the index
      return null
    }
  }
  let minimum = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i]
    }
  }
  return minimum
}


function isEven(number) {
  if(typeof(number) !== "number"){
    return null
  }
  if(!Number.isInteger(number)){
    return null
  }
  return number % 2 === 0
}

function factorial(n) {
  if (typeof(n) !== "number") {
    return null
  }
  if (!Number.isInteger(n)) {
    return null
  }
  if (n < 0) {
    return null
  }
  if (n === 0) {
    return 1
  }
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}