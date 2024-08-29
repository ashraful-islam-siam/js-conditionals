/**
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: <=
 * 5. less than or equal: <=
 * 6. not equal: !=
 *
 * --------------------
 * 7. and: &&
 * 8. or: ||
 */

console.log(5 > 10); //false
console.log(5 < 10); //true
console.log(5 == 10); // false
console.log(10 == 10); // true
console.log(15 >= 10); // true
console.log(5 >= 10); // false
console.log(5 <= 10); // true
console.log(10 <= 10); // true
console.log(100 <= 10); // false

console.log(10 == 10); // true
console.log("2.", 10 == 10.1); // false

// ------------------

var peyaraPrice = 40;
var applePrice = 250;

console.log("peyara > apple", peyaraPrice > applePrice); // false
console.log(applePrice < peyaraPrice); // false

/**
 * double equal check only value: ==
 * triple equal check value and type of data: ===
 */

console.log(10 == "10"); // true
console.log(10 === "10"); // false

// ---------------

console.log(10 != "10"); // false
console.log(10 !== "10"); // true
