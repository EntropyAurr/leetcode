// Two sum

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

// Valid Parentheses
function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (map[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));

// Merge Two Sorted Lists
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // assigns the passed-in "val" to the "val" property of the node
    this.next = next; // assigns the "next" property of the node to the "next" argument, which is a reference to another node
  }
}
// the constructor function runs when creating a new node

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;

  // The value -1 is completely arbitrary, it can be any value.
  // It does not affect the logic because the dummy node is never used as part of the final merged list. It's just a placeholder node at the start of a linked list.
  const dummy = new ListNode(-1);
  let current = dummy; // Pointer to traverse and build the list

  for (const val of arr) {
    current.next = new ListNode(val); // Create a new node with the value
    current = current.next; // Move to the new node
  }

  return dummy.next; // Return the head of the list (skip dummy node)
}

const list1 = arrayToLinkedList([1, 2, 4]);
const list2 = arrayToLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
}

function printLinkedList(list) {
  const result = [];

  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }

  return result;
}

console.log(printLinkedList(mergedList));
