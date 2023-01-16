// 계산기 코드 만들기 숙제

const calculator = {
    plus: function(a,b){
        console.log(a + b);
    },
    minus: function(a,b){
        console.log(a - b);
    },
    multi: function(a,b){
        console.log(a * b);
    },
    divide: function(a,b){
        console.log(a / b);
    },
    power: function(a,b){
        console.log(a**b);
    }
};

calculator.plus(1,2);
calculator.minus(1,2);
calculator.multi(1,2);
calculator.divide(1,2);
calculator.power(2,4);