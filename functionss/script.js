
// function even(num) {
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let result = even(2);
// console.log(result); // Output: true


// };
// console.log(even(2)); 
// console.log(even(3)); 

// function odd(userInput) {
//     if(userInput % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }       
    
// };

// console.log(even(2)); 
// console.log(even(3)); 

// function evenOdd (nmbr){
//     if (nmbr/2 == 0) {
//         console.log("even nmbr");
        
//     }else{
//         console.log("odd nmbr");
//     }
// };

// function isGrater(a,b,c) {
//     if (a>b && a>c) {
//         console.log(a)
//     } else if (c>b && c>a){
//         console.log(c)
//     }
//     else if (b>a && b>c){
//         console.log(b)
//     }
// };
//  isGrater(-1,0,1);

// function isGrater(a,b,c) {
//     let max;

//     if (a>b && a>c) {
//         max = a
//     } else if (b>a && b>c){
//         max = b
//     }
//     else {
//         max = c
//     }
//     return max;
// };

//  console.log(isGrater(-1,0,1));


 //spread operatot
 //rest operator




 //home work



//program one

//  function createUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//       }
//     };
//   }
  
//   const user1 = createUser("Alice", 25);
//   const user2 = createUser("Bob", 30);
  
//   user1.greet(); // Output: Hi, my name is Alice and I am 25 years old.
//   user2.greet(); // Output: Hi, my name is Bob and I am 30 years old.
  
 
 
//program two

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);




// program three

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet();       
//   greet("John"); 
  



//rest operator

// function numbers(...Number){
//     console.log(Number);
// };

// numbers(1,2,4,6,77,88,)



// const arr1 = [22,33,44,55,66];

// const arr2 = "ali"

//  const arr3 = ["asif","ahan","afnan"]
// console.log(...arr1 , ...arr2);



// sprade operrator

// sprade operator is used to split up array elements or object properties.

// let arr4 = [1,2,3,4,5,6,7,8,9,10];
// let arr5 = [...arr4];
// console.log(arr5);

// let obj1 = {    name: "ali",    age: 22,    city: "karachi"};
// let obj2 = {...obj1};
// console.log(obj2);

// function arr(a,b,c,...d) {
//     console.log(a,b,c,d);    
// };
// arr(1,2,3,4,5,6,"7",8,9,10,11,22,33,"afnan",55,66,77,"ahaan",99,100);


function even(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// let result = even(2);
// console.log(result); // Output: true

console.log(even(5));
