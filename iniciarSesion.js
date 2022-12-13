const Iniciar= ()=>{
    const vistaI=
    `<div class="container">
        <div class="row">
            <div class="col-6">
                <h2 style="text-align: center;">Inicio de Sesión</h2>
                <form class="mt-3 mb-3" action="  ">
                    <label for="correo" class="form-label"> Correo electrónico</label>
                    <input type="text" class="form-control" id="correo" aria-describedby="ayuda-correo">
                    <div id="ayuda-correo"class="form-text"> te enviaremos un mensaje de confirmación</div>
                </form>
                <form class="mt-3 mb-3" action="">
                    <label for="Contraseña" class="form-label"> Ingrese Contraseña</label>
                    <input type="password" class="form-control" id="contraseña">
                </form>
                <br>
                <button type="button" class="btn btn-outline-dark col-12">Ingresar</button>
            </div>
        </div>
    </div>
    <br>`
    return vistaI
}

export {Iniciar}