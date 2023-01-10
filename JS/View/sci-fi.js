function sciFiMovies() {
    let html = ""

    html += `
    <h2>Sci-Fi</h2>
    
    <ul>
    `

    for (let i = 0; i < genre.sci_fi.length; i++) {
        html += `
        <div class="movies">
        <li>
            <img src="${genre.sci_fi[i].poster}" onclick="moviePlot(${genre.sci_fi[i].id})">
            <span onclick="addToSeenMovies(${genre.sci_fi[i].id})">Seen</span>
        </li>
        </div>
            `
    }

    html += `
    </ul>
    `
    app.innerHTML = html
}
