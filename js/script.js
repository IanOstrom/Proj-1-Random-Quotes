let quotes = [{
    quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'A Testament of Hope: The Essential Writings and Speeches'
  },
  {
    quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    source: 'Thomas A. Edison'
  },
  {
    quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    source: 'Lao Tzu '
  },
  {
    quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Sorcerer\'s Stone',
    year: 1997
  },
  {
    quote: 'If you can\'t explain it to a six year old, you don\'t understand it yourself.',
    source: 'Albert Einstein'
  }
];

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

function printQuote(){
  let html = '';
  let randomQuote = getRandomQuote();

  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if(randomQuote.citation){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);