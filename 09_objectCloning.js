let firstName = "Datta";
let lastName = "shinde";

let myName = firstName; // Deep Clone

console.log(myName);
firstName = 'DS';
console.log(myName);

myName = 'Datta';

let person = {
    name: 'Elon',
    city: 'Pune',
    isMarried : true
}
let elonPerson = {
    country: "USA"
}
elonPerson = person; // Shallow clone

elonPerson.city= "Mumbai";
console.log(elonPerson.city); // 
console.log(person.city);