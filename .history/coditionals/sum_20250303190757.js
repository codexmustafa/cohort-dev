let arr = [1,2,3,4,5,6,7]

function sumfac (numbersArray) {
    let sum = 0;

    for (i = 0; i < numbersArray.length; i++) {
        sum = sum + numbersArray[i]
    }
    
    return sum;
}