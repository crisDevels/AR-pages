import React from 'react';

import batery from '../image/bateria.png';
import arrowL from '../image/arrowLeft.png';
import arrowR from '../image/arrowRigth.png';
import capa from '../image/capas.png';
import lock from '../image/lock.png';
// import logo from "../image/logoAR.png";
import menu from '../image/menu.png';
import iphone from '../image/menuIphone.png';
import next from '../image/next.png';
import option from '../image/option.png';
import share from '../image/share.png';
import wifi from '../image/wifi.png';


class tuPageAR extends React.Component {
    render() {
        return <div>
            <div>
                <img src={batery} width="5px" alt="icono de bateria" />
                <img src={wifi} width="5px" alt="icono de wifi" />
            </div>
            <div>
                <img src={lock} width="5px" alt="icono de seguridad" />
                <img src={next} width="5px" alt="icono de recargar" />
            </div>
            <div>
                    <div>
                        <h1>iobbu</h1>
                        <img src={menu} width="10px" alt="icono del menu" />
                    </div>
                    <div>
                        <h2>Sneaker Estilo casual</h2>
                    </div>
                    <div>
                        <img src={arrowL} width="5px" alt="icono antes" />
                        <img src={arrowR} width="5px" alt="icono despues" />
                    </div>
                    <div>
                       <div></div>
                       <div></div>
                       <div></div>
                    </div>
                    <div>
                        <p>$</p>
                        <p>44.900</p>
                    </div>
                    <div>
                        <p>Livianos, Ergonómicos, Adaptables </p>
                    </div>
                    <div>
                        <input type="button" value="Comprar"></input>
                        <input type="button" value="VerAR"></input>
                    </div>
                </div>
                <div>
                    <img src={arrowL} width="5px" alt="icono anterior" />
                    <img src={arrowR} width="5px" alt="icono siguiente" />
                    <img src={share} width="5px" alt="icono de compartir" />
                    <img src={option} width="5px" alt="icono de options" />
                    <img src={capa} width="5px" alt="icono de capas" />
                </div>
                <div>
                    <img src={iphone} width="" alt="icono menu de iphone" />
                </div>
        </div>           
    }
}

export default tuPageAR;