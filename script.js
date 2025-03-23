let btnNewQuote = document.getElementById('btnNewQuote');
let textQuote = document.getElementById('textQuote');
let textAuthor =  document.getElementById('textAuthor');
const url = "https://api.quotable.io/quotes/random";

let newQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        textQuote.textContent = `${item[0].content}`;
        textAuthor.textContent = `${item[0].author}`;
    })
}

btnNewQuote.addEventListener('click', newQuote);
