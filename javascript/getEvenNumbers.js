function getEvenNumbers(Arraynumbers) {
    const evenNumbers = Arraynumbers.filter(numbre => numbre % 2 === 0);
    return evenNumbers;
}

//test fonction getEvenNumbers
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

//utiliser node getEvenNumbers.js pour tester la fonction getEvenNumbers