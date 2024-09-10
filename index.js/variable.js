const account_Id= 144577

// const account_Id=67879 // it will throw an error

let account_Email="astha@gmail.com"

// let account_Email // it will throw an error

var account_Password= "12345" 
account_city = "Jaipur"
let account_state;
// account_Id=123 // not allowed

account_Email='abc@gmail.com'
var account_Password='15728'
account_city='london'

console.log(account_Id)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([account_Email,account_Id,account_Password,account_city,account_state])
