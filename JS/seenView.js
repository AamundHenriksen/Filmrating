"use strict"

function seenView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('homepage')">Homepage</span>
    <h1>Seen</h1>
    <hr>

    <div>${selectedSeenMovie()}</div>

    <ul>
        ${allSeenMovies()}
    </ul>
    `
}

function allSeenMovies() {
    const seenMovies = model.movies.filter(function(obj) { return obj.isSeen === true })
    let html = ""

    for (let i = 0; i < seenMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${seenMovies[i].poster}" onclick="selectedMovie(${seenMovies[i].id})">
            <span>Rating: ${seenMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}

function selectedSeenMovie() {
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