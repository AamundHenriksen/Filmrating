"use strict"

const model = {
    // App
    currentPage: "homepage",
    selectedMovie: "",

    // Inputs

    // Data
    movies: [
        {
            id: 1,
            isFavorite: true,
            isSeen: false,
            title: "Star Wars: Episode IV - A New Hope",
            genre: "scifi",
            rating: 9.2,
            poster: "images/a-new-hope.jpg",
            backgroundImg: "images/a-new-hope-background.jpg",
            plot: `
                Princess Leia gets abducted by the insidious Darth Vader.
                Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to
                save the galaxy from the violent Galactic Empire.
                `
        },

        {
            id: 2,
            isFavorite: false,
            isSeen: true,
            title: "Venom",
            genre: "scifi",
            rating: 9,
            poster: "images/venom.jpg",
            backgroundImg: "images/venom-background.jpg",
            plot: `
                While trying to take down Carlton, the CEO of Life Foundation, Eddie,
                a journalist, investigates experiments of human trials. Unwittingly, he
                gets merged with a symbiotic alien with lethal abilities.
                `
        },

        {
            id: 3,
            isFavorite: false,
            isSeen: false,
            title: "Avatar: The Way of Water",
            genre: "scifi",
            rating: 8.8,
            poster: "images/avatar.jpg",
            backgroundImg: "images/avatar-background.jpg",
            plot: `
                Jake Sully and Ney'tiri have formed a family and are
                doing everything to stay together. However, they must leave their
                home and explore the regions of Pandora. When an ancient threat
                resurfaces, Jake must fight a difficult war against the humans.
                `
        },
    ],
}