const accountId = 144253
let accountEmail = "Vansh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hs.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])