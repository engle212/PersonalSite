function attachWindowEventListeners() {
  const body = document.body;
  const cards = document.querySelectorAll('.border-effect');
  console.log(cards);
  body.addEventListener('mousemove', (e) => {
      // Get all cards
      for (const card of cards) {
        // Get element bounds
        const rect = card.getBoundingClientRect();

        // Calculate cursor position relative to the element (in pixels)
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        // Convert pixels to percentages (optional, good for gradients)
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Pass values directly to CSS
        card.style.setProperty('--mouse-x', `${xPercent}%`);
        card.style.setProperty('--mouse-y', `${yPercent}%`);
      }
  });
}

export { attachWindowEventListeners };