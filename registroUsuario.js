const registroUsuario= ()=>{
    const vistaR=
    `<div class="container">
        <div class="row">
            <div class="col-6">
                <h2 style="text-align: center;">Formulario de Registro</h2>
                <form class="mt-3 mb-3" action="">
                    <label for="documento" class="form-label"> Ingresa numero de documento</label>
                    <input type="number" class="form-control" id="documento">
                </form>
                <form class="mt-3 mb-3" action=" ">
                    <label for="Nombres" class="form-label"> Ingresa Nombres</label>
                    <input type="text" class="form-control" id="Nombres">
                </form>
                <form class="mt-3 mb-3" action=" ">
                    <label for="Apellidos" class="form-label"> Ingresa Apellidos</label>
                    <input type="text" class="form-control" id="Apellidos">
                </form>
                <form class="mt-3 mb-3" action=" ">
                    <label for="telefono" class="form-label"> Ingresa número de telefono.</label>
                    <input type="text" class="form-control" id="telefono">
                </form>
                <form class="mt-3 mb-3" action="  ">
                    <label for="correo" class="form-label"> Correo electrónico</label>
                    <input type="email" class="form-control" id="correo" aria-describedby="ayuda-correo">
                    <div id="ayuda-correo"class="form-text"> te enviaremos un mensaje de confirmación</div>
                </form>
                <form class="mt-3 mb-3" action="">
                    <label for="edad" class="form-label"> Ingresa edad</label>
                    <input type="number" class="form-control" id="edad">
                </form>
                <p>Genero:</p>
                <div class="form-check">
                    <input type="radio" name="mi-radio-button" class="form-check-input" id="masculino">
                    <label for="masculino" class="form-check-label">Masculino</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="mi-radio-button" class="form-check-input" id="femenino">
                    <label for="femenino" class="form-check-label">Femenino</label>
                </div>
                <form class="mt-3 mb-3" action="">
                    <label for="fechaRegistro" class="form-label"> Ingrese fecha de Registro</label>
                    <input type="date" class="form-control" id="fecha de registro">
                </form>
                <form class="mt-3 mb-3" action="">
                    <label for="Contraseña" class="form-label"> Ingrese Contraseña</label>
                    <input type="password" class="form-control" id="contraseña">
                </form>
                <br>
                <button type="button" class="btn btn-outline-dark col-12">Enviar</button>
            </div>
        </div>
        <br>
    </div>`
    return vistaR
}

export {registroUsuario}