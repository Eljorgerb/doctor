console.log("hello")

import {App} from "./routes/Apps.js"

window.addEventListener("load",App)
window.addEventListener('hashchange',App)