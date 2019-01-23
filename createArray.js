function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function createArr(length) {
let arr = []
for(let i = length; i > 0; i--) {
  arr.push(i)
}
shuffleArray(arr)
return arr
}

module.exports = function create(length, shuffle) {
  return shuffle ? shuffleArray(createArr(length)) : createArr(length) 
}