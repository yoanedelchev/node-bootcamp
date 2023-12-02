var _ = require("lodash");

const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const newObj = _.fromPairs(arr);
console.log(newObj.a);
