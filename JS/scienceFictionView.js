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
    const scifiMovies = model.movies.filter(function(obj) { return obj.genre === "Science Fiction" })

    let html = ""
    for (let i = 0; i < scifiMovies.length; i++) {
        html += `
        <li>
            <img src="${scifiMovies[i].poster}" onclick="readPlot(${i})">
            <span>${scifiMovies[i].rating}</span>
            <div class="plot" style="display:none">${scifiMovies[i].plot}</div>
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