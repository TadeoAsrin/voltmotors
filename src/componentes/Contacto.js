import React from 'react';
import logo from './logoo.png';



const Contacto = () => {
    return (
        <div className='contactogeneral'>
            <div className='contactoespecifico'>
                <div className='contacto'>
                    <a href='http://www.voltmotors.com.ar/'> <img className='imagenlogo' src={logo} alt='logoimagen' /></a>
                </div>
                <div className='contacto1'>
                    <p>Dirección: Córdoba  Avenida La Voz Del Interior Nº1923</p>
                    <p>Teléfono: 0336 435-6743</p>
                    <p>Oficina Nº 5</p>
                </div>

                <div className='contacto'>
                    <i class="fab fa-twitter-square fa-3x"></i>
                    <i class="fab fa-instagram fa-3x"></i>
                    <i class="fab fa-linkedin fa-3x"></i>
                </div>
            </div>
        </div>
    );
}

export default Contacto;