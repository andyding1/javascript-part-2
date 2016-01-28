//This function inside the sort will allow you to sort an array based on the length of the string within the array
var newArray = ['this','is','a','random','array','fandom'];
newArray.sort(function(string1,string2){
    return string1.length-string2.length;
});
console.log(newArray);