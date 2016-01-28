//Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.
var newArray = ['this','is','a','random','array','fandom'];
function lengthCompare(string1,string2){
    return string1.length-string2.length;
};
newArray.sort(lengthCompare);
console.log(newArray);

//Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.
var objectArray = [
    {name:'Andy',email:'andyding@yahoo.com'},
    {name:'Steve',email:'steve@email.com'},
    {name:'Bonnie',email:'bonnie.ding@gmail.com'},
    {name:'Aardvark',email:'aardvark@gmail.com'}
];
function objectCompareNameLength(object1,object2){
    return object1.name.length-object2.name.length;
}
function objectCompareEmailAlphabetical(object1,object2){
    if (object1.email>object2.email) {
        return 1;
    }
    if (object1.email<object2.email) {
        return -1;
    }
    // a must be equal to b
    return 0;
}
objectArray.sort(objectCompareNameLength);
console.log("Sorted by name length: ");
console.log(objectArray);
objectArray.sort(objectCompareEmailAlphabetical);
console.log("Sorted by email address alphabetically: ");
console.log(objectArray);

//Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.
var numberArray = [2, 4, 9];
function squareNumber(number){
    return number*number;
}
console.log(numberArray.map(squareNumber));

//Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
var objectNumArray = [
    {num: 2, string: 'test1'},
    {num: 5, string: 'test2'},
    {num: 10, string: 'test3'}
];
function objectNumSquare(object){
    return object.num*object.num;
}
console.log(objectNumArray.map(objectNumSquare));

//In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers.
//modify operationMaker("add")[2,4];
function operationMaker(operation){
    function operationDoer(num1,num2){
        switch(operation){
            case 'add':
                return num1+num2;
            case 'subtract':
                return num1-num2;
            case 'mult':
                return num1*num2;
            case 'div':
                return num1/num2;
            default:
                return 0;
        }
    }
    return operationDoer;
}
//var adder = operationMaker("add"); var sum = adder(5,10);
var sum = operationMaker("add")(5,10);
console.log(sum);
//var multiplier = operationMaker("mult"); var product = multiplier(5,10);
var product = operationMaker("mult")(5,10);
console.log(product);