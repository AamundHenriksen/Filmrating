"use strict"

function fantasyView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('homepage')">Homepage</span>

    <h1>Fantasy</h1>
    <hr>

    <div>${selectedFantasyMovie()}</div>
    
    <ul>
        ${allFantasyMovies()}
    </ul>
    `
}

function allFantasyMovies() {
    const fantasyMovies = model.movies.filter(function(obj) { return obj.genre === "fantasy" && obj.isSeen === false })
    let html = ""

    for (let i = 0; i < fantasyMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${fantasyMovies[i].poster}" onclick="selectedMovie(${fantasyMovies[i].id})">
            <span>Rating: ${fantasyMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}

function selectedFantasyMovie() {
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