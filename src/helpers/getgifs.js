export const getgifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=Wi20wD4KXGqip9U43WujbFDbH9dOWJdQ`;
    const resp= await fetch(url);
    const {data}=await resp.json();
    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }

    })
    
    return (gifs);
}