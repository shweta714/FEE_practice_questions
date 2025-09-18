// ✅ Basics + Control Flow (1–5)

// 1. Even or Odd Number
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
evenOrOdd(7);

// 2. Largest of Three Numbers
function largestOfThree(a, b, c) {
    let largest;
    if (a >= b && a >= c) largest = a;
    else if (b >= a && b >= c) largest = b;
    else largest = c;
    console.log("Largest:", largest);
}
largestOfThree(12, 45, 32);

// 3. Grade Calculator
function gradeCalculator(marks) {
    if (marks >= 90) console.log("Grade: A");
    else if (marks >= 75) console.log("Grade: B");
    else if (marks >= 50) console.log("Grade: C");
    else console.log("Grade: Fail");
}
gradeCalculator(78);

// 4. FizzBuzz Problem
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
fizzBuzz();

// 5. Palindrome String
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (str === reversed) console.log(str + " is a Palindrome");
    else console.log(str + " is Not a Palindrome");
}
isPalindrome("madam");


// ✅ Arrays (6–10)

// 6. Sum of Array Elements
let arr1 = [2, 4, 6, 8, 10];
let sum = 0;
for (let num of arr1) sum += num;
console.log("Sum:", sum);

// 7. Maximum Element in Array
let arr2 = [12, 45, 7, 89, 32];
let max = arr2[0];
for (let num of arr2) {
    if (num > max) max = num;
}
console.log("Max:", max);

// 8. Reverse an Array
let arr3 = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr3.length - 1; i >= 0; i--) {
    reversedArr.push(arr3[i]);
}
console.log("Reversed:", reversedArr);

// 9. Remove Duplicates
let arr4 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let num of arr4) {
    if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
    }
}
console.log("Unique:", uniqueArr);

// 10. Second Largest Element
let arr5 = [10, 20, 4, 45, 99];
let first = -Infinity, second = -Infinity;
for (let num of arr5) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num < first) {
        second = num;
    }
}
console.log("Second Largest:", second);


// ✅ Functions + Arrays + Loops (11–15)

// 11. Factorial of a Number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial:", factorial(5));

// 12. Count Vowels in String
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let ch of str) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
console.log("Vowels:", countVowels("Hello World"));

// 13. Check Prime Number
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Is Prime?", isPrime(17));

// 14. Array Rotation
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated.push(arr[(i + k) % n]);
    }
    return rotated;
}
console.log("Rotated:", rotateArray([1, 2, 3, 4, 5], 2));

// 15. Frequency Counter
function countFrequency(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log("Frequency:", countFrequency([1, 2, 2, 3]));

// 1. Student Records System
let students = {
  "101": { name: "Ravi", age: 21, marks: { math: 85, science: 90 } },
  "102": { name: "Anita", age: 20, marks: { math: 92, science: 88 } },
  "103": { name: "Suresh", age: 22, marks: { math: 76, science: 80 } }
};
for (let id in students) {
  console.log(students[id].name);
}
let topStudent = null, highestMath = -1;
for (let id in students) {
  if (students[id].marks.math > highestMath) {
    highestMath = students[id].marks.math;
    topStudent = students[id].name;
  }
}
console.log("Topper in Math:", topStudent);
let totalScience = 0, count = 0;
for (let id in students) {
  totalScience += students[id].marks.science;
  count++;
}
console.log("Average Science:", totalScience / count);


// 2. Employee Management System
let data = `{
"employees": [
{"id": 1, "name": "Neha", "salary": 50000, "department": "HR"},
{"id": 2, "name": "Amit", "salary": 60000, "department": "IT"},
{"id": 3, "name": "Pooja", "salary": 75000, "department": "Finance"}
]
}`;
let employees = JSON.parse(data);
employees.employees.forEach(emp => {
  if (emp.department === "IT") {
    emp.salary *= 1.1;
  }
});
employees.employees.forEach(emp => {
  console.log(emp.name, "->", emp.salary);
});


// 3. E-Commerce Product Catalog
let products = [
  { id: 1, name: "Laptop", price: 45000, stock: 10 },
  { id: 2, name: "Phone", price: 20000, stock: 5 },
  { id: 3, name: "Tablet", price: 25000, stock: 0 }
];
products.forEach(p => {
  if (p.stock > 0) console.log(p.name);
});
let expensive = products.reduce((a, b) => a.price > b.price ? a : b);
console.log("Most Expensive:", expensive.name);
// 3. Convert to JSON
console.log(JSON.stringify(products));


// 4. Nested JSON with Orders
let orders = `{
"orderId": 101,
"customer": "Rohit",
"items": [
{"name": "Shoes", "price": 2000, "qty": 2},
{"name": "T-shirt", "price": 800, "qty": 3}
]
}`;
let orderObj = JSON.parse(orders);
let total = orderObj.items.reduce((sum, i) => sum + i.price * i.qty, 0);
console.log("Total:", total);
orderObj.items.push({ name: "Cap", price: 300, qty: 1 });
console.log(orderObj.items);


// 5. Library System
let library = [
  { title: "1984", author: "George Orwell", year: 1949, available: true },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988, available: false },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, available: true }
];
library.forEach(b => { if (b.available) console.log(b.title); });
let oldest = library.reduce((a, b) => a.year < b.year ? a : b);
console.log("Oldest:", oldest.title);
let availableBooks = library.filter(b => b.available);
console.log(JSON.stringify(availableBooks));


