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

const plus = 1+1; //변수 plus(변수명)에 1+1을 넣겠다.
console.log(plus); //콘솔창에 기록해라 (plus)라는 변수를 >> 콘솔창에 "2"가 출력됨

var 넘버 = 1;
var num2 = 2;
console.log(num2 - 넘버);

var itemName = "초코송이";
var itemOption = "바나나맛";
console.log(itemName + itemOption); //>> 콘솔창에 "초코송이바나나맛"이 출력됨
console.log(itemName + " " + itemOption)

var lang = "자바스크립트";
console.log(lang); // 자바스크립트
var lang = "JavaScripts";
console.log(lang); // JavaSciprts
lang = "js";
console.log(lang); // js

// Function

function sayHello(){
    console.log("Hello! my name is N"); // sayHello라는 코드를 실행할 때마다 콘솔에 "Hello! my name is N"이라는 텍스트를 출력하라
};
// {sayHello라는 기능을 실행할 때 마다 여기 안에 있는 코드가 실행된다는 의미}
//  (어떻게 기능을 실행시킬거라는 옵션(?)의미)
// N 자리에 어떤 값을 반복적으로 나타내기 위해 argument 를 실행시켜야함.
// argument(인수)란 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + "and I am " + age); // sayHello라는 코드를 실행할 때마다 콘솔에 "Hello! my name is N"이라는 텍스트를 출력하라
};

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
//sayHello로 보낸 데이터가 nameOfPerson이라는 변수로 가게된다는 것을 의미

function plusFunc(firstNum, secondNum){
    console.log(firstNum + ' + '+ secondNum + ' = ' + (firstNum + secondNum));
};

plusFunc(30, 2);

// *firstNum은 plusFunc이라는 기능 안에서만 존재하고 firNum을 밖에서 호출하면 에러 메세지가 뜸

const player = {
    name: "saemi",
    sayHi: function (otherPersonsName){
        console.log("Hi! " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHi("lynn");


const msg = {
    welcome: function (userName, count){
        console.log("어서오세요, " + userName + "님! " + count + "번째 방문이네요.");
    },
    bye: function (userName){
        console.log("안녕히가세요. " + userName + "님 다음에 또 오세요.");
    }
};

msg.welcome("새미", "두");
msg.bye("성환");

// function 복습

const luck = {
    우정: function(today, content){
        console.log(today + " 오늘의 우정 운세는 " + content);
    },
    애정: function(today, content){
        console.log(today + " 오늘의 애정 운은 " + content);
    },
    일상: function(today, content){
        console.log(today + " 오늘의 일상 운세는 " + content);
    },
};

luck.애정 ("23년 1월 15일", "아주 좋습니다.");

//sayHello '누군가'에게 인사하는 맞춤형 결과를 받을 수 잇는 방법
function sayHello(name){
	console.log("hello " + name);
};//{콘솔을 실행한다. 기록한다. hello 라는 텍스트를, 변수 name의 값을;

sayHello("saemi");// sayHello를 실행한다. 텍스트 saemi를 name 자리에 넣는다. >> hello saemi
sayHello("샘","새미","바보");

// hello 샘 // 이 function은 오직 첫번째 argument만 받는다.


// 계산기 코드 만들기 숙제
const func1 = {
	plus1: function (a,b) {
	    console.log(a + b); //이건 콘솔에 단순히 a+b 값을 기록한 것일 뿐 실제 plus 기능이 a+b라는 것을 의미하지 않음
	},
	plus2: function (a,b) {
		return a+b;//이것은 minus기능에 a+b 값을 반환하라는 이야기임
        console.log("hello"); //
	}
    // plus3: function (a,b){
    //     a + b
    // }
};

const ex1 = func1.plus1(1,1); //console.log(1 + 1) >>2;
const ex2 = func1.plus2(1,1); //return 1+1 >> 2


console.log(ex1);

console.log(func1.plus1(1,1)); //156번째 코드 실행 :2 167번째 코드 실행 :undefined
console.log(func1.plus2(1,1)); // 168번째 코드 실행 :2


// console.log(3rdResult);

// const func1 = {
// 	plus1: function (a,b) {
// 	return a+b;
// 	console.log("리턴");
// 	}, // a+b값을 반환한 후 console.log("hello")는 작동하지 않음
// 	plus2: function (a,b) {
// 	console.log("리턴");
// 	return a+b; //이 때는 리턴 기능이 작동하기 전 hello는 뜸
//     }
// };

// func1.plus1();
// func1.plus2();

// plus2Result = func1.plus2 (1+1);