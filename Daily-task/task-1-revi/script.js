const buttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('.section');

buttons.forEach(function (button, index){
  button.addEventListener("click",  HandleClickEvent);

});

function HandleClickEvent(e){
console.log(e);
  buttons.forEach(function(button){
    button.classList.remove("active");
  } 
  );
  e.target.classList.add("active");
  sections.forEach(function(section){
    section.style.display = "none";
    const sectionToDisplay = document.getElementById(`section-${e.target.id}`);
    sectionToDisplay.style.display = "flex";
  });
}



