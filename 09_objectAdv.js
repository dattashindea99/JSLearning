let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune"
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entry = Object.entries(person);// [ [], [], [], [] ]
console.log(entry);
for (const element of entry) {
    console.log(element[0], element[1]);
}

console.log(`Traversing of an object...`);
for (const key in person) {
   console.log(key, person[key]);
}



const isNameAvailable =  'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);