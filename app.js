'use strict'

//structure of conditional if/else statement
// // if (this is true){execute code} else {execute code}
// let car = "yes";
// let buy = prompt("Are you looking to buy a Nissan 240?");
// if (buy == car){
//     alert("Thats awesome you should check your local Facebook Market place! Let me know what you find!");
// } else {
//     alert("That ok maybe next time!");
// }
// declared variable
let usersName;

function greetUser() {
    usersName = prompt("What is your name?");
    if (usersName == ""){
        usersName = prompt ("Please enter your name!");
    }
    console.log(usersName);
    document.write("Hi " + usersName + " welcome to my page!");
    return usersName;
}
greetUser();

let buy;

function askUser(user) {
    
    buy = prompt(user + " are you looking to buy a Nissan 240sx?");
    buy =  buy.toLowerCase();
    if (buy == "yes"){
        alert("Thats awesome " + user + " you should check your local Facebook Market place! Let me know what you find!");
    }
     else {
        alert("That ok maybe next time!");
     }
     return buy;

    


}

askUser(usersName);
