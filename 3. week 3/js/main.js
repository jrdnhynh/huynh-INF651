// references to elements from html
const addMovieBtn = document.getElementById('add-movie-btn');
const movieInput = document.getElementById('movie-name');
const movieList = document.getElementById('movie-list');

// array to store list of movies
let watchlist = [];

// FUNCTIONS GROUP

// function clears list and rebuild
function displayMovies () {
    // clear list
    movieList.innerHTML = '';

    // loop through each movie in watchlist array
    watchlist.forEach((movieTitle, index) => {
        // list item element
        const movieItem = document.createElement('li');
        movieItem.className = 'collection-item';

        // set html of list item
        movieItem.innerHTML = `
            <span class="movie-title">${movieTitle}</span>
            <i class="material-icons remove-btn" data-index="${index}">delete_forever</i>
        `;

        // add movie item into list
        movieList.appendChild(movieItem);
    });
}

// add new movie to watchlist array & update display movies
function addMovie() {
// remove extra whitespace from title
const movieTitle = movieInput.value.trim();

// check if the input is not empty
if (movieTitle) {
    // add new movie to watchlist array
    watchlist.push(movieTitle);
    
    // clear input field for the next entry
    movieInput.value = '';

    // update movie list displayed
    displayMovies();
} else {
    // if user tries to add empty title
    alert('Please enter a movie title.');
}
}

// function to remove movie at its index
function removeMovie(movieIndex) {
// remove 1 element at the specified index from array
watchlist.splice(movieIndex, 1);

// update the movie list displayed
displayMovies();
}

// END OF FUNCTIONS GROUP

// EVENT LISTENERS GROUP

// click event listener for add movie button
addMovieBtn.addEventListener('click', addMovie);

// "enter" key event lister for adding movie with enter
movieInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    addMovie();
}
});

// check if remove button was clicked, then remove movie
movieList.addEventListener('click', function(event) {
// check if the clicked element is a remove button
if (event.target.classList.contains('remove-btn')) {
    // get the index from the 'data-index'
    const movieIndex = parseInt(event.target.getAttribute('data-index'));
    // call the remove function with the correct index
    removeMovie(movieIndex);
}
});

// initial render
displayMovies();