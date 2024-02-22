// Primitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt





// Reference Type(Non - Primitive)
// Array, Objects, Functions



//******************************************************************* */

// Stack (Primitive), Heap(Non-Primitive)
let name1 = "Samar";

let anotherName = name1;
anotherName = "Kapil"

console.log(name1)
console.log(anotherName)


let user1 =  {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "samar@google.com"

console.log(user1.email)
console.log(user2.email)