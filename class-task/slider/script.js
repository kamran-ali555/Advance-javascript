// const destination = document.getElementById("destination");
// const review = document.getElementById("review");
// const user = document.getElementById("user");
// const dots = document.querySelectorAll(".dot");

// const clientReview = [
//     {
//         destination: "Ancient Pyramids",
//         review: "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
//         name:"Measum Abbas"
//     },
//     {
//         destination: "Smith",
//         review: "like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
//         name:"hasnain Abbas"
//     },
//     {
//         destination: "Alice Johnson",
//         review: " Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
//         name: "Ansar"
//     }
// ];

// setInterval(changeContent, 1000);


// // dots.forEach(dot, index => {
// //     dot.classList.add("active");
// // });

// let currentIndex = 0;

// // if (currentIndex ) {
// //     currentIndex =;
// // }
// function changeContent() {
//     // const randomNumber = Math.floor(Math.random()  * clientReview.length);
//     // const randomReview = clientReview[randomNumber];

//     let sqlyChange = ((currentIndex + 1) % clientReview.length);

//     // let seqReview = clientReview[sqlyChange];
//     console.log((Math.floor(Math.random()  * clientReview.length));

//     // destination.textContent = randomReview.destination;
//     // review.textContent = randomReview.review;
//     // user.textContent = randomReview.name;

    
//     // dot.classList.remove("active");
// }




const reviews = [
    {
        destination:'Ancient Pyramids',
        review:'The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in',
        name:'Measum Abbas'
    },
    {
        destination:'Ghizer',
        review:'When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.',
        name:'Ansar Ali'
    },
    {
        destination:'Hunza',
        review:'Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.',
        name:'Somi Batool'
    },
    {
        destination:'Astore',
        review:'Exploring means learning. Bring new experiences from each journey. Meet different cultures, traditions and landscapes. Choose your next destination and start your trip.',
        name:'Hasnain Abbas'
    },
]
const destination = document.getElementById('destination')
const review = document.getElementById('review')
const user = document.getElementById('user')
const dots = document.querySelectorAll('.dot')
setInterval(changeSlider, 1000)

let currentIndex = 0
function changeSlider(){
    // const randomNumber = Math.floor(Math.random() * reviews.length)
    dots.forEach((dot)=>{
        dot.classList.remove('active')
    })
    const randomSlider = reviews[currentIndex]

    destination.textContent = randomSlider.destination
    review.textContent = randomSlider.review
    user.textContent = randomSlider.name

    dots[currentIndex].classList.add('active')
    currentIndex = currentIndex+1
    if(currentIndex === reviews.length){
        currentIndex = 0
    }
}