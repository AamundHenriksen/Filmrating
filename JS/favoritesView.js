"use strict"

function favoritesView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('homepage')">Homepage</span>

    <h1>Favorites</h1>
    <hr>

    <div>${selectedFavoriteMovie()}</div>
    
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
            <img class="poster" src="${favoriteMovies[i].poster}" onclick="selectedMovie(${favoriteMovies[i].id})">
            <span>Rating: ${favoriteMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}

function selectedFavoriteMovie() {
    if (model.selectedMovie === "") { return "" }

    return `
    <img class="background-img" src="${model.selectedMovie.backgroundImg}">
    <h1>${model.selectedMovie.title}</h1>
    <p>${model.selectedMovie.plot}</p>
    <span>Rating: ${model.selectedMovie.rating}/10</span>
    <button onclick="addToSeenMovies(${model.selectedMovie.id})">${seenBtnStatus(model.selectedMovie.isSeen)}</button>
    <button onclick="addToFavoriteMovies(${model.selectedMovie.id})">${favoriteBtnStatus(model.selectedMovie.isFavorite)}</button>
    `
}