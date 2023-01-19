"use strict"

function seenView() {
    app.innerHTML = `
    <span onclick="changeCurrentPageTo('Homepage')">Homepage</span>
    <h1>Seen</h1>
    <hr>

    <div>${selectedMovie()}</div>

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
            <img class="poster" src="${seenMovies[i].poster}" onclick="selectMovie(${seenMovies[i].id})">
            <span>Rating: ${seenMovies[i].rating}/10</span>
        </li>
        `
    }

    return html
}