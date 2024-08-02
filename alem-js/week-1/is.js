const is = {
  num: function (arg) {
    if (typeof arg === typeof 2) {
      return true;
    } else {
      return false;
    }
  },

  nan: function (arg) {
    return !is.num(arg) ? true : false;
  },
};

console.log(is.nan(undefined));