// 6. Shopping Cart System
let cart = [
  { id: 1, name: "Shoes", price: 2000, qty: 1 },
  { id: 2, name: "Bag", price: 1500, qty: 2 },
  { id: 3, name: "Watch", price: 3000, qty: 1 }
];
let cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
console.log("Cart Total:", cartTotal);
cart.push({ id: 4, name: "Belt", price: 800, qty: 1 });
cart = cart.filter(i => i.id !== 2);
console.log(cart);


// 7. Movie Database
let movies = [
  { title: "Inception", director: "Nolan", rating: 8.8 },
  { title: "Interstellar", director: "Nolan", rating: 8.6 },
  { title: "Avatar", director: "James Cameron", rating: 7.8 }
];
movies.forEach(m => { if (m.director === "Nolan") console.log(m.title); });
let best = movies.reduce((a, b) => a.rating > b.rating ? a : b);
console.log("Highest Rated:", best.title);
console.log(JSON.stringify(movies));


// 8. Banking System
let accounts = {
  "1001": { name: "Ravi", balance: 5000 },
  "1002": { name: "Anita", balance: 8000 },
  "1003": { name: "Suresh", balance: 12000 }
};
// 1. Print names
for (let id in accounts) console.log(accounts[id].name);
accounts["1001"].balance += 2000;
let maxAcc = null, maxBal = -1;
for (let id in accounts) {
  if (accounts[id].balance > maxBal) {
    maxBal = accounts[id].balance;
    maxAcc = accounts[id].name;
  }
}
console.log("Richest:", maxAcc);


// 9. Course Management
let courses = [
  { id: 1, name: "JavaScript", students: ["Amit", "Ravi", "Neha"] },
  { id: 2, name: "Python", students: ["Anita", "Suresh"] },
  { id: 3, name: "C++", students: [] }
];
courses.forEach(c => { if (c.students.length > 0) console.log(c.name, c.students); });
courses.find(c => c.name === "C++").students.push("Pooja");
console.log(JSON.stringify(courses));


// 10. Weather Data
let weather = `{
"city": "Delhi",
"forecast": [
{"day": "Mon", "temp": 32},
{"day": "Tue", "temp": 30},
{"day": "Wed", "temp": 35}
]
}`;
let weatherObj = JSON.parse(weather);
weatherObj.forecast.forEach(f => console.log(f.day, f.temp));
let hot = weatherObj.forecast.reduce((a, b) => a.temp > b.temp ? a : b);
console.log("Hottest:", hot.day);
weatherObj.forecast.push({ day: "Thu", temp: 28 });


//  11. Inventory System
let inventory = [
  { id: 1, name: "Keyboard", qty: 10 },
  { id: 2, name: "Mouse", qty: 5 },
  { id: 3, name: "Monitor", qty: 2 }
];
inventory.forEach(i => { if (i.qty < 5) console.log(i.name); });
inventory.find(i => i.name === "Mouse").qty += 10;
console.log(JSON.stringify(inventory));


// 12. Transport Booking
let booking = {
  busId: 101,
  seats: [
    { seatNo: 1, booked: false },
    { seatNo: 2, booked: true },
    { seatNo: 3, booked: false }
  ]
};
booking.seats.forEach(s => { if (!s.booked) console.log("Available:", s.seatNo); });
booking.seats.find(s => s.seatNo === 3).booked = true;
let bookedCount = booking.seats.filter(s => s.booked).length;
console.log("Booked Seats:", bookedCount);


//  13. Exam Results
let results = [
  { roll: 1, name: "Ravi", marks: { math: 80, eng: 70 } },
  { roll: 2, name: "Anita", marks: { math: 95, eng: 88 } },
  { roll: 3, name: "Suresh", marks: { math: 65, eng: 60 } }
];
results.forEach(r => { if (r.marks.math > 70) console.log(r.name); });
let avgEng = results.reduce((s, r) => s + r.marks.eng, 0) / results.length;
console.log("Avg English:", avgEng);
let topper = results.reduce((a, b) => a.marks.math > b.marks.math ? a : b);
console.log("Math Topper:", topper.name);


// 14. Social Media Data
let socialData = `{
"users": [
{"id": 1, "name": "Ravi", "posts": 5},
{"id": 2, "name": "Anita", "posts": 12},
{"id": 3, "name": "Neha", "posts": 8}
]
}`;
let socialObj = JSON.parse(socialData);
socialObj.users.forEach(u => console.log(u.name));
let maxUser = socialObj.users.reduce((a, b) => a.posts > b.posts ? a : b);
console.log("Most Posts:", maxUser.name);
socialObj.users.push({ id: 4, name: "Pooja", posts: 3 });


// 15. Online Quiz System
let quiz = {
  title: "JavaScript Basics",
  questions: [
    { q: "What is JSON?", options: ["Format", "Language"], answer: "Format" },
    { q: "Which keyword declares variable?", options: ["let", "func"], answer: "let" }
  ]
};
quiz.questions.forEach(q => console.log(q.q, "->", q.options));
quiz.questions.push({ q: "Is JS single-threaded?", options: ["Yes","No"], answer: "Yes" });
console.log("Total Questions:", quiz.questions.length);


