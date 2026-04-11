// spread operator
let user = { name: "Aman", age: 24, email: 'abc@gmail.com' };
let contact = { email: "aman@gmail.com", phone: "9999" };

let userContact = {...user, ...contact};
console.log(userContact);

let numbers = [12, 15, 75, 98, 65,0, 'aman', 35, 45, 78, 52, 78, 96, 35, 15, 75, 89]
// Rest parameters
function sum(...numbers){
    let result = numbers.filter((num)=> typeof num === 'number').reduce((num, numbers)=> num + numbers);
    return result;
}
console.log(sum(...numbers));
// Optional chaining `?` , Nullish coalescing `??`
let user1 = { name: "Aman", address:"address" };
let street = user1.address?.street ?? "Address not available";
console.log(user1.address?.street);
console.log(street);