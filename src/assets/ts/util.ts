function attachWindowEventListeners() {
  const body = document.body;
  const cards = document.querySelectorAll('.border-effect');
  console.log(cards);
  body.addEventListener('mousemove', (e) => {
      // Get all cards
      for (const card of cards) {
        const htmlCard = card as HTMLElement;
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        htmlCard.style.setProperty('--mouse-x', `${xPercent}%`);
        htmlCard.style.setProperty('--mouse-y', `${yPercent}%`);
      }
  });
}

export { attachWindowEventListeners };