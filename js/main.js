/* 
//task --1  ========================================
// create a string variabel 
let myString = 'Hi js , i dont think you are easy ';

//create a boolen type varibel 
var isIttrue = true;
// number type variabel 
var countDown  = 30;


//task -----2  ========================================
// let varibale 


let timeDate = 9;
timeDate = 10;
console.log(timeDate);


//const varibel
const date = 8;
// const date = 9;
// console.log(date);


//taks---3 ===========================================
// added two number with sum 

 var num1 = 29;
 var num2 = 30;

var result = num1 + num2 ;
console.log(result);



var num3 = 540;
var num4 = 40;

var sub = num3 -num4;
console.log(sub);



var num5 = 950;
var num6 = 34;

var mult = num5 * num6;
console.log(mult);


var num7 = 879;
var num8 = 98;

var div = num7/num8;
console.log(div);


let a = true;
let b = false ;
let c = 4;




//taks---4 ===========================================

//comparsion 

let  x = 439;
let y = 50;


console.log(x ==y );
console.log(x !=y );
console.log(x<y);
console.log(x<=y);
console.log(x<=y);
console.log(x<y);





//taks---5 ===========================================


//tow condition case 1 fuilfil both conditions 
// logical AND 

console.log(a && a);
console.log(b && b);


console.log();



let first = 91;
let second =10;

if(first<=second && second>=first){
    console.log('code is working ');
}else{
    console.log("code is not working");
}



// caser -2   


if(first<second || second < first){
    console.log("code is exceted");
}else{
    console.log("code dost work");
}



//taks---6 ===========================================

// if -else condition 

var color = 'yellow'



if( color == 'red'){
    console.log('color is red');
}else if(color == 'yellow'){
    console.log('color is yelow');
}else {
    console.log("code is green");
}




//taks---7 =========================================== 
// while loop 7  to 19;
var i  = 7;

while (i<=19 ){
    console.log(i);
    i = i *2;
}

console.log(i);




let x = 7;

while (x<=19){
    console.log(x);
     x = x + 2 ;
}






//taks---8* =========================================== 


const cars = ["Saab", "Volvo", "BMW"];
const len = cars.length;
console.log(len);



const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];

fruits[2]='new food name added here';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('new apple')
console.log(fruits);





//taks---9 * =========================================== 
// for loop 


for ( var i = 0; i<10; i ++ ){
    console.log(i);
}

for ( var x = 0; i<10; x ++ ){
    console.log(x);
}


*/


 





// 10. you have an array of numbers. display only the numbers bigger than 80

let number = [ 82, 45, 65,45, 90];


let biggerNumber = 0;

for ( i = 0; i<= number.length; i++){
    element = number[i];

    if ( element > 80){
        console.log(element);
        
    }
}




// 11. write a function that takes three numbers and returns the multiplication of the three numbers


function muti ( num1,num2,num3){
    let total = num1* num2* num3;
    return total;

}




const result =muti(20,54,34);
console.log(result);


// 12. declare an object and change any property of that object.


let studentInfo = {student:'saifur', age :21, college:'ctg'};
var checkItem =studentInfo.age = 23;
console.log(studentInfo)
