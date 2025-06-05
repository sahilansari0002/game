export const levelCompleteQuotes = [
  {
    quote: "Knowledge is power, and you're getting stronger!",
    author: "Quiz Odyssey"
  },
  {
    quote: "Every question answered is a step toward wisdom.",
    author: "Ancient Proverb"
  },
  {
    quote: "Success is not final, learning is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The more you learn, the more you realize how much you don't know.",
    author: "Albert Einstein"
  },
  {
    quote: "Your mind is like a parachute - it only works when it's open.",
    author: "Frank Zappa"
  }
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * levelCompleteQuotes.length);
  return levelCompleteQuotes[randomIndex];
};