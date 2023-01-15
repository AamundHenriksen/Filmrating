"use strict"

function addToSeenMovies(id) {
    const objIndex = model.movies.findIndex(function(obj) { return obj.id === id })
    const seenMovies = model.seenMovies
    const movies = model.movies

    seenMovies.push(movies[objIndex])
    movies.splice(objIndex, 1)
    model.selectedMovie = ""
    updateView()
}

function addToFavoriteMovies(id) {
    const objIndex = model.movies.findIndex(function(obj) { return obj.id === id })
    const favoriteMovies = model.favoriteMovies
    const movies = model.movies

    if (movies[objIndex].isFavorite) {
        
        removeFromFavoriteMovies(id)
        movies[objIndex].isFavorite = false
        return updateView()
    }

    favoriteMovies.push(movies[objIndex])
    movies[objIndex].isFavorite = true
    updateView()
}

function removeFromFavoriteMovies(id) {
    const objIndex = model.favoriteMovies.findIndex(function(obj) { return obj.id === id })
    const favoriteMovies = model.favoriteMovies

    favoriteMovies.splice(objIndex, 1)
}

function selectedMovie(id) {
    const objIndex = model.movies.findIndex(function(obj) { return obj.id === id })
    model.selectedMovie = model.movies[objIndex]
    updateView()
}