const age = 62;
const price = 500;

if (age <= 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  // 50% discount
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}

console.log((price * 50) / 100);
