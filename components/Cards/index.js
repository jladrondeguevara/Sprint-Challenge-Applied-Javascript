// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)
    for (let article in response.data.articles)
    {
        // console.log(response.data.articles[article]);
        response.data.articles[article].forEach(e => {
            cards.appendChild(cardMaker(e));
        });
    }
})

const cardMaker = (article) => {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')


    headline.textContent = article.headline;

    card.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')

    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imageContainer);
    imageContainer.appendChild(image);
    authorDiv.appendChild(authorName);

    

    return card;
}

