const accountId = 112233;
let accountEmail = "shubhu@gmail.com";
var accountPass = "Pass@123";
accountCity = "Jalgaon";

// accountId = 332211; TypeError: Assignment to constant variable.
accountEmail = "srpatil@gmail.com";
accountPass = "New@123";
accountCity = "Pune";


console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);


console.table([accountId, accountEmail,accountPass, accountCity]);


