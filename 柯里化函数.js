function sum(a, b, c) {
  return a + b + c;
}

/**
 * @param {Function}
 * @param {Array}
 * @returns {Function}
 * */
function curry(fn, currargs) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    if (currargs != undefined) {
      args = args.concat(currargs);
    }
    //递归调用
    if (args.length < fn.length) {
      return curry(fn, args);
    }
    //fn.length返回的是fn参数的个数
    if (args.length == fn.length) {
      return fn.apply(null, args);
    } else {
      return new Error("error");
    }
  };
}
var fn = curry(sum);
// console.log(fn(1)(2)(3)); //6
// console.log(fn(1, 2)(3)); //6
// console.log(fn(1)(2, 3)); //6
// console.log(fn(1, 2, 3)); //6

function curry2(fn, args) {
  var length = fn.length;
// console.log("打印:", arguments.callee);
// console.log("打印:", arguments.callee.caller);
  var args = args || [];
  return function () {
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      return curry2.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}

var multi = curry2(sum);
// console.log(multi(2)(3)(4), multi(2, 3, 4), multi(2)(3, 4), multi(2, 3)(4));
console.log(multi(2,3,4) );
