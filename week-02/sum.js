// ary: number array
function sum(ary) {
  // TODO: sum all elements in ary
  let ans = 0
  ary.forEach(function (item) {
    ans += item
    // ... do something with an item
  })
  return ans
}

console.log(sum([1, 5, 3, 2])) // 11
