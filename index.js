let message = document.querySelector('#message')
const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input').value
    const movie = document.createElement('li')
    const movieTitle = document.createElement('SPAN')
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField = ''
}

const deleteMovie = (event) => {
    message.textContent = `${event.target.parentNode.children[0].textContent} deleted!`
    revealMessage()
    event.target.parentNode.remove()
    
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} is watched`
    } else {
        message.textContent = `${event.target.textContent} Added Back!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() =>
    message.classList.add('hide'), 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)