// Roman to Integer
function romanToInteger(s) {
  const rules = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = rules[s[i]];
    const next = rules[s[i + 1]];

    // check if next numeral exists and if current is smaller than next
    if (next && current < next) {
      sum += next - current; // subtraction cases: IV, IX,...
      i++; // skip the next numeral since it's already handled (V - I (IV))
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(romanToInteger("IC"));
console.log(romanToInteger("VII"));
console.log(romanToInteger("MXDII"));

// Longest Common Prefix
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1); //reduce prefix size until match with the index of other words in strs array
      if (prefix === "") return "";
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["rain", "racoon", "racing"]));
console.log(longestCommonPrefix([""]));