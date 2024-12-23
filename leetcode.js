// 1.Two sum
function num(num1, num2) {
  return num1 + num2;
}

console.log(num(12, 5));
console.log(num(-17, 10));

// 13.Roman to Integer
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

// 14.Longest Common Prefix
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

// 20.Valid Parentheses
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

// 21.Merge Two Sorted Lists
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

// 26.Remove duplicates from sorted array
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 6, 8, 8]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 2, 2, 7]));

// 27.Remove element
function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

console.log(removeElement([7, 2, 2, 7, 6, 8, 17, 77, 25], 2));

//28. Find the Index of the first occurence in a String
function strStr(haystack, needle) {
  let result = haystack.indexOf(needle);
  return result;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("leetcode", "code"));

// 35. Search Insert Position
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // target is to the right => update the left
      left = mid + 1;
    } else {
      // target is to the left => update the right
      right = mid - 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6, 8], 7));
console.log(searchInsert([1, 3, 4, 5, 6], 7));

// 58.Length of the last word
function lengthOfLastWord(s) {
  const trimmedString = s.trim();
  const lastSpace = trimmedString.lastIndexOf(" ");
  const result = trimmedString.slice(lastSpace + 1);

  return result.length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
