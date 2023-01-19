"use strict"

function homepageView() {
    app.innerHTML = `
    <button onclick="changeCurrentPageTo('Sci-Fi')">Sci-Fi</button>
    <button onclick="changeCurrentPageTo('Action')">Action</button>
    <button onclick="changeCurrentPageTo('Fantasy')">Fantasy</button>
    <button onclick="changeCurrentPageTo('Seen')">Seen</button>
    <button onclick="changeCurrentPageTo('Favorites')">Favorites</button>
    <hr>

    <div>${selectedMovie()}</div>

    <div>
        ${renderMovies("Sci-Fi")}
    </div>

    <div>
        ${renderMovies("Action")}
    </div>

    <div>
        ${renderMovies("Fantasy")}
    </div>
    `
}

function renderMovies(genre) {
    const movies = model.movies.filter(function(obj) { return obj.genre === genre && obj.isSeen === false })

    if (movies.length === 0) { return "" }

    let listItems = ""
    for (let i = 0; i < movies.length; i++) {
        listItems += `
        <li>
            <img class="poster" src="${movies[i].poster}" onclick="selectMovie(${movies[i].id})">
            <span>Rating: ${movies[i].rating}/10</span>
        </li>
        `
    }

    return `
    <h2>${genre}</h2>
    <ul class="movies-layout">
        ${listItems}
    </ul>
    `
}