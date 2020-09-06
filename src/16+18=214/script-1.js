export const sum = (a, b) => {
    if (haveMoreThanOneDigit(a) || haveMoreThanOneDigit(b)) {
        return weirdSum(a, b);
    }
    return normalSum(a, b);
};

export const weirdSum = (a, b) => {

    // Exploser nombres en tableau
    const aInArrayOfDigits = explodeNumber(a).reverse();
    const bInArrayOfDigits = explodeNumber(b).reverse();

    let result = '';
    // parcourir les deux tableaux en parallèle en arrière

    aInArrayOfDigits.forEach((aDigit, i) => {
        if(aInArrayOfDigits[i] && bInArrayOfDigits[i]) {
            result = (aInArrayOfDigits[i] + bInArrayOfDigits[i]).toString() + result;
        } else if (aInArrayOfDigits[i]) {
            result = aInArrayOfDigits[i].toString() + result;
        } else {
            result = bInArrayOfDigits[i].toString() + result;
        }
    });
    // additionner chaque chiffre normalement et concatener le résultat
    return parseInt(result, 10);
};


export const normalSum = (a, b) => {
    return a + b;
};

export const explodeNumber = (num) => {
    const arrayOfSplitNumberInString = num.toString().split('');
    return arrayOfSplitNumberInString.map(Number);
};

export const haveMoreThanOneDigit = (num) => {
    return num.toString().length > 1;
};
