let score = "33";
console.log(typeof score);

let score1 = 33;
console.log(typeof score1);

let scoreStore = Number(score);

let scoreStore1 = String(score);

console.log(typeof scoreStore, typeof scoreStore1);


let isLogIn = true;
let isLogOut = false;

console.log(typeof isLogIn, typeof isLogOut);

let getLogIn = Number(isLogIn);
console.log(getLogIn);

let getLogOut = String(isLogOut);
console.log(getLogOut);


let checkNull = null;
console.log(typeof checkNull); // Giving the Object type for the null keet is this in your mind
console.log(checkNull);

checkNull = 11;
console.log(typeof checkNull);


let checkLog = 1; // true for 0 - false
console.log(Boolean(checkLog));

let identify = undefined;
console.log(typeof identify);
identify = false;
console.log(typeof identify);


