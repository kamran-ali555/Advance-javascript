const faqItems = document.querySelectorAll('#div');

faqItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    faqItems.forEach((otherItem, i) => {
      const answer = document.getElementById(`answer-${i}`);
      const icon = document.getElementById(`icon-${i}`);

      if (i === index) {
        const isHidden = answer.classList.contains('hidden');
        answer.classList.toggle('hidden', !isHidden);
        icon.textContent = isHidden ? '-' : '+';
      } else {
        answer.classList.add('hidden');
        icon.textContent = '+';
      }
    });
  });
});
