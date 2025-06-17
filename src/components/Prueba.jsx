import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

{/*useState guarda datos y loading
 useEffect se ejecuta cuando el componente se monta */ }

{/*creo una función fake para prueba y creo dos estados data que guarda el resultado
     de la promesa y loading muestra texto mientras se carga*/ }
function FakeDataLoader() {
    //función trucha para guardar el estado 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
//simula o a una API fake con promesa
    function fetchFakeData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('📦 datos cargados exitosamente');
            }
            else {
                reject('💥 error al cargar los datos')
            }
        }, 2000);

    })
};

useEffect(()=>{
    fetchFakeData()
    .then((result)=>{
        console.log('✅then:', result)
        setData(result);
    })
    .catch((error)=>{
        console.error('catch', error)
        setData(error);
    })
    .finally(()=>{
        setLoading(false);
    });
},[]);

return(
    <div> { loading ? "cargando......" :data} </div>
);



}







export default FakeDataLoader;    