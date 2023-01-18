"use strict"

function homepageView() {
    app.innerHTML = `
    <button onclick="changeCurrentPageTo('scifi')">Scifi</button>
    <button onclick="changeCurrentPageTo('action')">Action</button>
    <button onclick="changeCurrentPageTo('fantasy')">Fantasy</button>
    <hr>

    <button onclick="changeCurrentPageTo('favorites')">Favorites</button>
    <button onclick="changeCurrentPageTo('seen')">Seen</button>
    `
}