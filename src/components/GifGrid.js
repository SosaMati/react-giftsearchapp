import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category ? `Resultados sobre la busqueda de: ${ category }` : <img className="lupa" src={ require("../img/img.png") } alt="foto"/> }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>} 

            

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }   
            </div>
        </>
    );

};
 