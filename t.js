// <!-- 1) Product
// Catalog (E-commerce)
// Task: Create a
// product object with keys: id, name, price, inStock.
// Example values:
// 101, "Wireless Mouse", 799, true.
// Then:
// Read and log the
// name and price.
// Update price to
// 749.
// Add a property
// discount: 10 (percent).
// Delete inStock.
// Expected:
// name:"Wireless Mouse", price:749, discount:10. -->
let product = {
  id: 101,
  name: "Wireless Mouse",
  price: 799,
  inStock: true
};
console.log("Name:", product.name);
console.log("Price:", product.price);
product.price = 749;
product.discount = 10;
delete product.inStock;
console.log(product);


 


// <!-- 2) User Profile
// (App Settings)
// Task: Create user
// with name, email, isVerified, preferences (nested with theme and language).
// Read
// preferences.theme.
// Change language
// to "hi-IN".
// Add new
// preference: notifications: true.
// Expected:
// preferences { theme, language:"hi-IN", notifications:true }. -->
let user = {
  name: "Shweta",
  email: "shweta@example.com",
  isVerified: true,
  preferences: {
    theme: "dark",
    language: "en-US"
  }
};
console.log("Theme:", user.preferences.theme);
user.preferences.language = "hi-IN";
user.preferences.notifications = true;
console.log(user.preferences);


// 1) Product Catalog

let product = {
  id: 101,
  name: "Wireless Mouse",
  price: 799,
  inStock: true
};
console.log(product.name, product.price);
product.price = 749;
product.discount = 10;
delete product.inStock;
console.log(product);


// 2) User Profile

let user = {
  name: "Shweta",
  email: "shweta@example.com",
  isVerified: true,
  preferences: {
    theme: "dark",
    language: "en-US"
  }
};
console.log(user.preferences.theme);
user.preferences.language = "hi-IN";
user.preferences.notifications = true;
console.log(user.preferences);


// 3) Bank Account (Methods)

let account = {
  owner: "Ramesh",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount;
    return this.balance;
  }
};
console.log(account.deposit(500));   // 1500
console.log(account.withdraw(300));  // 1200
console.log(account.withdraw(5000)); // Insufficient funds

// 4) Library Book

let book = {
  title: "JS Handbook",
  author: "MDN",
  edition: "2nd",
  availability: { status: "available", copies: 3 }
};
console.log(book.availability.status, book.availability.copies);
book.availability.copies -= 1;
if (book.availability.copies === 0) book.availability.status = "checked-out";
console.log(book.publisher?.name); // undefined


// 5) Food Order

let order = {
  items: [
    { name: "Pizza", price: 200, qty: 2 },
    { name: "Coke", price: 40, qty: 3 }
  ],
  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
};
console.log("Total:", order.total());


// 6) Ride Booking

let booking = {
  riderName: "Amit",
  pickup: "Point A",
  drop: "Point B",
  fare: 100,
  status: "pending"
};
booking.status = "accepted";
booking.fare = Math.round(booking.fare * 1.2);
console.log(booking.status, booking.fare);


// 7) Course Enrollment

let student = {
  name: "Rahul",
  roll: 12,
  courses: ["Math", "JS"]
};
student.courses.push("DBMS");
student.courses = student.courses.filter(c => c !== "Math");
console.log(student.courses.includes("JS"), student.courses);


// 8) Inventory Item

let item = { sku: "SKU123", quantity: 10 };
item.supplier = "ABC Traders";
item.quantity += 5;
delete item.supplier;
console.log(item);

// 9) Cinema Ticket

let ticket = {
  movie: "Inception",
  seat: "B12",
  price: 250,
  time: "7:30 PM",
  summary() {
    return `${this.movie} - ${this.seat} @ ${this.time}: ₹${this.price}`;
  }
};
console.log(ticket.summary());

// 10) Fitness Tracker

let fitnessUser = {
  name: "Sia",
  steps: { today: 3000, weekly: [4000, 5000, 3000] }
};
fitnessUser.steps.today += 1500;
fitnessUser.steps.weekly[0] = fitnessUser.steps.today;
let min = Math.min(...fitnessUser.steps.weekly);
let max = Math.max(...fitnessUser.steps.weekly);
console.log(fitnessUser.steps, "Min:", min, "Max:", max);

// 11) Hotel Room

let room = {
  number: 204,
  isOccupied: false,
  rate: 1800,
  checkIn() {
    this.isOccupied = true;
    return `Room ${this.number} is now occupied.`;
  },
  checkOut() {
    this.isOccupied = false;
    return `Room ${this.number} is now available.`;
  }
};
console.log(room.checkIn());
console.log(room.checkOut());


// 12) Delivery Package

let packageObj = {
  id: 1,
  status: "created",
  history: [],
  updateStatus(newStatus) {
    this.history.push({
      from: this.status,
      to: newStatus,
      at: new Date().toISOString()
    });
    this.status = newStatus;
  }
};
packageObj.updateStatus("in-transit");
packageObj.updateStatus("delivered");
console.log(packageObj.history.length);

// 13) Classroom
let classInfo = { teacher: "Anita", subject: "Science", room: "A1" };
for (let key in classInfo) {
  console.log(`${key}: ${classInfo[key]}`);
}
console.log(Object.keys(classInfo).length);


// 14) Payment Transaction

let txn = {
  id: 1001,
  amount: 999,
  currency: "INR",
  method: "UPI",
  validate() {
    return this.amount > 0 && (this.currency === "INR" || this.currency === "USD");
  }
};
console.log(txn.validate());
txn.currency = "EUR";
console.log(txn.validate());

// 15) Social Post (Immutability)

let post = { id: 1, likes: 10, comments: 2 };
let updatedPost = { ...post, likes: post.likes + 1 };
console.log(post.likes, updatedPost.likes);


// 16) Device Settings (??)
let settings = { brightness: 0, theme: undefined };
let effectiveBrightness = settings.brightness ?? 50;
let effectiveTheme = settings.theme ?? "light";
console.log(effectiveBrightness, effectiveTheme);

// 17) Employee Record

let employee = { id: 7, name: "Ria", dept: { code: "IT", floor: 3 } };
let { name: employeeName, dept: { code: deptCode } } = employee;
console.log(employeeName, deptCode);

// ============================
// 18) Car Service (Chaining)
// ============================
let service = {
  cost: 0,
  addPart(price) {
    this.cost += price;
    return this;
  },
  addLabour(hours, rate) {
    this.cost += hours * rate;
    return this;
  },
  total() {
    return this.cost;
  }
};
console.log(service.addPart(500).addLabour(2, 300).total());

// ============================
// 19) Shopping Cart
// ============================
let cart = {
  items: [{ id: 1, name: "Pen" }, { id: 2, name: "Book" }],
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
};
cart.removeItem(1);
console.log(cart.items);

// ============================
// 20) Event Registration
// ============================
let event = {
  title: "Workshop",
  capacity: 3,
  attendees: [],
  register(name) {
    if (this.attendees.length < this.capacity) {
      this.attendees.push(name);
      return "Registered";
    }
    return "Full";
  }
};
console.log(event.register("A"));
console.log(event.register("B"));
console.log(event.register("C"));
console.log(event.register("D"));
console.log(event.attendees.length);
