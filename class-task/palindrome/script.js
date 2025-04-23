const word = document.getElementById('wordInput')
const resultElement = document.getElementById('result')
const btn = document.getElementById('btn')

btn.addEventListener('click', isPalindrome )


function isPalindrome() {
    let str = word.value;
    // console.log(word.value);
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            // return false; 
            console.log(false);
           resultElement.textContent = `"${str}" is a palindrome!`;
           resultElement.style.color = 'green';
        }
        start++;  
        end--;   
    }
    //return true;
    console.log(true);
    resultElement.textContent = `"${str}" is not a palindrome.`;
    resultElement.style.color = 'red';
     
}

// console.log(isPalindrome(word.value)); 
// console.log(isPalindrome("1111")); 





// function checkPalindrome() {
//     const word = document.getElementById('wordInput').value;
//     const resultElement = document.getElementById('result');

//     // Remove spaces and convert to lowercase for case-insensitive comparison
//     const normalizedWord = word.replace(/\s+/g, '').toLowerCase();

//     // Check if the word is a palindrome
//     const isPalindrome = normalizedWord === normalizedWord.split('').reverse().join('');

//     // Display the result
//     if (isPalindrome) {
//         resultElement.textContent = `"${word}" is a palindrome!`;
//         resultElement.style.color = 'green';
//     } else {
//         resultElement.textContent = `"${word}" is not a palindrome.`;
//         resultElement.style.color = 'red';
//     }
// }
