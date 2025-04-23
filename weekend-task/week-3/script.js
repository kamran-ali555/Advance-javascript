// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");
// const btn3 = document.getElementById("btn-3");

// const faq1 = document.getElementById("faq-1");
// const faq2 = document.getElementById("faq-2");
// const faq3 = document.getElementById("faq-3");

// const icon1 = document.getElementById("icon-1");
// const icon2 = document.getElementById("icon-2");
// const icon3 = document.getElementById("icon-3");

// const icon11 = document.getElementById("icon-11");
// const icon22 = document.getElementById("icon-22");
// const icon33 = document.getElementById("icon-33");

// btn1.addEventListener("click", function() {
//     faq1.style.display = "block";
//     faq2.style.display = "none";
//     faq3.style.display = "none";
    
//     icon1.style.display = "none";
//     icon2.style.display = "block";
//     icon3.style.display = "block";

//     icon11.style.display = "block";
//     icon22.style.display = "none";
//     icon33.style.display = "none";
// });
// btn2.addEventListener("click", function() {
//     faq1.style.display = "none";
//     faq2.style.display = "block";
//     faq3.style.display = "none";

//     icon1.style.display = "block";
//     icon2.style.display = "none";
//     icon3.style.display = "block";

//     icon11.style.display = "none";
//     icon22.style.display = "block";
//     icon33.style.display = "none";
// });
// btn3.addEventListener("click", function() {
//     faq1.style.display = "none";
//     faq2.style.display = "none";
//     faq3.style.display = "block";

//     icon1.style.display = "block";
//     icon2.style.display = "block";
//     icon3.style.display = "none";

//     icon11.style.display = "none";
//     icon22.style.display = "none";
//     icon33.style.display = "block";
// });

const btns = document.querySelectorAll('.btn');
const hiddenAns = document.querySelectorAll('.hide');

btns.forEach(function (button, index){
    button.addEventListener("click",  handleAnswer);
  
  });

function handleAnswer(e){
      btns.forEach(function(button){
        button.classList.remove("active");
      } 
      );
      e.target.classList.add("active");
      hiddenAns.forEach(function(hideAns){
        hideAns.classList.remove(hidden)
        const answerToDisplay = document.getElementById(`answer-${e.target.id}`);
        answerToDisplay.classList.remove(hidden)
      });
    }


