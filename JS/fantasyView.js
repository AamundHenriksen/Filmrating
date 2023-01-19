"use strict"

function fantasyView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('Homepage')">Homepage</span>

    <h1>Fantasy</h1>
    <hr>

    <div>${selectedMovie()}</div>
    
    <ul>
        ${allFantasyMovies()}
    </ul>
    `
}

function allFantasyMovies() {
    const fantasyMovies = model.movies.filter(function(obj) { return obj.genre === "Fantasy" && obj.isSeen === false })
    let html = ""

    for (let i = 0; i < fantasyMovies.length; i++) {
        html += `
        <li>
            <img class="poster" src="${fantasyMovies[i].poster}" onclick="selectMovie(${fantasyMovies[i].id})">
            <span>Rating: ${fantasyMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}