// Q1 Write a program to swap the values without using third variable.
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}


console.log(swap(5, 10));






// Q2 Write a program to check if the string is palindrome.
    function isPalindrome(str) {
        let start = 0;
        let end = str.length - 1;
    
        while (start < end) {
            if (str[start] !== str[end]) {
                return false; 
            }
            start++;  
            end--;   
        }
        return true; 
    }
    
    // console.log(isPalindrome("madam")); 
    console.log(isPalindrome("1111")); 
    




// Q3  Write a program that takes an array of numbers and return a new array with elements squared.
    function squareElements(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * arr[i]);
        }
        return result;
    }
    
    console.log(squareElements([1, 2, 3, 4, 5])); 




// Q4  Write a function that returns the count of even and odd numbers in an array.
function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++; 
    } else {
        odd++;
    }

}
return { even, odd };
}
console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// Q5  Create a function that counts how many times a specific letter appears in a string.
function countLetter(str, letter) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++; 
        }
    }
    
    return count;
}

console.log(countLetter("hello world", "o")); 