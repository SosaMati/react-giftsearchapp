import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GiftExpertApp = () => {

    
    const [categories, setCategories] = useState(['']); //busqueda por defecto


    return (
        <>
            <h2 className="animate__animated animate__flipInX"> GIFS SEARCH APP <img src={ require('./img/icon.png') } alt="icon" /> </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                                    key={ category }
                                    category={ category }
                                />
                    })
                }

            </ol>
        </>

    );
}


export default GiftExpertApp;
