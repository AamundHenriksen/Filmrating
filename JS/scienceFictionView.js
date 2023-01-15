"use strict"

function scienceFictionView() {
    app.innerHTML = `
    <h1>Science Fiction</h1>
    <hr>

    <div>${currentMovie()}</div>
    
    <ul>
        ${scienceFictionMovies()}
    </ul>
    `
}

function scienceFictionMovies() {
    const scifiMovies = model.movies.filter(function(obj) { return obj.genre === "Science Fiction" })

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

function currentMovie() {
    if (model.selectedMovie === "") { return "" }

    return `
    <img class="background-img" src="${model.selectedMovie.backgroundImg}">
    <h1>${model.selectedMovie.title}</h1>
    <p>${model.selectedMovie.plot}</p>
    <span>Rating: ${model.selectedMovie.rating}/10</span>
    <button onclick="addToSeenMovies(${model.selectedMovie.id})">Seen</button>
    <button onclick="addToFavoriteMovies(${model.selectedMovie.id})">${buttonStatus(model.selectedMovie.isFavorite)}</button>
    `
}

function buttonStatus(isFavorite) {
    if (isFavorite) {
        return "Unfavorite"
    }

    return "Favorite"
}