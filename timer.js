 function timer(fn, name) {
  let start = new Date().getTime()

  let res = fn.apply(null, arguments)
  let end = new Date().getTime()
  return {name, duration: end - start + 'ms'}
}

module.exports = timer;