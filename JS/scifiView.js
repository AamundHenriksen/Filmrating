"use strict"

function scifiView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('homepage')">Homepage</span>

    <h1>Scifi</h1>
    <hr>

    <div>${selectedScifiMovie()}</div>
    
    <ul>
        ${allScifiMovies()}
    </ul>
    `
}

function allScifiMovies() {
    const scifiMovies = model.movies.filter(function(obj) { return obj.genre === "scifi" && obj.isSeen === false })
    let html = ""

    for (let i = 0; i < scifiMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${scifiMovies[i].poster}" onclick="selectedMovie(${scifiMovies[i].id})">
            <span>Rating: ${scifiMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}

function selectedScifiMovie() {
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