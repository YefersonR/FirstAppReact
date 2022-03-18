const apiKey = 'e81wimAK3T816gP8ITPshZpM815yXlIe&q'

export default function getGifs({keyword = 'deadpool'} = {}){
    const apiiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=r&lang=en`
    return fetch(apiiURL)
    .then(res => res.json())
    .then(response =>{
      const {data} = response
      const gifs = data.map(image => {
        const {images, id, title} = image
        const {url} = images.downsized_medium
        return {id, title, url}
        }) 
        return gifs
    })

}