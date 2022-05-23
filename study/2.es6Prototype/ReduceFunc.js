class ReduceFunc {
  constructor(arr) {
    this._arr = [...arr];
  }
  duplicate() {
    const empty = [];
    while (this._arr.length > 0) {
      const last = this._arr.pop();
      if (empty.indexOf(last) == -1) {
        empty.unshift(last);
      }
    }
    return empty;
  }
  max() {
    const arr = this.duplicate();
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}

module.exports = ReduceFunc;
