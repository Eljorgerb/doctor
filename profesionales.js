const Profesionales=()=>{
    const vistaProf=
    `
    <div class="container">
        <div class="row justify-content-evenly align-items-center">
            <div class="col-4">
                <div class="card">
                    <img src="../img/fondos/Doctores/Odontologo.jpg" alt="">
                    <h1>Odontología</h1>
                    <h3>Felipe Ballesteros</h3>
                    <p>Profesional de la Universidad Antonio Nariño, con posgrado en ortodoncia de la Universidad Javeriana.
                        Cuenta con mas de 10 años de experiencia en procedimientos quirurgico-odontologicos, atención general
                        en salud dental y tratamientos de ortodoncia</p>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="carousel" id="miCarousel" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <img class="img-fluid" src="../img/fondos/Doctores/imagenesDianosticas.jpg" alt="">
                                <h1>Imagenes Diagnósticas</h1>
                                <h3>Nuestros Equipos Especializados</h3>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img class="img-fluid" src="../img/fondos/Doctores/Doctor1.jpg" alt="">
                                <h1>Cardiologia</h1>
                                <h3>Ricardo Valbuena</h3>
                                <p>Profesional de la Universidad de Antioquia, con estudios de posgrado de la Universidad Nacional.
                                    Mas de 8 años de experiencia en atención de cardiopatías, enfermedades cronicas coronarias y tratamientos
                                    de rehabilitación.</p>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img class="img-fluid" src="../img/fondos/Doctores/Doctor2.jpg" alt="">
                                <h1>Dermatoloía</h1>
                                <h3>Emilio Rincon</h3>
                                <p>Profesional en medicina de la Universidad de los Andes, con estudios de posgrado en dermatología de la Universidad
                                    de Pensilvania. Reconocimiento Internacional por su Contribución al tratamiento de enfermedades cutaneas.</p>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img class="img-fluid" src="../img/fondos/Doctores/Doctor3.jpg" alt="">
                                <h1>Medicina General</h1>
                                <h3>Luis Alfonso Quiñonez</h3>
                                <p>Profesional en medicina de la Universidad Javeriana, con mas de 15 años de experiencia en el sector salud
                                    en atención de patologías generales.</p>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#miCarousel" data-bs-slide="prev" style="background:rgb(214, 209, 209) ;">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#miCarousel" data-bs-slide="next" style="background:rgb(214, 209, 209) ;">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
   return vistaProf
}
export {Profesionales}