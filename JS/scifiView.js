"use strict"

function scifiView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('Homepage')">Homepage</span>

    <h1>Scifi</h1>
    <hr>

    <div>${selectedMovie()}</div>
    
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
            <img class="poster" src="${scifiMovies[i].poster}" onclick="selectMovie(${scifiMovies[i].id})">
            <span>Rating: ${scifiMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}