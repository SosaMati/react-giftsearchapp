import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ( {setCategories} ) => {


    const [inputValue, setInputValue] = useState(''); //el buscador arranca como un string vacio, si no lo ponemos es undefined y da error

    const handleInputChange = (e) => {
      
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2){ //permite aceptar carateres mayores a 2 letras 
            setCategories( cats => [inputValue] ); //muestra primero al ultima busqueda y ...cats las ateriores
            setInputValue('') //enviar un espacio vacio para borrar el texto en el buscador despues del enter
        }

        
    }

    return (
        //form actua como un fragment, onSubmit evita que toda la pagina se refresque 
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder='Escriba su Gif favorito...'
            />

        </form>
    )
};




AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
