//todos los hooks empiezan con use 

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {

                setState({ 
                    data: imgs,
                    loading: false 
                });
                     
            })

    }, [ category ]) //hace el efecto solo cuando cambia la categoria


    return state; //el state es { data: [], loading: true };
}