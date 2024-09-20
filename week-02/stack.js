// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  // 以 "#" 開頭命名的變數為私有變數（private）
  #items
  isEmpty = true

  constructor() {
    this.#items = []
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element)
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    return this.#items.pop()
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    return this.#items[this.#items.length - 1]
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return isEmpty
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length
  }

  // 清空 stack
  clear() {
    this.#items = []
    isEmpty = true
  }

  // 印出 stack 內容
  print() {
    console.log('stack: ')
    console.log(this.#items)
  }
}
