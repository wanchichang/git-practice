function fib(n) {
  if (n < 0) return 'err'

  // method 1: recursive
  // if (n == 0) return 0
  // if (n == 1) return 1
  // return fib(n - 1) + fib(n - 2)

  // method 2: dynamic programming

  let fib_arr = new Array(n)
  fib_arr[0] = 0
  fib_arr[1] = 1
  for (let i = 2; i <= n; i++) {
    fib_arr[i] = fib_arr[i - 1] + fib_arr[i - 2]
  }

  return fib_arr[n]
}
console.log(fib(0))
console.log(fib(1))
console.log(fib(5))
console.log(fib(100))
