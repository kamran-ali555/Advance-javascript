const userdata = [
    {
        name : "kaman ali",
        age : 18,
        field : "web developer"
    },
    {
        name : "karam ali",
        age : 20,
        field : "UI/UX"
    },
    {
        name : "majeed hussain",
        age : 22,
        field : "Ai"
    },
    {
        name : "karamat ",
        age : 19,
        field : "web developer"
    },
    {
        name : "ahmad ali",
        age : 23,
        field : "UI/UX"
    },
];


//filter shorthand method

// const developer = userdata.filter(user => user.field === "web developer");
// console.log(developer);

// const developer = userdata.filter((user)=>{
//     return user.field === "web developer"
// });
// console.log(developer);


//find shorthand method
// const uiux = userdata.find(user => user.age > 10)

// const uiux = userdata.find((user)=>{
//     return user.age > 10;
// });

// console.log(uiux, "is expert uiux designer");


// const reduce =[2,4,5,6,6]

// const result = reduce.map((data)=>{
//     return data + 1;
// })

// const reduce = Array.reduce((a,b)=> a*b, 10)
// console.log(result);

// console.log(result);

function bankAccount() {
    let blance = 0;
    return{
        addBalnce:(amount)=>{
            blance =blance + amount;
        },
        deducBalnce:(amount)=>{
            blance = blance - amount;
        },
        getBalnce:()=>{
           return blance;
        }
    }
}

const creatAccount = bankAccount();
// console.log("before add", creatAccount(getblances()));

// bankAccount(addBalnce(600))
bankAccount(deducBalnce(100))

// console.log("after add", creatAccount(getBalnce()));
