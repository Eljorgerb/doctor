const Agendar= ()=>{
    const vistaA=
    `<div class="container">
        <div class="row">
            <div class="col-6">
                <h1>Agende su Cita</h1>
                <div class="row mt-3 mt-3 mb-3">
                    <select name="doctor" class="mt-3 mb-3" id="form-select">
                        <option value="medicoGeneral">Medicina general - <p class="profesional">Luis Alfonso Quiñonez</p> </option>
                        <option value="Odontologo">Odontologia - <p class="profesional">Felipe Ballesteros</p> </option>
                        <option value="Cardiologo">Cardiologia - <p class="profesional">Ricardo Valbuena</p></option>
                        <option value="Dermatologo">Dermatologia - <p class="profesional">Emilio Rincon </p></option>
                        <option value="imgDiagnosticas">Imagenes Diagnósticas</option>
                    </select>
                </div>
                <div>
                    <form class="mt-3 mb-3" action="">
                        <label for="fecha-cita" class="form-label"> Seleccione la fecha de su cita</label>
                        <input type="date" class="form-control" id="fecha-cita">
                    </form>
                </div>
                <br>
                <br>
                <button type="button" class="btn btn-outline-dark col-12">Agendar</button>
            </div>
        </div>
    </div>
    <br>`
    return vistaA
}

export {Agendar}