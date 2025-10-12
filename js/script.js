const menuBar = document.querySelector(".menuBar");
const menuIcon = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("menu_active");
});


// Variable
var  myString= "String";
console.log("Hello! This is a "+ myString );

var a = 3;
var b = 4;
sum = a + b;
console.log("The sum of a and b is" +" " + sum)


// Boolean
let isAdmitted = true;
console.log("Was the student admitted?" +" " + isAdmitted)
// console.log(typeof(isAdmission))

// let isNotAdmitted = false;
// console.log(isNotAdmitted)

// Comparison
let x = 5;
let y = 10;
let result = x > y;
console.log(`Is ${x} > ${y}? ` + result)


// function
function greet(Student){
    return("Hello" + " " + Student)
}
console.log(greet)
console.log(greet("Rose"))
// console.log(typeof(greet))


// Array
const Academics = ["Daycare", "Kindergarten", "Primary", "Secondary"];
console.log(Academics)



// Object
const School ={
    name: "Nile's internatinal school",
    founded: "2023",
    location: "Lagos state"
}
console.log(School)


// Loops

for (let i = 0; i < 12; i++){
    console.log(i)

} 