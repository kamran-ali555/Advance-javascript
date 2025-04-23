const web = document.getElementById("web");
const uiux = document.getElementById("uiux");
const marketing = document.getElementById("marketing");

const webSection = document.getElementById("web-section");
const uiuxSection = document.getElementById("uiux-section");
const marketingSection = document.getElementById("marketing-section");

web.addEventListener("click", handleWebSection);
uiux.addEventListener("click", handleUiuxSection);
marketing.addEventListener("click", handleMarketingSection);


function handleWebSection() {
  webSection.style.display = "flex";
  uiuxSection.style.display = "none";
  marketingSection.style.display = "none";

  web.classList.add("active");
  uiux.classList.remove("active");
  marketing.classList.remove("active");
}


function handleUiuxSection() {
    webSection.style.display = "none";
    uiuxSection.style.display = "flex";
    marketingSection.style.display = "none";
  
    web.classList.remove("active");
    uiux.classList.add("active");
    marketing.classList.remove("active");
  }
function handleMarketingSection() {
    webSection.style.display = "none";
    uiuxSection.style.display = "none";
    marketingSection.style.display = "flex";
  
    web.classList.remove("active");
    uiux.classList.remove("active");
    marketing.classList.add("active");
  }
 