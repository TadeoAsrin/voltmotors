import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Auto = ({ title, imagenAuto, caracteristicas, descripcion,descripcionn,url }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (<div className='contenedorauto'>

        <div className='descrip'data-aos='fade-up'>
        <a href={url}><button className='botones'>
                {title}
            </button></a>
            <p className='parrafito'>{caracteristicas}</p>
            <p className='parrafito'>{descripcion}</p>
            <p className='parrafito'>{descripcionn}</p>
        </div>
        <div className='imagenauto'>
            <img src={imagenAuto} alt={title} />
        </div>
        <div className='titulo'data-aos='fade-left'>
            <p>Explora</p>
        </div>
    </div>);
}



export default Auto;