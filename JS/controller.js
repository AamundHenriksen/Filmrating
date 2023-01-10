updateView()
function updateView() {
    model.currentPage === "main" ? allMovies()

    : model.currentPage === "sci-fi" ? sciFiMovies()

    : model.currentPage === "action" ? actionMovies()

    : console.log("ERROR: Page doesn't exist")
}

function showMovieGenre(genre) {
    model.currentPage = genre
    updateView()
}

function moviePlot(movie_id) {
    console.log(genre.sci_fi[movie_id].plot)
}

function addToSeenMovies(movie_id) {
    movies.seen.push(genre.sci_fi[movie_id])
    document.getElementsByClassName("movies")[movie_id].style.display = "none"
}