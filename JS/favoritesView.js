"use strict"

function favoritesView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('Homepage')">Homepage</span>

    <h1>Favorites</h1>
    <hr>

    <div>${selectedMovie()}</div>
    
    <ul>
        ${allFavoriteMovies()}
    </ul>
    `
}

function allFavoriteMovies() {
    const favoriteMovies = model.movies.filter(function(obj) { return obj.isFavorite === true })
    let html = ""

    for (let i = 0; i < favoriteMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${favoriteMovies[i].poster}" onclick="selectMovie(${favoriteMovies[i].id})">
            <span>Rating: ${favoriteMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}