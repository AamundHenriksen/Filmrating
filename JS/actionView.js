"use strict"

function actionView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('homepage')">Homepage</span>

    <h1>Action</h1>
    <hr>

    <div>${selectedActionMovie()}</div>
    
    <ul>
        ${allActionMovies()}
    </ul>
    `
}

function allActionMovies() {
    const actionMovies = model.movies.filter(function(obj) { return obj.genre === "action" && obj.isSeen === false })
    let html = ""

    for (let i = 0; i < actionMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${actionMovies[i].poster}" onclick="selectedMovie(${actionMovies[i].id})">
            <span>Rating: ${actionMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}

function selectedActionMovie() {
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