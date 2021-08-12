function orderStr(input) {
  const split = input.split('');
  const refObj = {};
  split.forEach(char => {
    refObj[char] = 1 + Number(refObj[char] || 0);
  });
  return split.sort((a, b) => (refObj[b] - refObj[a]) || b.charCodeAt(0) - a.charCodeAt(0)).join('');
}

console.time("orderStr");
for (var i = 0; i < 10000; i++) {
  orderStr('twitter');
};
console.timeEnd("orderStr");

// orderStr: 21.641ms