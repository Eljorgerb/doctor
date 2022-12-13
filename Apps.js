import { Nav } from "../Layouts/Nav.js"
import { Footer } from "../Layouts/Footer.js"
// import { Principal } from "../pages.js/principal.js"
import { Error404 } from "../pages.js/error404.js"
import resolverRuta from "../helpers/resolverRuta.js"
import getHash from "../helpers/getHash.js"
import { Principal } from "../pages.js/principal.js"
import { Agendar } from "../pages.js/agendarCita.js"
import { Iniciar } from "../pages.js/iniciarSesion.js"
import { Profesionales } from "../pages.js/profesionales.js"
import { registroUsuario } from "../pages.js/registroUsuario.js"
const rutas={
    "/":Principal,
    "/registro":registroUsuario,
    "/agendarCita":Agendar,
    "/iniciarSesion":Iniciar,
    "/profesionales":Profesionales
}
const App= async ()=>{
    const header=document.querySelector("header")
    const main=document.querySelector("main")
    const footer=document.querySelector("footer")
    header.innerHTML= await Nav()
    footer.innerHTML= await Footer()

    let ruta= await resolverRuta(getHash())
    let pagina= (rutas[ruta])? rutas[ruta] :Error404
    main.innerHTML= await pagina()
}

export {App}