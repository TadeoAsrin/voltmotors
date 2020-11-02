import React, { useState, useEffect } from "react";
import Auto from './Auto.js'



const Autos = () => {

    const [autoUno, setAutoUno] = useState([])
    const [autoDos, setAutoDos] = useState([])
    const [autoTres, setAutoTres] = useState([])
    const [infoUno, setinfoUno] = useState([])
    const [infoDos, setinfoDos] = useState([])
    const [infoTres, setinfoTres] = useState([])
    const [infoCuatro, setinfoCuatro] = useState([])
    const [infoCinco, setinfoCinco] = useState([])
    const [infoSeis, setinfoSeis] = useState([])
    const [infoSiete, setinfoSiete] = useState([])
    const [infoOcho, setinfoOcho] = useState([])
    const [infoNueve, setinfoNueve] = useState([])



    useEffect(() => {
        obtenerAutos()
    }, [])


    const obtenerAutos = async () => {
        const data = await fetch('https://voltmotors.com.ar/api/exam/')
        const autos = await data.json()

        setAutoUno(autos.cars[0])
        setAutoDos(autos.cars[1])
        setAutoTres(autos.cars[2])
        setinfoUno(autos.cars[0].caracs[0])
        setinfoDos(autos.cars[0].caracs[1])
        setinfoTres(autos.cars[0].caracs[2])
        setinfoCuatro(autos.cars[1].caracs[0])
        setinfoCinco(autos.cars[1].caracs[1])
        setinfoSeis(autos.cars[1].caracs[2])
        setinfoSiete(autos.cars[2].caracs[0])
        setinfoOcho(autos.cars[2].caracs[1])
        setinfoNueve(autos.cars[2].caracs[2])

    }

    return (
        <div className='autogeneral' >

            <Auto title={autoUno.model}
                imagenAuto={autoUno.image}
                descripcion={infoTres}
                descripcionn={infoDos}
                caracteristicas={infoUno}
                key={autoUno.model}
                url={'http://www.voltmotors.com.ar/pageCars/z1'}
            />
            <Auto title={autoDos.model}
                imagenAuto={autoDos.image}
                descripcion={infoCuatro}
                descripcionn={infoCinco}
                caracteristicas={infoSeis}
                key={autoDos.model}
                url={'http://www.voltmotors.com.ar/pageCars/w1'}
            />
            <Auto title={autoTres.model}
                imagenAuto={autoTres.image}
                descripcion={infoSiete}
                descripcionn={infoOcho}
                caracteristicas={infoNueve}
                key={autoTres.model}
                url={'http://www.voltmotors.com.ar/pageCars/e1'}
            />
        </div>
    )
}
export default Autos;