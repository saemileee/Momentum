
//성인이면 계산할 수 있는 기능

// const age = parseInt(prompt("How old are you?"));

// function reader(age){
//     if (isNaN(age) = true)
//         age;
//     else 
//         calculate();
// }

// function calculate(age){
//     if (age > 19)
//         return "술을 살 수 있습니다.";
//     else (age <= 19)
//         return "술을 살 수 없습니다.";
// };

// calculateResult=calculate(age);
// document.writeln(calculateResult);

// 노코
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age)){
//     parseInt(prompt("How old are you?"));
// } else{
//     function calculate(age){
//         if (age > 19)
//             return "술을 살 수 있습니다.";
//         else (age <= 19)
//             return "술을 살 수 없습니다.";}
// }

// calculateResult=calculate(age);
// document.writeln(calculateResult);

// 노코
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("please write a real positive number");
} else if(age < 19){
    console.log("You are too young.");
} else if(19 <= age && age <= 50){
    console.log("You can drink.");
} else if(age>50 && age < 80){
    console.log("You would better less drink.");
} else if(age===100);{
    console.log("Wow, you are wise.") //다음 80이상 조건에서 true지만 위에서 아래의 순서로 내려오기 때문에 여기서 먼저 걸리면 해당 값이 출력
} else if(age >= 80){
    console.log("You can do whatever you want.")
}
