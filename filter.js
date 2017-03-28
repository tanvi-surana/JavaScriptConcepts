function isBigEnough(value) {
  return !(value%2);
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered);


