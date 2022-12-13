const Nav= ()=>{
    const vista=
    `<div class="row" id="rowHeader">
        </div class="col-3">
            <div class="row">   
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light " style="background-color: rgb(100, 43, 235);;">
                        <div class="col-1">
                            <div class="text-center">
                                <img src="../img/iconos/logoHospital.ico" class="rounded" alt="...">
                                </div>
                        </div>
                        <div class="col-3">
                            <div class="row" id="titulo">
                                <a href="#" class="navbar-brand" style="color:azure; font-size: xx-large; ">IPSAMIGA</a>
                            </div>
                            <div class="row" id="slogan">
                                <p>Una IPS de la gente y para la gente</p>
                            </div>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-6">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" 
                                aria-controls="menu" aria-expanded="false" aria-label="Mostrar / ocultar menu">
                                <span class="navbar-toogler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="menu">
                                <ul class="navbar-nav me-auto mb-2">
                                    <li class="nav-item"><a href="/main.html" class="nav-link" style="color: azure; text-align: left;">Inicio</a></li>
                                    <li class="nav-item"><a href="#/agendarCita" class="nav-link" style="color: azure; text-align: left;">Agendar Cita</a></li>
                                    <li class="nav-item"><a href="#/iniciarSesion" class="nav-link" style="color: azure; text-align: left;">Iniciar Sesión</a></li>
                                    <li class="nav-item"><a href="#/registro" class="nav-link" style="color: azure; text-align: left;">Registrarse</a></li>
                                    <li class="nav-item"><a href="#/profesionales" class="nav-link" style="color: azure; text-align: left;">Nuestros Profesionales</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr>
                </div>                  
            </div>
        </div>
    </div>`
    return vista
}

export {Nav}