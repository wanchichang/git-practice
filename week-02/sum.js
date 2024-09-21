// ary: number array
// TODO: sum all elements in ary

function sum_forEach(ary) {
  //method 1: ary.forEach
  let ans = 0
  ary.forEach(function (item) {
    ans += item
  })
  return ans
}
function sum_reduce(ary) {
  //method 2: ary.reduce
  //example:
  //let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
  // }, [initial]);

  let ans = ary.reduce((sum, current) => sum + current, 0)

  return ans
}
function sum_map(ary) {
  //method 3: ary.map
  let ans = 0
  ary.map(function (item) {
    ans += item
  })
  return ans
}

console.log('method 1: ary.ForEach\nans:')
console.log(sum_forEach([1, 5, 3, 2])) // 11
console.log(sum_forEach([1, 4, 2, 7, 10])) // 24
console.log('\nmethod 2: ary.reduce\nans:')
console.log(sum_reduce([1, 5, 3, 2])) // 11
console.log(sum_reduce([1, 4, 2, 7, 10])) // 24
console.log('\nmethod 3: ary.map\nans:')
console.log(sum_reduce([1, 5, 3, 2])) // 11
console.log(sum_reduce([1, 4, 2, 7, 10])) // 24
