console.log("Conditional Statement");

// if(false){
//     console.log("I'm true");
// }else{
//     console.log("I'm false");
// }

// console.log(5+4);
// console.log(5 == 4);

// let wakeUpTime = 9;

// if(wakeUpTime > 8){
//     console.log('ရိုက်ခံရပါပြီ');
// }else{
//     console.log("morning par");
// }

// let pocketMoney = 100;

// function howToGo(pocketMoney) {
//   if (pocketMoney >= 200) {
//     return "ကျောင်းကို bus နဲ့သွားမယ် 😊";
//   }
//   return "ကျောင်းကို လမ်းလျှောက်သွားမယ် 🥹";
// }

// console.log(howToGo(500));
// console.log(howToGo(100));
// console.log(howToGo(200));
// console.log(howToGo(600));

// function howToGo(pocketMoney, busFee = 300) {
//   if (pocketMoney >= busFee) {
//     pocketMoney -= 300; // bus ကားခ ပေးပြီ
//     console.log("ကျောင်းကို bus 🚌 နဲ့သွားမယ် 😊");
//     console.log("လက်ကျန်ငွေ", pocketMoney);
//     if (pocketMoney >= busFee) {
//       console.log("အိမ်ကို bus 🚌 နဲ့ပြန်မယ် 😊");
//     } else {
//       console.log("အိမ်ကို လမ်လျှောက် 🚶🏻‍♂️ပြန်မယ် 😊");
//     }
//   } else {
//     console.log("ကျောင်းကို လမ်လျှောက် 🚶🏻‍♂️ သွားမယ် 😊");
//     console.log("အိမ်ကို လမ်လျှောက် 🚶🏻‍♂️ ပြန်မယ် 😊");
//   }
// }

// console.log(howToGo(1000));


// function checkMark(mark){
//     // if(mark < 40){
//     //     console.log("U fail");
//     // }
//     // else if( mark < 80){
//     //     console.log("U passed");
//     // }
//     // else if(mark >= 80){
//     //     console.log("U passed with D");
//     // }


//     if(mark >= 80){
//         console.log("U passed with D");
//     }else if(mark >= 40){
//         console.log("U passed");
//     }else if( mark < 40){
//         console.log("U fail");
//     }

// }

// console.log(checkMark(50));
// console.log(checkMark(94));

// console.log(true ? "စားပြီးပါပြီ" : "မစားရသေးပါဘူး");

// I passed in myanmar exam
// I failed in myanmar exam
// I passed with D in Myanmar exam

// function check(subject,mark){


//     // if(mark >= 80){
//     //     console.log(`I passed with D in ${subject} exam`);
//     // }else if(mark >= 40){
//     //     console.log(`I passed in ${subject} exam`);
//     // }else if(mark < 40){
//     //     console.log(`I fail in ${subject} exam`);
//     // }

//     return `I will ${mark >= 40 ? 'passed' : 'failed'} the ${subject} exam `;

// }

// console.log(check("myanmar",50));
// console.log(check("english",30));
// console.log(check("math",80));

// console.log(5 === "5");

// let x = true;

// console.log(x);

// if(x){
//     console.log("it is true");
// }else{
//     console.log("it is false");
// }


function entrance(examMark, viberMark){
    if(examMark > 60 && viberMark > 60){
        return "U can passed.";
    }
    return "U can't passed";
}

// console.log(entrance(90,50));
// console.log(entrance(62,65));

function canIVote(age,isCitizen){
    if(age>=18 && isCitizen){
        return "U can vote"
    }
    return "U can't vote"
}

// console.log(canIVote(50,true));
// console.log(canIVote(50,false));
// console.log(canIVote(5,true));


function choseBus(busNo){
    if(busNo === 20 || busNo === 65){
        return "U can reach kyauk myaung campus";
    }
    return "U can't reach";
}

// console.log(choseBus(20));
// console.log(choseBus(30));
// console.log(choseBus(65));

// console.log(!false);