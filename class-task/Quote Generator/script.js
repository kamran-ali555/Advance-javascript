  const quoteText = document.getElementById("quote");
  const generateBtn = document.getElementById("generateBtn");

  const quotes = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "Bootstrap",
  ];

  generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });