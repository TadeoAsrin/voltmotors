import React from 'react';
// import onu from '../onuu.jpg'
import foto from '../compra.png'
const Compra = () => {
    return (
        <div className='comprageneral'>
            <div className='onucompra'>
            <div className='compra'>
                <p className='adquiri'> Adquirí tu unidad 100% online</p>
                <p className='adquiri1'> Conoce nuestro store y precios vigentes</p>
                <p className='botonadquiri'> Encontra tu proximo volt</p>
               
            </div>
            <div className='onuimagen'>
            <img src={foto} alt='foto'/> 
            </div>
            </div>
            <div className='onu'>
                <div className='parrafoonu'>
                    <p>
                        Comprometidos con ONU
                        
                    </p>
                    <p className='medioambiente'>
                        Programa para el medio ambiente
                    </p>
                    {/* <img src={onu} alt='onu' /> */}
                </div>
            </div>
        </div>
    );
}

export default Compra;