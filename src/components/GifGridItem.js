import React from 'react';

export const GifGridItem = ( { title, url } ) => {
    //se pone className para usar el css porque class es de javascrip
    return (
        <div className="card animate__animated  animate__fadeIn"> 
           <img src={ url } alt={ title }/>
           <p> { title }</p>
        </div>
    );
};
