function positiveNumber(number){
    let positive = [];
    for (let i = 0; i < number.length; i++){
        if (number[i] > 0){
            positive.push(number[i]);
        }
        else{
            break;
        }
    }
    return positive;
}


let num =[21,23,55,22,-44,55,6];
let result =positiveNumber(num);
console.log(result);


