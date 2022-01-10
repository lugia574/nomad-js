const calculator = {
  add: function (firstNum, secondNum) {
    return firstNum + secondNum;
  },

  minus: function (firstNum, secondNum) {
    return firstNum - secondNum;
  },
  times: function (firstNum, secondNum) {
    return firstNum * secondNum;
  },
  divide: function (firstNum, secondNum) {
    return firstNum / secondNum;
  },
  power: function (firstNum, secondNum) {
    return firstNum ** secondNum;
  },
};

calculator.add(4, 2);
calculator.minus(4, 2);
calculator.times(4, 2);
calculator.divide(4, 2);
calculator.power(4, 2);
