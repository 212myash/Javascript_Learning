// Topic: JavaScript Objects (Complete Practice)
// Description: Demonstrates object creation, access, update, delete,
// methods, nested objects, loops, and object utilities.

// 1. Creating an Object
let student = {
    name: "Yash",
    age: 20,
    course: "B.Tech"
};

console.log("Original Object:", student);


// 2. Accessing Object Properties
console.log("Student Name:", student.name);
console.log("Student Age:", student["age"]);


// 3. Updating Object Value
student.age = 21;
console.log("Updated Age:", student.age);


// 4. Adding New Property
student.city = "Patna";
console.log("After Adding City:", student);


// 5. Deleting Property
delete student.course;
console.log("After Deleting Course:", student);


// 6. Object Method (Function inside object)
let person = {
    name: "Yash",
    greet: function(){
        console.log("Hello " + this.name);
    }
};

person.greet();


// 7. Nested Object
let user = {
    name: "Yash",
    address: {
        city: "Patna",
        state: "Bihar"
    }
};

console.log("City:", user.address.city);


// 8. Loop through Object
let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2023
};

console.log("Looping Object:");
for(let key in car){
    console.log(key + " : " + car[key]);
}


// 9. Object Keys, Values, Entries
console.log("Keys:", Object.keys(car));
console.log("Values:", Object.values(car));
console.log("Entries:", Object.entries(car));


// 10. Object Destructuring
let employee = {
    empName: "Rahul",
    salary: 30000
};

let {empName, salary} = employee;

console.log("Destructured Name:", empName);
console.log("Destructured Salary:", salary);


// 11. Array of Objects
let students = [
    {name: "Yash", age: 20},
    {name: "Aman", age: 21}
];

console.log("First Student:", students[0].name);


// 12. JSON Conversion
let obj = {name: "Yash", age: 20};

let jsonData = JSON.stringify(obj);
console.log("Object to JSON:", jsonData);

let parsedData = JSON.parse(jsonData);
console.log("JSON to Object:", parsedData);


// 13. Copy Object
let copyStudent = {...student};
console.log("Copied Object:", copyStudent);
