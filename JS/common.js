"use strict"

function favoriteBtnStatus(isFavorite) {
    if (isFavorite) {
        return "Unfavorite"
    }

    return "Favorite"
}

function seenBtnStatus(isSeen) {
    if (isSeen) {
        return "Unseen"
    }

    return "Seen"
}

function selectedMovie() {
    if (model.selectedMovie === "") { return "" }

    return `
    <img class="background-img" src="${model.selectedMovie.backgroundImg}">
    <h1>${model.selectedMovie.title}</h1>
    <p>${model.selectedMovie.plot}</p>
    <span>Rating: ${model.selectedMovie.rating}/10</span>
    <button onclick="addToSeenMovies(${model.selectedMovie.id})">${seenBtnStatus(model.selectedMovie.isSeen)}</button>
    <button onclick="addToFavoriteMovies(${model.selectedMovie.id})">${favoriteBtnStatus(model.selectedMovie.isFavorite)}</button>
    `
}

function changeCurrentPageTo(page) {
    model.currentPage = page
    model.selectedMovie = ""
    updateView()
}

function selectMovie(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })
    model.selectedMovie = model.movies[movieIdIndex]
    updateView()
}

function addToSeenMovies(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })

    if (model.currentPage === "Homepage") {
        model.movies[movieIdIndex].isSeen = true
        model.selectedMovie = ""
        updateView()

    } else if (model.currentPage === "Sci-Fi") {
        model.movies[movieIdIndex].isSeen = true
        model.selectedMovie = ""
        updateView()

    } else if (model.currentPage === "Action") {
        model.movies[movieIdIndex].isSeen = true
        model.selectedMovie = ""
        updateView()
        
    } else if (model.currentPage === "Fantasy") {
        model.movies[movieIdIndex].isSeen = true
        model.selectedMovie = ""
        updateView()
        
    } else if (model.currentPage === "Favorites") {
        if (model.movies[movieIdIndex].isSeen) {
            model.movies[movieIdIndex].isSeen = false
            return updateView()
        }

        model.movies[movieIdIndex].isSeen = true
        updateView()
        
    } else if (model.currentPage === "Seen") {
        model.movies[movieIdIndex].isSeen = false
        model.selectedMovie = ""
        updateView()
    }
}

function addToFavoriteMovies(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })

    if (model.currentPage === "Homepage") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()
    } else if (model.currentPage === "Sci-Fi") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()

    } else if (model.currentPage === "Action") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()

    } else if (model.currentPage === "Fantasy") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()
        
    } else if (model.currentPage === "Favorites") {
        model.movies[movieIdIndex].isFavorite = false
        model.selectedMovie = ""
        updateView()

    } else if (model.currentPage === "Seen") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()
    }
}