const section = document.getElementById("section");
const loader = document.getElementById("loader");

// const kammy = "https://api.github.com/users/kamran-ali555";

// fetch(kammy)
// .then((kammyData) =>{
//     console.log(kammyData);
//     return kammyData.json();
// })
// .then((kammyJson) => {
//     // console.log(kammyJson);
//     // let html = "";
//     kammyJson.forEach((kammy) => {
//     const kammyAPI =  `
//     <div class="flex flex-col p-2 justify-center items-center w-full">
//             <img class="w-[150px] rounded-full" src=${kammy.avatar_url} alt="">
//             <h2 class="mt-4 text-[#414141] border w-full p-2 rounded text-center">${"UserName : " + kammy.login}</h2>
//             <p class="mt-4 text-[#414141] border w-full p-2 rounded">${"Name :" + kammy.name}</p>
//             <p class="mt-4 text-[#414141] border w-full p-2 rounded"> ${"location :" + kammy.location}< + /p>
//             <p class="mt-4 text-[#414141] border w-full p-2 rounded">${"bio : " + kammy.bio}</p>
//             <p class="mt-4 text-[#414141] border w-full p-2 rounded">${"user_view_type : " + kammy.user_view_type}</p>
//         </div>`;

//         // console.log(kammyAPI);
        
//         html = html + kammyAPI;
//         return kammyAPI;
//     });
// })
// section.appendChild(kammyAPI);
// .catch((error) => {
//     console.log("Error", error);
//     section.innerHTML = "<h1>Something went wrong</h1>";
// })


fetch("https://api.github.com/users").then((response1) =>{
    //console.log(response1);
    return response1.json();
    
} ).then((response2) => {
    let html = "";
    response2.forEach((user) => {
    loader.style.display = "block";
        const userHtml = `
        <div>
            <img src=${user.avatar_url} alt="">
            <h1>${user.login}</h1>
        </div>`;
        html = html + userHtml;
       loader.style.display = "none";

    });

    section.innerHTML = html;
}).catch((error) => {
    loader.style.display = "none";
    
    console.log("Error", error);
    section.innerHTML = "<h1>Something went wrong</h1>";
})