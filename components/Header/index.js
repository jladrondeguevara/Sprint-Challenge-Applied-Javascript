// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div')
    header.classList.add('header')
    const date = document.createElement('span')
    date.classList.add('date')
    const title = document.createElement('h1')
    title.textContent = 'Lamba Times'
    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent =  '98°'

    //structure 
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    return header;
}


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())