"use strict"

function actionView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('Homepage')">Homepage</span>

    <h1>Action</h1>
    <hr>

    <div>${selectedMovie()}</div>
    
    <ul>
        ${allActionMovies()}
    </ul>
    `
}

function allActionMovies() {
    const actionMovies = model.movies.filter(function(obj) { return obj.genre === "Action" && obj.isSeen === false })
    let html = ""

    for (let i = 0; i < actionMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${actionMovies[i].poster}" onclick="selectMovie(${actionMovies[i].id})">
            <span>Rating: ${actionMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}