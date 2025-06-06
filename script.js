const apiUrl = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("next-btn")

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getQuote(apiUrl) 
   
