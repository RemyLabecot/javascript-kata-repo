export const sum = (a, b) => {
    if (haveMoreThanOneDigit(a) || haveMoreThanOneDigit(b)) {
        return weirdSum(a, b);
    }
    return normalSum(a, b);
};

const weirdSum = (a, b) => {

    const aInArrayOfDigits = explodeNumber(a).reverse();
    const bInArrayOfDigits = explodeNumber(b).reverse();
    let result = '';

    let arrayToIterate;

    arrayToIterate = arrayIsTheBiggest(aInArrayOfDigits, bInArrayOfDigits);

    arrayToIterate.forEach((aDigit, i) => {
        if(aInArrayOfDigits[i] && bInArrayOfDigits[i]) {
            result = (aInArrayOfDigits[i] + bInArrayOfDigits[i]).toString() + result;
        } else if (aInArrayOfDigits[i]) {
            result = aInArrayOfDigits[i].toString() + result;
        } else {
            result = bInArrayOfDigits[i].toString() + result;
        }
    });
    return parseInt(result, 10);
};


const normalSum = (a, b) => {
    return a + b;
};

export const explodeNumber = (num) => {
    const arrayOfSplitNumberInString = num.toString().split('');
    return arrayOfSplitNumberInString.map(Number);
};

export const haveMoreThanOneDigit = (num) => {
    return num.toString().length > 1;
};

const arrayIsTheBiggest = (array1, array2) => {

    let arrayToIterate;
    if(array1.length > array2.length) {
        arrayToIterate = array1
        return arrayToIterate;
    } else {
        arrayToIterate = array2;
        return arrayToIterate;
    }
};
