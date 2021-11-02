import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './GifGrid'


function GifExpertApp() {

    
    const [categories, setCategories] = useState(['one puch'])
  //  const handleAdd=()=>{
            //setCategories([...categories,'HunterXHunter']);
    //        setCategories(cats=>[...cats,'HunterXHunter']);
    //}
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/> 
          
          <ol> 
                {
                 categories.map(category=>
                     <GifGrid 
                     key={category}
                     category={category} />
                 )   
                }
          </ol>
        </>
    )
}

//GifExpertApp.propTypes = {

//}

export default GifExpertApp

