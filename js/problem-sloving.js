// 1. conversation
// feetToInch

function feetToInch(feet){
    let inchResult = feet * 12;
    return inchResult;
}


let inchOutPut=feetToInch(4)
console.log(inchOutPut);



// https://www.w3schools.com/howto/howto_js_length_converter.asp


// 2. conversion
//centimeterToMeter

function centimeterToMeter (cent){
    let meeterNum = cent/ 100;
    return meeterNum;
}


const meeterOutPut =centimeterToMeter(1);
console.log(meeterOutPut);




// 3. calculation
//pageRequirements

// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages


    

function pageRequirements (book1, book2, book3){
    var firstBook = 100;
    var secondBook = 200;
    var thirdBook = 300;

    var totalPageFirst = book1 * firstBook;
    var totalPageSecond = book2 * secondBook;
    var totalPageThird = book3 * thirdBook;

    var totalNeedPage = totalPageFirst + totalPageSecond + totalPageThird;
    return totalNeedPage;
    
}
    var resultOutPut = pageRequirements(1,2,3);
    console.log(resultOutPut);



 







//4. friends
//bestFriend











//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
//onlyPositive