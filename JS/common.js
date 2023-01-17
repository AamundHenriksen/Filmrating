"use strict"

function changeCurrentPageTo(page) {
    model.currentPage = page
    model.selectedMovie = ""
    updateView()
}

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

function selectedMovie(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })
    model.selectedMovie = model.movies[movieIdIndex]
    updateView()
}

function addToSeenMovies(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })

    if (model.currentPage === "scifi") {
        model.movies[movieIdIndex].isSeen = true
        model.selectedMovie = ""
        updateView()

    } else if (model.currentPage === "favorites") {
        if (model.movies[movieIdIndex].isSeen) {
            model.movies[movieIdIndex].isSeen = false
            return updateView()
        }

        model.movies[movieIdIndex].isSeen = true
        updateView()
        
    } else if (model.currentPage === "seen") {
        model.movies[movieIdIndex].isSeen = false
        model.selectedMovie = ""
        updateView()
    }
}

function addToFavoriteMovies(id) {
    const movieIdIndex = model.movies.findIndex(function(obj) { return obj.id === id })

    if (model.currentPage === "scifi") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()

    }  else if (model.currentPage === "favorites") {
        model.movies[movieIdIndex].isFavorite = false
        model.selectedMovie = ""
        updateView()

    } else if (model.currentPage === "seen") {
        if (model.movies[movieIdIndex].isFavorite) {
            model.movies[movieIdIndex].isFavorite = false
            return updateView()
        }

        model.movies[movieIdIndex].isFavorite = true
        updateView()
    }
}