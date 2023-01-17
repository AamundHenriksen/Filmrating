"use strict"

function homepageView() {
    app.innerHTML = `
    <button onclick="changeCurrentPageTo('scifi')">Scifi</button>
    <hr>

    <button onclick="changeCurrentPageTo('favorites')">Favorites</button>
    <button onclick="changeCurrentPageTo('seen')">Seen</button>
    `
}