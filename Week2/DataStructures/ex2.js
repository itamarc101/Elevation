class UniqueArray {
  constructor() {
    this.items = []
  }

  add(item) {
    if (!this.exists(item)) {
      this.items.push(item)
    }
  }

  showAll() {
    console.log(this.items)
  }

  exists(item) {
    return this.items.some(el => this._isEqual(el, item))
  }

  get(index) {
    return this.items[index] !== undefined ? this.items[index] : -1
  }

  _isEqual(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null)
      return a === b

    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length) return false

    return aKeys.every(key => b[key] === a[key])
  }
}