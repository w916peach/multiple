Array.prototype.myEvery = function (callback) {
  const len = this.length;
  for (let i = 0; i < len; i += 1) {
    const result = callback(this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};

Array.prototype.myFilter = function (callback) {
  const len = this.length;
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    const result = callback(this[i], i, this);
    if (result) {
      arr.push(len[i]);
    }
  }
  return arr;
};

Array.prototype.mySome = function (callback) {
  const len = this.length;
  for (let i = 0; i < len; i += 1) {
    const result = callback(this[i], i, this);
    if (result) {
      return true;
    }
  }
  return false;
};

Array.prototype.myMap = function (callback) {
  const len = this.length;
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    const result = callback(this[i], i, this);
    arr.push(result);
  }
  return arr;
};

Array.prototype.myForEach = function (callback) {
  const len = this.length;
  for (let i = 0; i < len; i += 1) {
    callback(this[i], i, this);
  }
};
