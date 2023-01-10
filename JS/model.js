const model = {
    app: document.getElementById("app"),

    currentPage: "main"
}

const movies = {
    seen: []
}

const genre = {
    sci_fi: [
        {
            id: 0,
            movie: "Star Wars",
            poster: "images/a-new-hope.jpg",
            plot: `
                Princess Leia gets abducted by the insidious Darth Vader.
                Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to
                save the galaxy from the violent Galactic Empire.
                `
        },

        {
            id: 1,
            movie: "Venom",
            poster: "images/venom.jpg",
            plot: `
                While trying to take down Carlton, the CEO of Life Foundation, Eddie,
                a journalist, investigates experiments of human trials. Unwittingly, he
                gets merged with a symbiotic alien with lethal abilities.
                `
        },

        {
            id: 2,
            movie: "Avatar: The Way of Water",
            poster: "images/avatar.jpg",
            plot: `
                Jake Sully and Ney'tiri have formed a family and are
                doing everything to stay together. However, they must leave their
                home and explore the regions of Pandora. When an ancient threat
                resurfaces, Jake must fight a difficult war against the humans.
                `
        }
    ],
}