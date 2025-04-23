const bar = document.getElementById("bar");
const unItem = document.querySelector(".nav-bar-items");
function clickBar() {
  
    if (unItem) {
        const currentLeft = window.getComputedStyle(unItem).left; 
        if (currentLeft === '0px') {
            unItem.style.left = '-200px';
        } else {
            unItem.style.left = '0px';
        }
    }
}

bar.addEventListener("click", clickBar);