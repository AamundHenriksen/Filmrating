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
            isFavorite: false,
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
            isSeen: false,
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

        {
            id: 4,
            isFavorite: false,
            isSeen: false,
            title: "Uncharted",
            genre: "action",
            rating: 6.3,
            poster: "images/uncharted.jpg",
            backgroundImg: "images/uncharted-background.jpg",
            plot: `
                Young and street-smart Nathan Drake tries to find a hidden treasure
                with his partner Victor "Sully" Sullivan. The duo embark on an action-packed
                adventure as they follow clues to find Nathan's missing brother.
                `
        },

        {
            id: 5,
            isFavorite: false,
            isSeen: false,
            title: "The Wolverine",
            genre: "action",
            rating: 6.7,
            poster: "images/wolverine.jpg",
            backgroundImg: "images/wolverine-background.jpg",
            plot: `
                Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying.
                The situation regresses when Yashida offers to take away 
                his healing abilities, but Logan refuses.
                `
        },

        {
            id: 6,
            isFavorite: false,
            isSeen: false,
            title: "John Wick",
            genre: "action",
            rating: 7.4,
            poster: "images/john-wick.jpg",
            backgroundImg: "images/john-wick-background.jpg",
            plot: `
                John Wick, a retired hitman, is forced to return to his
                old ways after a group of Russian gangsters stealhis car and kill
                a puppy gifted to him by his late wife.
                `
        },

        {
            id: 7,
            isFavorite: false,
            isSeen: false,
            title: "Ghost Rider",
            genre: "fantasy",
            rating: 5.2,
            poster: "images/ghost-rider.jpg",
            backgroundImg: "images/ghost-rider-background.jpg",
            plot: `
                Stunt motorcyclist Johnny Blaze decides to give up his soul to become the Ghost Rider 
                and fight against Blackheart, the son of Mephistopheles, the devil himself.
                `
        },

        {
            id: 8,
            isFavorite: false,
            isSeen: false,
            title: "Harry Potter and the Prisoner of Azkaban",
            genre: "fantasy",
            rating: 7.9,
            poster: "images/harry-potter-3.jpg",
            backgroundImg: "images/harry-potter-3-background.jpg",
            plot: `
                Harry, Ron and Hermoine return to Hogwarts just as they learn about 
                Sirius Black and his plans to kill Harry. However, when Harry runs 
                into him, he learns that the truth is far from reality.
                `
        },

        {
            id: 9,
            isFavorite: false,
            isSeen: false,
            title: "Troll",
            genre: "fantasy",
            rating: 5.8,
            poster: "images/troll.jpg",
            backgroundImg: "images/troll-background.jpg",
            plot: `
            When an ancient troll is awakened in a Norwegian mountain, a ragtag group of
            heroes must come together to try and stop it from wreaking deadly havoc.
                `
        }
    ],
}