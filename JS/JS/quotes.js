const quotes = [
  {
    quotes: "Sweat saves blood, blood saves lives, but brains saves both.",
    author: "- Erwin Rommel",
  },
  {
    quotes: "I trust no one, not even myself.",
    author: "- Joseph Stalin",
  },
  {
    quotes:
      "Life is like a riding bicycle. To keep your balance, you must keep moving.",
    author: "- Albert Einstein",
  },
  {
    quotes:
      "You don't need to think that you were abandoned by the world. The world Never took you before.",
    author: "- Erwin Rommel",
  },
  {
    quotes: "One death is a tragedy; one million is a statistic.",
    author: "- Joseph Stalin",
  },
  {
    quotes: "Nothing is impossible. The word itself says I'm possible!",
    author: "- Audrey Hepburn",
  },
  {
    quotes:
      "There are no desperate situations, there are only desperate people.",
    author: "- Heinz Guderian",
  },
  {
    quotes:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "- Maya Angelou",
  },
  {
    quotes: "You are enough just as you are.",
    author: "- Meghan Markle",
  },
  {
    quotes:
      "Do not compare yourself to others. If you do so, you are insulting yourself.",
    author: "- Adolf Hitler",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
