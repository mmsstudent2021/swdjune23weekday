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