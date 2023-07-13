console.log("hello fun js");

// logic
// birth year calc
// age, current year
// logic | currentYear - age = birthYear

function birthYearCalc(age){
    let currentYear = 2023;
    let result = currentYear - age;
    return result;
}

// console.log(birthYearCalc(29));
// console.log(birthYearCalc(18));
// console.log(birthYearCalc(22));


// logic
// tax calc ( tax  5% )
// amount 5%
// ( amount / 100 ) * taxPercentage
// amount * ( taxPercentage / 100 )

function taxCalc(amount,taxPercentage = 5){
    return amount * (taxPercentage / 100);
}

// console.log(taxCalc(100));
// console.log(taxCalc(1000));
// console.log(taxCalc(700));


// logic
// cost

function cost(price,quantity){
    return price * quantity;
}

// console.log(cost(100,5));
// console.log(cost(700,5));
// console.log(cost(1000,5));

const results = [];
let resultIndex = 0;
// results[0] = something;
// results[1] = something;
// results[2] = something;

function calcArea(w,b){

    let area = w*b;

    // (2) result as an object
    const result = {
        width : w + "Ft",
        breadth : b + "Ft",
        area : area + "Sqft"
    }
    // console.log(result);

    // (3) store result to results array
    results[resultIndex++] = result;

    // (1) Area Calculation
    return `${area} Sqft`;
}


// console.log(calcArea(17,60));
// console.log(calcArea(12,50));
// console.log(calcArea(25,50));

// console.table(results);


const rates = {
    USD : 2100,
    EUR : 2315,
    SGD : 1569
}

// console.log(rates);

// 100 usd to mmk
// 345 sgd to mmk
// 50 eru to mmk

function exchangeToMmk(amount,fromCurrency){
    let rate = rates[fromCurrency];
    // console.log(rate);
    return `${amount * rate} MMK`;
}

// console.log(exchangeToMmk(100,"USD"));
// console.log(exchangeToMmk(345,"SGD"));
// console.log(exchangeToMmk(50,"EUR"));

// 500000 mmk to usd ?
// 120000 mmk to sgd ?
// 3000000 mmk to eur ?

function exchangeFromMmk(amount,toCurrency){
    let rate = rates[toCurrency];
    return `${ amount / rate } ${toCurrency}`;
}

// console.log(exchangeFromMmk(500000,"USD"));
// console.log(exchangeFromMmk(120000,"SGD"));
// console.log(exchangeFromMmk(3000000,"EUR"));

// 100 sgd to eur ?
// 750 usd to sgd ?

const fruits = {
    apple : 500,
    orange : 700,
    banana : 200,
    mango : 150
}

const voucher = [];
let voucherIndex = 0;
let totalCost = 0;

function buy(fruit,quantity){
    let price = fruits[fruit];
    let cost = price * quantity ;
    const obj = {
        item : fruit,
        price,
        quantity,
        cost : cost + "MMK"
    };

    voucher[voucherIndex++] = obj
    totalCost += cost;

    return cost + "MMK";
}

console.log(buy("apple",5));
console.log(buy("orange",3));
console.log(buy("banana",6));


console.table(voucher);
console.table({
    total : totalCost,
    tax : taxCalc(totalCost),
    netAmount : totalCost + taxCalc(totalCost)
});