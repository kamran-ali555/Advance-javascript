// const section = document.getElementById("section");
// const loader = document.getElementById("loader");
// const div = document.createElement("div");
// const img = document.createElement("img");
// const h1 = document.createElement("h1");

// const fetchGIthubUser = () => {
//     loader.style.display = "block";
// fetch("https://api.github.com/users").then((data) => {
//     return data.json();
// })
// .then((parsonalData) => {
//     // console.log(parsonalData);
//     parsonalData.forEach((user) => {
        
//         Image.src = user.avatar_url;
//         h1.textContent = `User Name : ${user.login}`;

//         div.appendChild(img);
//         div.appendChild(h1);
//         section.appendChild(div)
//     });
//     loader.style.display = "none"
    
// })
// .catch8((err) => {
//     console.log(err);
//     loader.style.display = "none";
    
// })}

// console.log("besfore settime out");



// promise acceppt

// const asycronsesHandle = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("succelfully resolve")
            
//         },[5000])
//     })
// }
// console.log("besfore settime out");
// asycronsesHandle().then((data)=>{
//     console.log(data);
    
// })



const username = document.getElementById("username")
const img = document.getElementById("img")
const section = document.getElementById("section")


const fetchgithubuser = ()=>{
    fetch("https://api.github.com/kamran-ali555")
    .then((data)=>{
        return data.json();
    })
    .then((parsedData)=>{
        console.log("fetch");
        parsedData.forEach((users)=>{
           const div =  document.createElement("div")
           const image = document.createElement("img")
         const heading =  document.createElement("h1")
         image.src = users.avatar_url;
            heading.textContent = `USER NAME : ${users.login} `
            div.appendChild(image)
            div.appendChild(heading)
            section.appendChild(div)
            


        });
        
    })
    .catch((error)=>{
        console.log("ERROR FOUND");
        
    })
}
fetchgithubuser()