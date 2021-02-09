export const wrapArr = function (min, max, v) {
  var rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
