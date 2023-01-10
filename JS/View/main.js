function allMovies() {
    let html = ""

    html += `
    <button onclick="showMovieGenre('sci-fi')">Sci-Fi</button>
    <button onclick="showMovieGenre('action')">Action</button>
    `
    app.innerHTML = html
}