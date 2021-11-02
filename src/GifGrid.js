import React from 'react';  // use effect codigo condicional
import { useFetchGifs } from './hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
//import { getGifs } from './helpers/getgifs';

export const GifGrid = ({category}) => {
  
    const {data:images,loading}=useFetchGifs(category);
    
  

    
    
    return (
        <>
        <h3>{category}</h3>
        {loading && <p>loading...</p> }
        { <div className="card-grid">
            
            
                {
                    images.map((img=>
                        <GifGridItem        
                            key={img.id}
                           {...img }
                            />

                    ))
                }
            
        </div> }
        </>
        
    )
}
//api.giphy.com/v1/gifs/search
//Wi20wD4KXGqip9U43WujbFDbH9dOWJdQ