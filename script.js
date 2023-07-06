var PreviousQuote = null;

function GenerateQuote() {
  var quotes = {
    "- phantom": "im straight",
    "- hypno": "im gay",
    "- cele": "I DONT FUCKING KNOW IM PLAYING APeX DAWG",
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  while (quote === PreviousQuote) {
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
  }

  PreviousQuote = quote;

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;

  console.log(authors);
}
