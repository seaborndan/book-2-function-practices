const add = (val1, val2) => {
  let result = val1 + val2;
  return result;
}

const mult = (val1) => {
  let result = val1*2;
  return result;
}

addResult = add(2, 3);
multiplyResult = mult(addResult);

console.log(multiplyResult);