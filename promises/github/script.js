const section = document.getElementById("section");

// const fetchData = "https://api.github.com/users";

fetch("https://api.github.com/users").then((response1) =>{
    //console.log(response1);
    return response1.json();
    
} ).then((response2) => {
    let html = "";
    response2.forEach((user) => {
        const userHtml = `
        <div>
            <img src=${user.avatar_url} alt="">
            <h1>${user.login}</h1>
        </div>`;
        html = html + userHtml;
    });
    section.innerHTML = html;
}).catch((error) => {
    console.log("Error", error);
    section.innerHTML = "<h1>Something went wrong</h1>";
})

// fetch("https://api.github.com/users")
// .then((response) =>{
//     // console.log(response);
//     return response.json();
// }).then((jsonData) => {
//     // console.log(jsonData);
//     let html = "";
//     jsonData.forEach((userData) => {
//         const userAPI = `
//         <div >
//             <img src=${userData.avatar_url} alt="">
//             <h1>${userData.login}</h1>
//         </div> `;
//         html = html + userAPI;
//         // return userAPI;
//     });
//     section.innerHTML = html;
// }).catch((error) => {
//     console.log("Error", error);
//     section.innerHTML = "<h1>Something went wrong</h1>";
// })

