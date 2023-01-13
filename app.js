var a = 10;
const b = 3;
let myName = "saemi";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "sammy";

console.log("my new name is " + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

something = "dd";
console.log(something);


const daysOfWeek = ["mon", "tue", "wed", "tue"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

// Get Item from Array
console.log(daysOfWeek[0],nonsense[2]);

// Add one more day to the Array
daysOfWeek.push ("sat");

console.log(daysOfWeek);

const toBuy = [];

toBuy.push("kimbob");


// object

const itemToBuy = {
    name: "초코송이",
    price: 1000,
    isDC: false,
    dcRate: null,
    quantity: undefined
    };

console.log (itemToBuy);

itemToBuy.deliveryFee=2500;
console.log (itemToBuy);

itemToBuy.checkOutPrice = itemToBuy.price + itemToBuy.deliveryFee;
console.log (itemToBuy.checkOutPrice);