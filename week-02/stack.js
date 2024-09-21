// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  // 以 "#" 開頭命名的變數為私有變數（private）
  #items

  constructor() {
    this.#items = []
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element)
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) {
      return 'The stack is empty, so there are no elements to pop.'
    }
    return this.#items.pop()
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.#items[this.#items.length - 1]
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length == 0 ? true : false
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length
  }

  // 清空 stack
  clear() {
    this.#items = []
  }

  // 印出 stack 內容
  print() {
    if (this.#items.length == 0) {
      console.log('The stack is currently empty, so no elements are printed.')
      return
    }

    console.log('stack: ')
    for (let i = this.#items.length - 1; i >= 0; i--) {
      console.log(`|  ${this.#items[i]}  |`)
    }
    console.log('-------')
  }
}
