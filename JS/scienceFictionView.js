"use strict"

function scienceFictionView() {
    app.innerHTML = `
    <h1>Science Fiction</h1>
    <hr>

    <ul>
        ${scienceFictionMovies()}
    </ul>
    `
}

function scienceFictionMovies() {
    const movie = model.movies.filter(function(obj) { return obj.genre === "Science Fiction" })

    let html = ""
    for (let i = 0; i < movie.length; i++) {
        html += `
        <li>
            <img src="${movie[i].poster}" onclick="readPlot(${i})">
            <span>${movie[i].rating}</span>
            <div class="plot" style="display:none">${movie[i].plot}</div>
        </li>
        `
    }

    return html
}

function readPlot(index) {
    const plot = document.getElementsByClassName("plot")[index]

    if (plot.style.display === "block") {
        return plot.style.display = "none"
    }

    plot.style.display = "block"
}