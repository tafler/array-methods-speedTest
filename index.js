
const timer = require('./timer')
const func = require('./funcArray')
const create = require('./createArray')

let arr10 = create(10)
let arr10000 = create(10000)
let arr1000000 = create(1000000)

let result = []

// push to array

  result.push(timer(() => {func.pushToArray(arr10, 10)}, 'push 10 to 10'))
  result.push(timer(() => {func.pushToArray(arr10000, 10)}, 'push 10 to 10000'))
  result.push(timer(() => {func.pushToArray(arr1000000, 10)}, 'push 10 to 1000000'))

  result.push(timer(() => {func.pushToArray(arr10, 10000)}, 'push 10000 to 10'))
  result.push(timer(() => {func.pushToArray(arr10000, 10000)}, 'push 10000 to 10000'))
  result.push(timer(() => {func.pushToArray(arr1000000, 10000)}, 'push 10000 to 1000000'))

  
// shift to array

  result.push(timer(() => {func.shiftToArray(arr10, 10)}, 'shift 10 to 10'))
  result.push(timer(() => {func.shiftToArray(arr10000, 10)}, 'shift 10 to 10000'))
  result.push(timer(() => {func.shiftToArray(arr1000000, 10)}, 'shift 10 to 1000000'))

  result.push(timer(() => {func.shiftToArray(arr10, 10000)}, 'shift 10000 to 10'))
  result.push(timer(() => {func.shiftToArray(arr10000, 10000)}, 'shift 10000 to 10000'))
  result.push(timer(() => {func.shiftToArray(arr1000000, 10000)}, 'shift 10000 to 1000000'))


// inst to array by index

  result.push(timer(() => {func.insToArray(arr10, 10)}, 'insert by index 10 to 10'))
  result.push(timer(() => {func.insToArray(arr10000, 10)}, 'insert by index 10 to 10000'))
  result.push(timer(() => {func.insToArray(arr1000000, 10)}, 'insert by index 10 to 1000000'))


  result.push(timer(() => {func.insToArray(arr10, 10000)}, 'insert by index 10000 to 10'))
  result.push(timer(() => {func.insToArray(arr10000, 10000)}, 'insert by index 10000 to 10000'))
  result.push(timer(() => {func.insToArray(arr1000000, 10000)}, 'insert by index 10000 to 1000000'))

//find in arr
  result.push(timer(() => {func.arrInclude(arr1000000, 9999)}, 'include in 1000000'))
  result.push(timer(() => {func.arrIndexOf(arr1000000, 9999)}, 'indexof in 1000000'))
  result.push(timer(() => {func.arrFind(arr1000000, 9999)}, 'find in 1000000'))
  result.push(timer(() => {func.arrFindIndex(arr1000000, 9999)}, 'findIndex in 1000000'))
  result.push(timer(() => {func.arrFindWithFor(arr1000000, 9999)}, 'arrFindWithFor in 1000000'))

// loop by arr
  result.push(timer(() => {func.arrMap(arr1000000)}, 'map in 1000000'))
  result.push(timer(() => {func.arrForEach(arr1000000)}, 'forEach in 1000000'))
  result.push(timer(() => {func.arrForIn(arr1000000)}, 'for in in 1000000'))
  result.push(timer(() => {func.arrWhile(arr1000000)}, 'while in 1000000'))
  result.push(timer(() => {func.arrForDecr(arr1000000)}, 'simple For decrement in 1000000'))
  result.push(timer(() => {func.arrForIncrCache(arr1000000)}, 'simple For inc with cache in 1000000'))
  result.push(timer(() => {func.arrForIncr(arr1000000)}, 'simple For inc in 1000000'))

console.log(result)