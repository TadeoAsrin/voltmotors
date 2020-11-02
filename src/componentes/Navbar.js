import React from 'react';
import logo from './logoo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navgeneral">
                <div className="logo">
                <a href='http://www.voltmotors.com.ar/'> <img className='imagenlogo' src={logo} alt='logoimagen' /></a>
                </div>
                <div className="modelos">
                <ul>
                    <li> Z1</li>
                    <li> W1</li>
                    <li> E1</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;