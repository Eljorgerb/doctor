const Footer= ()=>{
    const vistaF=
    `<div class="container">
        <div class="row justify-content-evenly align-items-center" id="rowFooter">
            <div class="col-4">
                <p>hola</p>
            </div>
            <div class="col-4" id="columnRedes">
                <div class="row" id="rowRedes1">
                    <h2 id="tituloFooter">Siguenos en Redes Sociales:</h2>
                </div>
                <div class="row" id="rowRedes2">
                    <div class="col-5" id="imgInstagram">
                        <img class="img-fluid float-end" src="../img/fondos/Redes/Instagram/Instagram-favicon-32x32.png" alt="">
                    </div>
                    <div class="col-4" id="Instragram">
                        <p id="textInstagram">
                            @IPSAMIGA
                        </p>
                    </div>
                    <div class="col-3">
                    </div>
                </div>
                <div class="row" id="rowRedes3">
                    <div class="col-5" id="imgFacebook">
                        <img class="img-fluid float-end" src="../img/fondos/Redes/facebook/facebook-favicon-32x32.png" alt="">
                    </div>
                    <div class="col-4" id="Facebook">
                        <p id="textFacebook">
                            @IAMIGA
                        </p>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="row" id="rowRedes4">
                    <div class="col-5" id="imgTwitter">
                        <img class="img-fluid float-end" src="../img/fondos/Redes/twitter/tiwtter-32x32.png" alt="">
                    </div>
                        
                    <div class="col-4" id="Twitter">
                        <p id="textTwitter">
                            @IPSAMIGA_OFICIAL
                        </p>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="row" id="rowRedes5">
                    <div class="col-5" id="imgWhatsapp">
                        <img class="img-fluid float-end" src="../img/fondos/Redes/whatsapp/whatsapp-favicon-32x32.png" alt="">
                    </div>
                    <div class="col-4" id="textWhatsapp">
                        +57 300 568 96 99
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
            <div class="col-4">
                <br>
                <br>
                <div class="row">
                    <p class="contactanos">Calle 57 No. 9 - 64</p>
                </div>
                <div class="row" id="">
                    <p class="contactanos">PBX: 571 568 20 00</p>
                </div>
                <div class="row" id="">
                    <p class="contactanos">atencionalcliente@ipsamiga.com</p>
                </div>
            </div>
        </div>
    </div>`
    return vistaF
}

export {Footer}