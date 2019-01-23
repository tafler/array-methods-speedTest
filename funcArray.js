let func = {

  pushToArray(arr, n) {
    for(let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr
  },
  shiftToArray(arr, n) {
    for(let i = n; i > 0; i--) {
      arr.shift(i)
    }
    return arr
  },
  insToArray(arr, n) {
    for(let i = n; i > 0; i--) {
      arr[i] = i
    }
    return arr
  },
  arrInclude(arr, i) {
    arr.includes(i)
  },
  arrIndexOf(arr, i) {
    arr.indexOf(i)
  },
  arrFind(arr, i) {
    arr.find(e => {i === e})
  },
  arrFindIndex(arr, i) {
    arr.findIndex(e => {i === e})
  },


  arrMap(arr) {
    arr.map(e => {
      Math.random()
    })
  },
  arrForEach(arr) {
    arr.forEach(e => {
      Math.random()
    })
  },
  arrForIn(arr) {
    for(let i in arr) {
      Math.random()
    }
  },
  arrWhile(arr) {
    let i = arr.length -1
    while(i > 0) {      
      Math.random()
      i--
    }
  },
  arrFor(arr) {
    for(let i = arr.length; i > 0; i--) {
      Math.random()
    }
  }

}

module.exports = func