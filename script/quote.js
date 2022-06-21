const quotes = [
    {
        quote: "fuck you",
        author: "Soohwan"
    },
    {
        quote: "kill yourself",
        author: "Soohwan"
    },
    {
        quote: "fuck off",
        author: "Soohwan"
    }
];

const quote = document.querySelector("#quote > span:first-child");
const author = document.querySelector("#quote > span:last-child");

const quoteOfDay = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = quoteOfDay.quote;
author.innerText = quoteOfDay.author;