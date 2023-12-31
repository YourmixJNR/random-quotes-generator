import quotesData from './quotes.json';

const generateQuoteButton = document.getElementById('generate-quote-button');

generateQuoteButton.addEventListener('click', () => {
  // Generate a random index to select a quote
  const randomIndex = Math.floor(Math.random() * quotesData.length);

  // Get the random quote
  const randomQuote = quotesData[randomIndex];

  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerHTML = `<div class="quote-card">
  <p class="quote-text">" ${randomQuote.text} "</p>
  <p class="quote-author"> - ${randomQuote.author}</p>
  </div>`;
});
