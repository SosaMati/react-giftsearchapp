


export const getGifs = async( category ) => { 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=bQ6x7ua8A10kj3JdBnBS7M6HdeKKOJ17`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //ponemos ? para que si vienen las imagenes que la utilice 
        }
    })

    return gifs;
    
}