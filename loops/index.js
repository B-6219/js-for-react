// 🔁 JavaScript Loops Examples

// 1. for loop - Print numbers 1 to 5
console.log("🔹 for loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Number is:", i);
}

// 2. while loop - Count down from 5 to 1
console.log("\n🔹 while loop:");
let count = 5;
while (count >= 1) {
  console.log("Count is:", count);
  count--;
}

// 3. do...while loop - Runs at least once
console.log("\n🔹 do...while loop:");
let num = 1;
do {
  console.log("Do-while says:", num);
  num++;
} while (num <= 3);

// 4. break - Exit a loop early
console.log("\n🔹 break example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at i =", i);
    break;
  }
  console.log("Looping:", i);
}

// 5. continue - Skip current iteration
console.log("\n🔹 continue example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping i =", i);
    continue;
  }
  console.log("Continuing:", i);
}

// 6. Loop through an array
console.log("\n🔹 for loop with array:");
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}:`, fruits[i]);
}
