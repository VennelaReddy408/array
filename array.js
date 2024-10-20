var fruits=["mango","kiwi","apple","orange"];
var lengthOffruits=fruits.length;
console.log(lengthOffruits);

//we can add an element to end of array by using Push() method//
var fruits=["banana","guava","strawberry"]
fruits.push("mango","apple","papaya")
console.log(fruits)

//we can remove last element of an array by using pop()//
var fruits=["banana","guava","strawberry"]
fruits.pop();
console.log(fruits)

//we can add an element to the beginning by using unshift()//
var fruits=["banana","guava","strawberry"]
fruits.unshift("mango", "pineapple","orange")
console.log(fruits)

//we can remove the frst element of array by using shift()//
var fruits=["banana","guava","strawberry"]
fruits.shift();
console.log(fruits)

//we can reverse the elements in array by using reverse()//
var fruits=["banana","guava","strawberry"]
fruits.reverse()
console.log(fruits)

//we can find the index of an specific value of an array by using indexOf()
var fruits=["banana","guava","strawberry"]
console.log(fruits.indexOf("guava"))

//adds an element to end of an array then removes the first element//

var fruits=["banana","guava","strawberry"]
fruits.push("mango")
fruits.shift();
console.log(fruits)

//how can you reverse an array and join the elements into a string//
var arr=["hello world!","how are u"]
console.log(arr.reverse());
console.log(arr.join(""))

//sorts the array into ascending order then removes the last element//
var fruits=["orange","banana","apple"]
fruits.sort();
fruits.pop();
console.log(fruits)

//add two elements at the beginning and remove the first element and find length of an array//
var fruits=["orange","banana","apple"]
fruits.unshift("mango","garpes");
fruits.shift();
var lengthOffruits=fruits.length;
console.log(fruits)

//combine two arrays sort the comined arrays than remove the last elememt//
var veggis=["tomato","bringal"]
var fruits=["mango","banana"]
combinedarray=veggis.concat(fruits);
combinedarray.sort();
combinedarray.pop();
console.log(combinedarray)



//checks value present in an array//
Array=[1,2,3,4,5]
value=3;
Array.includes(value);
console.log('value exist in the array');

//sort elements in ascending order//
array=["meghana","samyuktha","siddi", "vennela","cholleti"]
array.sort();
console.log(array) 

//convert array to string by commas as separtot//
array=["akhila","meghana","cherry"];
 str=array.join(",");
console.log(str);

//research topics//
//syntax array.splice(star,deletecount,item1,item 2,....itemN)
fruits=["apple","banana","mango","orange"];
fruits.splice(1,2,"pineapple");
console.log(fruits)

//MAP Method//
//syntax array.map(function(currentValue,index,array),thisArg)//
numbers=[1,2,3,4];
squared = numbers.map(num => num*num);
console.log(squared);
